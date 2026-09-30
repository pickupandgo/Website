import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#ffffff]/95 backdrop-blur-xl border-b border-[#c7c5cd]/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#544ec2] rounded-xl p-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-xl bg-[#050719] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:bg-[#181a2d] transition-colors">
              <span className="material-symbols-outlined text-[#ffffff] text-[22px]">local_shipping</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-[20px] font-bold tracking-tight text-[#181c20] leading-none">
                Multiple<span className="text-[#544ec2]">Ride</span>
              </span>
              <span className="font-code-waybill text-[10px] tracking-wider uppercase text-[#46464c] mt-1 font-semibold">
                {siteConfig.legalBusinessName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all ${
                    active
                      ? 'bg-[#e6e8ee] text-[#181c20] font-semibold'
                      : 'text-[#46464c] hover:text-[#181c20] hover:bg-[#eceef4]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Operating Location Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f1f3f9] border border-[#c7c5cd]/40 text-[#181c20]">
            <span className="material-symbols-outlined text-[#544ec2] text-[18px]">location_on</span>
            <span className="font-code-waybill text-[12px] font-semibold tracking-wide text-[#181c20]">Jodhpur, RJ</span>
            <span className="w-2 h-2 rounded-full bg-[#544ec2] animate-pulse ml-0.5" title="Active Hub Jodhpur"></span>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-xl bg-[#f1f3f9] text-[#181c20] flex items-center justify-center border border-[#c7c5cd]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#544ec2]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#ffffff] border-b border-[#c7c5cd]/30 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-3 border-b border-[#eceef4]">
              <span className="font-code-waybill text-xs text-[#544ec2] font-semibold uppercase">
                Operating in Jodhpur, Rajasthan
              </span>
              <span className="font-code-waybill text-[11px] bg-[#e2dfff] text-[#0f0069] px-2 py-0.5 rounded font-bold">
                RJ-19 HUB
              </span>
            </div>

            {siteConfig.navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${
                    active ? 'bg-[#eceef4] text-[#181c20] font-bold' : 'text-[#46464c] hover:bg-[#f1f3f9]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[18px] text-[#77767d]">chevron_right</span>
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#eceef4] flex flex-col gap-2">

              <div className="flex items-center justify-around pt-2 text-xs text-[#46464c]">
                <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="hover:underline">FAQ</Link>
                <span>·</span>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:underline">Contact Desk</Link>
                <span>·</span>
                <Link to="/privacy" onClick={() => setMobileMenuOpen(false)} className="hover:underline">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
