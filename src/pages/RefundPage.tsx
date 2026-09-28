import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export function RefundPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative w-full bg-[#f1f3f9] py-12 lg:py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2] mb-3">
            <span className="material-symbols-outlined text-[16px]">receipt_long</span>
            <span className="font-code-waybill text-xs font-bold uppercase tracking-wider">
              BILLING & DISPATCH POLICIES
            </span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#181c20] tracking-tight">
            Refund & Cancellation Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#46464c] mt-3 font-code-waybill">
            <span>Last Updated: {siteConfig.policies.refundLastUpdated}</span>
            <span>·</span>
            <span>Operated by {siteConfig.legalBusinessName}</span>
            <span>·</span>
            <span className="text-emerald-700 font-bold">Commercial Freight Standard</span>
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="w-full py-16 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-[#181c20]">
          <div className="bg-[#f7f9ff] p-5 rounded-xl border border-[#c7c5cd]/30 mb-8 text-xs sm:text-sm text-[#46464c] leading-relaxed">
            <span className="font-bold text-[#181c20] block mb-1">Payment & Dispatch Transparency:</span>
            This policy outlines the cancellation windows, fee structures, and refund eligibility conditions applicable to pickup & drop and multi-drop transport bookings made on MultipleRide, operated by {siteConfig.legalBusinessName}.
          </div>

          <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-[#46464c]">
            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                1. Order Cancellation by Shipper
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                  <span className="font-bold text-[#181c20] block">Free Cancellation Window:</span>
                  You may cancel a dispatch request free of charge before a driver-partner has accepted the assignment, or within five (5) minutes of driver acceptance provided the driver has not yet arrived at the pickup origin.
                </div>

                <div className="p-4 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                  <span className="font-bold text-[#181c20] block">Cancellation Fee After Driver Dispatched:</span>
                  If you cancel after the 5-minute grace period or after the driver-partner has arrived at your designated loading bay, a nominal cancellation fee will be levied to compensate the driver for fuel and travel time within Jodhpur.
                </div>

                <div className="p-4 rounded-xl bg-[#f1f3f9] border border-[#c7c5cd]/20">
                  <span className="font-bold text-[#181c20] block">Cancellation After Cargo Loaded:</span>
                  Once the consignment has been loaded and the trip departure OTP validated, the order cannot be canceled mid-transit. In exceptional emergencies, the vehicle will return goods to origin subject to standard mileage billing.
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                2. Order Cancellation by MultipleRide or Driver-Partner
              </h2>
              <p>
                A dispatch request may be canceled by MultipleRide or the assigned driver-partner under the following verified conditions:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>Consignment contains prohibited, hazardous, or illegal goods;</li>
                <li>Cargo volume significantly exceeds the ordered vehicle capacity or safely rated payload limit;</li>
                <li>Shipper or loading contact is unreachable at the origin address after 15 minutes of driver arrival;</li>
                <li>Unforeseen vehicular mechanical failure before loading.</li>
              </ul>
              <p className="mt-2">
                If MultipleRide cancels an order due to operational driver unavailability or mechanical failure, 100% of any pre-collected digital fare will be refunded automatically.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                3. Refund Eligibility & Conditions
              </h2>
              <p>
                Refunds are granted under the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li><strong className="text-[#181c20]">Duplicate Debits:</strong> If your bank account or card was charged twice for the same booking ID;</li>
                <li><strong className="text-[#181c20]">Failed Transactions:</strong> Amount debited from your account but the booking was not confirmed on the platform;</li>
                <li><strong className="text-[#181c20]">Driver No-Show:</strong> Driver accepted but failed to reach the pickup location and the order was aborted;</li>
                <li><strong className="text-[#181c20]">Incomplete Multi-Drop:</strong> In rare cases where a specific drop station could not be completed due to driver error, a proportional refund for the unexecuted leg will be processed.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                4. Refund Processing Timeline & Method
              </h2>
              <p>
                Approved refunds are processed through our payment gateway aggregator directly to the original payment source (credit/debit card, UPI, or net banking account).
              </p>
              <div className="bg-[#f1f3f9] p-4 rounded-xl border border-[#c7c5cd]/20 font-code-waybill text-xs mt-2">
                <div>Standard Processing Timeline: 5 to 7 business days from approval date</div>
                <div className="text-[#46464c] mt-0.5">Timeline may vary slightly depending on your issuing bank's settlement cycle.</div>
              </div>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                5. How to Request a Refund
              </h2>
              <p>
                To request a refund for a disputed charge or cancelled trip, please submit a ticket via our{' '}
                <Link to="/support" className="text-[#544ec2] font-bold underline">
                  Support Portal
                </Link>{' '}
                within 48 hours of the transaction, providing your Booking / Waybill ID and payment transaction reference.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                6. Contact for Billing Support
              </h2>
              <div className="bg-[#f1f3f9] p-4 rounded-xl font-code-waybill text-xs space-y-1 border border-[#c7c5cd]/30">
                <div className="font-bold text-[#181c20]">{siteConfig.legalBusinessName} — Accounts & Billing</div>
                <div>Address: {siteConfig.businessAddress}</div>
                <div>Email: <a href={`mailto:${siteConfig.supportEmail}`} className="text-[#544ec2] underline">{siteConfig.supportEmail}</a></div>
                <div>Telephone: {siteConfig.supportPhone}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
