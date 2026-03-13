import React from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaLaptopCode, FaVial, FaRocket, FaChevronRight } from 'react-icons/fa'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description:
        'We deep-dive into your vision, analyzing requirements and market trends to build a solid strategic foundation.',
      icon: <FaSearch className="w-8 h-8" />,
      color: 'bg-blue-600',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      number: '02',
      title: 'Design & Development',
      description:
        'Our experts craft intuitive UI/UX followed by robust engineering to bring your digital product to life.',
      icon: <FaLaptopCode className="w-8 h-8" />,
      color: 'bg-purple-600',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      number: '03',
      title: 'Quality Engineering',
      description:
        'Continuous integration and rigorous cross-platform testing ensure your solution is resilient and reliable.',
      icon: <FaVial className="w-8 h-8" />,
      color: 'bg-emerald-600',
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      number: '04',
      title: 'Launch & Evolution',
      description:
        'Success isn’t just about the launch. We provide ongoing support to scale your solution as you grow.',
      icon: <FaRocket className="w-8 h-8" />,
      color: 'bg-orange-600',
      gradient: 'from-orange-600 to-amber-600'
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
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="process" className="py-32 bg-gray-50/30 overflow-hidden relative">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/20 to-transparent skew-x-12 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Our Development Engine
            </h2>
            <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              We've refined our workflow into a high-precision machine designed to deliver excellence at every milestone.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* 3D Connecting Path (Desktop) */}
          <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-px bg-gray-200">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 origin-left"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group w-full"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  whileHover={{ 
                    rotateY: 10,
                    rotateX: -5,
                    translateZ: 20,
                    scale: 1.02
                  }}
                  className="bg-white rounded-[32px] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 h-full relative z-10 transition-all duration-300 transform-gpu overflow-hidden"
                >
                  {/* Decorative Gradient Background */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-full -mr-16 -mt-16`}></div>

                  {/* Step Number Badge */}
                  <div className={`w-14 h-14 ${step.color} text-white rounded-2xl flex items-center justify-center text-xl font-black shadow-lg mb-8 transform group-hover:rotate-12 transition-transform duration-500`}>
                    {step.number}
                  </div>

                  {/* Icon with glow */}
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 blur-2xl opacity-20 bg-gradient-to-r ${step.gradient} group-hover:opacity-40 transition-opacity`}></div>
                    <div className="relative text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:translate-x-1 transition-transform">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {step.description}
                  </p>

                  {/* Step Connector Indicator (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[44px] -right-4 w-12 h-12 items-center justify-center z-20">
                      <div className="w-8 h-8 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center">
                        <FaChevronRight className="text-gray-300 text-xs" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Dynamic Floating particles or dots can be added here */}
    </section>
  )
}

export default Process


