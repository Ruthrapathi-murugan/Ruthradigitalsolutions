import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What services does Ruthra Digital Solutions offer?',
      answer:
        'We offer three main services: Web Development (custom websites, e-commerce platforms), Hotel Management Solutions (booking systems, property management), and Digital Marketing (SEO, social media, content marketing, PPC advertising).',
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        'Project timelines vary depending on the scope and complexity. A simple website typically takes 2-4 weeks, while more complex projects like hotel management systems can take 8-12 weeks. We provide detailed timelines during the initial consultation.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer:
        'Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, updates, security patches, and technical support. We also offer monthly maintenance plans for ongoing website management.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        'We use modern, industry-standard technologies including React, Node.js, Python, PostgreSQL, MongoDB, and cloud platforms like AWS and Azure. We choose the best technology stack based on your specific project requirements.',
    },
    {
      question: 'Can you work with our existing systems?',
      answer:
        'Absolutely! We can integrate with your existing systems, APIs, and third-party services. Our team is experienced in working with various platforms and can create seamless integrations.',
    },
    {
      question: 'What is your pricing model?',
      answer:
        'We offer flexible pricing based on project scope and requirements. We provide detailed quotes after understanding your needs. We also offer fixed-price projects and hourly rates for ongoing work. Contact us for a free consultation and quote.',
    },
    {
      question: 'Do you provide hosting services?',
      answer:
        'Yes, we can help you set up hosting and manage your servers. We work with reliable hosting providers and can recommend the best solution for your needs. We also offer managed hosting services.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Getting started is easy! Simply fill out our contact form or reach out to us via email or phone. We\'ll schedule a free consultation to discuss your project, understand your requirements, and provide a detailed proposal.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers. Check out our FAQ section below.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ

