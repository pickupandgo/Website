import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'gen-1',
    category: 'General',
    question: 'What is MultipleRide?',
    answer: `MultipleRide is an intra-city goods and freight transportation platform operated by ${siteConfig.legalBusinessName} in Jodhpur, Rajasthan. We connect local merchants, fabricators, retail businesses, and domestic shippers with verified commercial vehicle driver-partners for point-to-point and sequenced multi-drop goods deliveries.`
  },
  {
    id: 'gen-2',
    category: 'General',
    question: 'Does MultipleRide provide passenger taxi or cab rides?',
    answer: 'No. MultipleRide is strictly a physical freight, material, and parcel logistics platform. We do not provide passenger transport, personal cab rides, or taxi services.'
  },
  {
    id: 'pd-1',
    category: 'Pickup & Drop',
    question: 'How does standard pickup and drop work?',
    answer: 'Standard pickup and drop is a 1:1 direct transit journey. You specify a single collection origin (shop, warehouse, or home) and one delivery destination. A verified driver-partner arrives at the origin, secures the cargo, and drives directly to the drop point.'
  },
  {
    id: 'md-1',
    category: 'Multi-Drop',
    question: 'How does multi-drop transportation work?',
    answer: 'Our signature multi-drop service enables ONE pickup followed by multiple sequenced delivery drops (up to 8 drops). All packages are loaded once at your central origin hub, and the driver follows an optimized route sequence across town. This eliminates booking multiple individual vehicles.'
  },
  {
    id: 'md-2',
    category: 'Multi-Drop',
    question: 'Can I have multiple pickup locations in a multi-drop order?',
    answer: 'No. Under our strict single pickup hub architecture, every multi-drop request has exactly ONE collection origin. You cannot add multiple pickup locations in a single order.'
  },
  {
    id: 'veh-1',
    category: 'Vehicles',
    question: 'Which vehicle categories are currently available?',
    answer: 'We currently support Auto / Three-Wheeler Freight (agile loaders for compact city runs), Tempo / Light Commercial Trucks (such as Tata Ace and Bolero Maxi style vehicles for bulkier loads), and other suitable freight options as our network expands in Jodhpur.'
  },
  {
    id: 'book-1',
    category: 'Booking',
    question: 'How is a driver-partner assigned to my request?',
    answer: 'When you submit a dispatch request, our system matches your cargo profile and vehicle requirement with nearby verified driver-partners in the Jodhpur RJ-19 zone. The driver reviews the trip manifest before accepting.'
  },
  {
    id: 'book-2',
    category: 'Booking',
    question: 'Can I track the vehicle and consignment in real time?',
    answer: 'Yes. Once the driver starts the journey from the pickup bay, live GPS telemetry activates on your web or mobile tracking screen. You can view arrival ETAs for each successive drop station.'
  },
  {
    id: 'pay-1',
    category: 'Payments',
    question: 'What payment options are supported?',
    answer: 'Trip payments are transparently calculated based on distance and drop count. Supported methods include digital UPI, net banking, cards, and authorized enterprise credit terms through Nikhil Enterprises.'
  },
  {
    id: 'drv-1',
    category: 'Driver Partners',
    question: 'How can commercial drivers join as partners?',
    answer: 'Commercial vehicle owners with a valid commercial driving license, registration certificate (RC), active fitness, and insurance can register through our Driver Partners page or visit the Nikhil Enterprises operations desk in Basni, Jodhpur.'
  },
  {
    id: 'acc-1',
    category: 'Account',
    question: 'How do I delete my MultipleRide account?',
    answer: 'You can initiate account deletion directly from the mobile app settings or submit a request on our dedicated Delete Account web page (/delete-account). Your personal data will be purged in compliance with our data retention policy.'
  },
  {
    id: 'saf-1',
    category: 'Safety',
    question: 'How do you ensure goods are delivered to the right recipient?',
    answer: 'Every drop station requires proof of delivery (PoD), either via a secure one-time password (OTP) sent to the consignee phone or a digital signature on glass upon package handover.'
  }
];

const CATEGORIES = [
  'All',
  'General',
  'Pickup & Drop',
  'Multi-Drop',
  'Vehicles',
  'Booking',
  'Payments',
  'Driver Partners',
  'Account',
  'Safety'
];

export function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('gen-1');

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative w-full bg-[#f1f3f9] py-12 lg:py-16 overflow-hidden">
        <div className="absolute -top-24 right-1/4 w-80 h-80 rounded-full bg-[#e2dfff]/40 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6e8ee] text-[#544ec2]">
              <span className="material-symbols-outlined text-[16px]">quiz</span>
              <span className="font-code-waybill text-xs font-bold uppercase tracking-wider">
                KNOWLEDGE BASE & FAQ
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-[#181c20] tracking-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-base sm:text-lg text-[#46464c] leading-relaxed">
              Find answers regarding pickup & drop operations, multi-drop sequence routing, vehicle types, pricing, and driver partnerships.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-xl mt-4 relative">
              <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-[#77767d] text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. multi-drop, vehicle, payment, OTP)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#ffffff] border border-[#c7c5cd] text-xs sm:text-sm text-[#181c20] placeholder-[#77767d] focus:outline-none focus:border-[#544ec2] shadow-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Content */}
      <section className="w-full py-16 bg-[#f7f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#050719] text-[#ffffff] shadow-xs'
                    : 'bg-[#ffffff] text-[#46464c] hover:bg-[#eceef4] border border-[#c7c5cd]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          {filteredFaqs.length === 0 ? (
            <div className="bg-[#ffffff] rounded-2xl p-12 text-center border border-[#c7c5cd]/30 shadow-xs max-w-xl mx-auto">
              <span className="material-symbols-outlined text-4xl text-[#77767d] mb-2">search_off</span>
              <h3 className="font-headline text-lg font-bold text-[#181c20]">No matching answers found</h3>
              <p className="text-xs text-[#46464c] mt-1">
                Try searching with different keywords or browse our categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#050719] text-[#ffffff] text-xs font-bold"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = expandedId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-[#ffffff] rounded-2xl border border-[#c7c5cd]/30 shadow-xs overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedId(isOpen ? null : faq.id)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-code-waybill text-[10px] px-2 py-0.5 rounded bg-[#f1f3f9] text-[#544ec2] font-semibold uppercase">
                          {faq.category}
                        </span>
                        <h3 className="font-headline text-sm sm:text-base font-bold text-[#181c20]">
                          {faq.question}
                        </h3>
                      </div>
                      <span className="material-symbols-outlined text-[#77767d] shrink-0 transition-transform duration-200">
                        {isOpen ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#46464c] leading-relaxed border-t border-[#eceef4] pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Need More Assistance Banner */}
          <div className="mt-16 max-w-4xl mx-auto bg-[#ffffff] p-6 sm:p-8 rounded-2xl border border-[#c7c5cd]/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-headline text-base font-bold text-[#181c20]">Still have questions?</h3>
              <p className="text-xs text-[#46464c] mt-0.5">
                Our support desk in Jodhpur is available to help resolve your consignment queries.
              </p>
            </div>
            <Link
              to="/support"
              className="px-5 py-2.5 rounded-xl bg-[#050719] text-[#ffffff] font-headline text-xs font-bold hover:bg-[#181a2d] transition-all shrink-0"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
