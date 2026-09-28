import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export function DriverPartnersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    vehicleType: 'auto-three-wheeler',
    vehicleNumber: '',
    experienceYears: '1-3',
    jodhpurArea: 'Basni / Industrial Belts'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative w-full bg-[#050719] text-[#ffffff] py-16 lg:py-20 overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#544ec2]/30 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181a2d] text-[#e2dfff] font-code-waybill text-xs font-semibold border border-[#c7c5cd]/20">
              <span className="w-2 h-2 rounded-full bg-[#8c88fe] animate-pulse"></span>
              DRIVER-PARTNER NETWORK · JODHPUR RJ-19
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-[#ffffff] tracking-tight leading-tight">
              Honest partnerships. Clear trip manifests.
            </h1>

            <p className="text-base sm:text-lg text-[#ffffff]/80 leading-relaxed">
              MultipleRide partners with commercial vehicle operators across Jodhpur. We provide direct digital trip requests with complete route visibility, verified addresses, and prompt local coordinator support.
            </p>

            <div className="p-3.5 rounded-xl bg-[#181a2d] border border-[#c7c5cd]/20 text-xs text-[#ffffff]/70">
              <span className="font-bold text-[#e2dfff]">Our Commitment:</span> Transparent trip terms without unrealistic promises. We do not promise fixed daily earnings, guaranteed ride volumes, or employment status. Earnings depend directly on trips accepted and completed.
            </div>
          </div>
        </div>
      </section>

      {/* How Driver Partners Use MultipleRide */}
      <section className="w-full py-16 bg-[#f7f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase tracking-wider">
              WORKFLOW OVERVIEW
            </span>
            <h2 className="font-headline text-3xl font-bold text-[#181c20] mt-1">
              How driving with MultipleRide works
            </h2>
            <p className="text-sm text-[#46464c] mt-1">
              From incoming dispatch notification to final proof-of-delivery handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <span className="font-code-waybill text-base font-bold text-[#544ec2] block mb-2">01</span>
                <h3 className="font-headline text-base font-bold text-[#181c20]">Receive Dispatch Broadcasts</h3>
                <p className="text-xs text-[#46464c] mt-1 leading-relaxed">
                  Get notified when a nearby merchant or factory posts a pickup. See exact cargo description, weight category, and stops upfront.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-[11px] font-semibold">
                FULL ROUTE PREVIEW
              </div>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <span className="font-code-waybill text-base font-bold text-[#544ec2] block mb-2">02</span>
                <h3 className="font-headline text-base font-bold text-[#181c20]">Accept According to Capacity</h3>
                <p className="text-xs text-[#46464c] mt-1 leading-relaxed">
                  Review the route distance and vehicle requirement. Accept trips that fit your schedule and payload without penalty for declining.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-[11px] font-semibold">
                NO FORCED ALLOCATION
              </div>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <span className="font-code-waybill text-base font-bold text-[#544ec2] block mb-2">03</span>
                <h3 className="font-headline text-base font-bold text-[#181c20]">Navigate to Single Origin</h3>
                <p className="text-xs text-[#46464c] mt-1 leading-relaxed">
                  Drive directly to the verified pickup bay. Coordinate with the loading supervisor and verify package counts against the digital manifest.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-[11px] font-semibold">
                SINGLE LOADING BAY
              </div>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <span className="font-code-waybill text-base font-bold text-[#544ec2] block mb-2">04</span>
                <h3 className="font-headline text-base font-bold text-[#181c20]">Secure Load & OTP Start</h3>
                <p className="text-xs text-[#46464c] mt-1 leading-relaxed">
                  Check tie-down ropes or tarpaulins for safety. Validate the pickup security PIN from the shipper to start trip telemetry.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-[11px] font-semibold">
                OTP VALIDATED DEPARTURE
              </div>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <span className="font-code-waybill text-base font-bold text-[#544ec2] block mb-2">05</span>
                <h3 className="font-headline text-base font-bold text-[#181c20]">Sequenced Drop Unloading</h3>
                <p className="text-xs text-[#46464c] mt-1 leading-relaxed">
                  Drive to each stop in optimized order. Recipient details and phone numbers are available directly in your active console.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-[11px] font-semibold">
                TURN-BY-TURN WAYPOINTS
              </div>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-xs border border-[#c7c5cd]/30 flex flex-col justify-between">
              <div>
                <span className="font-code-waybill text-base font-bold text-[#544ec2] block mb-2">06</span>
                <h3 className="font-headline text-base font-bold text-[#181c20]">Sign-off & Trip Closure</h3>
                <p className="text-xs text-[#46464c] mt-1 leading-relaxed">
                  Obtain consignee OTP or signature on glass upon package unloading. Manifest closes automatically and trip summary updates in real time.
                </p>
              </div>
              <div className="mt-4 pt-2 text-[#544ec2] font-code-waybill text-[11px] font-semibold">
                INSTANT DIGITAL RECEIPT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Registration Form */}
      <section className="w-full py-16 bg-[#f1f3f9] border-t border-[#c7c5cd]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-10 shadow-md border border-[#c7c5cd]/30">
            <div className="mb-6">
              <span className="font-code-waybill text-xs text-[#544ec2] font-bold uppercase tracking-wider">
                PARTNER ONBOARDING
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#181c20] mt-1">
                Register as a Driver-Partner in Jodhpur
              </h2>
              <p className="text-xs sm:text-sm text-[#46464c] mt-1">
                Submit your vehicle and license details. Our local dispatch team at {siteConfig.legalBusinessName} will contact you to verify documentation.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#e2dfff]/30 border border-[#544ec2]/30 rounded-xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#544ec2] text-[#ffffff] flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-2xl">check</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-[#181c20]">
                  Registration Inquiry Received
                </h3>
                <p className="text-xs text-[#46464c] max-w-md mx-auto">
                  Thank you, {formData.fullName}. A {siteConfig.legalBusinessName} fleet onboarding coordinator will call {formData.phone} within 24 business hours to inspect commercial vehicle documentation in Jodhpur.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-[#050719] text-[#ffffff] text-xs font-bold hover:bg-[#181a2d]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Full Legal Name (as per Driving License) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20] focus:outline-none focus:border-[#544ec2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Mobile Number (WhatsApp preferred) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98290 XXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20] focus:outline-none focus:border-[#544ec2]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Commercial Vehicle Type *
                    </label>
                    <select
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                    >
                      <option value="auto-three-wheeler">Auto / Three-Wheeler Freight (Piaggio Ape, Bajaj, etc.)</option>
                      <option value="tempo-light-commercial">Tempo / Light Commercial Truck (Tata Ace, Bolero Maxi, etc.)</option>
                      <option value="other-suitable-vehicles">Other Commercial Freight Carrier</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Vehicle Registration Number (RJ-19...)
                    </label>
                    <input
                      type="text"
                      value={formData.vehicleNumber}
                      onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value })}
                      placeholder="e.g. RJ 19 GA 0000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Commercial Driving Experience
                    </label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                    >
                      <option value="under-1">Less than 1 year</option>
                      <option value="1-3">1 to 3 years</option>
                      <option value="3-5">3 to 5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#181c20] mb-1">
                      Preferred Primary Jodhpur Area
                    </label>
                    <select
                      value={formData.jodhpurArea}
                      onChange={(e) => setFormData({ ...formData, jodhpurArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd] text-xs text-[#181c20]"
                    >
                      <option value="Basni / Industrial Belts">Basni Phase 1 & 2 / Industrial Area</option>
                      <option value="Boranada SEZ">Boranada Special Economic Zone</option>
                      <option value="Mandore Wholesale Mandi">Mandore / Wholesale Trade Hubs</option>
                      <option value="Central Jodhpur / Old City">Sardarpura / Sojati Gate / Clock Tower</option>
                      <option value="Any Jodhpur Zone">Flexible across any Jodhpur zone</option>
                    </select>
                  </div>
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
                        <span>Registering Details...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Partner Application</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-[#77767d] text-center mt-2">
                    Commercial driver license, vehicle RC, and valid insurance required prior to activation.
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
