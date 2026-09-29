/**
 * MultipleRide Centralized Site Configuration
 * Single source of truth for business information, branding, operational scope, and legal contacts.
 */

export const siteConfig = {
  brandName: 'MultipleRide',
  legalBusinessName: 'Nikhil Enterprises',
  tagline: 'Pickup and drop, made simpler.',
  missionStatement: 'Connecting businesses, local merchants, and domestic shippers with verified driver-partners for punctual local pickup, direct delivery, and sequenced multi-drop transport of permitted commercial goods, materials, and parcels.',
  operatingCity: 'Jodhpur, Rajasthan, India',
  operatingZoneCode: 'RJ-19',
  
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'multipleride@gmail.com',
  supportPhone: import.meta.env.VITE_SUPPORT_PHONE || '+91 8949667612',
  businessAddress: import.meta.env.VITE_BUSINESS_ADDRESS || 'Nikhil Enterprises, Commercial Corridor, Basni Phase II, Jodhpur, Rajasthan 342005, India',
  
  appStoreUrl: import.meta.env.VITE_APP_STORE_URL || 'https://apps.apple.com/app/multipleride',
  googlePlayUrl: import.meta.env.VITE_GOOGLE_PLAY_URL || 'https://play.google.com/store/apps/details?id=com.multipleride.app',
  
  grievanceOfficer: {
    name: 'Nodal Grievance Officer',
    designation: 'Head of Customer Relations & Compliance',
    email: import.meta.env.VITE_GRIEVANCE_EMAIL || 'multipleride@gmail.com',
    responseWindow: 'Acknowledgement within 24 hours, resolution within 15 working days',
    address: 'Nikhil Enterprises, Commercial Corridor, Basni Phase II, Jodhpur, Rajasthan 342005, India'
  },
  
  policies: {
    privacyLastUpdated: 'September 2025',
    termsLastUpdated: 'September 2025',
    refundLastUpdated: 'September 2025',
    grievanceLastUpdated: 'September 2025'
  },

  businessScope: {
    model: 'Intra-city goods & parcel logistics',
    passengerTransport: false, // Strict: No passenger cabs or taxis
    pickupRule: 'SINGLE ORIGIN ONLY (1:1 direct transit or 1:N multi-drop sequence)',
    permittedCargo: [
      'Retail packages & merchant stock',
      'Textiles, apparel bolts, and fabrics',
      'Hardware, machine parts & electrical supplies',
      'FMCG, dry groceries, and non-hazardous provisions',
      'Furniture, decor items, and woodcrafts',
      'Stationery, paper, and printing supplies'
    ],
    prohibitedCargo: [
      'Passengers or people transport of any kind',
      'Flammable liquids, explosives, or hazardous chemicals',
      'Illegal, illicit, or contraband items under Indian law',
      'Unpackaged loose liquids or corrosive substances',
      'Uncaged live animals or livestock'
    ]
  },

  vehicles: [
    {
      id: 'auto-three-wheeler',
      name: 'Auto / Three-Wheeler Freight',
      badge: '3-WHEELER FREIGHT',
      category: 'Intra-City Agile Class',
      suitability: 'Small business batches, cartons, textile rolls, and rapid urban store drops',
      access: 'Narrow old-city bazaar lanes, inner market streets (Sojati Gate, Clock Tower, Nai Sarak)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK5cHDM2LkSycO8HqdrEpgCRK-rnKj4XVbcWYIDk1hrO9ba6UXjMy1E0Y6rOogzzgKg_YFd4hTt0hEq3e2CQdJEKVntSNhXCAGmwkhpZfJ9sqpRkWF2JlqbXT4qAAhQuMqeIIvmnmIN65BFs5krcJ27ojJ5Ii0E0DUU6a6KP6rj7dH-cMmAjQ6wGg5VKEBXCa5Enrjp6gZH0X9s4PwQpAnqEKrcdbsRh5Jsc-4RfyVoLBgzhWZArI',
      typicalCargo: ['Cartons & Parcels', 'Apparel Bundles', 'Hardware Kits', 'Small Appliances'],
      availabilityNote: 'Subject to driver-partner availability and local zone allocation in Jodhpur RJ-19.'
    },
    {
      id: 'tempo-light-commercial',
      name: 'Tempo / Light Commercial Truck',
      badge: '4-WHEELER TEMPO',
      category: 'Bulk & Multi-Drop Carrier',
      suitability: 'Bulk inventory, commercial wholesale crates, furniture, and larger multi-drop retail runs',
      access: 'Arterial roads, commercial highways, and industrial estates (Basni, Boranada, Mandore)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6zuNSCioBCmO7oq4OcqMfl6g4rOu_iEjkZX4zdQ90cqzwRLZf1heqA99D_f2FwmehcuKWxRxe8tw9GaBqXgmP3H1Apj2izF9VzhFV6-IDfuivvfcY9sT4ZCA9wkdi97RKb9yZk_wOjuz0EndrVhZxH5KJhs_iGdwQrEpfbSCkCTQayjgvTvEMfzWnM4iBkUc8dVLqB5xR4qQs8uSUu3NP0flAAgYjXa0DNSvDro7T-jIcu5o8hdk',
      typicalCargo: ['Textile Roll Pallets', 'Industrial Fabrication Parts', 'Commercial Crates', 'Bulky Store Supplies'],
      availabilityNote: 'Allocated on demand based on load dimensions and vehicle positioning.'
    },
    {
      id: 'other-suitable-vehicles',
      name: 'Other Suitable Vehicles',
      badge: 'EXPANDING CAPACITY',
      category: 'Specialized Load Spectrum',
      suitability: 'Flexible options as network onboarding expands, adapted to unique payload geometries',
      access: 'Demand-aligned dispatch for special commercial freight requirements',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIXlDc5NPdM1tTi-qE7ROBbOgJ5N0IQHwWwMlQZEZNqt0DazJJmdJx_EOJ7k20aA9TH8P2bbeL7-7qKN0L0sNolK_E1axpxHCoSvawPHNxofgl-Nc3XwwoHUGeDC78n1nstBAIkJ8diMKwIkLViqjWqayRZFT2eEjCRbLS1Bkiu2yBeV-6VXXgn5L0XCPIcpe51wcuI1UL5y1TBM1cJ--nUhlK-0IHo5EoPjnwwgW9VyitJLTzy2g',
      typicalCargo: ['Heavy Industrial Goods', 'Oversized Packages', 'Consolidated Merchant Batches'],
      availabilityNote: 'Progressive network rollout across Jodhpur and adjoining trade corridors.'
    }
  ],

  navLinks: [
    { label: 'Services', path: '/services' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Vehicles', path: '/vehicles' },
    { label: 'Driver Partners', path: '/driver-partners' },
    { label: 'Safety', path: '/safety' },
    { label: 'About', path: '/about' },
    { label: 'Support', path: '/support' }
  ],

  footerLinks: {
    product: [
      { label: 'Services', path: '/services' },
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Vehicles', path: '/vehicles' }
    ],
    company: [
      { label: 'About', path: '/about' },
      { label: 'Driver Partners', path: '/driver-partners' },
      { label: 'Safety', path: '/safety' }
    ],
    support: [
      { label: 'Support', path: '/support' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact', path: '/contact' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms & Conditions', path: '/terms' },
      { label: 'Refund & Cancellation', path: '/refund-cancellation' },
      { label: 'Delete Account', path: '/delete-account' },
      { label: 'Grievance Redressal', path: '/grievance-redressal' }
    ]
  }
};
