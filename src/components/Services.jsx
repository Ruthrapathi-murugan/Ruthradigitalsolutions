import React from 'react'
import { Link } from 'react-router-dom'
import { FaLaptopCode, FaHotel, FaBullhorn, FaCheck } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      href: '/service/web-development',
      description: 'Custom website creation tailored to your business needs. We build responsive, fast, and SEO-friendly websites using modern technologies.',
      description: 'Custom website creation tailored to your business needs. We build responsive, fast, and SEO-friendly websites using modern technologies.',
      icon: <FaLaptopCode className="w-12 h-12" />,
      features: [
        'Responsive Design',
        'Modern UI/UX',
        'SEO Optimization',
        'Full-Stack MERN Development',
        'Next.js & Headless Experiences',
        'High-Performance E-commerce Builds',
      ],
    },
    {
      title: 'Hotel Management',
      href: '/service/hotel-management',
      description: 'Comprehensive hotel management solutions to streamline operations, manage bookings, and enhance guest experiences.',
      description: 'Comprehensive hotel management solutions to streamline operations, manage bookings, and enhance guest experiences.',
      icon: <FaHotel className="w-12 h-12" />,
      features: [
        'Booking Management',
        'Room Inventory',
        'Guest Services',
        'Payment Processing',
        'Hotel Website Design & Landing Pages',
        'Google My Business & Top Search Rankings',
        'Analytics Dashboard',
      ],
    },
    {
      title: 'Digital Marketing',
      href: '/service/digital-marketing',
      description: 'Boost your online presence with strategic digital marketing campaigns that drive traffic, engagement, and conversions.',
      description: 'Boost your online presence with strategic digital marketing campaigns that drive traffic, engagement, and conversions.',
      icon: <FaBullhorn className="w-12 h-12" />,
      features: [
        'SEO Services',
        'Social Media Marketing',
        'Content Marketing',
        'PPC Advertising',
        'Analytics & Reporting',
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              to={service.href}
              key={index}
              className="block bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="text-primary-600 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <FaCheck className="w-5 h-5 text-primary-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-primary-600 font-semibold group-hover:text-primary-700 flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


