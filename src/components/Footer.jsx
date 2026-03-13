import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaWhatsapp, FaPhone, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 150);
  };

  return (
    <footer className="relative bg-[#050510] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* 3D Depth Decoration elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent shadow-[0_0_20px_rgba(79,70,229,0.3)]"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120%] h-48 bg-indigo-600/10 blur-[100px] rounded-[100%]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ perspective: "1000px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
        >
          <div className="lg:col-span-2">
            <motion.div 
              whileHover={{ translateZ: 20 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                  <img
                    src="/ruthra-logo.png"
                    alt="Ruthra Digital Solutions Logo"
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Ruthra Digital Solutions
                </h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Leading the digital frontier with cutting-edge design, bespoke software, and strategic marketing that propels brands into the future.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={goToContact}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_30px_rgba(79,70,229,0.4)] active:scale-95"
                >
                  Start a Project <FaArrowRight className="text-sm" />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white relative inline-block">
              Expertise
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Web Development', to: '/service/web-development' },
                { label: 'Hotel Management', to: '/service/hotel-management' },
                { label: 'Digital Marketing', to: '/service/digital-marketing' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="group flex items-center text-gray-400 hover:text-white transition-all">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all transform scale-0 group-hover:scale-100"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Portfolio', href: '/#portfolio' },
                { label: 'Our Process', href: '/#process' },
                { label: 'About Us', href: '/#about' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group flex items-center text-gray-400 hover:text-white transition-all">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all transform scale-0 group-hover:scale-100"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white relative inline-block">
              Connected
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-500 rounded-full"></span>
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: 'Facebook',
                  href: 'https://www.facebook.com/share/14GojYU8wad/',
                  icon: <FaFacebook />,
                  color: 'hover:bg-[#1877F2]'
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/ruthra-digital-solutions/',
                  icon: <FaLinkedin />,
                  color: 'hover:bg-[#0A66C2]'
                },
                {
                  label: 'WhatsApp',
                  href: 'https://wa.me/+919626380310',
                  icon: <FaWhatsapp />,
                  color: 'hover:bg-[#25D366]'
                },
                {
                  label: 'Call',
                  href: 'tel:+919626380310',
                  icon: <FaPhone />,
                  color: 'hover:bg-indigo-600'
                },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    y: -5, 
                    rotateY: 15,
                    translateZ: 20 
                  }}
                  className={`flex items-center justify-center w-full aspect-square rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all duration-300 shadow-xl ${item.color}`}
                  aria-label={item.label}
                >
                  <span className="text-2xl">{item.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-gray-500 text-sm font-medium">
              © {currentYear} All rights reserved
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 px-6 py-3 rounded-full border border-white/10 text-gray-400 text-sm"
            >
              Built & Managed by{" "}
              <a
                href="https://www.ruthradigitalsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors ml-1"
              >
                Ruthra Digital Solutions
              </a>
            </motion.div>

            <div className="flex gap-6 text-sm text-gray-500">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Ornaments */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] -mr-32 -mb-32"></div>
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-[60px] -ml-16"></div>
    </footer>
  )
}

export default Footer
