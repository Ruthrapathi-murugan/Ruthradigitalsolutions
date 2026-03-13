import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaEnvelope, FaWhatsapp, FaLinkedin, FaCheckCircle, FaTimes, FaPaperPlane, FaClock } from 'react-icons/fa'

const contactMethods = [
  {
    label: 'Call Ruthrapathi',
    value: '+91 96263 80310',
    href: 'tel:+919626380310',
    accent: 'from-blue-500 to-indigo-600',
    icon: <FaPhone />,
    glow: 'shadow-blue-500/20'
  },
  {
    label: 'Email',
    value: 'ruthradigitalsolutions@outlook.com',
    href: 'mailto:ruthradigitalsolutions@outlook.com',
    accent: 'from-purple-500 to-indigo-600',
    icon: <FaEnvelope />,
    glow: 'shadow-purple-500/20'
  },
  {
    label: 'WhatsApp',
    value: '+91 96263 80310',
    href: 'https://wa.me/+919626380310',
    accent: 'from-emerald-500 to-teal-600',
    icon: <FaWhatsapp />,
    glow: 'shadow-emerald-500/20'
  },
  {
    label: 'LinkedIn',
    value: 'Ruthra Digital Solutions',
    href: 'https://www.linkedin.com/company/ruthra-digital-solutions',
    accent: 'from-sky-500 to-blue-700',
    icon: <FaLinkedin />,
    glow: 'shadow-sky-500/20'
  },
]

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/ruthradigitalsolutions@outlook.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Contact from Ruthra Digital Solutions Website"
        })
      });

      if (response.ok) {
        setShowModal(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      } else {
        alert('Something went wrong. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* 3D Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              className="bg-white rounded-[40px] shadow-2xl p-12 max-w-lg w-full relative overflow-hidden text-center border border-white/20"
            >
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <FaCheckCircle className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">Transmission Successful!</h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Your message has been received. Our team will analyze your requirements and reach out within 12 hours.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold hover:bg-black transition-colors shadow-xl"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
            Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Ruthra Digital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Ready to scale? Drop a line and let's engineer your success together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch" style={{ perspective: "2000px" }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 5, rotateX: -2, translateZ: 20 }}
            className="bg-white/90 backdrop-blur-xl rounded-[48px] p-10 md:p-14 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white/50 transition-all duration-500 will-change-transform"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">Start a Project</h3>
            <p className="text-gray-500 font-medium mb-12">
              Share your vision and we'll handle the digital heavy lifting.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-gray-50/50 border border-gray-100 rounded-[24px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-300"
                    placeholder="John Doe"
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants}>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-5 bg-gray-50/50 border border-gray-100 rounded-[24px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-300"
                      placeholder="hello@company.com"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-gray-50/50 border border-gray-100 rounded-[24px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-300"
                      placeholder="+91 90000 00000"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-gray-50/50 border border-gray-100 rounded-[24px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-gray-900 bg-white"
                  >
                    <option value="">Select a strategy</option>
                    <option value="web-development">web development</option>
                    <option value="hotel-management">hotel management</option>
                    <option value="digital-marketing">digital marketing</option>
                    <option value="other">other</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 ml-1">Project High-Level Summary</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-6 py-5 bg-gray-50/50 border border-gray-100 rounded-[24px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-300 resize-none"
                    placeholder="Tell us about goals, scale, and timelines..."
                  />
                </motion.div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98, y: 0 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-6 rounded-[24px] font-black text-xl hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10">{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                {!isSubmitting && <FaPaperPlane className="relative z-10 text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: -5, rotateX: -2, translateZ: 20 }}
              className="bg-gray-900 rounded-[48px] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden flex-grow transition-all duration-500 will-change-transform"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
              
              <h3 className="text-3xl font-black mb-8 tracking-tight relative z-10">Direct Infrastructure</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {contactMethods.map((method, i) => (
                  <motion.a
                    key={i}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-6 rounded-[32px] bg-gradient-to-br ${method.accent} flex flex-col gap-4 items-start shadow-xl border border-white/5`}
                  >
                    <div className="text-3xl">{method.icon}</div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{method.label}</div>
                      <div className="text-sm font-bold truncate max-w-[150px]">{method.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-white/10 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black tracking-tight">Response Matrix</h4>
                    <p className="text-xs text-white/50 font-bold uppercase tracking-widest">Global Operations</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-white/60">Standard Sync</span>
                    <span className="font-black text-blue-400">09:00 – 21:00 IST</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-white/60">Fast-Track</span>
                    <span className="font-black text-emerald-400">WhatsApp 24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-indigo-50/50 rounded-[40px] p-8 border border-indigo-100 flex items-center justify-between group"
            >
              <div className="max-w-[70%]">
                <h4 className="font-black text-gray-900 tracking-tight mb-1">Portfolio Verified</h4>
                <p className="text-sm font-medium text-gray-500 italic leading-snug">
                  Integrated with Ruthrapathi's central digital hub. 
                </p>
              </div>
              <a 
                href="https://ruthrapathi-info.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/20 group-hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-xs">RDS</div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
