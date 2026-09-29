import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface HomePageProps {
  onOpenDispatch: () => void;
}

export function HomePage({ onOpenDispatch }: HomePageProps) {
  const [driverTripStatus, setDriverTripStatus] = useState<'idle' | 'accepted' | 'declined'>('idle');

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO (High-Impact Operational Split Canvas) */}
      <section className="relative w-full overflow-hidden bg-[#f7f9ff] pb-16">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#e2dfff]/40 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#e0e0fb]/30 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Hero Left Rail */}
            <div className="lg:col-span-12 max-w-3xl flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6e8ee] text-[#181c20]">
                <span className="w-2 h-2 rounded-full bg-[#544ec2]"></span>
                <span className="font-code-waybill text-[11px] tracking-wide font-semibold">
                  LOCAL FREIGHT & GOODS • JODHPUR, RAJASTHAN
                </span>
              </div>

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-[54px] text-[#181c20] font-extrabold tracking-tight leading-[1.08]">
                Pickup and drop, <br />
                <span className="text-[#544ec2] inline-block">made simpler.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#46464c] max-w-xl leading-relaxed">
                MultipleRide connects commercial hubs, local traders, and domestic shippers with verified driver-partners for punctual local pickup, direct delivery, and sequenced multi-drop transport of permitted commercial goods, materials, and parcels.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1 w-full sm:w-auto">

                <a
                  href="#services-overview"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#f1f3f9] text-[#181c20] hover:bg-[#e6e8ee] transition-all font-headline text-sm font-semibold"
                >
                  <span>Explore Services</span>
                  <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </a>
              </div>

              {/* Trust Metadata Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-4 w-full bg-[#ffffff]/80 p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30">
                <div>
                  <div className="font-code-waybill text-[11px] text-[#544ec2] font-bold">SINGLE ORIGIN</div>
                  <div className="font-headline text-xl font-bold text-[#181c20] mt-0.5">1 Pick</div>
                  <div className="text-xs text-[#46464c]">Verified load station</div>
                </div>
                <div>
                  <div className="font-code-waybill text-[11px] text-[#544ec2] font-bold">DISTRIBUTION</div>
                  <div className="font-headline text-xl font-bold text-[#181c20] mt-0.5">Up to 8</div>
                  <div className="text-xs text-[#46464c]">Sequential Drops</div>
                </div>
                <div>
                  <div className="font-code-waybill text-[11px] text-[#544ec2] font-bold">CARGO PROFILE</div>
                  <div className="font-headline text-xl font-bold text-[#181c20] mt-0.5">Permitted</div>
                  <div className="text-xs text-[#46464c]">Commercial freight only</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS MULTIPLERIDE? (Clarity & Utility) */}
      <section className="w-full bg-[#f1f3f9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="font-code-waybill text-xs uppercase tracking-wider text-[#544ec2] font-bold">
              PLATFORM ARCHITECTURE
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#181c20] font-bold mt-1 tracking-tight">
              Local transportation, connected.
            </h2>
            <p className="text-base text-[#46464c] mt-2 leading-relaxed">
              MultipleRide is an intra-city freight and cargo transportation platform engineered to eliminate dispatch friction for businesses, warehouses, and individuals. Operated with operational rigor by {siteConfig.legalBusinessName}, we provide direct digital access to cargo carriers without broker ambiguity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#050719] text-[#ffffff] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181c20]">Verified Drivers & Vehicles</h3>
                <p className="text-sm text-[#46464c] mt-2 leading-relaxed">
                  Every driver-partner operating under our dispatch network submits verified vehicle papers, commercial permits, and identification for trustworthy consignment handling.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-xs font-semibold flex items-center gap-1">
                <span>AUDITED PROTOCOL</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </div>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#544ec2] text-[#ffffff] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">visibility</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181c20]">Transparent Consignments</h3>
                <p className="text-sm text-[#46464c] mt-2 leading-relaxed">
                  Live status tracking from loading bay departure through every sequenced delivery stop. Real-time digital status verification for sender and receivers.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-xs font-semibold flex items-center gap-1">
                <span>END-TO-END TELEMETRY</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </div>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#e6e8ee] text-[#181c20] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#181c20]">Strictly Freight & Goods</h3>
                <p className="text-sm text-[#46464c] mt-2 leading-relaxed">
                  Engineered exclusively for lawful retail packages, agricultural supplies, hardware materials, and commercial stock. We are strictly a goods logistics platform.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-xs font-semibold flex items-center gap-1">
                <span>PERMITTED MATERIALS ONLY</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR SERVICES (Clean Pair Architecture) */}
      <section className="w-full bg-[#f7f9ff] py-16" id="services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
            <div>
              <span className="font-code-waybill text-xs uppercase tracking-wider text-[#544ec2] font-bold">
                CORE CAPABILITIES
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#181c20] font-bold mt-1 tracking-tight">
                Structured transport services.
              </h2>
            </div>
            <p className="text-sm text-[#46464c] max-w-md">
              Select between standard single-point dispatch or optimize your route across multi-point destination schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 01: Standard Pickup & Drop */}
            <div className="bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-code-waybill text-xs px-2.5 py-1 rounded bg-[#e6e8ee] text-[#181c20] font-semibold">
                    SERVICE MODE 01
                  </span>
                  <span className="material-symbols-outlined text-[#77767d] text-[24px]">arrow_forward</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-[#181c20]">PICKUP & DROP</h3>
                <p className="text-sm text-[#46464c] mt-2 leading-relaxed">
                  One pickup. One destination. One organized transportation journey. Perfect for urgent inventory restocks, direct retail dispatch, or straightforward warehouse-to-store transfers.
                </p>

                {/* Schematic Diagram 01 */}
                <div className="my-6 p-4 rounded-xl bg-[#f1f3f9] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#050719] text-[#ffffff] flex items-center justify-center font-code-waybill text-xs font-bold">
                      P
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#181c20]">Origin</div>
                      <div className="text-[11px] text-[#46464c]">Pickup Spot</div>
                    </div>
                  </div>

                  <div className="flex-1 mx-4 flex items-center justify-center relative">
                    <div className="w-full h-0.5 bg-[#c7c5cd]/60"></div>
                    <div className="absolute px-2.5 py-1 rounded-full bg-[#ffffff] text-[#181c20] shadow-xs border border-[#c7c5cd]/40 flex items-center gap-1 font-code-waybill text-[10px]">
                      <span className="material-symbols-outlined text-[13px] text-[#544ec2]">local_shipping</span>
                      Direct
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#544ec2] text-[#ffffff] flex items-center justify-center font-code-waybill text-xs font-bold">
                      D
                    </span>
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#181c20]">Destination</div>
                      <div className="text-[11px] text-[#46464c]">Single Drop</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#eceef4]">
                <span className="text-xs text-[#46464c]">Point-to-point intra-city</span>
                <Link
                  to="/services"
                  className="text-xs font-bold text-[#050719] hover:text-[#544ec2] flex items-center gap-1"
                >
                  <span>View Route Details</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

            {/* Card 02: MULTI-DROP (Signature Highlighted) */}
            <div className="bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-md border-2 border-[#544ec2]/30 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e2dfff]/40 rounded-bl-full pointer-events-none"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-code-waybill text-xs px-2.5 py-1 rounded bg-[#e2dfff] text-[#0f0069] font-bold">
                    SIGNATURE SERVICE 02
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#544ec2] text-[#ffffff] font-code-waybill text-[10px] uppercase font-bold tracking-wider">
                    High Efficiency
                  </span>
                </div>

                <h3 className="font-headline text-2xl font-bold text-[#181c20]">MULTI-DROP TRANSPORT</h3>
                <p className="text-sm text-[#46464c] mt-2 leading-relaxed">
                  One pickup. Multiple destinations. One organized journey. Load everything once at your primary facility, then sequence deliveries along an optimized circuit without booking multiple individual vehicles.
                </p>

                {/* Schematic Diagram 02 */}
                <div className="my-6 p-4 rounded-xl bg-[#e2dfff]/20 flex items-center justify-between overflow-x-auto gap-2 border border-[#544ec2]/10">
                  <div className="flex flex-col items-center min-w-max">
                    <span className="w-8 h-8 rounded-full bg-[#050719] text-[#ffffff] flex items-center justify-center font-code-waybill text-[11px] font-bold">
                      PICK
                    </span>
                    <span className="font-code-waybill text-[10px] text-[#181c20] mt-1 font-semibold">Origin Hub</span>
                  </div>
                  <div className="w-6 h-0.5 bg-[#544ec2] shrink-0"></div>
                  <div className="flex flex-col items-center min-w-max">
                    <span className="w-7 h-7 rounded-full bg-[#e2dfff] text-[#0f0069] flex items-center justify-center font-code-waybill text-[11px] font-bold">
                      D1
                    </span>
                    <span className="font-code-waybill text-[10px] text-[#181c20] mt-1">Sardarpura</span>
                  </div>
                  <div className="w-6 h-0.5 bg-[#544ec2] shrink-0"></div>
                  <div className="flex flex-col items-center min-w-max">
                    <span className="w-7 h-7 rounded-full bg-[#e2dfff] text-[#0f0069] flex items-center justify-center font-code-waybill text-[11px] font-bold">
                      D2
                    </span>
                    <span className="font-code-waybill text-[10px] text-[#181c20] mt-1">Ratanada</span>
                  </div>
                  <div className="w-6 h-0.5 bg-[#544ec2] shrink-0"></div>
                  <div className="flex flex-col items-center min-w-max">
                    <span className="w-7 h-7 rounded-full bg-[#544ec2] text-[#ffffff] flex items-center justify-center font-code-waybill text-[11px] font-bold shadow-xs">
                      D3
                    </span>
                    <span className="font-code-waybill text-[10px] text-[#181c20] mt-1 font-semibold">Shastri Nagar</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#eceef4]">
                <span className="text-xs text-[#544ec2] font-bold">Bulk drop consolidation</span>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#544ec2] text-[#ffffff] text-xs font-bold hover:bg-[#544ec2]/90 transition-colors shadow-xs"
                >
                  <span>Explore Multi-Drop</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SIGNATURE SHOWCASE (Consolidation Architectural Workflow) */}
      <section className="w-full bg-[#eceef4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Diagram Left */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-[#ffffff] p-6 rounded-2xl shadow-md border border-[#c7c5cd]/30">
                <div className="flex items-center justify-between pb-3 border-b border-[#eceef4]">
                  <span className="font-code-waybill text-xs text-[#544ec2] font-bold">
                    DISPATCH CONSOLIDATION MODEL
                  </span>
                  <span className="font-code-waybill text-xs text-[#46464c]">ROUTE EFFICIENCY 84%</span>
                </div>

                <div className="space-y-3 mt-4">
                  <div className="p-4 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#050719] text-[#ffffff] flex items-center justify-center font-code-waybill text-sm font-bold">
                        1
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#181c20]">
                          Single Pickup Consolidated Loading
                        </div>
                        <div className="text-xs text-[#46464c]">
                          Goods loaded in reverse order of drops (LIFO system)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center -my-1">
                    <span className="material-symbols-outlined text-[#544ec2] text-[20px]">arrow_downward</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#544ec2] text-[#ffffff] flex items-center justify-center font-code-waybill text-sm font-bold">
                        2
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#181c20]">
                          Sequenced Geographic Transit
                        </div>
                        <div className="text-xs text-[#46464c]">
                          System computes closest next drop station to reduce road turnaround
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center -my-1">
                    <span className="material-symbols-outlined text-[#544ec2] text-[20px]">arrow_downward</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#e0e2e8] text-[#181c20] flex items-center justify-center font-code-waybill text-sm font-bold">
                        3
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#181c20]">
                          Independent Drop Confirmation
                        </div>
                        <div className="text-xs text-[#46464c]">
                          Each destination receiver signs and confirms package handover
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-[#e2dfff]/40 flex items-center justify-between border border-[#544ec2]/20">
                  <span className="font-code-waybill text-xs text-[#0f0069] font-medium">ONE CONSIGNMENT TICKET</span>
                  <span className="font-code-waybill text-xs text-[#0f0069] font-bold">ZERO MULTI-VEHICLE HEADACHE</span>
                </div>
              </div>
            </div>

            {/* Copy Right */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start gap-3">
              <span className="font-code-waybill text-xs uppercase tracking-wider text-[#544ec2] font-bold">
                SIGNATURE FEATURE
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#181c20] font-bold tracking-tight">
                One pickup. Multiple drops.
              </h2>
              <p className="text-base text-[#46464c] leading-relaxed">
                Need to send items to several locations? MultipleRide lets you organize multiple drops within one transportation request. Instead of booking three different carriers or making multiple individual trips across Jodhpur, consolidate your entire dispatch run into one vehicle.
              </p>

              <div className="space-y-3 mt-2 w-full">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#544ec2] text-[20px] mt-0.5">check_circle</span>
                  <div className="text-sm text-[#181c20]">
                    <span className="font-bold">Save dispatch coordination time:</span> Meet one driver at your warehouse rather than coordinating three different arrivals.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#544ec2] text-[20px] mt-0.5">check_circle</span>
                  <div className="text-sm text-[#181c20]">
                    <span className="font-bold">Logical route ordering:</span> Drops are planned in a cohesive sequence to keep travel smooth and orderly.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#544ec2] text-[20px] mt-0.5">check_circle</span>
                  <div className="text-sm text-[#181c20]">
                    <span className="font-bold">Drop-specific consignment tagging:</span> Specify what gets unloaded at which exact location.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-1.5 text-[#050719] font-headline text-sm font-bold hover:text-[#544ec2] transition-colors"
                >
                  <span>Learn how multi-drop scheduling works</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VEHICLE CATEGORIES SHOWCASE */}
      <section className="w-full bg-[#f7f9ff] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
            <div>
              <span className="font-code-waybill text-xs uppercase tracking-wider text-[#544ec2] font-bold">
                FREIGHT FLEET PROFILE
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#181c20] font-bold mt-1 tracking-tight">
                Choose the right vehicle for the route.
              </h2>
              <p className="text-sm text-[#46464c] max-w-xl mt-1">
                Vehicle availability may vary based on location, availability, and specific transportation requirements in the Jodhpur operating zone.
              </p>
            </div>
            <Link
              to="/vehicles"
              className="text-xs font-bold text-[#544ec2] hover:text-[#050719] transition-colors flex items-center gap-1 shrink-0"
            >
              <span>View Fleet Standards</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.vehicles.map((v) => (
              <div
                key={v.id}
                className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 w-full bg-[#f1f3f9] rounded-xl overflow-hidden mb-4 relative">
                    <ImageWithFallback
                      src={v.image}
                      alt={v.name}
                      fallbackTitle={v.badge}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2.5 left-2.5 font-code-waybill text-[10px] px-2 py-0.5 rounded bg-[#ffffff]/90 font-bold text-[#181c20] shadow-xs">
                      {v.badge}
                    </span>
                  </div>

                  <h3 className="font-headline text-lg font-bold text-[#181c20]">{v.name}</h3>
                  <p className="text-xs text-[#46464c] mt-2 leading-relaxed">{v.suitability}</p>

                  <div className="space-y-1.5 mt-4 pt-2 border-t border-[#eceef4] text-xs">
                    <div className="flex items-center justify-between text-[#46464c]">
                      <span>Best suited for:</span>
                      <span className="font-semibold text-[#181c20]">{v.typicalCargo[0]}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#46464c]">
                      <span>Access:</span>
                      <span className="font-semibold text-[#181c20] truncate max-w-[150px]">{v.access}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#eceef4] text-[#181c20] font-code-waybill text-xs font-bold uppercase">
                  {v.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FOR BUSINESSES (Everyday Local Business Needs) */}
      <section className="w-full bg-[#f1f3f9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="font-code-waybill text-xs uppercase tracking-wider text-[#544ec2] font-bold">
              COMMERCIAL UTILITY
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#181c20] font-bold mt-1 tracking-tight">
              Designed for everyday local business needs.
            </h2>
            <p className="text-base text-[#46464c] mt-2 leading-relaxed">
              From bustling textile bazars to industrial fabrication facilities, MultipleRide powers essential day-to-day freight operations for local commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#ffffff] p-5 rounded-xl shadow-xs border border-[#c7c5cd]/30">
              <div className="w-10 h-10 rounded-lg bg-[#e6e8ee] flex items-center justify-center text-[#181c20] mb-3">
                <span className="material-symbols-outlined text-[20px]">storefront</span>
              </div>
              <h4 className="font-headline text-base font-bold text-[#181c20]">Shop & Retail Deliveries</h4>
              <p className="text-xs text-[#46464c] mt-1.5 leading-relaxed">
                Replenish retail storefronts from central stockrooms quickly during peak trading hours without keeping a dedicated vehicle on payroll.
              </p>
            </div>

            <div className="bg-[#ffffff] p-5 rounded-xl shadow-xs border border-[#c7c5cd]/30">
              <div className="w-10 h-10 rounded-lg bg-[#e6e8ee] flex items-center justify-center text-[#181c20] mb-3">
                <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
              </div>
              <h4 className="font-headline text-base font-bold text-[#181c20]">Store-to-Store Stock Balancing</h4>
              <p className="text-xs text-[#46464c] mt-1.5 leading-relaxed">
                Move inventory smoothly between multiple branch outlets across Jodhpur to balance customer demand.
              </p>
            </div>

            <div className="bg-[#ffffff] p-5 rounded-xl shadow-xs border border-[#c7c5cd]/30">
              <div className="w-10 h-10 rounded-lg bg-[#e6e8ee] flex items-center justify-center text-[#181c20] mb-3">
                <span className="material-symbols-outlined text-[20px]">account_tree</span>
              </div>
              <h4 className="font-headline text-base font-bold text-[#181c20]">Multi-Drop Customer Dispatch</h4>
              <p className="text-xs text-[#46464c] mt-1.5 leading-relaxed">
                Consolidate 3 to 8 customer orders packed in the morning into one dispatch vehicle for sequenced afternoon delivery.
              </p>
            </div>

            <div className="bg-[#ffffff] p-5 rounded-xl shadow-xs border border-[#c7c5cd]/30">
              <div className="w-10 h-10 rounded-lg bg-[#e6e8ee] flex items-center justify-center text-[#181c20] mb-3">
                <span className="material-symbols-outlined text-[20px]">inventory</span>
              </div>
              <h4 className="font-headline text-base font-bold text-[#181c20]">Scheduled Warehouse Pickups</h4>
              <p className="text-xs text-[#46464c] mt-1.5 leading-relaxed">
                Book transport in advance to clear outgoing freight at verified collection windows directly from factory loading docks.
              </p>
            </div>

            <div className="bg-[#ffffff] p-5 rounded-xl shadow-xs border border-[#c7c5cd]/30">
              <div className="w-10 h-10 rounded-lg bg-[#e6e8ee] flex items-center justify-center text-[#181c20] mb-3">
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              </div>
              <h4 className="font-headline text-base font-bold text-[#181c20]">Organized Record Keeping</h4>
              <p className="text-xs text-[#46464c] mt-1.5 leading-relaxed">
                Access trip summaries, timestamps, and drop proofs for hassle-free business expense accounting and client confirmations.
              </p>
            </div>

            <div className="bg-[#ffffff] p-5 rounded-xl shadow-xs border border-[#c7c5cd]/30">
              <div className="w-10 h-10 rounded-lg bg-[#e6e8ee] flex items-center justify-center text-[#181c20] mb-3">
                <span className="material-symbols-outlined text-[20px]">support_agent</span>
              </div>
              <h4 className="font-headline text-base font-bold text-[#181c20]">Direct Operational Support</h4>
              <p className="text-xs text-[#46464c] mt-1.5 leading-relaxed">
                Prompt human assistance backed by the local {siteConfig.legalBusinessName} team whenever transit queries or waypoint adjustments arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: BUILT FOR DRIVER-PARTNERS (Dignified & Honest) */}
      <section className="w-full bg-[#f7f9ff] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#050719] text-[#ffffff] rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden relative">
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#8c88fe]/20 blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col items-start gap-4">
                <span className="font-code-waybill text-xs uppercase tracking-wider text-[#e2dfff] font-bold">
                  COMMERCIAL PARTNERSHIP
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl text-[#ffffff] font-bold tracking-tight">
                  Built for driver-partners.
                </h2>
                <p className="text-sm sm:text-base text-[#ffffff]/80 leading-relaxed max-w-xl">
                  MultipleRide treats commercial drivers as valued partners. We offer clear trip details, exact waypoint addresses, and transparent terms with zero misleading promises.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2 w-full">
                  <div className="flex items-start gap-3 bg-[#181a2d] p-4 rounded-xl border border-[#c7c5cd]/20">
                    <span className="material-symbols-outlined text-[#e2dfff] text-[20px] mt-0.5">map</span>
                    <div>
                      <div className="text-xs font-bold text-[#ffffff]">Upfront Trip Details</div>
                      <div className="text-[11px] text-[#ffffff]/70">Inspect total distance, cargo category, and stops before accepting.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#181a2d] p-4 rounded-xl border border-[#c7c5cd]/20">
                    <span className="material-symbols-outlined text-[#e2dfff] text-[20px] mt-0.5">navigation</span>
                    <div>
                      <div className="text-xs font-bold text-[#ffffff]">Direct Turn Navigation</div>
                      <div className="text-[11px] text-[#ffffff]/70">Smooth navigation directly to pickup bays and successive drops.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#181a2d] p-4 rounded-xl border border-[#c7c5cd]/20">
                    <span className="material-symbols-outlined text-[#e2dfff] text-[20px] mt-0.5">checklist</span>
                    <div>
                      <div className="text-xs font-bold text-[#ffffff]">Simple Drop Handover</div>
                      <div className="text-[11px] text-[#ffffff]/70">Verify and close each drop in seconds with recipient sign-off.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#181a2d] p-4 rounded-xl border border-[#c7c5cd]/20">
                    <span className="material-symbols-outlined text-[#e2dfff] text-[20px] mt-0.5">handshake</span>
                    <div>
                      <div className="text-xs font-bold text-[#ffffff]">Respectful Support</div>
                      <div className="text-[11px] text-[#ffffff]/70">Local hub coordinators ready to resolve on-road bottlenecks.</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/driver-partners"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#ffffff] text-[#050719] font-headline text-xs font-bold hover:bg-[#eceef4] transition-colors"
                  >
                    <span>Become a Driver-Partner</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <span className="text-xs text-[#ffffff]/70">Commercial vehicle required • Verified documents</span>
                </div>
              </div>

              {/* Driver App View Graphic */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm bg-[#ffffff] text-[#181c20] rounded-2xl p-5 shadow-2xl border border-[#c7c5cd]/30">
                  <div className="flex items-center justify-between pb-3 border-b border-[#eceef4]">
                    <span className="font-code-waybill text-xs text-[#544ec2] font-bold">DRIVER CONSOLE</span>
                    <span className="font-code-waybill text-[11px] text-[#46464c] flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> ONLINE
                    </span>
                  </div>

                  <div className="p-3 bg-[#f1f3f9] rounded-xl my-3">
                    <div className="text-[10px] text-[#46464c] uppercase font-semibold">NEXT INCOMING TRIP</div>
                    <div className="font-headline text-base font-bold text-[#181c20] mt-0.5">
                      3-Drop Consignment
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-[#181c20]">
                      <span className="material-symbols-outlined text-[16px] text-[#544ec2]">pin_drop</span>
                      <span className="truncate">Pickup: Basni Phase II Industrial Area</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs py-1">
                    <div className="flex justify-between text-[#46464c]">
                      <span>Permitted Goods:</span>
                      <span className="text-[#181c20] font-semibold">Machinery Parts (450 kg)</span>
                    </div>
                    <div className="flex justify-between text-[#46464c]">
                      <span>Drops Planned:</span>
                      <span className="text-[#181c20] font-semibold">3 Drops in City Radius</span>
                    </div>
                    <div className="flex justify-between text-[#46464c]">
                      <span>Approx Distance:</span>
                      <span className="text-[#181c20] font-semibold">14.2 km total route</span>
                    </div>
                  </div>

                  {driverTripStatus === 'accepted' ? (
                    <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-center text-xs font-semibold text-emerald-800">
                      ✓ Trip Accepted! Navigation Initiated.
                    </div>
                  ) : driverTripStatus === 'declined' ? (
                    <div className="mt-4 p-3 rounded-lg bg-slate-100 text-center text-xs font-medium text-slate-600">
                      Trip passed. Waiting for next batch...
                    </div>
                  ) : (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setDriverTripStatus('declined')}
                        className="py-2.5 rounded-lg bg-[#eceef4] text-[#181c20] text-xs font-semibold text-center hover:bg-[#e0e2e8]"
                      >
                        Decline
                      </button>
                      <button
                        onClick={() => setDriverTripStatus('accepted')}
                        className="py-2.5 rounded-lg bg-[#050719] text-[#ffffff] text-xs font-bold text-center hover:bg-[#181a2d]"
                      >
                        Accept Trip
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: JODHPUR FOCUS (Authentic Local Cartography) */}
      <section className="w-full bg-[#f1f3f9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col items-start gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#181c20]">
                <span className="material-symbols-outlined text-[#544ec2] text-[16px]">location_on</span>
                <span className="font-code-waybill text-xs font-semibold">ZONE RJ-19 OPERATIONAL</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#181c20] font-bold tracking-tight">
                Starting in Jodhpur.
              </h2>
              <p className="text-base text-[#46464c] leading-relaxed">
                Our roots and inaugural dispatch network are situated right here in the Sun City. MultipleRide is proudly tuned to Jodhpur’s unique geography — from the historic market corridors around the Clock Tower to the bustling industrial and commercial trade belts of Basni, Boranada, and Mandore.
              </p>

              <div className="space-y-2 mt-2 w-full">
                <div className="p-3 rounded-xl bg-[#ffffff] border border-[#c7c5cd]/30 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#181c20]">Industrial Area Hubs</span>
                  <span className="font-code-waybill text-[#544ec2]">Basni • Boranada • Sanganeer</span>
                </div>
                <div className="p-3 rounded-xl bg-[#ffffff] border border-[#c7c5cd]/30 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#181c20]">Commercial Retail Corridors</span>
                  <span className="font-code-waybill text-[#544ec2]">Sardarpura • Nai Sarak • Sojati Gate</span>
                </div>
                <div className="p-3 rounded-xl bg-[#ffffff] border border-[#c7c5cd]/30 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#181c20]">Residential & Institutional</span>
                  <span className="font-code-waybill text-[#544ec2]">Ratanada • Shastri Nagar • Paota</span>
                </div>
              </div>

              <p className="text-xs text-[#46464c] mt-1">
                Operated by {siteConfig.legalBusinessName}, established in Jodhpur, Rajasthan, India.
              </p>
            </div>

            {/* Jodhpur Styled Map Representation */}
            <div className="lg:col-span-7">
              <div className="w-full h-96 rounded-2xl bg-[#ffffff] shadow-md overflow-hidden relative p-4 flex flex-col justify-between border border-[#c7c5cd]/30">
                <ImageWithFallback
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzf_W_I-E1CT3BJQyN1sjv_zd3VTo7JLzVQtfYB1b9-XR_RpCzr4J87KwDWRnsbXLUJ4G7Qa-1ZTeicwhEmeMyiHJ8zrkMgQZFDBOT9BC2CGFdvGS7LFTiFiUtT7UwLPgAzGwOFXk43gRFQMICmrFH6JxEDZTRaKTS2AqbHRxbXThy8SmXrbJ0KcNqfq8nezd91BgSHl-dMwU7f349MrbOZuLrALbB7veqdjaUrqA0Un7zT4mk7bE"
                  alt="Jodhpur Dispatch Matrix Map"
                  fallbackTitle="JODHPUR DISPATCH MATRIX"
                  fallbackIcon="map"
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-lg bg-[#ffffff]/95 backdrop-blur-md shadow-xs border border-[#c7c5cd]/30">
                    <span className="font-code-waybill text-xs text-[#181c20] font-bold">
                      JODHPUR DISPATCH MATRIX
                    </span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-[#050719] text-[#ffffff] text-xs font-code-waybill font-semibold shadow-xs">
                    ACTIVE REGION RJ-19
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#ffffff]/95 text-[#181c20] text-xs font-medium shadow-xs border border-[#c7c5cd]/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#544ec2]"></span> Basni Phase 1 & 2
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#ffffff]/95 text-[#181c20] text-xs font-medium shadow-xs border border-[#c7c5cd]/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#544ec2]"></span> Sardarpura C-Road
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#ffffff]/95 text-[#181c20] text-xs font-medium shadow-xs border border-[#c7c5cd]/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#544ec2]"></span> Mandore Mandi
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#ffffff]/95 text-[#181c20] text-xs font-medium shadow-xs border border-[#c7c5cd]/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#544ec2]"></span> Ratanada Circle
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: MOBILE APP SHOWCASE & FINAL DISPATCH CTA */}
      <section className="w-full bg-[#f7f9ff] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-6 flex flex-col items-start gap-3">
              <span className="font-code-waybill text-xs uppercase tracking-wider text-[#544ec2] font-bold">
                DIGITAL PLATFORM
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#181c20] font-bold tracking-tight">
                Everything for your trip, in one app.
              </h2>
              <p className="text-base text-[#46464c] leading-relaxed">
                Configure multi-drop waypoints with a few taps. Track driver movements in real-time, view consignment notes, and manage trip receipts without repetitive phone calls.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-2">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#544ec2] text-[22px]">add_location_alt</span>
                  <div>
                    <div className="font-headline text-sm font-bold text-[#181c20]">Easy Multi-Stop Pinning</div>
                    <div className="text-xs text-[#46464c]">Add and re-order drop points smoothly on the map.</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#544ec2] text-[22px]">notifications_active</span>
                  <div>
                    <div className="font-headline text-sm font-bold text-[#181c20]">Live Drop Alerts</div>
                    <div className="text-xs text-[#46464c]">Instant confirmation whenever each drop is completed.</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#544ec2] text-[22px]">contactless</span>
                  <div>
                    <div className="font-headline text-sm font-bold text-[#181c20]">Recipient Contact Trigger</div>
                    <div className="text-xs text-[#46464c]">Direct driver-to-receiver calling without middlemen.</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#544ec2] text-[22px]">fact_check</span>
                  <div>
                    <div className="font-headline text-sm font-bold text-[#181c20]">Digital Waybill Archive</div>
                    <div className="text-xs text-[#46464c]">Organized record of all historic cargo movements.</div>
                  </div>
                </div>
              </div>

              {/* App Store Placeholders */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={siteConfig.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-4 rounded-xl bg-[#050719] text-[#ffffff] flex items-center gap-2.5 shadow-xs hover:bg-[#181a2d] transition-colors"
                >
                  <span className="material-symbols-outlined text-[24px]">phone_android</span>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase text-[#ffffff]/70 leading-none">Get it on</span>
                    <span className="font-headline text-[13px] leading-tight font-bold">Google Play</span>
                  </div>
                </a>

                <a
                  href={siteConfig.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-4 rounded-xl bg-[#e6e8ee] text-[#181c20] flex items-center gap-2.5 shadow-xs hover:bg-[#e0e2e8] transition-colors"
                >
                  <span className="material-symbols-outlined text-[24px]">phone_iphone</span>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase text-[#46464c] leading-none">Download on the</span>
                    <span className="font-headline text-[13px] leading-tight font-bold">App Store</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Phone Preview Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm rounded-[36px] p-3 bg-[#050719] shadow-2xl border-4 border-[#181a2d]">
                <div className="w-full bg-[#f7f9ff] rounded-[28px] overflow-hidden p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-code-waybill text-xs font-bold text-[#181c20]">MultipleRide App</span>
                    <span className="material-symbols-outlined text-[18px] text-[#46464c]">signal_cellular_alt</span>
                  </div>

                  <div className="h-44 w-full rounded-xl bg-[#e6e8ee] relative overflow-hidden flex flex-col justify-end p-3">
                    <ImageWithFallback
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzf_W_I-E1CT3BJQyN1sjv_zd3VTo7JLzVQtfYB1b9-XR_RpCzr4J87KwDWRnsbXLUJ4G7Qa-1ZTeicwhEmeMyiHJ8zrkMgQZFDBOT9BC2CGFdvGS7LFTiFiUtT7UwLPgAzGwOFXk43gRFQMICmrFH6JxEDZTRaKTS2AqbHRxbXThy8SmXrbJ0KcNqfq8nezd91BgSHl-dMwU7f349MrbOZuLrALbB7veqdjaUrqA0Un7zT4mk7bE"
                      alt="App Active Route"
                      fallbackTitle="ACTIVE DISPATCH ROUTE"
                      className="absolute inset-0 w-full h-full object-cover opacity-65"
                    />
                    <div className="relative z-10 px-2.5 py-1.5 rounded-lg bg-[#ffffff]/95 backdrop-blur-xs shadow-xs border border-[#c7c5cd]/30">
                      <div className="font-code-waybill text-[10px] font-bold text-[#544ec2]">
                        ACTIVE: 1 PICKUP • 3 DROPS
                      </div>
                      <div className="text-[11px] text-[#46464c] truncate">
                        Vehicle is 1.2 km from Drop Station 01
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#ffffff] border border-[#c7c5cd]/20 text-xs">
                      <span className="text-[#181c20] flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-[#544ec2] text-[16px]">check_circle</span>
                        Pickup: Warehouse 4
                      </span>
                      <span className="font-code-waybill text-[10px] text-[#544ec2] font-bold">DONE</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#e2dfff]/40 border border-[#544ec2]/30 text-xs">
                      <span className="text-[#181c20] flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-[#544ec2] text-[16px]">arrow_circle_right</span>
                        Drop 1: Sardarpura
                      </span>
                      <span className="font-code-waybill text-[10px] text-[#544ec2] font-bold">NEXT</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#ffffff] border border-[#c7c5cd]/20 text-xs">
                      <span className="text-[#181c20] flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-[#77767d] text-[16px]">schedule</span>
                        Drop 2: Ratanada
                      </span>
                      <span className="font-code-waybill text-[10px] text-[#46464c]">QUEUED</span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenDispatch}
                    className="p-2.5 rounded-xl bg-[#050719] text-[#ffffff] text-center font-headline text-xs font-bold hover:bg-[#181a2d] transition-colors"
                  >
                    Manage Active Route
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FINAL CTA BANNER */}
          <div className="w-full bg-[#ffffff] rounded-3xl p-6 sm:p-10 shadow-lg border border-[#c7c5cd]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-code-waybill text-xs uppercase tracking-wider text-[#544ec2] font-bold">
                EFFICIENT FREIGHT LOGISTICS
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl text-[#181c20] font-bold mt-1 tracking-tight">
                Ready to simplify your next pickup?
              </h3>
              <p className="text-sm text-[#46464c] mt-1.5 leading-relaxed">
                Organize local goods transportation across Jodhpur without phone tag, broker margins, or unconfirmed delivery drop sequences.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenDispatch}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#050719] text-[#ffffff] font-headline text-sm font-bold hover:bg-[#181a2d] transition-all shadow-md"
              >
                <span>Get Started</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#e6e8ee] text-[#181c20] font-headline text-sm font-semibold hover:bg-[#e0e2e8] transition-colors"
              >
                <span>Contact Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
