// src/lib/config.ts
// Central business configuration — edit this file to update all site-wide info

export const SITE_CONFIG = {
  name: 'Shivansh Tour & Travel',
  tagline: 'Best Cab & Taxi Service in Jamshedpur | Tata to Ranchi, Kolkata',
  shortName: 'Shivansh',
  description:
    'Shivansh Tour & Travel — best taxi service in Jamshedpur (Tata Nagar). Book cab from Jamshedpur to Ranchi, Kolkata, Durgapur, Deoghar. Ranchi to Jamshedpur, Kolkata cab. Innova Crysta, Ertiga, Sedan. Call +91 7061767617.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shivanshtourandtravel.com',
  phone: '+91 7061767617',
  phoneRaw: '+917061767617',
  whatsappNumber: '917061767617',
  email: 'shivanshtourandtravels01@gmail.com',
  address: {
    street: 'Near 11th Phase, Adarsh Nagar',
    locality: 'Sonari',
    city: 'Jamshedpur',
    district: 'East Singhbhum',
    state: 'Jharkhand',
    postalCode: '831011',
    country: 'IN',
    countryName: 'India',
  },
  addressFormatted:
    'Near 11th Phase, Adarsh Nagar, Sonari, Jamshedpur, Jharkhand – 831011',
  mapQuery:
    'Adarsh+Nagar,+Sonari,+Jamshedpur,+Jharkhand',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.021!2d86.1858!3d22.8046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAdarsh+Nagar%2C+Sonari%2C+Jamshedpur!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin',
  serviceAreas: ['Jharkhand', 'West Bengal', 'Odisha', 'Bihar'],
  primaryCity: 'Jamshedpur',
  primaryState: 'Jharkhand',

  // Google My Business
  gmb: {
    // Short share link (provided by business owner)
    shareLink: 'https://share.google/6ev5H7L3uoibaTWwo',
    // Direct Google Maps review link — opens review popup
    reviewLink: 'https://search.google.com/local/writereview?placeid=ChIJAAAAAAAAAATRKvvHn3M2lbA',
    // GMB profile link
    mapsLink: 'https://maps.app.goo.gl/6ev5H7L3uoibaTWwo',
  },

  // Social — add when available
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
  },

  // Analytics — add IDs when ready
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || '',
    gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
  },
} as const;

export function getWhatsAppLink(message: string = '') {
  const encodedMessage = encodeURIComponent(message || `Hello Shivansh Tour & Travel,\nI would like to enquire about cab booking services.\nPlease share available options and fare details.`);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

export function getCallLink() {
  return `tel:${SITE_CONFIG.phoneRaw}`;
}

export function getEmailLink(subject?: string) {
  if (subject) {
    return `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}`;
  }
  return `mailto:${SITE_CONFIG.email}`;
}

export function getBookingWhatsAppMessage(params: {
  pickup?: string;
  drop?: string;
  tripType?: string;
  vehicle?: string;
}): string {
  return `Hello Shivansh Tour & Travel,

I want to book a cab.

Pickup: ${params.pickup || '[Please specify]'}
Drop: ${params.drop || '[Please specify]'}
Trip Type: ${params.tripType || '[One Way / Round Trip]'}
Vehicle: ${params.vehicle || '[Sedan / SUV / MUV]'}

Please share available options and fare details.`;
}
