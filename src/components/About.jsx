import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaRocket, FaUsers, FaHistory, FaHeadset } from 'react-icons/fa'

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '20+', icon: <FaRocket />, color: 'from-blue-600 to-indigo-600' },
    { label: 'Happy Clients', value: '10+', icon: <FaUsers />, color: 'from-purple-600 to-pink-600' },
    { label: 'Years Experience', value: '2+', icon: <FaHistory />, color: 'from-emerald-600 to-teal-600' },
    { label: 'Support', value: '24/7', icon: <FaHeadset />, color: 'from-orange-600 to-amber-600' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60 translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] opacity-40 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
              Leading the Digital Frontier
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-[1.1]">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Ruthra Digital</span> Solutions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              We are architects of the digital age. At Ruthra Digital Solutions, we don't just build websites; we engineer high-performance ecosystems that power growth and redefine industries.
            </motion.p>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-12 leading-relaxed font-medium opacity-80">
              Our mission is to bridge the gap between imagination and execution. We combine cutting-edge technology with strategic mastery to deliver results that don't just meet goals—they shatter them.
            </motion.p>

            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="relative group lg:w-48"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
                  <div className="relative">
                    <div className="text-4xl font-black text-gray-900 mb-2 flex items-center gap-3">
                      <span className={`text-2xl bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                        {stat.icon}
                      </span>
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative" style={{ perspective: "2000px" }}>
            {/* Main Mockup Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-[40px] blur-3xl opacity-50"></div>
              <img 
                src="/images/about_team_3d.png" 
                alt="Innovation Team" 
                className="w-full rounded-[40px] shadow-2xl relative z-10 border border-white/20"
              />
            </motion.div>

            {/* Floating 3D Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: -15, rotateX: 10, translateZ: 50 }}
              className="mt-12 md:mt-0 md:absolute -bottom-10 -right-10 lg:-right-20 z-20 w-full md:w-80 bg-white/90 backdrop-blur-2xl p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-white/50 transform-gpu cursor-default"
            >
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 md:mb-8 tracking-tight">Why Choose Us?</h3>
              <ul className="space-y-4 md:space-y-6">
                {[
                  'Expert Tech Infrastructure',
                  'High-Performance Scalability',
                  'Premium User Experiences',
                  'Innovative Problem Solving'
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs md:text-sm font-bold text-gray-700">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <FaCheckCircle className="w-3 md:w-3.5 h-3 md:h-3.5" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Decorative Pulse Circle */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-600/10 rounded-full animate-pulse blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


