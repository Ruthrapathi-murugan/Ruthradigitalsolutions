import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  FaHeadset,
  FaNetworkWired,
  FaShieldAlt,
  FaTools,
  FaLaptop,
  FaWindows,
  FaFileAlt,
  FaPrint,
  FaWifi,
  FaEnvelope,
  FaGlobe,
  FaCloudUploadAlt,
  FaBug,
  FaTruck,
  FaCalendarCheck,
} from 'react-icons/fa'

const ITSupport = () => {
  const services = [
    {
      title: '24/7 Helpdesk',
      desc: 'Fast, reliable assistance for technical issues, ticket tracking, and user support across devices and systems.',
      icon: <FaHeadset className="text-sky-600" />,
    },
    {
      title: 'Network & Infrastructure',
      desc: 'Secure network configuration, performance tuning, and proactive monitoring to keep your systems online and optimized.',
      icon: <FaNetworkWired className="text-emerald-600" />,
    },
    {
      title: 'Security & Compliance',
      desc: 'Cybersecurity hardening, patch management, and compliance support to protect data and reduce operational risk.',
      icon: <FaShieldAlt className="text-indigo-600" />,
    },
    {
      title: 'Managed Systems',
      desc: 'Server administration, cloud maintenance, and software updates delivered with predictable SLAs.',
      icon: <FaTools className="text-yellow-600" />,
    },
  ]

  const serviceItems = [
    { label: 'Computer & Laptop Troubleshooting', icon: <FaLaptop className="text-sky-500" /> },
    { label: 'Windows Installation & Configuration', icon: <FaWindows className="text-cyan-500" /> },
    { label: 'Software Installation & Licensing', icon: <FaFileAlt className="text-emerald-500" /> },
    { label: 'Printer & Scanner Setup', icon: <FaPrint className="text-violet-500" /> },
    { label: 'Network & Wi-Fi Configuration', icon: <FaWifi className="text-blue-500" /> },
    { label: 'Email Setup (Microsoft 365 / Google Workspace)', icon: <FaEnvelope className="text-indigo-500" /> },
    { label: 'Domain, DNS & Business Email Support', icon: <FaGlobe className="text-teal-500" /> },
    { label: 'Data Backup & Recovery', icon: <FaCloudUploadAlt className="text-sky-500" /> },
    { label: 'Virus & Malware Removal', icon: <FaBug className="text-red-500" /> },
    { label: 'Remote IT Support', icon: <FaHeadset className="text-cyan-500" /> },
    { label: 'On-site IT Support', icon: <FaTruck className="text-orange-500" /> },
    { label: 'Annual Maintenance Contracts (AMC)', icon: <FaCalendarCheck className="text-emerald-500" /> },
  ]

  const navigate = useNavigate()

  const goToContact = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/services/it_support_bg.svg"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-technology-background-3253-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 min-h-[520px] sm:min-h-[640px] flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              IT Support Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-6">
              Ruthra Digital Solutions provides professional IT support for businesses, hotels, offices, and startups. We help maintain your computers, networks, business email, software, and IT infrastructure so your business operates efficiently.
            </p>
            <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10">
              Whether you need one-time technical assistance or ongoing maintenance, our team delivers reliable and cost-effective IT solutions.
            </p>
            <button
              onClick={goToContact}
              className="bg-cyan-500 text-white font-bold py-4 px-10 rounded-full hover:bg-cyan-400 transition duration-300 shadow-2xl"
            >
              Talk to IT Experts
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative overflow-hidden rounded-[32px] shadow-2xl bg-slate-950">
            <img
              src="/images/services/it_support_bg.svg"
              alt="IT team assisting a client"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Trusted IT support</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Technical support that keeps your business online</h2>
              <p className="mt-4 text-slate-200">
                Our team resolves issues quickly, configures systems accurately, and ensures your computers, network, and email infrastructure stay reliable.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] bg-white p-10 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.3)]">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Visualized support for modern IT</h3>
              <p className="text-slate-700 leading-relaxed">
                These images represent the real-world IT challenges we solve every day — from managed networks and security to remote helpdesk assistance and business email setup.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mt-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900 text-white shadow-lg">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h2>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-12 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.3)]">
            <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_220px] items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">Services include</h3>
                <p className="text-slate-600 leading-relaxed">
                  Complete IT support for your computers, network, email, and business systems, with both remote and on-site support options.
                </p>
              </div>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1515150144380-bca8a8d4a0a1?auto=format&fit=crop&w=600&q=80"
                  alt="IT technician support image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600">
                    {item.icon}
                  </div>
                  <div className="text-slate-700 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-slate-900 p-12 text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.4)]">
            <h3 className="text-3xl font-bold mb-6">Service model</h3>
            <p className="text-slate-300 leading-relaxed mb-8">
              We deliver IT support as a flexible managed service with fast response times, regular health checks, and proactive upgrades that keep your team productive.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Rapid ticket response',
                'Performance monitoring',
                '24/7 coverage options',
                'Security-first operations',
              ].map((point, idx) => (
                <div key={idx} className="rounded-3xl bg-slate-950/70 px-5 py-4">
                  <div className="text-sm font-semibold text-cyan-300">{point}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ITSupport
