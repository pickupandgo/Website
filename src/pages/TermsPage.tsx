import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export function TermsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative w-full bg-[#f1f3f9] py-12 lg:py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2] mb-3">
            <span className="material-symbols-outlined text-[16px]">gavel</span>
            <span className="font-code-waybill text-xs font-bold uppercase tracking-wider">
              LEGAL AGREEMENT & USER CONTRACT
            </span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#181c20] tracking-tight">
            Terms & Conditions
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#46464c] mt-3 font-code-waybill">
            <span>Last Updated: {siteConfig.policies.termsLastUpdated}</span>
            <span>·</span>
            <span>Operated by {siteConfig.legalBusinessName}</span>
            <span>·</span>
            <span>Jurisdiction: Jodhpur, Rajasthan, India</span>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="w-full py-16 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-[#181c20]">
          <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-[#46464c]">
            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                1. Introduction
              </h2>
              <p>
                These Terms and Conditions constitute a legally binding agreement between you ("Customer", "Shipper", "User") and {siteConfig.legalBusinessName} ("MultipleRide", "Company", "we", "us"), governing your access to and use of the MultipleRide mobile applications, websites, software, and local goods transportation dispatch services in Jodhpur, Rajasthan.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                2. About MultipleRide
              </h2>
              <p>
                MultipleRide is a digital technology platform operated by {siteConfig.legalBusinessName} that facilitates the connection of users seeking intra-city transport of permitted physical goods, parcels, materials, and merchandise with independent verified commercial vehicle driver-partners. MultipleRide does not provide passenger transportation, taxi, cab-hailing, or private ride services.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                3. User Eligibility
              </h2>
              <p>
                You must be at least 18 years old and competent to contract under the Indian Contract Act, 1872. Commercial enterprises, firms, and companies may register authorized representative accounts to organize corporate logistics dispatches.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                4. Account Responsibilities
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials, login OTPs, and phone numbers. You agree to notify us immediately of any unauthorized access to your account.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                5. Pickup & Drop Service
              </h2>
              <p>
                Standard Pickup & Drop represents a 1:1 direct transit journey comprising one designated loading origin and one solitary destination drop point. The assigned driver-partner shall transport the consignment directly to the designated recipient without intermediate customer drop-offs.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                6. Multi-Drop Transportation Service
              </h2>
              <p>
                Our signature Multi-Drop transportation service operates strictly under a <strong className="text-[#181c20]">Single Origin Hub Architecture</strong>. You may designate exactly one collection point followed sequentially by up to eight (8) delivery drop stations. Multi-pickup or multi-collection workflows are explicitly not supported within a single order. You must clearly identify and tag cargo packages for each sequential drop recipient.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                7. Vehicle Availability & Fleet Scope
              </h2>
              <p>
                MultipleRide supports commercial freight vehicle categories, including Auto / Three-Wheeler Freight and Tempo / Light Commercial Trucks. Vehicle availability varies dynamically across Jodhpur based on driver positioning, traffic conditions, and local operational schedules. MultipleRide does not guarantee instant vehicle matching at all hours.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                8. Booking & Waybill Issuance
              </h2>
              <p>
                Upon vehicle matching, a digital Consignment Waybill is generated recording origin details, destination waypoints, driver identity, vehicle registration number, and tariff calculations. Shippers and drop receivers must verify this waybill during handover.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                9. Payments & Invoicing
              </h2>
              <p>
                Fares are calculated based on base fare, distance traveled, number of drop waypoints, vehicle category, and applicable waiting time. Payment may be remitted through integrated digital payment gateways or authorized business billing accounts. Invoices include applicable Goods and Services Tax (GST) under Indian regulations.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                10. Cancellation & Waiting Fees
              </h2>
              <p>
                Orders canceled after a driver-partner has dispatched to the pickup point may be subject to a nominal cancellation fee to compensate the driver for fuel and time. Detailed cancellation terms are published on our <Link to="/refund-cancellation" className="text-[#544ec2] underline">Refund & Cancellation Policy</Link> page.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                11. Customer Responsibilities
              </h2>
              <p>
                Customers are solely responsible for ensuring cargo packages are securely packed, sealed, and clearly labeled. Goods must be ready for loading when the vehicle arrives. The customer warrants that all consignment materials comply with Indian commercial transport regulations.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                12. Driver Partner Responsibilities
              </h2>
              <p>
                Driver-partners must exercise reasonable care in safeguarding consignments, adhere to designated traffic routes, and obtain recipient OTP or signature confirmation upon delivery. Driver-partners operate as independent commercial contractors and not direct employees of {siteConfig.legalBusinessName}.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                13. Permitted vs Prohibited Items
              </h2>
              <p>
                Consignments must strictly consist of permitted commercial merchandise, retail inventory, textiles, hardware, tools, or domestic parcels. You must not dispatch explosives, inflammable liquids, hazardous chemicals, contraband, illicit substances, weapons, or uncaged live animals. Transport of passengers is strictly forbidden.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                14. Safety & Consignment Inspection
              </h2>
              <p>
                Driver-partners and operational coordinators reserve the right to inspect outer packaging to verify cargo category and ensure loads do not exceed safe volumetric limits. We reserve the right to reject dispatches violating safety standards.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                15. Service Availability & Geographic Zone
              </h2>
              <p>
                Services are currently localized to the Jodhpur urban and industrial radius ({siteConfig.operatingZoneCode} operating cluster). Requests outside the active operating corridor may be declined.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                16. Intellectual Property
              </h2>
              <p>
                All trademarks, logos, visual software designs, route algorithms, and platform materials associated with MultipleRide are the exclusive property of {siteConfig.legalBusinessName}.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                17. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by Indian law, {siteConfig.legalBusinessName} shall not be liable for indirect, incidental, or consequential damages resulting from unforeseen transit delays caused by traffic congestion, weather events, or recipient unavailability.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                18. Account Suspension & Deletion
              </h2>
              <p>
                We reserve the right to suspend or terminate accounts engaging in abusive conduct, booking harassment, or fraudulent dispatches. You may delete your account at any time via <Link to="/delete-account" className="text-[#544ec2] underline">/delete-account</Link>.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                19. Governing Law & Dispute Jurisdiction
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Jodhpur, Rajasthan.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                20. Contact & Redressal
              </h2>
              <p>
                For questions regarding these Terms or formal legal correspondence, please contact:
              </p>
              <div className="bg-[#f1f3f9] p-4 rounded-xl font-code-waybill text-xs space-y-1 mt-2 border border-[#c7c5cd]/30">
                <div className="font-bold text-[#181c20]">{siteConfig.legalBusinessName}</div>
                <div>Address: {siteConfig.businessAddress}</div>
                <div>Email: <a href={`mailto:${siteConfig.supportEmail}`} className="text-[#544ec2] underline">{siteConfig.supportEmail}</a></div>
                <div>Telephone: {siteConfig.supportPhone}</div>
                <div>Operating City: {siteConfig.operatingCity}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
