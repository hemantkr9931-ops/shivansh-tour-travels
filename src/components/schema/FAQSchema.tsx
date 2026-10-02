// src/components/schema/FaqSchema.tsx
// FAQ Schema — gives Google rich "People Also Ask" snippets in search results
// NONE of our competitors have this — HUGE competitive advantage

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  faqs: FaqItem[];
}

export default function FaqSchema({ faqs }: FaqSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Default homepage FAQs — optimized for search intent
export const homepageFaqs: FaqItem[] = [
  {
    question: 'What is the cab fare from Jamshedpur to Ranchi?',
    answer: 'The cab fare from Jamshedpur to Ranchi starts from Rs 1,599 for a Sedan (Swift Dzire type) for a one-way trip. SUV (Innova) starts from Rs 2,499. Contact Shivansh Tour and Travel at +91 7061767617 for exact fare quote.',
  },
  {
    question: 'Is there a taxi service available from Jamshedpur to Kolkata?',
    answer: 'Yes, Shivansh Tour and Travel provides outstation cab service from Jamshedpur to Kolkata. The fare starts from Rs 5,499 for a Sedan and Rs 7,499 for an Innova. Travel time is approximately 5 to 6 hours via NH-6.',
  },
  {
    question: 'What is the fare for Jamshedpur to Bhubaneswar cab?',
    answer: 'Jamshedpur to Bhubaneswar cab fare starts at Rs 4,999 for a Sedan. The distance is approximately 450 km and takes 7 to 8 hours. Both one-way and round-trip options are available.',
  },
  {
    question: 'How to book a cab in Jamshedpur?',
    answer: 'You can book a cab in Jamshedpur by calling or WhatsApp-messaging Shivansh Tour and Travel at +91 7061767617. We offer 24/7 booking for local taxi, outstation cab, airport transfer, and wedding car hire. No advance payment required for most bookings.',
  },
  {
    question: 'Does Shivansh Tour and Travel offer airport transfer from Jamshedpur?',
    answer: 'Yes. We provide airport cab service from Jamshedpur to Birsa Munda Airport Ranchi (IXR) approximately 130 km, 2.5 hours. We also cover Kolkata (CCU) and Bhubaneswar (BBI) airports. Book at least 2 hours before departure.',
  },
  {
    question: 'What types of vehicles are available for outstation cab from Jamshedpur?',
    answer: 'Shivansh Tour and Travel offers Sedan (Swift Dzire), MUV (Ertiga), SUV (Innova Crysta), Premium SUV (Fortuner), and Tempo Traveller (12 to 17 seater) for group travel. All vehicles are AC and well-maintained.',
  },
  {
    question: 'Is Tempo Traveller available from Jamshedpur for group tours?',
    answer: 'Yes, we provide AC Tempo Traveller (12 to 17 seater) from Jamshedpur for group tours to Puri, Deoghar, Varanasi, Kolkata and all major destinations. Ideal for family outings, picnics, and pilgrimage tours.',
  },
  {
    question: 'Is there a local taxi service available in Jamshedpur for hourly hire?',
    answer: 'Yes, Shivansh Tour and Travel provides local taxi hire in Jamshedpur on hourly basis. We serve Bistupur, Sakchi, Kadma, Sonari, Mango, Adityapur, Telco, Golmuri and all Jamshedpur localities. Call +91 7061767617 to book.',
  },
  {
    question: 'Are toll charges included in the cab fare from Jamshedpur?',
    answer: 'No, toll charges are paid separately as per actuals on the route. State permit charges if applicable are also extra. We communicate all charges transparently when sharing your fare estimate. No hidden charges policy.',
  },
  {
    question: 'Does Shivansh Tour and Travel offer one-way cab from Jamshedpur?',
    answer: 'Yes, we offer one-way cab service from Jamshedpur to Ranchi, Kolkata, Dhanbad, Bokaro, Bhubaneswar, Puri, Patna and all major cities in Jharkhand, Bihar, West Bengal, and Odisha. Call +91 7061767617 to book.',
  },
];
