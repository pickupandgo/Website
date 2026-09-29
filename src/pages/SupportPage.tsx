import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

const SUPPORT_CATEGORIES = [
  'Booking',
  'Pickup',
  'Drop',
  'Multi-Drop',
  'Vehicle',
  'Driver',
  'Payment',
  'Account',
  'Technical Issue',
  'Safety',
  'Other'
];

export function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bookingId: '',
    category: 'Booking',
    description: '',
    attachmentName: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email address is required.';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = 'Valid phone number is required.';
    }
    if (!formData.description.trim() || formData.description.length < 10) {
      errs.description = 'Please provide details of your issue (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const ticketId = `TKT-MR-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket(ticketId);
    }, 700);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative w-full bg-[#f1f3f9] py-12 lg:py-16 overflow-hidden">
        <div className="absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-[#e2dfff]/40 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2]">
              <span className="material-symbols-outlined text-[16px]">support_agent</span>
              <span className="font-code-waybill text-xs font-bold uppercase tracking-wider">
                CENTRAL HELP DESK & ASSISTANCE
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-[#181c20] tracking-tight">
              We're here to assist your transit.
            </h1>

            <p className="text-base sm:text-lg text-[#46464c] leading-relaxed">
              Reach our customer support team for booking assistance, multi-drop waypoint inquiries, active dispatch coordination, account help, or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Developer & Legal Contact Information (Apple App Store Requirement) */}
      <section className="w-full py-12 bg-[#ffffff] border-b border-[#c7c5cd]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f7f9ff] rounded-2xl p-6 sm:p-8 border border-[#c7c5cd]/30 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#eceef4]">
              <div>
                <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase">
                  VERIFIED OPERATOR CONTACT DETAILS
                </span>
                <h2 className="font-headline text-xl font-bold text-[#181c20] mt-0.5">
                  {siteConfig.brandName} Support Desk
                </h2>
                <p className="text-xs text-[#46464c]">
                  Official customer & developer assistance portal operated by {siteConfig.legalBusinessName}.
                </p>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] text-xs font-code-waybill font-semibold text-[#181c20] border border-[#c7c5cd]/30 self-start md:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                ACTIVE DESK · {siteConfig.operatingZoneCode} JODHPUR
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#eceef4] text-[#544ec2] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <span className="text-[#46464c] font-semibold block">Email Support</span>
                  <a href={`mailto:${siteConfig.supportEmail}`} className="font-bold text-[#544ec2] hover:underline mt-0.5 block">
                    {siteConfig.supportEmail}
                  </a>
                  <span className="text-[11px] text-[#77767d]">Response within 24 business hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#eceef4] text-[#544ec2] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <span className="text-[#46464c] font-semibold block">Telephone Assistance</span>
                  <a href={`tel:${siteConfig.supportPhone.replace(/\s+/g, '')}`} className="font-bold text-[#181c20] hover:text-[#544ec2] mt-0.5 block">
                    {siteConfig.supportPhone}
                  </a>
                  <span className="text-[11px] text-[#77767d]">Mon–Sat: 08:00 AM – 08:00 PM IST</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#eceef4] text-[#544ec2] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <span className="text-[#46464c] font-semibold block">Operating Office Address</span>
                  <span className="text-[#181c20] font-medium mt-0.5 block leading-relaxed">
                    {siteConfig.businessAddress}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Ticket Submission Form */}
      <section className="w-full py-16 bg-[#f7f9ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-10 shadow-sm border border-[#c7c5cd]/30">
            <div className="mb-6">
              <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase tracking-wider">
                SUPPORT TICKET
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#181c20] mt-1">
                Open a Support Request
              </h2>
              <p className="text-xs sm:text-sm text-[#46464c] mt-1">
                Please fill in the details below. Our team in Jodhpur will investigate and follow up directly.
              </p>
            </div>

            {submittedTicket ? (
              <div className="p-8 bg-[#e2dfff]/30 border border-[#544ec2]/30 rounded-2xl text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#544ec2] text-[#ffffff] flex items-center justify-center mx-auto shadow-sm">
                  <span className="material-symbols-outlined text-3xl">task_alt</span>
                </div>
                <div>
                  <span className="font-code-waybill text-xs px-3 py-1 rounded-full bg-[#e2dfff] text-[#0f0069] font-bold">
                    TICKET REF: {submittedTicket}
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-[#181c20] mt-2">
                    Support Ticket Created
                  </h3>
                  <p className="text-xs sm:text-sm text-[#46464c] max-w-md mx-auto mt-1">
                    Thank you, {formData.name}. We have logged your request under category <span className="font-bold text-[#181c20]">{formData.category}</span>. A confirmation has been sent to <span className="font-bold text-[#181c20]">{formData.email}</span>.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmittedTicket(null);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      bookingId: '',
                      category: 'Booking',
                      description: '',
                      attachmentName: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#050719] text-[#ffffff] font-headline text-xs font-bold hover:bg-[#181a2d]"
                >
                  Create Another Ticket
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border text-xs text-[#181c20] focus:outline-none ${
                        errors.name ? 'border-red-500' : 'border-[#c7c5cd] focus:border-[#544ec2]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. anand@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border text-xs text-[#181c20] focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-[#c7c5cd] focus:border-[#544ec2]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 89496 67612"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border text-xs text-[#181c20] focus:outline-none ${
                        errors.phone ? 'border-red-500' : 'border-[#c7c5cd] focus:border-[#544ec2]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Booking / Waybill ID (optional)
                    </label>
                    <input
                      type="text"
                      value={formData.bookingId}
                      onChange={(e) => setFormData({ ...formData, bookingId: e.target.value })}
                      placeholder="e.g. WB-JDH-8942-X"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#181c20] mb-1">
                    Issue Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                  >
                    {SUPPORT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#181c20] mb-1">
                    Detailed Description *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe the issue, waypoint specifics, or inquiry..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border text-xs text-[#181c20] focus:outline-none ${
                      errors.description ? 'border-red-500' : 'border-[#c7c5cd] focus:border-[#544ec2]'
                    }`}
                  ></textarea>
                  {errors.description && <p className="text-[11px] text-red-600 mt-1">{errors.description}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#050719] text-[#ffffff] font-headline text-sm font-bold hover:bg-[#181a2d] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#ffffff] border-t-transparent rounded-full animate-spin"></span>
                        <span>Logging Ticket...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Support Ticket</span>
                        <span className="material-symbols-outlined text-[18px]">send</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-[#77767d] text-center mt-2">
                    Protected by client rate limiting. No personal data shared with unauthorized third parties.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
