import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export function SafetyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative w-full bg-[#f1f3f9] py-12 lg:py-16 overflow-hidden">
        <div className="absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-[#e2dfff]/40 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2]">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span className="font-code-waybill text-xs font-bold uppercase tracking-wider">
                SAFETY & TRUST FRAMEWORK
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-[#181c20] tracking-tight">
              Operational trust at every step.
            </h1>

            <p className="text-base sm:text-lg text-[#46464c] leading-relaxed">
              Moving physical goods, retail parcels, and commercial cargo across town requires strict operational discipline. MultipleRide enforces verified procedures to protect your consignment from origin pickup to final drop.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Pillars */}
      <section className="w-full py-16 bg-[#f7f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Driver partner verification */}
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#050719] text-[#ffffff] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">badge</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181c20]">Driver & Vehicle Verification</h3>
                <p className="text-xs sm:text-sm text-[#46464c] mt-2 leading-relaxed">
                  Before onboarding into the Jodhpur network, driver-partners submit their valid commercial driving license, government ID, vehicle registration certificate (RC), and active vehicular insurance.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-xs font-semibold">
                DOCUMENT AUDIT WORKFLOW
              </div>
            </div>

            {/* Consignment tracking */}
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#544ec2] text-[#ffffff] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">alt_route</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181c20]">Real-Time Transit Visibility</h3>
                <p className="text-xs sm:text-sm text-[#46464c] mt-2 leading-relaxed">
                  Consignors track vehicle progress from departure through each scheduled drop station. Waypoint timestamps are logged automatically for full milestone accountability.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-xs font-semibold">
                PROGRESSIVE TELEMETRY
              </div>
            </div>

            {/* OTP Handover */}
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#eceef4] text-[#181c20] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">password</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181c20]">Secure Proof of Delivery (PoD)</h3>
                <p className="text-xs sm:text-sm text-[#46464c] mt-2 leading-relaxed">
                  Goods are not marked delivered until the destination receiver validates the delivery OTP or provides a digital signature. This prevents package misplacement across multi-drop circuits.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-xs font-semibold">
                OTP VERIFIED COMPLETION
              </div>
            </div>

            {/* Permitted Cargo Rules */}
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#050719] text-[#ffffff] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181c20]">Strict Freight Policy</h3>
                <p className="text-xs sm:text-sm text-[#46464c] mt-2 leading-relaxed">
                  We are strictly a physical goods transportation platform. Passenger conveyance, taxi rides, and cab hailing are strictly forbidden under our operating rules. Hazardous, illicit, or explosive goods are banned.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-xs font-semibold">
                PERMITTED GOODS ONLY
              </div>
            </div>

            {/* Direct communication */}
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#544ec2] text-[#ffffff] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">call</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181c20]">Direct Communication Channel</h3>
                <p className="text-xs sm:text-sm text-[#46464c] mt-2 leading-relaxed">
                  Shippers and drop receivers can communicate with assigned drivers directly regarding gate numbers, landmark hints, or parking entry without call center delays.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-xs font-semibold">
                NO MIDDLEMEN DELAYS
              </div>
            </div>

            {/* Local Support */}
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#eceef4] text-[#181c20] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181c20]">Local Hub Coordination</h3>
                <p className="text-xs sm:text-sm text-[#46464c] mt-2 leading-relaxed">
                  Backed by the {siteConfig.legalBusinessName} team in Jodhpur. If on-road congestion, address disputes, or weather delays occur, our operations desk assists in resolving bottlenecks.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-xs font-semibold">
                RJ-19 LOCAL SUPPORT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Permitted vs Prohibited Cargo Grid */}
      <section className="w-full py-16 bg-[#f1f3f9] border-t border-[#c7c5cd]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase tracking-wider">
              CARGO BOUNDARIES
            </span>
            <h2 className="font-headline text-3xl font-bold text-[#181c20] mt-1">
              Permitted and Prohibited Materials
            </h2>
            <p className="text-sm text-[#46464c] mt-1">
              Please review what can and cannot be transported through MultipleRide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Permitted */}
            <div className="bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-xs border border-emerald-200">
              <div className="flex items-center gap-2.5 text-emerald-800 font-bold mb-4">
                <span className="material-symbols-outlined text-2xl text-emerald-600">check_circle</span>
                <span className="font-headline text-lg">Permitted Goods & Materials</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#181c20]">
                {siteConfig.businessScope.permittedCargo.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prohibited */}
            <div className="bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-xs border border-rose-200">
              <div className="flex items-center gap-2.5 text-rose-800 font-bold mb-4">
                <span className="material-symbols-outlined text-2xl text-rose-600">cancel</span>
                <span className="font-headline text-lg">Strictly Prohibited Items</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#181c20]">
                {siteConfig.businessScope.prohibitedCargo.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0"></span>
                    <span className="font-medium text-rose-950">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/support"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#544ec2] hover:underline"
            >
              <span>Have questions regarding your cargo? Contact Support</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
