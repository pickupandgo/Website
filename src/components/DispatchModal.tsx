import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

interface DispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'single' | 'multidrop';
}

interface DropPoint {
  id: string;
  address: string;
  recipientName: string;
  recipientPhone: string;
  notes: string;
}

const JODHPUR_HUBS = [
  'Basni Phase II Industrial Area, Jodhpur',
  'Mandi Wholesale Cluster, Jodhpur',
  'Boranada Special Economic Zone, Jodhpur',
  'Sardarpura Commercial Belt (C-Road), Jodhpur',
  'Ratanada Main Market, Jodhpur',
  'Shastri Nagar Distribution Center, Jodhpur',
  'Paota Mandi Commercial Hub, Jodhpur',
  'Sojati Gate Merchant Depot, Jodhpur',
  'Nai Sarak Textile Bazar, Jodhpur',
  'Heavy Industrial Area, Phase 2, Jodhpur'
];

export function DispatchModal({ isOpen, onClose, defaultMode = 'multidrop' }: DispatchModalProps) {
  const [mode, setMode] = useState<'single' | 'multidrop'>(defaultMode);
  const [origin, setOrigin] = useState(JODHPUR_HUBS[0]);
  const [originContact, setOriginContact] = useState('');
  const [originPhone, setOriginPhone] = useState('');
  
  const [drops, setDrops] = useState<DropPoint[]>([
    {
      id: 'drop-1',
      address: JODHPUR_HUBS[3],
      recipientName: '',
      recipientPhone: '',
      notes: 'Unload first batch of cartons'
    }
  ]);

  const [vehicle, setVehicle] = useState('auto-three-wheeler');
  const [cargoType, setCargoType] = useState('Cartons & Retail Goods');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedWaybill, setSubmittedWaybill] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAddDrop = () => {
    if (drops.length >= 8) return;
    const nextIdx = (drops.length + 4) % JODHPUR_HUBS.length;
    setDrops([
      ...drops,
      {
        id: `drop-${Date.now()}`,
        address: JODHPUR_HUBS[nextIdx],
        recipientName: '',
        recipientPhone: '',
        notes: ''
      }
    ]);
  };

  const handleRemoveDrop = (index: number) => {
    if (drops.length <= 1) return;
    setDrops(drops.filter((_, i) => i !== index));
  };

  const updateDrop = (index: number, field: keyof DropPoint, value: string) => {
    const updated = [...drops];
    updated[index] = { ...updated[index], [field]: value };
    setDrops(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const code = `WB-JDH-${Math.floor(1000 + Math.random() * 9000)}-${mode === 'multidrop' ? 'MD' : 'DL'}`;
      setSubmittedWaybill(code);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedWaybill(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#050719]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#ffffff] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#c7c5cd]/40">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#eceef4] flex items-center justify-between sticky top-0 bg-[#ffffff] z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#544ec2]"></span>
              <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase tracking-wider">
                Jodhpur RJ-19 Dispatch Console
              </span>
            </div>
            <h2 className="font-headline text-xl font-bold text-[#181c20] mt-0.5">
              Create Transportation Request
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f1f3f9] hover:bg-[#e0e2e8] flex items-center justify-center text-[#46464c] transition-colors"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {submittedWaybill ? (
          /* Confirmation Success State */
          <div className="p-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#e2dfff] text-[#544ec2] flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-4xl">task_alt</span>
            </div>
            <div>
              <span className="font-code-waybill text-xs px-3 py-1 rounded-full bg-[#e2dfff] text-[#0f0069] font-bold">
                WAYBILL GENERATED · {submittedWaybill}
              </span>
              <h3 className="font-headline text-2xl font-bold text-[#181c20] mt-2">
                Dispatch Request Broadcasted
              </h3>
              <p className="text-sm text-[#46464c] max-w-md mx-auto mt-1">
                Your goods transportation request has been queued in Jodhpur. The nearest verified driver-partner in the {siteConfig.operatingZoneCode} radius is reviewing the consignment waybill.
              </p>
            </div>

            <div className="w-full bg-[#f1f3f9] p-4 rounded-xl text-left font-code-waybill text-xs space-y-2 border border-[#c7c5cd]/30">
              <div className="flex justify-between">
                <span className="text-[#46464c]">Origin Hub:</span>
                <span className="font-bold text-[#181c20] truncate max-w-[280px]">{origin}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#46464c]">Dispatch Model:</span>
                <span className="font-bold text-[#544ec2]">
                  {mode === 'single' ? '1 Pickup → 1 Drop (Direct Transit)' : `1 Pickup → ${drops.length} Drops (Multi-Drop Sequence)`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#46464c]">Assigned Category:</span>
                <span className="font-bold text-[#181c20]">
                  {siteConfig.vehicles.find(v => v.id === vehicle)?.name || 'Commercial Freight'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#46464c]">Cargo Profile:</span>
                <span className="font-bold text-[#181c20]">{cargoType}</span>
              </div>
            </div>

            <div className="flex gap-3 w-full pt-2">
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-xl bg-[#050719] text-[#ffffff] font-headline text-sm font-bold hover:bg-[#181a2d] transition-all"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          /* Dispatch Request Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Mode Switcher */}
            <div>
              <label className="block text-xs font-semibold text-[#46464c] uppercase tracking-wider mb-2">
                1. Select Transportation Mode
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMode('single');
                    if (drops.length > 1) setDrops([drops[0]]);
                  }}
                  className={`p-3.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    mode === 'single'
                      ? 'border-[#544ec2] bg-[#e2dfff]/20 ring-1 ring-[#544ec2]'
                      : 'border-[#c7c5cd]/40 hover:bg-[#f1f3f9]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-bold text-sm text-[#181c20]">Pickup & Drop</span>
                    <span className="material-symbols-outlined text-[18px] text-[#544ec2]">straight</span>
                  </div>
                  <span className="text-xs text-[#46464c]">1 Origin → 1 Solitary Drop</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMode('multidrop')}
                  className={`p-3.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    mode === 'multidrop'
                      ? 'border-[#544ec2] bg-[#e2dfff]/30 ring-1 ring-[#544ec2]'
                      : 'border-[#c7c5cd]/40 hover:bg-[#f1f3f9]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-bold text-sm text-[#181c20]">Multi-Drop</span>
                    <span className="material-symbols-outlined text-[18px] text-[#544ec2]">alt_route</span>
                  </div>
                  <span className="text-xs text-[#46464c]">1 Origin → Up to 8 Sequenced Drops</span>
                </button>
              </div>
            </div>

            {/* Strict Single Pickup Origin Section */}
            <div className="bg-[#f1f3f9] p-4 rounded-xl space-y-3 border border-[#c7c5cd]/30">
              <div className="flex items-center justify-between">
                <span className="font-code-waybill text-xs font-bold text-[#544ec2] uppercase flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">warehouse</span>
                  SINGLE PICKUP (ORIGIN)
                </span>
                <span className="text-[11px] text-[#77767d]">Strict 1-Pickup Architecture</span>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#181c20] mb-1">
                  Pickup Hub or Warehouse Address
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#ffffff] border border-[#c7c5cd] text-sm text-[#181c20] focus:outline-none focus:border-[#544ec2]"
                >
                  {JODHPUR_HUBS.map((hub) => (
                    <option key={hub} value={hub}>{hub}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Contact Person (e.g. Rahul - Bay 2)"
                  value={originContact}
                  onChange={(e) => setOriginContact(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-[#ffffff] border border-[#c7c5cd] text-xs text-[#181c20] focus:outline-none focus:border-[#544ec2]"
                />
                <input
                  type="tel"
                  placeholder="Pickup Phone Number"
                  value={originPhone}
                  onChange={(e) => setOriginPhone(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-[#ffffff] border border-[#c7c5cd] text-xs text-[#181c20] focus:outline-none focus:border-[#544ec2]"
                />
              </div>
            </div>

            {/* Delivery Drops Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="block text-xs font-semibold text-[#46464c] uppercase tracking-wider">
                  {mode === 'single' ? '2. Destination Drop Address' : `2. Delivery Drop Stations (${drops.length} Drops)`}
                </span>
                {mode === 'multidrop' && drops.length < 8 && (
                  <button
                    type="button"
                    onClick={handleAddDrop}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#544ec2] hover:text-[#050719]"
                  >
                    <span className="material-symbols-outlined text-[16px]">add_circle</span>
                    Add Next Drop Station
                  </button>
                )}
              </div>

              {drops.map((drop, idx) => (
                <div key={drop.id} className="p-3.5 bg-[#ffffff] rounded-xl border border-[#c7c5cd]/50 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-code-waybill text-xs font-bold text-[#181c20] flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#e2dfff] text-[#0f0069] flex items-center justify-center text-[10px]">
                        0{idx + 1}
                      </span>
                      DROP STATION {idx + 1} {mode === 'multidrop' && idx === drops.length - 1 ? '(FINAL)' : ''}
                    </span>
                    {mode === 'multidrop' && drops.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveDrop(idx)}
                        className="text-xs text-[#ba1a1a] hover:underline flex items-center gap-0.5"
                      >
                        <span className="material-symbols-outlined text-[14px]">delete</span>
                        Remove
                      </button>
                    )}
                  </div>

                  <select
                    value={drop.address}
                    onChange={(e) => updateDrop(idx, 'address', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20] focus:outline-none focus:border-[#544ec2]"
                  >
                    {JODHPUR_HUBS.map((hub) => (
                      <option key={hub} value={hub}>{hub}</option>
                    ))}
                  </select>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Receiver Name / Store"
                      value={drop.recipientName}
                      onChange={(e) => updateDrop(idx, 'recipientName', e.target.value)}
                      className="px-2.5 py-1.5 rounded-lg bg-[#ffffff] border border-[#c7c5cd] text-xs text-[#181c20]"
                    />
                    <input
                      type="tel"
                      placeholder="Receiver Phone (for OTP)"
                      value={drop.recipientPhone}
                      onChange={(e) => updateDrop(idx, 'recipientPhone', e.target.value)}
                      className="px-2.5 py-1.5 rounded-lg bg-[#ffffff] border border-[#c7c5cd] text-xs text-[#181c20]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Vehicle Selection */}
            <div>
              <label className="block text-xs font-semibold text-[#46464c] uppercase tracking-wider mb-2">
                3. Choose Vehicle Fleet Class
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {siteConfig.vehicles.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVehicle(v.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      vehicle === v.id
                        ? 'border-[#544ec2] bg-[#e2dfff]/20 ring-1 ring-[#544ec2]'
                        : 'border-[#c7c5cd]/40 hover:bg-[#f1f3f9]'
                    }`}
                  >
                    <div className="font-headline font-bold text-xs text-[#181c20] truncate">{v.name}</div>
                    <div className="font-code-waybill text-[10px] text-[#544ec2] mt-0.5">{v.badge}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Cargo Goods Profile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#46464c] uppercase tracking-wider mb-1">
                  Cargo Category (Permitted Only)
                </label>
                <select
                  value={cargoType}
                  onChange={(e) => setCargoType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                >
                  {siteConfig.businessScope.permittedCargo.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#46464c] uppercase tracking-wider mb-1">
                  Dispatch Handling Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Fragile textiles, handle with care"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#050719] text-[#ffffff] font-headline text-sm font-bold hover:bg-[#181a2d] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#ffffff] border-t-transparent rounded-full animate-spin"></span>
                    <span>Broadcasting Waybill to Driver-Partners...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm & Broadcast Transportation Request</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
              <p className="text-[11px] text-center text-[#77767d] mt-2">
                By confirming, you verify cargo contains only permitted lawful commercial goods. No passenger transportation.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
