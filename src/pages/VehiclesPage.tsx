import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { ImageWithFallback } from '../components/ImageWithFallback';

export function VehiclesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative w-full bg-[#f1f3f9] py-12 lg:py-16 overflow-hidden">
        <div className="absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-[#e2dfff]/40 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start gap-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2]">
              <span className="material-symbols-outlined text-[16px]">local_shipping</span>
              <span className="font-code-waybill text-xs font-bold uppercase tracking-wider">
                COMMERCIAL FLEET INVENTORY
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-[#181c20] tracking-tight">
              Vehicles calibrated for goods only.
            </h1>

            <p className="text-base sm:text-lg text-[#46464c] leading-relaxed">
              Explore the dedicated cargo fleet operating across the Jodhpur logistics grid. Every vehicle is registered for commercial freight and operated by verified driver-partners.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Cards */}
      <section className="w-full py-16 bg-[#f7f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {siteConfig.vehicles.map((v, idx) => (
            <div
              key={v.id}
              className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-sm border border-[#c7c5cd]/30 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center"
            >
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-[#eceef4] relative shadow-inner">
                  <ImageWithFallback
                    src={v.image}
                    alt={v.name}
                    fallbackTitle={v.badge}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 font-code-waybill text-xs px-3 py-1 rounded bg-[#050719] text-[#ffffff] font-bold shadow-md">
                    {v.badge}
                  </span>
                </div>
              </div>

              <div className={`lg:col-span-7 flex flex-col gap-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex flex-col gap-1">
                  <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase tracking-wider">
                    {v.category}
                  </span>
                  <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#181c20]">
                    {v.name}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#46464c] leading-relaxed">
                  {v.suitability}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#f1f3f9] p-4 rounded-xl border border-[#c7c5cd]/20 text-xs">
                  <div>
                    <span className="text-[#46464c] font-semibold block">Lane Access Profile:</span>
                    <span className="text-[#181c20] font-medium mt-0.5 block">{v.access}</span>
                  </div>
                  <div>
                    <span className="text-[#46464c] font-semibold block">Availability:</span>
                    <span className="text-[#181c20] font-medium mt-0.5 block">{v.availabilityNote}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#181c20] block mb-2">
                    Common Permitted Payload Items:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {v.typicalCargo.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-[#eceef4] text-[#181c20] text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">

                  <Link
                    to="/how-it-works"
                    className="text-xs font-bold text-[#544ec2] hover:underline"
                  >
                    View dispatch stages
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cargo Integrity Notice */}
      <section className="w-full py-12 bg-[#eceef4] border-t border-[#c7c5cd]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e2dfff] text-[#544ec2] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">policy</span>
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold text-[#181c20]">
                  Permitted Commercial Freight Protocol
                </h3>
                <p className="text-xs sm:text-sm text-[#46464c] mt-1 leading-relaxed max-w-2xl">
                  MultipleRide strictly handles lawful physical goods, parcel cartons, retail merchandise, and industrial supplies. Passenger transport, cab services, and hazardous contraband are prohibited across all fleet classes.
                </p>
              </div>
            </div>

            <Link
              to="/safety"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-[#050719] text-[#ffffff] font-headline text-xs font-bold hover:bg-[#181a2d] transition-all"
            >
              Review Safety Protocols
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
