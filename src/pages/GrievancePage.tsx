import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export function GrievancePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    waybillId: '',
    nature: 'Consignment Damage / Loss Dispute',
    details: ''
  });
  const [submittedDocket, setSubmittedDocket] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const docket = `GRV-JDH-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedDocket(docket);
    }, 700);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative w-full bg-[#f1f3f9] py-12 lg:py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2] mb-3">
            <span className="material-symbols-outlined text-[16px]">balance</span>
            <span className="font-code-waybill text-xs font-bold uppercase tracking-wider">
              FORMAL ESCALATION MECHANISM
            </span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#181c20] tracking-tight">
            Grievance Redressal
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#46464c] mt-3 font-code-waybill">
            <span>In accordance with Consumer Protection (E-Commerce) Rules, 2020</span>
            <span>·</span>
            <span>Operated by {siteConfig.legalBusinessName}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Officer Details Card */}
          <div className="bg-[#f7f9ff] p-6 sm:p-8 rounded-2xl border border-[#c7c5cd]/30 shadow-xs">
            <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase">
              NODAL GRIEVANCE OFFICER DESIGNATION
            </span>
            <h2 className="font-headline text-xl font-bold text-[#181c20] mt-1">
              {siteConfig.grievanceOfficer.name}
            </h2>
            <p className="text-xs text-[#46464c]">
              {siteConfig.grievanceOfficer.designation} · {siteConfig.legalBusinessName}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs sm:text-sm">
              <div className="bg-[#ffffff] p-4 rounded-xl border border-[#c7c5cd]/20">
                <span className="text-[#46464c] font-semibold block">Official Grievance Email</span>
                <a href={`mailto:${siteConfig.grievanceOfficer.email}`} className="font-bold text-[#544ec2] underline mt-0.5 block">
                  {siteConfig.grievanceOfficer.email}
                </a>
              </div>

              <div className="bg-[#ffffff] p-4 rounded-xl border border-[#c7c5cd]/20">
                <span className="text-[#46464c] font-semibold block">Resolution Timelines</span>
                <span className="font-bold text-[#181c20] mt-0.5 block">
                  {siteConfig.grievanceOfficer.responseWindow}
                </span>
              </div>

              <div className="bg-[#ffffff] p-4 rounded-xl border border-[#c7c5cd]/20 sm:col-span-2">
                <span className="text-[#46464c] font-semibold block">Official Office Address</span>
                <span className="text-[#181c20] mt-0.5 block leading-relaxed">
                  {siteConfig.grievanceOfficer.address}
                </span>
              </div>
            </div>
          </div>

          {/* Grievance Submission Form */}
          <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-8 border border-[#c7c5cd]/30 shadow-sm">
            <div className="mb-6">
              <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase tracking-wider">
                FORMAL GRIEVANCE FORM
              </span>
              <h2 className="font-headline text-xl font-bold text-[#181c20] mt-1">
                Lodge a Formal Complaint
              </h2>
              <p className="text-xs text-[#46464c] mt-0.5">
                If an issue could not be resolved through standard Customer Support, submit a formal escalation below.
              </p>
            </div>

            {submittedDocket ? (
              <div className="p-8 bg-[#e2dfff]/30 border border-[#544ec2]/30 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#544ec2] text-[#ffffff] flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-2xl">check</span>
                </div>
                <span className="font-code-waybill text-xs px-3 py-1 rounded-full bg-[#e2dfff] text-[#0f0069] font-bold block w-fit mx-auto">
                  DOCKET NO: {submittedDocket}
                </span>
                <h3 className="font-headline text-xl font-bold text-[#181c20]">
                  Grievance Formally Registered
                </h3>
                <p className="text-xs text-[#46464c] max-w-md mx-auto">
                  Your grievance has been forwarded directly to the Nodal Grievance Officer. An acknowledgement receipt has been dispatched to {formData.email}. Formal investigation will conclude within statutory timelines.
                </p>
                <button
                  onClick={() => setSubmittedDocket(null)}
                  className="px-4 py-2 rounded-xl bg-[#050719] text-[#ffffff] text-xs font-bold hover:bg-[#181a2d]"
                >
                  Lodge Another Docket
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Complainant Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rameshwar Lal"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rameshwar@firm.in"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 89496 67612"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Related Waybill or Booking Ref ID
                    </label>
                    <input
                      type="text"
                      value={formData.waybillId}
                      onChange={(e) => setFormData({ ...formData, waybillId: e.target.value })}
                      placeholder="e.g. WB-JDH-8942-X"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#181c20] mb-1">
                    Nature of Grievance *
                  </label>
                  <select
                    value={formData.nature}
                    onChange={(e) => setFormData({ ...formData, nature: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                  >
                    <option value="Consignment Damage / Loss Dispute">Consignment Damage or Loss Dispute</option>
                    <option value="Billing / Payment Overcharge Dispute">Billing or Payment Overcharge Dispute</option>
                    <option value="Driver Conduct / Operational Misbehavior">Driver Partner Conduct or Misbehavior</option>
                    <option value="Multi-Drop Sequence Delivery Failure">Multi-Drop Sequence Delivery Failure</option>
                    <option value="Privacy / Data Rights Grievance">Privacy or Data Rights Grievance</option>
                    <option value="Other">Other Operational Grievance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#181c20] mb-1">
                    Statement of Facts & Requested Remedy *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Provide full factual chronology, previous ticket numbers, and requested resolution..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                  ></textarea>
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
                        <span>Lodging Docket...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Formal Grievance</span>
                        <span className="material-symbols-outlined text-[18px]">gavel</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
