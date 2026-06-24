import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Have questions? We've got answers. Find quick responses to the most common queries.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                openIndex === index ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg transition-colors ${
                    openIndex === index ? 'bg-primary-500' : 'bg-gray-100'
                  }`}>
                    <HelpCircle className={`w-5 h-5 ${
                      openIndex === index ? 'text-white' : 'text-gray-500'
                    }`} />
                  </div>
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${
                  openIndex === index ? 'rotate-180 text-primary-500' : 'text-gray-400'
                }`} />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 pl-16">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-white rounded-2xl shadow-lg">
            <p className="text-gray-600 mb-2">Still have questions?</p>
            <a href="#contact" className="text-primary-600 font-semibold hover:underline">
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
