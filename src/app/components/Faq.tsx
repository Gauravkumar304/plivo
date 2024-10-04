"use client";
import { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I start using WhatsApp messaging with Plivo?',
      answer:
        'To start using WhatsApp messaging with Plivo, sign up for an account, verify your business, and configure your WhatsApp number.',
    },
    {
      question: 'How does the pricing work for using WhatsApp through Plivo?',
      answer:
        'Pricing for WhatsApp messaging via Plivo depends on the volume of messages and your subscription plan. Contact Plivo for more details.',
    },
    {
      question: 'How does billing work with Plivo for WhatsApp messaging services?',
      answer:
        'Billing is done monthly based on message volume and any additional services you may have signed up for. You can view your billing information in the Plivo dashboard.',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Automate your WhatsApp communication with Plivo
      </h1>

      <div className="text-center mb-8 ">
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg mr-4 mb-4">
          REQUEST TRIAL
        </button>
        <button className="bg-green-700 text-white py-2 px-4 rounded-lg">
          GET VOLUME PRICING
        </button>
      </div>

      <h2 className="text-xl font-bold text-center mb-4">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left py-4 flex justify-between items-center text-lg font-semibold focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && <p className="pb-4">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
