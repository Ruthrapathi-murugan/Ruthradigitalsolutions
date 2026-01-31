import React from 'react'
import { FaSearch, FaLaptopCode, FaVial, FaRocket, FaChevronRight } from 'react-icons/fa'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description:
        'We start by understanding your business, goals, and requirements. Our team conducts thorough research and creates a detailed project plan.',
      description:
        'We start by understanding your business, goals, and requirements. Our team conducts thorough research and creates a detailed project plan.',
      icon: <FaSearch className="w-8 h-8" />,
    },
    {
      number: '02',
      title: 'Design & Development',
      description:
        'Our designers create stunning mockups and prototypes. Once approved, our developers bring the design to life with clean, efficient code.',
      description:
        'Our designers create stunning mockups and prototypes. Once approved, our developers bring the design to life with clean, efficient code.',
      icon: <FaLaptopCode className="w-8 h-8" />,
    },
    {
      number: '03',
      title: 'Testing & Quality Assurance',
      description:
        'We rigorously test every feature across different devices and browsers to ensure optimal performance and user experience.',
      description:
        'We rigorously test every feature across different devices and browsers to ensure optimal performance and user experience.',
      icon: <FaVial className="w-8 h-8" />,
    },
    {
      number: '04',
      title: 'Launch & Support',
      description:
        'We handle the deployment and launch process. After going live, we provide ongoing support and maintenance to ensure everything runs smoothly.',
      description:
        'We handle the deployment and launch process. After going live, we provide ongoing support and maintenance to ensure everything runs smoothly.',
      icon: <FaRocket className="w-8 h-8" />,
    },
  ]

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven process ensures successful project delivery from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-primary-600 mb-6 mt-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Arrow (Desktop, except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 text-primary-400">
                    <div className="hidden lg:block absolute top-24 -right-4 text-primary-400">
                      <FaChevronRight className="w-8 h-8" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process


