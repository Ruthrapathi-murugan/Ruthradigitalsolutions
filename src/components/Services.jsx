import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaHotel, FaBullhorn, FaCheck } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      href: '/service/web-development',
      description: 'Custom website creation tailored to your business needs. We build responsive, fast, and SEO-friendly websites using modern technologies.',
      icon: <FaLaptopCode />,
      image: '/images/services/web_development_service.png',
      gradient: 'from-blue-600 to-indigo-600',
      shadow: 'shadow-blue-500/20',
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
      icon: <FaHotel />,
      image: '/images/services/hotel_management_service.png',
      gradient: 'from-purple-600 to-pink-600',
      shadow: 'shadow-purple-500/20',
      features: [
        'Booking Management',
        'Room Inventory',
        'Guest Services',
        'Payment Processing',
        'Hotel Website Design & Landing Pages',
        'Google My Business & Top Search Rankings',
      ],
    },
    {
      title: 'Digital Marketing',
      href: '/service/digital-marketing',
      description: 'Boost your online presence with strategic digital marketing campaigns that drive traffic, engagement, and conversions.',
      icon: <FaBullhorn />,
      image: '/images/services/digital_marketing_service.png',
      gradient: 'from-emerald-600 to-teal-600',
      shadow: 'shadow-emerald-500/20',
      features: [
        'SEO Services',
        'Social Media Marketing',
        'Content Marketing',
        'PPC Advertising',
        'Analytics & Reporting',
      ],
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="services" className="py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] opacity-40 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-30 translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter text-center">
              Our Core Services
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8 text-center"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium text-center">
              We engineer high-performance digital solutions designed to propel your business into the future.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          style={{ perspective: "1500px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <Link
                to={service.href}
                className="block relative h-full"
              >
                <motion.div
                  whileHover={{ 
                    rotateY: 8,
                    rotateX: -5,
                    translateZ: 30,
                    scale: 1.02
                  }}
                  className={`bg-white rounded-[40px] overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.1)] hover:${service.shadow} border border-gray-100 h-full relative z-10 transition-all duration-500 transform-gpu group`}
                >
                  {/* Mockup Image Header */}
                  <div className="h-64 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 z-10`}></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <div className={`w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-gray-900 text-2xl shadow-xl transform group-hover:rotate-12 transition-transform duration-500`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col h-[calc(100%-16rem)]">
                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:translate-x-1 transition-transform tracking-tight text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 mb-6 leading-relaxed font-medium text-sm text-center">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 font-bold text-xs">
                          <div className={`w-4 h-4 rounded-full bg-indigo-50 flex items-center justify-center mr-3 group-hover:bg-indigo-100 transition-colors flex-shrink-0`}>
                            <FaCheck className="w-2 h-2 text-indigo-600" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-indigo-600 font-black text-[10px] uppercase tracking-widest text-center">
                        Engineering Excellence
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:translate-x-1">
                        →
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services


