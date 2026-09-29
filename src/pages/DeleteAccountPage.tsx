import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export function DeleteAccountPage() {
  const [identifier, setIdentifier] = useState('');
  const [reason, setReason] = useState('No longer using the service');
  const [acknowledged, setAcknowledged] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setError('Please provide your registered mobile number or email address.');
      return;
    }
    if (!acknowledged) {
      setError('You must acknowledge the permanent consequences of account deletion.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const reqId = `DEL-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(reqId);
    }, 700);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative w-full bg-[#f1f3f9] py-12 lg:py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2] mb-3">
            <span className="material-symbols-outlined text-[16px]">person_remove</span>
            <span className="font-code-waybill text-xs font-bold uppercase tracking-wider">
              DATA PRIVACY & ACCOUNT MANAGEMENT
            </span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#181c20] tracking-tight">
            Delete MultipleRide Account
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#46464c] mt-3 font-code-waybill">
            <span>Apple App Store Guideline 5.1.1(v) Compliant</span>
            <span>·</span>
            <span>Operated by {siteConfig.legalBusinessName}</span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="w-full py-16 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Information Left */}
            <div className="lg:col-span-6 space-y-6 text-xs sm:text-sm text-[#46464c] leading-relaxed">
              <div className="bg-[#f7f9ff] p-5 rounded-2xl border border-[#c7c5cd]/30 shadow-xs">
                <h2 className="font-headline text-base font-bold text-[#181c20] mb-2">
                  What happens when you delete your account?
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-rose-600 text-[18px] shrink-0 mt-0.5">remove_circle</span>
                    <span>Your profile credentials, saved addresses, and active login sessions will be permanently purged.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-rose-600 text-[18px] shrink-0 mt-0.5">remove_circle</span>
                    <span>Driver-partner KYC documents and operating authorizations will be deactivated.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-rose-600 text-[18px] shrink-0 mt-0.5">remove_circle</span>
                    <span>You will no longer receive transactional updates or access historical in-app trip lists.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-headline text-sm font-bold text-[#181c20] mb-1">
                  Active Bookings Notice
                </h3>
                <p>
                  Accounts with an ongoing, active transit trip cannot be deleted until all consignment drop stations are verified and closed by the receiver.
                </p>
              </div>

              <div>
                <h3 className="font-headline text-sm font-bold text-[#181c20] mb-1">
                  Legal & Financial Retention Exceptions
                </h3>
                <p>
                  In compliance with applicable Indian commercial, tax (GST), and accounting laws, {siteConfig.legalBusinessName} is legally required to retain transaction invoices, financial settlement entries, and completed waybill logs for the mandatory statutory period. Non-financial personal data is purged.
                </p>
              </div>

              <div>
                <h3 className="font-headline text-sm font-bold text-[#181c20] mb-1">
                  In-App Deletion Option
                </h3>
                <p>
                  You can also initiate account deletion directly from the mobile app by navigating to <span className="font-semibold text-[#181c20]">Profile → Settings → Security → Delete Account</span>.
                </p>
              </div>
            </div>

            {/* Request Form Right */}
            <div className="lg:col-span-6">
              <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-8 shadow-md border border-[#c7c5cd]/30">
                <div className="mb-6">
                  <span className="font-code-waybill text-xs text-[#ba1a1a] font-bold uppercase tracking-wider">
                    PERMANENT ACTION
                  </span>
                  <h2 className="font-headline text-xl font-bold text-[#181c20] mt-1">
                    Submit Deletion Request
                  </h2>
                  <p className="text-xs text-[#46464c] mt-0.5">
                    Requests are validated and executed within 7 working days.
                  </p>
                </div>

                {submittedRef ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-[#ffffff] flex items-center justify-center mx-auto">
                      <span className="material-symbols-outlined text-2xl">done</span>
                    </div>
                    <span className="font-code-waybill text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold block w-fit mx-auto">
                      REF ID: {submittedRef}
                    </span>
                    <h3 className="font-headline text-lg font-bold text-[#181c20]">
                      Deletion Request Initiated
                    </h3>
                    <p className="text-xs text-[#46464c]">
                      We have logged your deletion request for <span className="font-bold text-[#181c20]">{identifier}</span>. A security verification link or SMS OTP has been queued to confirm account ownership before permanent purging.
                    </p>
                    <button
                      onClick={() => {
                        setSubmittedRef(null);
                        setIdentifier('');
                        setAcknowledged(false);
                      }}
                      className="px-4 py-2 rounded-xl bg-[#050719] text-[#ffffff] text-xs font-bold hover:bg-[#181a2d]"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                        {error}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-[#181c20] mb-1">
                        Registered Mobile Number or Email *
                      </label>
                      <input
                        type="text"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder="e.g. +91 89496 67612 or user@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20] focus:outline-none focus:border-[#544ec2]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#181c20] mb-1">
                        Primary Reason for Deletion
                      </label>
                      <select
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                      >
                        <option value="No longer using the service">No longer using the service</option>
                        <option value="Closing business or shop">Closing business or shop in Jodhpur</option>
                        <option value="Created a duplicate account">Created a duplicate account</option>
                        <option value="Privacy concerns">Privacy concerns</option>
                        <option value="Other">Other reason</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={acknowledged}
                          onChange={(e) => setAcknowledged(e.target.checked)}
                          className="mt-0.5 rounded border-[#c7c5cd] text-[#544ec2] focus:ring-[#544ec2]"
                        />
                        <span className="text-xs text-[#46464c] leading-tight select-none">
                          I acknowledge that account deletion is permanent and cannot be undone once confirmed.
                        </span>
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 rounded-xl bg-[#ba1a1a] text-[#ffffff] font-headline text-sm font-bold hover:bg-[#93000a] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-[#ffffff] border-t-transparent rounded-full animate-spin"></span>
                            <span>Verifying Account...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Account Deletion</span>
                            <span className="material-symbols-outlined text-[18px]">delete_forever</span>
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
