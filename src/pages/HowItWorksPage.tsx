import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { ImageWithFallback } from '../components/ImageWithFallback';

export function HowItWorksPage() {
  const [activeMode, setActiveMode] = useState<'multidrop' | 'single'>('multidrop');

  return (
    <div className="flex flex-col w-full">
      {/* Top Visual Header Area */}
      <section className="relative w-full bg-[#f1f3f9] overflow-hidden py-12 lg:py-16">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#e2dfff]/50 blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/3 -bottom-20 w-80 h-80 rounded-full bg-[#e0e0fb]/40 blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2] font-code-waybill text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#544ec2]"></span>
                  MULTIPLE RIDE LOGISTICS DISPATCH SYSTEM
                </span>
                <span className="font-code-waybill text-xs text-[#77767d] tracking-wider">JODHPUR RJ-19</span>
              </div>

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-[54px] text-[#181c20] font-extrabold tracking-tight leading-[1.08]">
                From pickup to <span className="text-[#544ec2]">final drop.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#46464c] max-w-2xl leading-relaxed mt-1">
                A step-by-step visual walkthrough of how customers and local businesses create, track, and complete pickup & drop and multi-drop journeys.
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="bg-[#ffffff] p-1.5 rounded-2xl shadow-sm border border-[#c7c5cd]/30 flex items-center gap-1 self-start lg:self-end">
              <button
                onClick={() => setActiveMode('multidrop')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-headline text-xs sm:text-sm font-bold transition-all ${
                  activeMode === 'multidrop'
                    ? 'bg-[#050719] text-[#ffffff] shadow-md'
                    : 'text-[#46464c] hover:text-[#181c20]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">alt_route</span>
                <span>Multi-Drop Transportation</span>
              </button>

              <button
                onClick={() => setActiveMode('single')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-headline text-xs sm:text-sm font-bold transition-all ${
                  activeMode === 'single'
                    ? 'bg-[#050719] text-[#ffffff] shadow-md'
                    : 'text-[#46464c] hover:text-[#181c20]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">straight</span>
                <span>Standard Pickup & Drop</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Route Blueprint Comparison Panel */}
      <section className="w-full py-16 bg-[#f7f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
            <div>
              <span className="font-code-waybill text-xs text-[#544ec2] uppercase tracking-widest font-bold">
                Routing Architecture
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#181c20]">
                The Dispatch Topology
              </h2>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-[#e2dfff] text-[#0f0069] font-code-waybill text-xs font-bold self-start md:self-auto">
              RULE: ALWAYS 1 PICKUP · MULTIPLE DROPS
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Diagram A: Standard Single Stop */}
            <div
              className={`lg:col-span-5 bg-[#ffffff] rounded-2xl p-6 shadow-sm border transition-all flex flex-col justify-between ${
                activeMode === 'single'
                  ? 'border-[#544ec2] ring-2 ring-[#544ec2]/30 shadow-md'
                  : 'border-[#c7c5cd]/30 opacity-80'
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#eceef4] font-code-waybill text-xs text-[#181c20] font-semibold">
                    SCHEMA 01
                  </span>
                  <span className="text-xs text-[#46464c]">Point A → Point B</span>
                </div>

                <div>
                  <h3 className="font-headline text-lg font-bold text-[#181c20]">
                    Standard Direct Transit
                  </h3>
                  <p className="text-xs text-[#46464c] mt-1">
                    Single origin to solitary destination. Best for rapid peer-to-peer cartons or warehouse-to-retail stock transfers.
                  </p>
                </div>

                {/* Vector Schema */}
                <div className="bg-[#f1f3f9] rounded-xl p-4 my-2 relative border border-[#c7c5cd]/20">
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-[#050719] text-[#ffffff] flex items-center justify-center font-code-waybill font-bold text-xs shadow-xs">
                        A
                      </div>
                      <div>
                        <span className="text-[10px] text-[#46464c] block">ORIGIN</span>
                        <span className="font-headline text-xs font-bold text-[#181c20]">Industrial Area Ph. 2</span>
                      </div>
                    </div>

                    <div className="flex-1 mx-3 flex items-center justify-center relative">
                      <div className="w-full h-1 bg-[#c7c5cd]/50 rounded-full"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#544ec2] text-[20px] bg-[#f1f3f9] px-1">
                          local_shipping
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-[#544ec2] text-[#ffffff] flex items-center justify-center font-code-waybill font-bold text-xs shadow-xs">
                        B
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-[#46464c] block">FINAL DROP</span>
                        <span className="font-headline text-xs font-bold text-[#181c20]">Sojati Gate Hub</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#eceef4] text-[#46464c] text-xs">
                <span>Legs: 1 Non-Stop</span>
                <span className="font-code-waybill font-semibold text-[#181c20]">15-30 MIN DELIVERY WINDOW</span>
              </div>
            </div>

            {/* Diagram B: Multi-Drop Matrix */}
            <div
              className={`lg:col-span-7 bg-[#ffffff] rounded-2xl p-6 shadow-md border transition-all flex flex-col justify-between ${
                activeMode === 'multidrop'
                  ? 'border-[#544ec2] ring-2 ring-[#544ec2]/30'
                  : 'border-[#c7c5cd]/30 opacity-80'
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#544ec2] text-[#ffffff] font-code-waybill text-xs font-bold">
                      SCHEMA 02 · SIGNATURE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#544ec2] animate-ping"></span>
                  </div>
                  <span className="font-code-waybill text-xs text-[#544ec2] font-bold">
                    1 PICKUP → MULTIPLE DISPATCH NODES
                  </span>
                </div>

                <div>
                  <h3 className="font-headline text-lg font-bold text-[#181c20]">
                    Sequenced Multi-Drop Delivery Flow
                  </h3>
                  <p className="text-xs text-[#46464c] mt-1">
                    Load up once at your shop, central depot, or warehouse and distribute along an intelligent chained waypoint trajectory.
                  </p>
                </div>

                {/* Vector Schema Multi */}
                <div className="bg-[#f1f3f9] rounded-xl p-4 my-2 border border-[#c7c5cd]/20">
                  <div className="grid grid-cols-4 items-center gap-2 relative">
                    {/* Node 1 */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-[#050719] text-[#ffffff] flex items-center justify-center font-code-waybill font-bold text-xs shadow-xs">
                        A
                      </div>
                      <span className="font-code-waybill text-[10px] font-bold text-[#181c20] mt-1.5">PICKUP</span>
                      <span className="text-[10px] text-[#46464c] truncate max-w-[80px]">Central Depot</span>
                    </div>

                    {/* Node 2 */}
                    <div className="flex flex-col items-center text-center relative">
                      <div className="absolute -left-1/2 top-4 w-full h-0.5 bg-[#544ec2]"></div>
                      <div className="w-9 h-9 rounded-full bg-[#e2dfff] text-[#0f0069] flex items-center justify-center font-code-waybill font-bold text-xs z-10 shadow-xs">
                        B
                      </div>
                      <span className="font-code-waybill text-[10px] font-bold text-[#544ec2] mt-1.5">DROP 01</span>
                      <span className="text-[10px] text-[#46464c] truncate max-w-[80px]">Sardarpura</span>
                    </div>

                    {/* Node 3 */}
                    <div className="flex flex-col items-center text-center relative">
                      <div className="absolute -left-1/2 top-4 w-full h-0.5 bg-[#544ec2]"></div>
                      <div className="w-9 h-9 rounded-full bg-[#e2dfff] text-[#0f0069] flex items-center justify-center font-code-waybill font-bold text-xs z-10 shadow-xs">
                        C
                      </div>
                      <span className="font-code-waybill text-[10px] font-bold text-[#544ec2] mt-1.5">DROP 02</span>
                      <span className="text-[10px] text-[#46464c] truncate max-w-[80px]">Ratanada</span>
                    </div>

                    {/* Node 4 */}
                    <div className="flex flex-col items-center text-center relative">
                      <div className="absolute -left-1/2 top-4 w-full h-0.5 bg-[#544ec2]"></div>
                      <div className="w-9 h-9 rounded-full bg-[#544ec2] text-[#ffffff] flex items-center justify-center font-code-waybill font-bold text-xs z-10 shadow-xs">
                        D
                      </div>
                      <span className="font-code-waybill text-[10px] font-bold text-[#544ec2] mt-1.5">FINAL DROP</span>
                      <span className="text-[10px] text-[#46464c] truncate max-w-[80px]">Paota Mandi</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 border-t border-[#eceef4] gap-2 text-xs text-[#46464c]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#544ec2] text-[16px]">check_circle</span>
                  Saves up to 48% vs booking isolated trips
                </span>
                <span className="font-code-waybill font-bold text-[#544ec2]">SINGLE WAYBILL CONSOLIDATION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15-Step Grand Interactive Journey Timeline */}
      <section className="w-full py-16 bg-[#f1f3f9] border-t border-[#c7c5cd]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-code-waybill text-xs text-[#544ec2] uppercase tracking-widest font-bold">
                End-to-End Operational Lifecycle
              </span>
              <h2 className="font-headline text-3xl font-bold text-[#181c20]">
                The 15-Point Dispatch Trajectory
              </h2>
            </div>
            <p className="text-sm text-[#46464c] max-w-md">
              Every transport operation moves systematically through 3 synchronized phases with zero blind spots for consignors or recipients.
            </p>
          </div>

          {/* Phase 1: Request & Dispatch */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between bg-[#eceef4] rounded-2xl p-4 shadow-xs border border-[#c7c5cd]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#050719] text-[#ffffff] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">post_add</span>
                </div>
                <div>
                  <span className="font-code-waybill text-xs text-[#544ec2] font-bold">PHASE 01 OF 03</span>
                  <h3 className="font-headline text-base font-bold text-[#181c20]">Request & Dispatch Initiation</h3>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#ffffff] font-code-waybill text-xs text-[#46464c] font-semibold border border-[#c7c5cd]/20">
                STEPS 01 — 06
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">01</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">phone_iphone</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20] mb-1">Create Transportation Request</h4>
                  <p className="text-xs text-[#46464c]">Launch the MultipleRide web or mobile client. Select goods dispatch to begin dynamic routing.</p>
                </div>
                <div className="mt-3 pt-2 text-[#46464c] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px] text-[#544ec2]">schedule</span> INSTANT DISPATCH
                </div>
              </div>

              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">02</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">store</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20] mb-1">Specify Primary Origin</h4>
                  <p className="text-xs text-[#46464c]">Pin your Shop, Home, or Warehouse loading bay with floor/contact person notes for smooth pickup.</p>
                </div>
                <div className="mt-3 pt-2 text-[#46464c] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px] text-[#544ec2]">pin_drop</span> GPS PINNED ORIGIN
                </div>
              </div>

              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">03</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">flag</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20] mb-1">Set Destination Address</h4>
                  <p className="text-xs text-[#46464c]">Supply the initial delivery location with landmark details and consignee contact phone numbers.</p>
                </div>
                <div className="mt-3 pt-2 text-[#46464c] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px] text-[#544ec2]">verified</span> PHONE VERIFIED
                </div>
              </div>

              <div className={`bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between ${activeMode === 'single' ? 'opacity-60' : ''}`}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-code-waybill text-base font-bold text-[#544ec2]">04</span>
                      <span className="px-2 py-0.5 rounded text-[9px] bg-[#e2dfff] text-[#0f0069] font-code-waybill font-bold">MULTI-DROP FEATURE</span>
                    </div>
                    <span className="material-symbols-outlined text-[#544ec2] text-[20px]">add_location_alt</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20] mb-1">Append Sequential Drops</h4>
                  <p className="text-xs text-[#46464c]">Click "+ Add Stop" to stack Drop 1, Drop 2, and Drop 3. The route recalculates automatically for fuel efficiency.</p>
                </div>
                <div className="mt-3 pt-2 text-[#544ec2] font-code-waybill text-[10px] flex items-center gap-1 font-bold border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px]">alt_route</span> UP TO 8 SEQUENTIAL STOPS
                </div>
              </div>

              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">05</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">local_shipping</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20] mb-1">Select Freight Category</h4>
                  <p className="text-xs text-[#46464c]">Choose from 3-Wheeler Loaders (up to 500kg) or Heavy Tempos (Tata Ace / 1.5T Flatbed) based on weight.</p>
                </div>
                <div className="mt-3 pt-2 text-[#46464c] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px] text-[#544ec2]">scale</span> VOLUMETRIC MATCHING
                </div>
              </div>

              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">06</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">receipt_long</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20] mb-1">Confirm Waybill & Fare</h4>
                  <p className="text-xs text-[#46464c]">Review transparent pricing inclusive of multi-drop tolls. Submit dispatch request into the local cluster.</p>
                </div>
                <div className="mt-3 pt-2 text-[#46464c] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px] text-[#544ec2]">lock</span> FIXED TRANSPARENT TARIFF
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: Driver Coordination */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between bg-[#eceef4] rounded-2xl p-4 shadow-xs border border-[#c7c5cd]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#544ec2] text-[#ffffff] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
                </div>
                <div>
                  <span className="font-code-waybill text-xs text-[#544ec2] font-bold">PHASE 02 OF 03</span>
                  <h3 className="font-headline text-base font-bold text-[#181c20]">Driver Partner Assignment & Loading</h3>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#ffffff] font-code-waybill text-xs text-[#46464c] font-semibold border border-[#c7c5cd]/20">
                STEPS 07 — 10
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">07</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">broadcast_on_home</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20] mb-1">Broadcast to Verified Drivers</h4>
                  <p className="text-xs text-[#46464c]">The nearest vetted driver-partner in Jodhpur RJ-19 receives the complete payload dossier.</p>
                </div>
                <div className="mt-3 pt-2 text-[#46464c] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px] text-[#544ec2]">radar</span> RADIUS DISPATCH
                </div>
              </div>

              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">08</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">near_me</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20] mb-1">Acceptance & Transit to Origin</h4>
                  <p className="text-xs text-[#46464c]">Driver accepts assignment. Consignor receives driver vehicle photo, plate license, and direct phone link.</p>
                </div>
                <div className="mt-3 pt-2 text-[#46464c] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px] text-[#544ec2]">badge</span> KYC VERIFIED PARTNERS
                </div>
              </div>

              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">09</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">inventory_2</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20] mb-1">Cargo Verification & Tie-Down</h4>
                  <p className="text-xs text-[#46464c]">Driver reaches origin. Consignment packages are matched to stops and loaded safely with tie-down straps.</p>
                </div>
                <div className="mt-3 pt-2 text-[#46464c] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px] text-[#544ec2]">verified_user</span> SECURE LOAD CHECK
                </div>
              </div>

              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">10</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">departure_board</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20] mb-1">Trip Departure OTP Stamp</h4>
                  <p className="text-xs text-[#46464c]">Pickup security code is validated. Live telemetry initiates immediately across all consignee channels.</p>
                </div>
                <div className="mt-3 pt-2 text-[#46464c] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px] text-[#544ec2]">password</span> OTP VALIDATED
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Route Execution */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between bg-[#eceef4] rounded-2xl p-4 shadow-xs border border-[#c7c5cd]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#181c20] text-[#ffffff] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">task_alt</span>
                </div>
                <div>
                  <span className="font-code-waybill text-xs text-[#544ec2] font-bold">PHASE 03 OF 03</span>
                  <h3 className="font-headline text-base font-bold text-[#181c20]">Sequential Route Execution & Waypoint Handover</h3>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#ffffff] font-code-waybill text-xs text-[#46464c] font-semibold border border-[#c7c5cd]/20">
                STEPS 11 — 15
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">11</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">map</span>
                  </div>
                  <h4 className="font-headline text-xs font-bold text-[#181c20] mb-1">Follow Live Cartography</h4>
                  <p className="text-[11px] text-[#46464c]">Watch real-time GPS telemetry vector moving across urban corridors on the live tracker.</p>
                </div>
                <div className="mt-3 pt-2 text-[#544ec2] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="w-2 h-2 rounded-full bg-[#544ec2] animate-pulse"></span> LIVE REFRESH
                </div>
              </div>

              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">12</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">package_2</span>
                  </div>
                  <h4 className="font-headline text-xs font-bold text-[#181c20] mb-1">Drop 01 Handover</h4>
                  <p className="text-[11px] text-[#46464c]">First consignee checks cartons. Driver obtains digital signature/OTP and tags Drop 1 complete.</p>
                </div>
                <div className="mt-3 pt-2 text-[#46464c] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px] text-[#544ec2]">check</span> STOP 1 CLEARED
                </div>
              </div>

              <div className={`bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between ${activeMode === 'single' ? 'opacity-60' : ''}`}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">13</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">forward</span>
                  </div>
                  <h4 className="font-headline text-xs font-bold text-[#181c20] mb-1">Navigate to Drop 02</h4>
                  <p className="text-[11px] text-[#46464c]">Navigation automatically auto-updates to waypoint 2. Consignee 2 receives an impending arrival alert.</p>
                </div>
                <div className="mt-3 pt-2 text-[#46464c] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px] text-[#544ec2]">sms</span> AUTO SMS NOTICE
                </div>
              </div>

              <div className={`bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between ${activeMode === 'single' ? 'opacity-60' : ''}`}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">14</span>
                    <span className="material-symbols-outlined text-[#77767d] text-[20px]">segment</span>
                  </div>
                  <h4 className="font-headline text-xs font-bold text-[#181c20] mb-1">Execute Remaining Stops</h4>
                  <p className="text-[11px] text-[#46464c]">Subsequent waypoints executed strictly in sequence until the cargo hold is cleared.</p>
                </div>
                <div className="mt-3 pt-2 text-[#46464c] font-code-waybill text-[10px] flex items-center gap-1 border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px] text-[#544ec2]">reorder</span> ZERO BACK-TRACKING
                </div>
              </div>

              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-code-waybill text-base font-bold text-[#544ec2]">15</span>
                    <span className="material-symbols-outlined text-[#544ec2] text-[20px]">workspace_premium</span>
                  </div>
                  <h4 className="font-headline text-xs font-bold text-[#181c20] mb-1">Final Manifest Archival</h4>
                  <p className="text-[11px] text-[#46464c]">All stops finalized. Complete digital waybill with timestamps and drop proofs delivered to your dashboard.</p>
                </div>
                <div className="mt-3 pt-2 text-[#544ec2] font-code-waybill text-[10px] flex items-center gap-1 font-bold border-t border-[#eceef4]">
                  <span className="material-symbols-outlined text-[13px]">download_done</span> MANIFEST SEALED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Operation Simulation Visual */}
      <section className="w-full py-16 bg-[#f7f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#050719] text-[#ffffff] rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative">
            <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#544ec2]/20 blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-6 flex flex-col gap-4">
                <span className="font-code-waybill text-xs text-[#e2dfff] uppercase tracking-widest font-bold">
                  REAL-TIME TELEMETRY ENGINE
                </span>
                <h2 className="font-headline text-3xl font-bold text-[#ffffff]">
                  Full transparency on every single transit leg.
                </h2>
                <p className="text-sm sm:text-base text-[#ffffff]/80 leading-relaxed">
                  Consignors and business owners never have to make follow-up phone calls. The MultipleRide tracking portal records every stop sequence timestamp, verified contact pickup, and digital completion record.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#181a2d] p-4 rounded-2xl border border-[#c7c5cd]/20">
                    <span className="font-headline text-3xl font-extrabold text-[#8c88fe] block leading-none">
                      99.4%
                    </span>
                    <span className="text-xs text-[#ffffff]/70 mt-1 block">First-Attempt Drop Success</span>
                  </div>
                  <div className="bg-[#181a2d] p-4 rounded-2xl border border-[#c7c5cd]/20">
                    <span className="font-headline text-3xl font-extrabold text-[#8c88fe] block leading-none">
                      &lt; 18 min
                    </span>
                    <span className="text-xs text-[#ffffff]/70 mt-1 block">Avg. Intra-City Stop Time</span>
                  </div>
                </div>
              </div>

              {/* Waypoint Telemetry Card Mock */}
              <div className="lg:col-span-6">
                <div className="bg-[#ffffff] text-[#181c20] rounded-2xl p-6 shadow-2xl flex flex-col gap-4 border border-[#c7c5cd]/30">
                  <div className="flex items-center justify-between pb-3 border-b border-[#eceef4]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#050719] text-[#ffffff] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                      </div>
                      <div>
                        <span className="font-code-waybill text-[10px] text-[#46464c] block leading-tight">
                          WAYBILL #MR-8921-RJ
                        </span>
                        <span className="font-headline text-xs font-bold text-[#181c20]">
                          Ashok Leyland Dost · RJ 19 GA 4421
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#eceef4] text-[#544ec2] font-code-waybill text-[11px] font-bold">
                      LEG 2 OF 3 ACTIVE
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* Stop 0 */}
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-[#050719] text-[#ffffff] flex items-center justify-center text-[10px] font-bold">
                          <span className="material-symbols-outlined text-[14px]">check</span>
                        </div>
                        <div className="w-0.5 h-10 bg-[#544ec2]"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#181c20]">Heavy Machinery Hub · Mandore Road</span>
                          <span className="font-code-waybill text-[10px] text-[#46464c]">10:14 AM</span>
                        </div>
                        <span className="text-[11px] text-[#46464c]">Loaded 12x Steel Spindles · Picked Up</span>
                      </div>
                    </div>

                    {/* Stop 1 */}
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-[#544ec2] text-[#ffffff] flex items-center justify-center text-[10px] font-bold">
                          <span className="material-symbols-outlined text-[14px]">check</span>
                        </div>
                        <div className="w-0.5 h-10 bg-[#544ec2]"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#181c20]">Sardarpura 4th Road Depot</span>
                          <span className="font-code-waybill text-[10px] text-[#46464c]">10:48 AM</span>
                        </div>
                        <span className="text-[11px] text-[#46464c]">4x Spindles Received by Rajesh K. (OTP Verified)</span>
                      </div>
                    </div>

                    {/* Stop 2 */}
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-[#e2dfff] text-[#544ec2] flex items-center justify-center text-[11px] font-bold ring-2 ring-[#544ec2] animate-pulse">
                          02
                        </div>
                        <div className="w-0.5 h-10 bg-[#e0e2e8]"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#544ec2]">Basni Industrial Estate Phase 1</span>
                          <span className="font-code-waybill text-[10px] text-[#544ec2] font-bold">IN TRANSIT · 6 MIN</span>
                        </div>
                        <span className="text-[11px] text-[#46464c]">ETA 11:15 AM · Remaining: 8x Spindles</span>
                      </div>
                    </div>

                    {/* Stop 3 */}
                    <div className="flex items-start gap-3 opacity-60">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-[#eceef4] text-[#46464c] flex items-center justify-center text-[11px] font-bold">
                          03
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#181c20]">Boranada Special Economic Zone</span>
                          <span className="font-code-waybill text-[10px] text-[#46464c]">QUEUED</span>
                        </div>
                        <span className="text-[11px] text-[#46464c]">Final drop milestone</span>
                      </div>
                    </div>
                  </div>

                  {/* Driver Contact */}
                  <div className="bg-[#f1f3f9] rounded-xl p-3 flex items-center justify-between mt-1 border border-[#c7c5cd]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#050719] text-[#ffffff] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">person</span>
                      </div>
                      <div>
                        <span className="font-headline text-xs font-bold text-[#181c20] block leading-none">
                          Ramesh Choudhary
                        </span>
                        <span className="text-[11px] text-[#46464c]">Verified Fleet Partner · 4.9 ★</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => alert('Direct driver voice call initiation for active trip.')}
                        className="w-8 h-8 rounded-lg bg-[#ffffff] text-[#181c20] flex items-center justify-center hover:bg-[#e2dfff] transition-colors border border-[#c7c5cd]/40"
                        title="Call Driver"
                      >
                        <span className="material-symbols-outlined text-[16px]">call</span>
                      </button>
                      <button
                        onClick={() => alert('Direct driver chat channel for waypoint coordinates.')}
                        className="w-8 h-8 rounded-lg bg-[#ffffff] text-[#181c20] flex items-center justify-center hover:bg-[#e2dfff] transition-colors border border-[#c7c5cd]/40"
                        title="Chat with Driver"
                      >
                        <span className="material-symbols-outlined text-[16px]">chat</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Fleet Context Gallery */}
      <section className="w-full py-16 bg-[#f7f9ff] border-t border-[#c7c5cd]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <span className="font-code-waybill text-xs text-[#544ec2] uppercase tracking-widest font-bold">
                Commercial Fleets Built for Goods Only
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#181c20]">
                Engineered for Real Physical Logistics
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#46464c] max-w-sm">
              No passenger cabs. Strict goods vehicles calibrated for merchant stock, parcel cartons, and raw components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vehicle 1 */}
            <div className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div className="relative w-full h-48 overflow-hidden bg-[#eceef4]">
                <ImageWithFallback
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF8ks7qg7FgaC9C5bW1p7OWq76-YpjOfiDxCrPmrCCXXgtxjsArj4AnayN1n8gENb3p3_YECeRpquXQZv9HlU8H5NUxAtVZAPYx3MXtGJqaApGKjq26jFiQrD7fRmk4QhmR7JRDshDDgi0vf8cxQRQfr5R325GVj63J5ovjkQJxcQSyNAmEsfTaZ-Msm_I9EhdcyxW9FpSAVzbwA_vOoGfN7Bwpu-L1yLMm0USEEO1Zo7gyy4ZanQ"
                  alt="3-Wheeler Freight Auto"
                  fallbackTitle="3-WHEELER FREIGHT AUTO"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#050719] text-[#ffffff] font-code-waybill text-[10px] font-bold">
                  UP TO 500 KG
                </span>
              </div>
              <div className="p-5 flex flex-col gap-1">
                <span className="font-code-waybill text-[10px] text-[#544ec2] font-bold uppercase">URBAN AGILITY</span>
                <h3 className="font-headline text-base font-bold text-[#181c20]">3-Wheeler Freight Auto</h3>
                <p className="text-xs text-[#46464c]">
                  Navigates narrow lanes inside old city gates (Sojati, Clock Tower) effortlessly for swift, low-cost multi-stops.
                </p>
              </div>
              <div className="px-5 pb-5 pt-2 flex items-center justify-between text-[#46464c] font-code-waybill text-[11px] border-t border-[#eceef4]">
                <span>Bed: 5.5 x 4.2 ft</span>
                <span className="font-bold text-[#181c20]">Piaggio Ape / Bajaj</span>
              </div>
            </div>

            {/* Vehicle 2 */}
            <div className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div className="relative w-full h-48 overflow-hidden bg-[#eceef4]">
                <ImageWithFallback
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOFfwnVqH7AEGf2P2tReUTsZajtFoYiNFJX0WjwQi1poZdL2wdpDZkCIbuJCrzFpMCcafjuburxft3ztMZd_K5Qh3z-LiSiPwa42lrrhH5GNbD0T01ws1YGkWZzBP6kBGK0BImZJOrVaHByJsRKWSNtLI_LF0R5n0hqVnz7IJtvJ0zzNKIccDrYn9QJ6AJdZlJ-PpV6ox-a2YGXBHbG0U6bxxBqyn4QuPaWO8HhKyNNcwDtJdW7SI"
                  alt="Tata Ace / Mini Tempo"
                  fallbackTitle="TATA ACE / MINI TEMPO"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#544ec2] text-[#ffffff] font-code-waybill text-[10px] font-bold">
                  UP TO 850 KG
                </span>
              </div>
              <div className="p-5 flex flex-col gap-1">
                <span className="font-code-waybill text-[10px] text-[#544ec2] font-bold uppercase">MOST POPULAR DISPATCH</span>
                <h3 className="font-headline text-base font-bold text-[#181c20]">Tata Ace / Mini Tempo</h3>
                <p className="text-xs text-[#46464c]">
                  The backbone of local commerce. Open and tarpaulin-covered flatbeds ready for furniture, cartons, and consumer FMCG.
                </p>
              </div>
              <div className="px-5 pb-5 pt-2 flex items-center justify-between text-[#46464c] font-code-waybill text-[11px] border-t border-[#eceef4]">
                <span>Bed: 7.0 x 4.8 ft</span>
                <span className="font-bold text-[#181c20]">Tata Ace Gold / Zip</span>
              </div>
            </div>

            {/* Vehicle 3 */}
            <div className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div className="relative w-full h-48 overflow-hidden bg-[#eceef4]">
                <ImageWithFallback
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIXlDc5NPdM1tTi-qE7ROBbOgJ5N0IQHwWwMlQZEZNqt0DazJJmdJx_EOJ7k20aA9TH8P2bbeL7-7qKN0L0sNolK_E1axpxHCoSvawPHNxofgl-Nc3XwwoHUGeDC78n1nstBAIkJ8diMKwIkLViqjWqayRZFT2eEjCRbLS1Bkiu2yBeV-6VXXgn5L0XCPIcpe51wcuI1UL5y1TBM1cJ--nUhlK-0IHo5EoPjnwwgW9VyitJLTzy2g"
                  alt="Bolero Maxi Truck / 407"
                  fallbackTitle="BOLERO MAXI TRUCK / 407"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#050719] text-[#ffffff] font-code-waybill text-[10px] font-bold">
                  UP TO 1.5 - 2.5 TONS
                </span>
              </div>
              <div className="p-5 flex flex-col gap-1">
                <span className="font-code-waybill text-[10px] text-[#544ec2] font-bold uppercase">BULK CONSIGNMENTS</span>
                <h3 className="font-headline text-base font-bold text-[#181c20]">Bolero Maxi Truck / 407</h3>
                <p className="text-xs text-[#46464c]">
                  For heavy multi-drop factory dispatches, wooden handicraft shipments, stone slabs, and large industrial distributions.
                </p>
              </div>
              <div className="px-5 pb-5 pt-2 flex items-center justify-between text-[#46464c] font-code-waybill text-[11px] border-t border-[#eceef4]">
                <span>Bed: 8.5 x 5.5 ft</span>
                <span className="font-bold text-[#181c20]">Mahindra / Tata 407</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Safeguards */}
      <section className="w-full py-16 bg-[#f1f3f9] border-t border-[#c7c5cd]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-1 mb-10">
            <span className="font-code-waybill text-xs text-[#544ec2] uppercase tracking-widest font-bold">
              Operational Safeguards
            </span>
            <h2 className="font-headline text-3xl font-bold text-[#181c20]">
              Trust & Accountability at Every Node
            </h2>
            <p className="text-xs sm:text-sm text-[#46464c]">
              Built specifically to handle high-value merchandise, urgent trade timelines, and fragmented merchant handoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#eceef4] text-[#544ec2] flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">call_quality</span>
              </div>
              <h3 className="font-headline text-base font-bold text-[#181c20]">Direct Driver Communication</h3>
              <p className="text-xs text-[#46464c] leading-relaxed">
                Consignors and waypoint receivers can call or text the driver directly with one tap from the live tracking screen. Zero call center middle-men.
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#eceef4] text-[#544ec2] flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">notifications_active</span>
              </div>
              <h3 className="font-headline text-base font-bold text-[#181c20]">Milestone SMS Notifications</h3>
              <p className="text-xs text-[#46464c] leading-relaxed">
                Every drop contact receives automated SMS updates when the vehicle is 10 minutes away, complete with live coordinates and contact verification.
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#eceef4] text-[#544ec2] flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">approval</span>
              </div>
              <h3 className="font-headline text-base font-bold text-[#181c20]">Digital Proof of Delivery (PoD)</h3>
              <p className="text-xs text-[#46464c] leading-relaxed">
                Each drop requires dual confirmation: a secure recipient OTP or photo proof of unloaded merchandise recorded on the digital waybill archive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Big Bottom CTA */}
      <section className="w-full py-16 bg-[#f7f9ff] border-t border-[#c7c5cd]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#050719] text-[#ffffff] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
            <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-[#8c88fe]/20 blur-3xl pointer-events-none"></div>

            <div className="flex flex-col gap-2 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffffff]/10 text-[#e2dfff] font-code-waybill text-xs w-fit">
                <span className="w-2 h-2 rounded-full bg-[#8c88fe] animate-pulse"></span>
                RJ-19 FLEETS DISPATCHING DAILY
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#ffffff] font-bold tracking-tight leading-tight">
                Ready to try MultipleRide?
              </h2>
              <p className="text-sm text-[#ffffff]/80">
                Create your first intra-city single or multi-drop delivery request in under 60 seconds. Transparent pricing with instant vehicle allocation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto relative z-10">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#544ec2] hover:bg-[#544ec2]/90 text-[#ffffff] font-headline text-sm font-bold text-center transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Contact Desk</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link
                to="/driver-partners"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#181a2d] text-[#ffffff] font-headline text-sm font-semibold text-center hover:bg-[#181a2d]/80 transition-all flex items-center justify-center gap-2 border border-[#c7c5cd]/20"
              >
                <span>Join as Driver</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
