import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export function Footer() {
  return (
    <footer className="w-full bg-[#ffffff] border-t border-[#c7c5cd]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-14">
          {/* Brand Info Left */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#050719] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#ffffff] text-[20px]">local_shipping</span>
              </div>
              <span className="font-headline text-[20px] font-bold tracking-tight text-[#181c20]">
                Multiple<span className="text-[#544ec2]">Ride</span>
              </span>
            </Link>

            <p className="text-[14px] text-[#46464c] leading-relaxed max-w-sm">
              Pickup, drop, and multi-drop transportation made simpler. Designed for local businesses, merchants, and domestic shippers in Jodhpur.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#f1f3f9] border border-[#c7c5cd]/20 w-fit">
              <span className="material-symbols-outlined text-[#544ec2] text-[16px]">corporate_fare</span>
              <span className="text-[12px] font-medium text-[#46464c]">
                MultipleRide is operated by {siteConfig.legalBusinessName}.
              </span>
            </div>

            <div className="text-[12px] text-[#77767d] mt-1 space-y-1">
              <div>Operating Hub: {siteConfig.operatingCity} ({siteConfig.operatingZoneCode})</div>
              <div>Strict Freight & Permitted Goods Only · No Passenger Rides</div>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-headline text-[13px] text-[#181c20] uppercase tracking-wider font-bold">
              Product
            </span>
            <nav className="flex flex-col gap-2" aria-label="Product Links">
              {siteConfig.footerLinks.product.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[13px] text-[#46464c] hover:text-[#544ec2] transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-headline text-[13px] text-[#181c20] uppercase tracking-wider font-bold">
              Company
            </span>
            <nav className="flex flex-col gap-2" aria-label="Company Links">
              {siteConfig.footerLinks.company.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[13px] text-[#46464c] hover:text-[#544ec2] transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-headline text-[13px] text-[#181c20] uppercase tracking-wider font-bold">
              Support & Help
            </span>
            <nav className="flex flex-col gap-2" aria-label="Support Links">
              {siteConfig.footerLinks.support.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[13px] text-[#46464c] hover:text-[#544ec2] transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-headline text-[13px] text-[#181c20] uppercase tracking-wider font-bold">
              Legal & Compliance
            </span>
            <nav className="flex flex-col gap-2" aria-label="Legal Links">
              {siteConfig.footerLinks.legal.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[13px] text-[#46464c] hover:text-[#544ec2] transition-colors py-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#c7c5cd]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[12px] text-[#46464c]">
            © {new Date().getFullYear()} MultipleRide ({siteConfig.legalBusinessName}). All rights reserved. Initial operations in {siteConfig.operatingCity}.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-code-waybill text-[12px] text-[#544ec2] font-semibold">
              RJ-19 HUB LOGISTICS
            </span>
            <span className="text-[#c7c5cd]">·</span>
            <Link to="/grievance-redressal" className="text-[12px] text-[#77767d] hover:text-[#181c20]">
              Grievance Redressal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
