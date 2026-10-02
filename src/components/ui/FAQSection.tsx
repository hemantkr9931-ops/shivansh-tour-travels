'use client';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
  dark = false,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={`section${dark ? ' section-dark' : ' section-gray'}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-label">FAQ</div>
          <h2 className={`section-title${dark ? ' section-title-white' : ''}`}>{title}</h2>
          {subtitle && (
            <p className={`section-subtitle${dark ? ' section-subtitle-white' : ''}`}>
              {subtitle}
            </p>
          )}
        </div>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item${openIndex === index ? ' open' : ''}`}
              style={{ borderColor: dark ? 'rgba(255,255,255,0.08)' : undefined }}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                style={{ color: dark ? 'white' : undefined }}
              >
                {faq.question}
                <div className="faq-icon" aria-hidden="true">+</div>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div
                  className="faq-answer-inner"
                  style={{ color: dark ? 'rgba(255,255,255,0.7)' : undefined }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
