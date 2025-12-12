import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does a typical renovation take?',
      answer: 'Timelines vary by scope. Small apartments (partial work) typically 4–8 weeks; full home renovations 8–16 weeks. We provide a project timeline in the proposal.',
    },
    {
      question: 'Do you provide material samples?',
      answer: 'Yes — we present finish samples and swatches during the design approval stage.',
    },
    {
      question: 'Can you work with my budget?',
      answer: 'Yes — we create tiered design options and prioritize spends to match your budget and goals.',
    },
    {
      question: 'Do you offer warranty/aftercare?',
      answer: 'We provide a workmanship warranty and limited-aftercare support. Specifics are included in the project contract.',
    },
    {
      question: 'How do I book a consultation?',
      answer: 'Call, email, or send a WhatsApp message using the contact details above. You can also fill the contact form with project details.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-2">
            FAQ
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h3>
          <p className="text-lg text-gray-700">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="text-amber-900" size={20} />
                  ) : (
                    <Plus className="text-amber-900" size={20} />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed mt-3">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
