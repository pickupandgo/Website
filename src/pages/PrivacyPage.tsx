import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export function PrivacyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative w-full bg-[#f1f3f9] py-12 lg:py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2] mb-3">
            <span className="material-symbols-outlined text-[16px]">privacy_tip</span>
            <span className="font-code-waybill text-xs font-bold uppercase tracking-wider">
              DATA GOVERNANCE & PRIVACY
            </span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#181c20] tracking-tight">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#46464c] mt-3 font-code-waybill">
            <span>Last Updated: {siteConfig.policies.privacyLastUpdated}</span>
            <span>·</span>
            <span>Operated by {siteConfig.legalBusinessName}</span>
            <span>·</span>
            <span className="text-emerald-700 font-bold">Public · Apple App Store Compliant</span>
          </div>
        </div>
      </section>

      {/* Policy Prose Content */}
      <section className="w-full py-16 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-[#181c20]">
          <div className="bg-[#f7f9ff] p-5 rounded-xl border border-[#c7c5cd]/30 mb-8 text-xs sm:text-sm text-[#46464c] leading-relaxed">
            <span className="font-bold text-[#181c20] block mb-1">Notice to Customers, Merchants, and Driver-Partners:</span>
            This Privacy Policy explains how {siteConfig.legalBusinessName} ("MultipleRide", "we", "us", or "our") collects, processes, stores, and protects personal and location data when you use the MultipleRide mobile applications, web platforms, and intra-city goods dispatch services in Jodhpur, Rajasthan, India. MultipleRide is strictly a physical freight, material, and parcel transportation platform; passenger cab or taxi transportation is not provided.
          </div>

          <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-[#46464c]">
            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                1. Introduction
              </h2>
              <p>
                {siteConfig.legalBusinessName} respects your privacy and is committed to protecting your personal information. This Privacy Policy details our practices concerning data collection, transmission, retention, and deletion in accordance with Indian information technology laws and international platform standards, including Apple App Store and Google Play guidelines.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                2. Information We Collect
              </h2>
              <p>
                We only collect data necessary to organize, assign, execute, track, and record physical goods transportation requests. We categorize the collected information as outlined below.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                3. Account Information
              </h2>
              <p>
                When you create a shipper or merchant account, we collect your name, mobile phone number, business or entity name, and email address. For commercial driver-partners, we additionally collect commercial driving license credentials, vehicle registration certificate (RC) data, vehicular insurance policies, and KYC documents necessary to verify authorization to operate commercial freight vehicles.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                4. Location Information
              </h2>
              <p>
                <strong className="text-[#181c20]">Shippers & Consignees:</strong> We collect precise or approximate geolocation coordinates for designated pickup loading bays and successive delivery drop stations to compute optimal routing trajectories across Jodhpur.
              </p>
              <p className="mt-2">
                <strong className="text-[#181c20]">Driver-Partners:</strong> While a driver-partner is active or executing an assigned consignment trip, the application collects foreground and background location data from their device. This telemetry is strictly used to display real-time transit vectors to the consignor, calculate accurate arrival ETAs, and power route milestones. Location tracking ceases once the final drop station is signed off.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                5. Pickup & Drop Information
              </h2>
              <p>
                Under our single-origin transport architecture, we collect loading dock details, contact supervisor names, phone numbers, and physical cargo descriptions (e.g. textile bundles, retail cartons, hardware crates) to ensure appropriate vehicle compatibility.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                6. Multi-Drop Sequence Information
              </h2>
              <p>
                For multi-drop orders, we collect the geographic coordinates and contact details for each sequential destination stop (Drop 1 through up to Drop 8). This data is shared with the assigned driver-partner strictly in the calculated execution order to facilitate smooth package handover.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                7. Trip & Waybill Information
              </h2>
              <p>
                We generate digital waybills containing unique identifiers (e.g. WB-JDH-XXXX-X), departure timestamps, drop completion timestamps, mileage calculations, and delivery receipts (including digital signatures and one-time passwords).
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                8. Payment Information
              </h2>
              <p>
                Digital payment transactions are processed securely through certified third-party payment gateways and aggregators. MultipleRide does not store complete debit/credit card numbers or banking passwords on its servers. We retain only transaction reference numbers, amounts, and settlement statuses for tax and invoicing records.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                9. Communications
              </h2>
              <p>
                When shippers and drivers contact one another through the application or telephonic masked links, we may log the occurrence, timestamp, and duration of such calls to safeguard against harassment and resolve route disputes.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                10. Device & Technical Information
              </h2>
              <p>
                We automatically record IP addresses, device hardware models, operating system versions, application crash logs, and network connection types to maintain platform stability and debug software faults.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                11. Push Notifications
              </h2>
              <p>
                We send transactional push notifications regarding trip allocations, arrival alerts, and OTP codes. You can adjust notification permissions in your mobile operating system settings at any time.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                12. Third-Party Services
              </h2>
              <p>
                To provide dependable navigation and notification services, we partner with verified third-party infrastructure providers (e.g. mapping SDKs, transactional SMS gateways, cloud hosting). These partners are contractually restricted from using your data for any independent marketing purpose.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                13. How We Use Information
              </h2>
              <p>
                Collected data is used strictly to:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>Pair dispatch orders with nearby commercial driver-partners;</li>
                <li>Calculate distances and display live transit progress;</li>
                <li>Verify recipient identity via secure OTP or digital signature;</li>
                <li>Generate and store digital freight waybills and VAT/GST tax invoices;</li>
                <li>Investigate lost, delayed, or disputed cargo consignments;</li>
                <li>Prevent fraudulent requests and unauthorized system access.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                14. How We Share Information
              </h2>
              <p>
                We do not sell, rent, or monetize your personal data. We disclose information only:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>To assigned driver-partners (pickup location, destination waypoints, cargo volume);</li>
                <li>To drop receivers (approaching vehicle live location, driver name, vehicle registration);</li>
                <li>To law enforcement or government authorities when required by mandatory legal warrant;</li>
                <li>Within {siteConfig.legalBusinessName} operational departments for customer support.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                15. Data Retention
              </h2>
              <p>
                We retain account credentials for as long as your account remains active. Trip records, waybills, and financial invoices are retained for the statutory period mandated under Indian commercial, accounting, and tax legislation.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                16. Account Deletion (Apple Requirement)
              </h2>
              <p>
                You retain the right to delete your MultipleRide account at any time directly through the mobile application settings or via our dedicated web portal at{' '}
                <Link to="/delete-account" className="text-[#544ec2] font-bold underline">
                  /delete-account
                </Link>. Upon verified submission, your personal profile, credentials, and non-statutory records are permanently purged from active databases.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                17. Data Security
              </h2>
              <p>
                All data transfers between client apps and MultipleRide servers occur over encrypted HTTPS/TLS 1.3 channels. We employ role-based access restrictions, rate-limited APIs, and periodic infrastructure audits to prevent unauthorized data compromise.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                18. User Rights
              </h2>
              <p>
                You have the right to inspect your stored account details, update erroneous contact numbers, request digital copies of your historic waybill archives, or withdraw marketing consent by contacting our privacy desk.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                19. Children's Privacy
              </h2>
              <p>
                MultipleRide is a commercial goods transport service designed for adult traders, businesses, and individuals aged 18 and older. We do not knowingly collect personal information from minors.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                20. Changes to Policy
              </h2>
              <p>
                Any material revisions to this Privacy Policy will be announced on this page with an updated effective date. Continued use of MultipleRide after updates constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-lg sm:text-xl font-bold text-[#181c20] mb-2">
                21. Contact Us
              </h2>
              <p>
                For privacy inquiries or data access requests, please contact:
              </p>
              <div className="bg-[#f1f3f9] p-4 rounded-xl font-code-waybill text-xs space-y-1 mt-2 border border-[#c7c5cd]/30">
                <div className="font-bold text-[#181c20]">{siteConfig.legalBusinessName} — Privacy Desk</div>
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
