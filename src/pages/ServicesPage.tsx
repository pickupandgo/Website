import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { ImageWithFallback } from '../components/ImageWithFallback';

export function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Glow Field & Title */}
      <section className="relative w-full overflow-hidden bg-[#f7f9ff] py-12 lg:py-16">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#8c88fe]/20 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start gap-3 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2]">
              <span className="material-symbols-outlined text-[15px]">alt_route</span>
              <span className="font-code-waybill text-xs uppercase font-bold">
                Commercial Logistics Suite • RJ-19
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-[52px] text-[#181c20] font-extrabold tracking-tight leading-[1.1]">
              Transportation built around your route.
            </h1>

            <p className="text-base sm:text-lg text-[#46464c] max-w-2xl leading-relaxed mt-1">
              From a simple pickup and drop to one pickup followed by multiple destinations, MultipleRide helps organize local transportation in one place.
            </p>

            {/* Quick Manifest Metric Pill */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 w-full sm:w-auto">
              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30">
                <span className="text-[11px] text-[#46464c] uppercase font-semibold">Model</span>
                <p className="font-headline text-lg sm:text-xl text-[#181c20] font-bold">1:1 & 1:N</p>
                <span className="text-xs text-[#46464c]">Single Origin Only</span>
              </div>

              <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30">
                <span className="text-[11px] text-[#46464c] uppercase font-semibold">Fleet Ready</span>
                <p className="font-headline text-lg sm:text-xl text-[#181c20] font-bold">500kg - 3T</p>
                <span className="text-xs text-[#46464c]">Three-Wheel to Tempo</span>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-[#544ec2] font-code-waybill text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#544ec2]"></span>
                  Jodhpur Active Hub
                </div>
                <span className="text-xs text-[#46464c] mt-1">Zero Long-Term Lock-in</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 01: PICKUP & DROP */}
      <section className="w-full py-16 bg-[#f1f3f9] border-t border-[#c7c5cd]/20" id="pickup-and-drop">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Steps */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#544ec2] font-code-waybill text-xs font-bold">
                <span>SERVICE 01</span>
                <span>/</span>
                <span>DIRECT TRANSIT</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl text-[#181c20] font-bold tracking-tight">
                One pickup. One destination.
              </h2>

              <p className="text-sm sm:text-base text-[#46464c] leading-relaxed">
                A streamlined, direct local goods transportation request from any designated pickup address directly to its recipient. Perfect when speed and singular custody are mission-critical.
              </p>

              {/* 3 Steps */}
              <div className="flex flex-col gap-2.5 mt-2">
                <div className="flex items-start gap-4 p-4 bg-[#ffffff] rounded-xl shadow-xs border border-[#c7c5cd]/30">
                  <div className="w-8 h-8 rounded-lg bg-[#e6e8ee] text-[#181c20] flex items-center justify-center font-code-waybill text-xs font-bold shrink-0">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline text-sm font-bold text-[#181c20]">
                      Specify pickup & drop point
                    </span>
                    <span className="text-xs text-[#46464c] mt-0.5">
                      Enter exact building, shop, or warehouse markers with cargo description.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#ffffff] rounded-xl shadow-xs border border-[#c7c5cd]/30">
                  <div className="w-8 h-8 rounded-lg bg-[#e6e8ee] text-[#181c20] flex items-center justify-center font-code-waybill text-xs font-bold shrink-0">
                    02
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline text-sm font-bold text-[#181c20]">
                      Match with suitable driver-partner
                    </span>
                    <span className="text-xs text-[#46464c] mt-0.5">
                      System pairs your cargo volume to verified load carriers nearby.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#ffffff] rounded-xl shadow-xs border border-[#c7c5cd]/30">
                  <div className="w-8 h-8 rounded-lg bg-[#544ec2] text-[#ffffff] flex items-center justify-center font-code-waybill text-xs font-bold shrink-0">
                    03
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline text-sm font-bold text-[#181c20]">
                      Track trip until delivery
                    </span>
                    <span className="text-xs text-[#46464c] mt-0.5">
                      Real-time transit updates and digital recipient delivery acknowledgment.
                    </span>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-[#46464c] font-bold block mb-2">
                  Ideal Use Cases
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#e0e2e8] text-[#181c20] text-xs font-medium">
                    Urgent item transfers
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#e0e2e8] text-[#181c20] text-xs font-medium">
                    Single customer delivery
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#e0e2e8] text-[#181c20] text-xs font-medium">
                    Trade material pickup
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Route Visualizer */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="bg-[#ffffff] rounded-2xl p-6 shadow-md border border-[#c7c5cd]/30 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-code-waybill text-xs uppercase text-[#544ec2] font-bold">
                    Route Manifest #RJ19-0941
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-[#e6e8ee] text-[#181c20] font-code-waybill text-xs font-semibold">
                    Direct Leg
                  </span>
                </div>

                <div className="relative py-2 flex flex-col gap-6">
                  <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-[#544ec2]"></div>

                  {/* Origin */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#050719] text-[#ffffff] flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">warehouse</span>
                    </div>
                    <div className="flex flex-col bg-[#eceef4] p-4 rounded-xl grow border border-[#c7c5cd]/20">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider text-[#544ec2] font-bold">
                          Origin Pickup
                        </span>
                        <span className="font-code-waybill text-xs text-[#46464c]">09:15 AM</span>
                      </div>
                      <span className="font-headline text-base font-bold text-[#181c20] mt-0.5">
                        Heavy Industrial Area, Phase II
                      </span>
                      <span className="text-xs text-[#46464c] mt-0.5">
                        Consignment: 12x Packaged Raw Fabric Bolts
                      </span>
                    </div>
                  </div>

                  {/* Mid transit */}
                  <div className="flex items-center gap-4 ml-4 z-10">
                    <div className="w-5 h-5 rounded-full bg-[#8c88fe]/40 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#544ec2] animate-pulse"></span>
                    </div>
                    <div className="px-3.5 py-1 rounded-full bg-[#e6e8ee] text-[#181c20] font-code-waybill text-xs font-medium">
                      Transit Distance: 7.4 km • Est. 22 mins
                    </div>
                  </div>

                  {/* Destination */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#544ec2] text-[#ffffff] flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">storefront</span>
                    </div>
                    <div className="flex flex-col bg-[#eceef4] p-4 rounded-xl grow border border-[#c7c5cd]/20">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider text-[#544ec2] font-bold">
                          Destination Drop
                        </span>
                        <span className="font-code-waybill text-xs text-[#46464c]">Direct Gate-off</span>
                      </div>
                      <span className="font-headline text-base font-bold text-[#181c20] mt-0.5">
                        Sojati Gate Merchant Depot
                      </span>
                      <span className="text-xs text-[#46464c] mt-0.5">
                        Recipient verified with Secure Consignment Passkey
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cargo image */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#e6e8ee]">
                  <ImageWithFallback
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDknVTIoeWAmSZHXNamL6fc5S6UGo7cpIAs3QXKTbCoUH-KnvzHm0cvIcNRphfMKbIc4gz4k8UAvTlunq_bax4_-vP79CAl3oDS-p1rs2zik3hitzE9ifbCTFn1sjsWyfu3-kn_2zIRGPtn_m3UG5JQagJr34EuNfvBE5wG4G2zc-16LC5SRMYVOe93PoDFCJ8PqyrzryRCwckpTNeWSGGqfA9u9Jg-aWs35O7N5pBP2-gKVrGtVO0"
                    alt="Direct cargo single-custody chain"
                    fallbackTitle="SINGLE-CUSTODY CARGO CHAIN"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050719]/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-[#ffffff] text-xs font-medium">
                      Secured single-custody chain until destination drop-off
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 02: MULTI-DROP (FLAGSHIP SERVICE) */}
      <section className="w-full py-16 lg:py-20 bg-[#f7f9ff] relative overflow-hidden" id="multi-drop">
        <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] bg-[#e2dfff]/30 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl flex flex-col gap-2 mb-12">
            <div className="flex items-center gap-2 text-[#544ec2] font-code-waybill text-xs font-bold">
              <span className="material-symbols-outlined text-[16px]">stars</span>
              <span>SERVICE 02 • FLAGSHIP MULTI-DROP</span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl text-[#181c20] font-bold tracking-tight">
              One pickup. Multiple destinations.
            </h2>

            <p className="text-base text-[#46464c] leading-relaxed">
              Fulfill multiple deliveries from a single dispatch point without booking separate rides. Designed specifically for shops, suppliers, and distribution workflows.
            </p>

            {/* Strict Single Pickup Hub Rule */}
            <div className="inline-flex flex-wrap items-center gap-2 p-3 px-4 rounded-xl bg-[#e6e8ee] mt-2 max-w-fit border border-[#c7c5cd]/30">
              <span className="material-symbols-outlined text-[#544ec2] text-[20px]">hub</span>
              <span className="font-headline text-xs font-bold text-[#181c20]">
                Strict Single Pickup Hub Architecture:
              </span>
              <span className="text-xs text-[#46464c]">
                1 origin dispatch point, followed sequentially by up to multiple verified delivery drops.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Journey Diagram Left 7 Col */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="bg-[#ffffff] p-6 rounded-2xl shadow-md border border-[#c7c5cd]/30">
                <div className="flex items-center justify-between pb-4 border-b border-[#eceef4]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#544ec2]"></span>
                    <span className="font-headline text-sm font-bold text-[#181c20]">
                      Multi-Drop Sequence Blueprint
                    </span>
                  </div>
                  <span className="font-code-waybill text-xs text-[#544ec2] font-bold">
                    DISPATCH BATCH #MD-881
                  </span>
                </div>

                <div className="relative flex flex-col gap-4 pt-3">
                  <div className="absolute left-6 top-8 bottom-12 w-0.5 bg-gradient-to-b from-[#050719] via-[#544ec2] to-[#8c88fe]"></div>

                  {/* Single Pickup */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#050719] text-[#ffffff] flex items-center justify-center font-bold shrink-0 shadow-md">
                      <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                    </div>
                    <div className="grow bg-[#eceef4] p-4 rounded-xl border border-[#c7c5cd]/20">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded bg-[#050719] text-[#ffffff] font-code-waybill text-[10px] font-bold">
                          ORIGIN DISPATCH
                        </span>
                        <span className="font-code-waybill text-xs text-[#46464c]">08:00 AM BATCH LOAD</span>
                      </div>
                      <h3 className="font-headline text-base font-bold text-[#181c20] mt-1">
                        Central Warehouse / Store Depot
                      </h3>
                      <p className="text-xs text-[#46464c] mt-0.5">
                        Basni Industrial Estate • All 3 drop consignments loaded onto one carrier unit
                      </p>
                    </div>
                  </div>

                  {/* Drop 1 */}
                  <div className="flex items-start gap-4 relative z-10 ml-2">
                    <div className="w-8 h-8 rounded-lg bg-[#544ec2] text-[#ffffff] flex items-center justify-center font-code-waybill text-xs font-bold shrink-0 shadow-xs">
                      01
                    </div>
                    <div className="grow bg-[#f1f3f9] p-4 rounded-xl border border-[#c7c5cd]/20">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#544ec2] uppercase">Drop 01: Customer A</span>
                        <span className="inline-flex items-center gap-1 text-[#181c20] font-code-waybill text-[10px] bg-[#e6e8ee] px-2 py-0.5 rounded">
                          <span className="material-symbols-outlined text-[13px] text-[#544ec2]">verified</span>
                          Completed
                        </span>
                      </div>
                      <p className="font-headline text-sm font-semibold text-[#181c20] mt-1">
                        Sardarpura 5th B Road
                      </p>
                      <p className="text-xs text-[#46464c] mt-0.5">
                        Discharged: 6x Carton Parcels • Recipient signed via digital OTP
                      </p>
                    </div>
                  </div>

                  {/* Drop 2 */}
                  <div className="flex items-start gap-4 relative z-10 ml-2">
                    <div className="w-8 h-8 rounded-lg bg-[#e2dfff] text-[#0f0069] flex items-center justify-center font-code-waybill text-xs font-bold shrink-0 shadow-xs">
                      02
                    </div>
                    <div className="grow bg-[#f1f3f9] p-4 rounded-xl border border-[#c7c5cd]/20">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#544ec2] uppercase">Drop 02: Customer B</span>
                        <span className="inline-flex items-center gap-1 text-[#544ec2] font-code-waybill text-[10px] bg-[#e2dfff]/50 px-2 py-0.5 rounded font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#544ec2] animate-pulse"></span>
                          Next Leg
                        </span>
                      </div>
                      <p className="font-headline text-sm font-semibold text-[#181c20] mt-1">
                        Paota Main Market
                      </p>
                      <p className="text-xs text-[#46464c] mt-0.5">
                        Assigned load: 4x Commercial Crates • Direct store supervisor handover
                      </p>
                    </div>
                  </div>

                  {/* Drop 3 */}
                  <div className="flex items-start gap-4 relative z-10 ml-2">
                    <div className="w-8 h-8 rounded-lg bg-[#e0e2e8] text-[#46464c] flex items-center justify-center font-code-waybill text-xs font-bold shrink-0">
                      03
                    </div>
                    <div className="grow bg-[#f1f3f9] p-4 rounded-xl border border-[#c7c5cd]/20">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#46464c] uppercase">Drop 03: Customer C</span>
                        <span className="font-code-waybill text-xs text-[#46464c]">Scheduled Queue</span>
                      </div>
                      <p className="font-headline text-sm font-semibold text-[#181c20] mt-1">
                        Ratanada Commercial Complex
                      </p>
                      <p className="text-xs text-[#46464c] mt-0.5">
                        Final consignment leg • Full manifest closure upon unloading
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Col Value Props */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-[#050719] text-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-[#544ec2]/30 rounded-full blur-[60px] pointer-events-none"></div>
                <span className="font-code-waybill text-xs text-[#8c88fe] uppercase font-bold">
                  Operational Efficiency
                </span>
                <h3 className="font-headline text-2xl font-bold tracking-tight text-[#ffffff]">
                  No multiple drivers. No fragmented billing.
                </h3>
                <p className="text-xs sm:text-sm text-[#ffffff]/80 leading-relaxed">
                  Consolidate daily dispatches into one optimized trajectory. Cut intra-city delivery overhead by up to 38% compared to hiring piecemeal local transporters for each customer.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#181a2d] p-4 rounded-xl border border-[#c7c5cd]/20">
                    <span className="font-headline text-3xl font-extrabold text-[#8c88fe] block">1</span>
                    <span className="text-xs text-[#ffffff]/80">Single pickup vehicle loading event</span>
                  </div>
                  <div className="bg-[#181a2d] p-4 rounded-xl border border-[#c7c5cd]/20">
                    <span className="font-headline text-3xl font-extrabold text-[#8c88fe] block">100%</span>
                    <span className="text-xs text-[#ffffff]/80">Live progressive waypoint audits</span>
                  </div>
                </div>
              </div>

              {/* Scenarios */}
              <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col gap-4">
                <span className="text-xs font-bold text-[#181c20] uppercase tracking-wider">
                  Real-World Business Scenarios
                </span>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f1f3f9] flex items-center justify-center text-[#544ec2] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#181c20]">
                      E-Commerce Seller Batch Dispatches
                    </h4>
                    <p className="text-xs text-[#46464c] mt-0.5">
                      Collect daily packages from seller hub and complete intra-city drops in single scheduled runs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f1f3f9] flex items-center justify-center text-[#544ec2] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">vaccines</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#181c20]">
                      Pharmacy-to-Clinic Supplies
                    </h4>
                    <p className="text-xs text-[#46464c] mt-0.5">
                      Central pharmaceutical distributors dropping replenishment boxes to neighborhood clinics sequentially.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#f1f3f9] flex items-center justify-center text-[#544ec2] shrink-0">
                    <span className="material-symbols-outlined text-[18px]">store</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-[#181c20]">
                      Retail Shop Customer Orders
                    </h4>
                    <p className="text-xs text-[#46464c] mt-0.5">
                      Clothing, hardware, and spice vendors dispatching bulk customer purchases at the close of trade hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 03: LOCAL BUSINESS TRANSPORTATION */}
      <section className="w-full py-16 bg-[#f1f3f9] border-t border-[#c7c5cd]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Left */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-4">
              <div className="bg-[#ffffff] p-4 rounded-2xl shadow-md border border-[#c7c5cd]/30 overflow-hidden">
                <div className="relative w-full h-72 rounded-xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc6UPxlQvyhg5vvm_t7aAQYewwCFK-UhpiN3LPsU9HBGsPbrTwIZJHOVOCXDCHI_fVcAwahniA4pnhVgFdgPOvHgDP3FiXOrTS3edsFuqHBLgsGZoumvP3e-sXmL736uIxvzKCSAhduayrOQcdTfoESq5btLjUOId-T1fWMH5oXJwZAHsDaWMnOvj7ACszMtvUqsHJ2X0aRCaAbdjAlvOIQ5s4uv6mBieDSHrd0xZq7QZsm4KcBIQ"
                    alt="Jodhpur wholesale merchant district"
                    fallbackTitle="JODHPUR MERCHANTS NETWORK"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#050719]/90 text-[#ffffff] px-3 py-1 rounded-full font-code-waybill text-[10px] font-bold">
                    JODHPUR MERCHANTS NETWORK
                  </div>
                </div>

                <div className="p-2 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-headline text-sm font-bold text-[#181c20]">
                      {siteConfig.legalBusinessName} Utility Model
                    </span>
                    <span className="text-[#544ec2] font-code-waybill text-xs font-semibold">
                      No Minimum Contracts
                    </span>
                  </div>
                  <p className="text-xs text-[#46464c]">
                    Designed to integrate directly with local market billing routines and daily shop schedules without monthly minimums.
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Right */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#544ec2] font-code-waybill text-xs font-bold">
                <span>SERVICE 03</span>
                <span>/</span>
                <span>SME & COMMERCE WORKFLOWS</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl text-[#181c20] font-bold tracking-tight">
                Local Business Transportation. Built for the rhythm of city trade.
              </h2>

              <p className="text-base text-[#46464c] leading-relaxed">
                Local retailers, wholesale distributors, and neighborhood merchants in Jodhpur can eliminate coordination headaches with organized digital transport requests. Flexible, on-demand, and with zero enterprise lock-in.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col gap-1">
                  <div className="w-9 h-9 rounded-xl bg-[#e6e8ee] flex items-center justify-center text-[#181c20] mb-1">
                    <span className="material-symbols-outlined text-[18px]">phone_disabled</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20]">End Manual Driver Chasing</h4>
                  <p className="text-xs text-[#46464c]">
                    Stop spending hours calling independent drivers in morning rush hours. Request instantly with verified load capacity.
                  </p>
                </div>

                <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col gap-1">
                  <div className="w-9 h-9 rounded-xl bg-[#e6e8ee] flex items-center justify-center text-[#181c20] mb-1">
                    <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20]">Clean Digital Waybills</h4>
                  <p className="text-xs text-[#46464c]">
                    Transparent receipts, trip records, and consignee sign-offs ready for internal bookkeeping and accounts reconciliation.
                  </p>
                </div>

                <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col gap-1">
                  <div className="w-9 h-9 rounded-xl bg-[#e6e8ee] flex items-center justify-center text-[#181c20] mb-1">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20]">On-Demand Scheduling</h4>
                  <p className="text-xs text-[#46464c]">
                    Dispatch immediately when packing is complete, or schedule pickups aligned with customer shop opening hours.
                  </p>
                </div>

                <div className="bg-[#ffffff] p-4 rounded-xl shadow-xs border border-[#c7c5cd]/30 flex flex-col gap-1">
                  <div className="w-9 h-9 rounded-xl bg-[#e6e8ee] flex items-center justify-center text-[#181c20] mb-1">
                    <span className="material-symbols-outlined text-[18px]">currency_rupee</span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#181c20]">Predictable Distance Rates</h4>
                  <p className="text-xs text-[#46464c]">
                    Standardized rate structures eliminating unpredictable daily haggling across mandis and commercial zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 04: VEHICLE COMPATIBILITY */}
      <section className="w-full py-16 bg-[#f7f9ff]" id="fleet-compatibility">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="max-w-2xl flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[#544ec2] font-code-waybill text-xs font-bold">
              <span>SERVICE 04</span>
              <span>/</span>
              <span>FLEET ARCHITECTURE</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#181c20] font-bold tracking-tight">
              Vehicle Compatibility & Payload Fit
            </h2>
            <p className="text-sm text-[#46464c] leading-relaxed">
              MultipleRide matches your specific freight volume to the right cargo carrier class. Vehicle assignment dynamically aligns with consignment specifications, access lanes, and local availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Auto Three-Wheeler */}
            <div className="bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-md border border-[#c7c5cd]/30 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#e6e8ee] flex items-center justify-center text-[#181c20]">
                    <span className="material-symbols-outlined text-[24px]">electric_rickshaw</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#e2dfff] text-[#0f0069] font-code-waybill text-xs font-bold">
                    Up to 500 KG
                  </span>
                </div>

                <div>
                  <span className="font-code-waybill text-xs text-[#544ec2] uppercase font-bold">
                    Intra-City Agile Class
                  </span>
                  <h3 className="font-headline text-xl font-bold text-[#181c20] mt-0.5">
                    Auto / Three-Wheeler Freight
                  </h3>
                  <p className="text-xs text-[#46464c] mt-2 leading-relaxed">
                    Engineered for narrow market alleys, congested commercial centers, and fast domestic deliveries. Excellent maneuverability across old-city bazaars and dense commercial sectors.
                  </p>
                </div>

                <div className="bg-[#eceef4] p-4 rounded-xl flex flex-col gap-2 border border-[#c7c5cd]/20">
                  <span className="text-[11px] uppercase tracking-wider text-[#46464c] font-bold">
                    Recommended Consignments
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#181c20]">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#544ec2]"></span>Cartons & Parcels</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#544ec2]"></span>Apparel Bundles</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#544ec2]"></span>Electronic Appliances</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#544ec2]"></span>Light Wholesale Stock</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#eceef4] flex items-center justify-between">
                <span className="text-xs text-[#46464c]">Piaggio Ape / Bajaj Maxima spec</span>
              </div>
            </div>

            {/* Tempo Light Truck */}
            <div className="bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-md border border-[#c7c5cd]/30 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#050719] text-[#ffffff] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">local_shipping</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#050719] text-[#ffffff] font-code-waybill text-xs font-bold">
                    1.5 - 3.0 TONS
                  </span>
                </div>

                <div>
                  <span className="font-code-waybill text-xs text-[#544ec2] uppercase font-bold">
                    Bulk & Multi-Point Carrier
                  </span>
                  <h3 className="font-headline text-xl font-bold text-[#181c20] mt-0.5">
                    Tempo / Larger Transport
                  </h3>
                  <p className="text-xs text-[#46464c] mt-2 leading-relaxed">
                    Equipped for heavy commercial distribution, bulky merchant consignments, and multi-drop routes requiring high payload limits with open-bed or containerized protection.
                  </p>
                </div>

                <div className="bg-[#eceef4] p-4 rounded-xl flex flex-col gap-2 border border-[#c7c5cd]/20">
                  <span className="text-[11px] uppercase tracking-wider text-[#46464c] font-bold">
                    Recommended Consignments
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#181c20]">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#544ec2]"></span>Textile Roll Pallets</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#544ec2]"></span>Industrial Machinery</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#544ec2]"></span>Timber & Furniture</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#544ec2]"></span>Multi-Drop Bundles</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#eceef4] flex items-center justify-between">
                <span className="text-xs text-[#46464c]">Tata Ace / Bolero Maxi spec</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="w-full py-16 bg-[#eceef4] border-t border-[#c7c5cd]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#050719] text-[#ffffff] rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#544ec2]/40 rounded-full blur-[90px] pointer-events-none"></div>

            <div className="flex flex-col gap-2 max-w-2xl relative z-10">
              <div className="flex items-center gap-2 text-[#8c88fe] font-code-waybill text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#8c88fe] animate-pulse"></span>
                DISPATCH ASSISTANCE ACTIVE
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#ffffff] font-bold tracking-tight">
                Plan your next pickup with MultipleRide.
              </h2>
              <p className="text-sm text-[#ffffff]/80 leading-relaxed">
                Whether it is an individual commercial delivery or a complex multi-drop schedule across town, get your goods moving with complete reliability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#ffffff] text-[#050719] font-headline text-sm font-bold hover:bg-[#eceef4] transition-all shadow-md"
              >
                Contact Desk
              </Link>
              <Link
                to="/vehicles"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#181a2d] text-[#ffffff] font-headline text-sm font-semibold hover:bg-[#181a2d]/80 transition-all border border-[#c7c5cd]/20"
              >
                View Vehicles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
