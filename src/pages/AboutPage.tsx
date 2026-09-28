import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative w-full bg-[#f1f3f9] py-12 lg:py-16 overflow-hidden">
        <div className="absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-[#e2dfff]/40 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2]">
              <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
              <span className="font-code-waybill text-xs font-bold uppercase tracking-wider">
                COMPANY BACKGROUND
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-[#181c20] tracking-tight">
              Organizing local freight in Jodhpur.
            </h1>

            <p className="text-base sm:text-lg text-[#46464c] leading-relaxed">
              MultipleRide is an intra-city freight and cargo transportation platform operated by {siteConfig.legalBusinessName}. We are on a mission to bring digital clarity, structured multi-drop routing, and dependable local logistics to businesses, wholesalers, and individuals.
            </p>
          </div>
        </div>
      </section>

      {/* The Core Problem & Our Answer */}
      <section className="w-full py-16 bg-[#f7f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase tracking-wider">
                THE CHALLENGE
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#181c20]">
                Traditional intra-city dispatch is fragmented and exhausting.
              </h2>
              <p className="text-sm sm:text-base text-[#46464c] leading-relaxed">
                In commercial hubs like Jodhpur, local merchants, fabricators, and traders lose hours every morning calling independent tempo and loader drivers. Arranging multiple drops across town often meant hiring three different vehicles, negotiating informal tariffs, and having no live visibility over whether packages reached recipients safely.
              </p>
              <p className="text-sm sm:text-base text-[#46464c] leading-relaxed">
                {siteConfig.legalBusinessName} engineered MultipleRide to eliminate this friction. By consolidating dispatch requests into a digital system, shippers can request a single direct pickup or sequence up to 8 delivery drops inside one vehicle run.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-8 shadow-sm border border-[#c7c5cd]/30 space-y-4">
                <h3 className="font-headline text-lg font-bold text-[#181c20]">
                  Key Architectural Principles
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-[#46464c]">
                  <div className="p-3.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                    <span className="font-bold text-[#181c20] block mb-0.5">1. Strict Single Pickup Hub</span>
                    Every journey starts at one designated origin. Goods are loaded once, eliminating multi-point collection confusion.
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                    <span className="font-bold text-[#181c20] block mb-0.5">2. Sequenced Multi-Drop Delivery</span>
                    Consolidate deliveries along optimized routes to reduce fuel use, time on the road, and shipping expense.
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                    <span className="font-bold text-[#181c20] block mb-0.5">3. Strictly Goods & Cargo</span>
                    Engineered exclusively for lawful commercial goods, retail items, and parcel cartons. No passenger rides.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Business Entity Details */}
      <section className="w-full py-16 bg-[#f1f3f9] border-t border-[#c7c5cd]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-10 shadow-sm border border-[#c7c5cd]/30">
            <div className="max-w-3xl mb-8">
              <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase tracking-wider">
                CORPORATE DISCLOSURE
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#181c20] mt-1">
                Business & Operating Identity
              </h2>
              <p className="text-xs sm:text-sm text-[#46464c] mt-1">
                MultipleRide is the digital customer-facing platform brand operated by {siteConfig.legalBusinessName}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-code-waybill text-xs">
              <div className="p-4 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                <span className="text-[#46464c] uppercase block">Platform Brand</span>
                <span className="font-bold text-[#181c20] text-sm mt-1 block">{siteConfig.brandName}</span>
              </div>

              <div className="p-4 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                <span className="text-[#46464c] uppercase block">Operating Legal Entity</span>
                <span className="font-bold text-[#181c20] text-sm mt-1 block">{siteConfig.legalBusinessName}</span>
              </div>

              <div className="p-4 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                <span className="text-[#46464c] uppercase block">Initial Operating Market</span>
                <span className="font-bold text-[#181c20] text-sm mt-1 block">{siteConfig.operatingCity} ({siteConfig.operatingZoneCode})</span>
              </div>

              <div className="p-4 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20 lg:col-span-2">
                <span className="text-[#46464c] uppercase block">Registered Operating Address</span>
                <span className="font-bold text-[#181c20] mt-1 block">{siteConfig.businessAddress}</span>
              </div>

              <div className="p-4 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                <span className="text-[#46464c] uppercase block">Central Support Desk</span>
                <span className="font-bold text-[#544ec2] mt-1 block">{siteConfig.supportEmail}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#eceef4] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#46464c]">
                Have questions or need enterprise multi-vehicle dispatch?
              </span>
              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  className="px-4 py-2 rounded-xl bg-[#050719] text-[#ffffff] text-xs font-bold hover:bg-[#181a2d]"
                >
                  Contact Desk
                </Link>
                <Link
                  to="/services"
                  className="px-4 py-2 rounded-xl bg-[#eceef4] text-[#181c20] text-xs font-semibold hover:bg-[#e0e2e8]"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
