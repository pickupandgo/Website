import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Customer Support',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
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
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative w-full bg-[#f1f3f9] py-12 lg:py-16 overflow-hidden">
        <div className="absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-[#e2dfff]/40 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2]">
              <span className="material-symbols-outlined text-[16px]">contact_mail</span>
              <span className="font-code-waybill text-xs font-bold uppercase tracking-wider">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-[#181c20] tracking-tight">
              Contact MultipleRide Desk
            </h1>

            <p className="text-base sm:text-lg text-[#46464c] leading-relaxed">
              Reach our logistics dispatch headquarters in Jodhpur. Whether you represent a retail chain, wholesale warehouse, or seek driver onboarding assistance, our team is at your disposal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details Left, Form Right */}
      <section className="w-full py-16 bg-[#f7f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Information Left Rail */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-xs border border-[#c7c5cd]/30">
                <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase">
                  OPERATING ENTITY
                </span>
                <h3 className="font-headline text-xl font-bold text-[#181c20] mt-1">
                  {siteConfig.brandName}
                </h3>
                <p className="text-xs text-[#46464c] mt-0.5">
                  Operated by {siteConfig.legalBusinessName}
                </p>

                <div className="space-y-4 mt-6 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#eceef4] text-[#544ec2] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">location_on</span>
                    </div>
                    <div>
                      <span className="text-[#46464c] font-semibold block">Office Address</span>
                      <span className="text-[#181c20] leading-relaxed mt-0.5 block">
                        {siteConfig.businessAddress}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#eceef4] text-[#544ec2] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                    </div>
                    <div>
                      <span className="text-[#46464c] font-semibold block">Support & Business Desk</span>
                      <a href={`mailto:${siteConfig.supportEmail}`} className="text-[#544ec2] font-bold hover:underline mt-0.5 block">
                        {siteConfig.supportEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#eceef4] text-[#544ec2] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">call</span>
                    </div>
                    <div>
                      <span className="text-[#46464c] font-semibold block">Telephone Line</span>
                      <a href={`tel:${siteConfig.supportPhone.replace(/\s+/g, '')}`} className="text-[#181c20] font-bold hover:text-[#544ec2] mt-0.5 block">
                        {siteConfig.supportPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Categories */}
              <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 space-y-3">
                <span className="text-xs uppercase font-bold text-[#181c20] block">
                  Dedicated Communication Desks
                </span>

                <div className="p-3 rounded-xl bg-[#f1f3f9] text-xs">
                  <span className="font-bold text-[#181c20] block">Customer Support</span>
                  <span className="text-[#46464c]">Active consignments, waypoint sequencing, and PoD queries.</span>
                </div>

                <div className="p-3 rounded-xl bg-[#f1f3f9] text-xs">
                  <span className="font-bold text-[#181c20] block">Driver Partner Desk</span>
                  <span className="text-[#46464c]">Vehicle registration, commercial license verification, and hub coordination.</span>
                </div>

                <div className="p-3 rounded-xl bg-[#f1f3f9] text-xs">
                  <span className="font-bold text-[#181c20] block">Business & Trade Enquiries</span>
                  <span className="text-[#46464c]">Scheduled warehouse clearances, bulk multi-drop billing, and recurring store runs.</span>
                </div>
              </div>
            </div>

            {/* Contact Form Right */}
            <div className="lg:col-span-7">
              <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-10 shadow-sm border border-[#c7c5cd]/30">
                <div className="mb-6">
                  <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase tracking-wider">
                    SEND A MESSAGE
                  </span>
                  <h2 className="font-headline text-2xl font-bold text-[#181c20] mt-1">
                    Send your inquiry to {siteConfig.legalBusinessName}
                  </h2>
                  <p className="text-xs text-[#46464c] mt-0.5">
                    Our team typically responds within one business day.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-[#e2dfff]/30 border border-[#544ec2]/30 rounded-2xl text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#544ec2] text-[#ffffff] flex items-center justify-center mx-auto">
                      <span className="material-symbols-outlined text-2xl">check</span>
                    </div>
                    <h3 className="font-headline text-xl font-bold text-[#181c20]">
                      Message Successfully Sent
                    </h3>
                    <p className="text-xs text-[#46464c] max-w-md mx-auto">
                      Thank you, {formData.name}. Your inquiry regarding <span className="font-bold text-[#181c20]">{formData.category}</span> has been dispatched to our operations team.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          category: 'Customer Support',
                          message: ''
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#050719] text-[#ffffff] text-xs font-bold hover:bg-[#181a2d]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#181c20] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikramaditya Singh"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border text-xs text-[#181c20] focus:outline-none ${
                          errors.name ? 'border-red-500' : 'border-[#c7c5cd] focus:border-[#544ec2]'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#181c20] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. vikram@store.in"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border text-xs text-[#181c20] focus:outline-none ${
                            errors.email ? 'border-red-500' : 'border-[#c7c5cd] focus:border-[#544ec2]'
                          }`}
                        />
                        {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#181c20] mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 89496 67612"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#181c20] mb-1">
                        Inquiry Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                      >
                        <option value="Customer Support">Customer Support (General Transit)</option>
                        <option value="Driver Partner Support">Driver Partner Support</option>
                        <option value="Business Enquiries">Business Enquiries & Wholesale Contracts</option>
                        <option value="Grievance / Escalation">Grievance / Escalation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#181c20] mb-1">
                        Message / Query *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please write your questions or transport requirements..."
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border text-xs text-[#181c20] focus:outline-none ${
                          errors.message ? 'border-red-500' : 'border-[#c7c5cd] focus:border-[#544ec2]'
                        }`}
                      ></textarea>
                      {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
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
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Transmit Inquiry</span>
                            <span className="material-symbols-outlined text-[18px]">send</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
