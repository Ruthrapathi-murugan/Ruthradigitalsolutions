import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  FaArrowRight,
  FaChevronRight,
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaLayerGroup,
  FaLinkedin,
  FaPhone,
  FaRocket,
  FaWhatsapp,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const showcaseStats = [
  { value: '3', label: 'Core service pillars', icon: FaLayerGroup },
  { value: '360', label: 'Strategy to launch', icon: FaGlobe },
  { value: '24/7', label: 'WhatsApp access', icon: FaWhatsapp },
]

const serviceLinks = [
  {
    label: 'Web Development',
    detail: 'Performance-led websites and product experiences.',
    to: '/service/web-development',
  },
  {
    label: 'Hotel Management',
    detail: 'Smarter booking, guest flow, and operations systems.',
    to: '/service/hotel-management',
  },
  {
    label: 'Digital Marketing',
    detail: 'Growth campaigns built for visibility and conversion.',
    to: '/service/digital-marketing',
  },
]

const quickLinks = [
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Our Process', href: '/#process' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

const socialLinks = [
  {
    label: 'WhatsApp',
    value: '+91 96263 80310',
    href: 'https://wa.me/+919626380310',
    icon: FaWhatsapp,
    accent: 'from-emerald-400/20 to-emerald-500/5',
    border: 'border-emerald-400/20',
    iconColor: 'text-emerald-300',
  },
  {
    label: 'Call',
    value: '+91 96263 80310',
    href: 'tel:+919626380310',
    icon: FaPhone,
    accent: 'from-sky-400/20 to-sky-500/5',
    border: 'border-sky-400/20',
    iconColor: 'text-sky-300',
  },
  {
    label: 'Email',
    value: 'ruthradigitalsolutions@outlook.com',
    href: 'mailto:ruthradigitalsolutions@outlook.com',
    icon: FaEnvelope,
    accent: 'from-amber-300/20 to-orange-500/5',
    border: 'border-amber-300/20',
    iconColor: 'text-amber-200',
  },
  {
    label: 'LinkedIn',
    value: 'Ruthra Digital Solutions',
    href: 'https://www.linkedin.com/company/ruthra-digital-solutions/',
    icon: FaLinkedin,
    accent: 'from-cyan-300/20 to-blue-500/5',
    border: 'border-cyan-300/20',
    iconColor: 'text-cyan-200',
  },
]

const deliverySteps = [
  {
    title: 'Strategy call',
    description: 'We align goals, audience, and the fastest path to launch.',
  },
  {
    title: 'Design and build',
    description: 'We shape the visual system, content flow, and core experience.',
  },
  {
    title: 'Launch and evolve',
    description: 'We refine performance, messaging, and growth after release.',
  },
]

const footerReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const footerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  const goToContact = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth',
      })
    }, 150)
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#04060f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.12),transparent_24%),linear-gradient(180deg,#07111f_0%,#04060f_45%,#020308_100%)]" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.85), transparent)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -16, 0], y: [0, 22, 0], scale: [1, 1.14, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-8rem] top-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl"
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[-7rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full border border-white/10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={footerReveal}
          className="grid gap-8 py-24 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.95fr)]"
        >
          <motion.div
            variants={footerItem}
            whileHover={{ y: -8, rotateX: 5, rotateY: -5 }}
            transition={{ duration: 0.35 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] p-7 shadow-[0_30px_80px_rgba(2,8,23,0.55)] backdrop-blur-2xl sm:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.14),transparent_24%)]" />
            <div className="absolute right-8 top-8 hidden h-28 w-28 rounded-full border border-white/10 bg-white/[0.04] lg:block" />
            <div className="absolute right-14 top-14 hidden h-28 w-28 rounded-full border border-cyan-300/20 lg:block" />

            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-100">
                3D Digital Studio
              </span>

              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl xl:text-6xl">
                Build the next layer of your brand with motion, depth, and clean execution.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Ruthra Digital Solutions designs websites, hotel systems, and marketing experiences that feel premium,
                perform hard, and stay memorable long after the first scroll.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={goToContact}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-1"
                >
                  Start a Project <FaArrowRight className="text-xs" />
                </button>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Explore Pricing <FaChevronRight className="text-xs" />
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {showcaseStats.map((stat) => {
                  const Icon = stat.icon

                  return (
                    <motion.div
                      key={stat.label}
                      whileHover={{ y: -6, rotateX: 6, rotateY: -6 }}
                      transition={{ duration: 0.25 }}
                      style={{ transformStyle: 'preserve-3d' }}
                      className="rounded-[26px] border border-white/10 bg-slate-950/30 p-5 backdrop-blur-md"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-100">
                        <Icon />
                      </div>
                      <div className="text-3xl font-semibold text-white">{stat.value}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div variants={footerItem} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <motion.div
              whileHover={{ y: -8, rotateX: 5, rotateY: 5 }}
              transition={{ duration: 0.35 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_25px_70px_rgba(2,8,23,0.45)] backdrop-blur-2xl sm:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Always Within Reach</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Choose the fastest channel and we will take it from there.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Reach us by call, mail, WhatsApp, or LinkedIn. The layout is built for quick action, not buried details.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ y: -5, rotateX: 8, rotateY: -8 }}
                      transition={{ duration: 0.25 }}
                      className={`rounded-[24px] border ${item.border} bg-gradient-to-br ${item.accent} p-4 backdrop-blur-md`}
                    >
                      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-black/20 ${item.iconColor}`}>
                        <Icon />
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">
                        {item.label}
                      </div>
                      <div className="mt-2 truncate text-sm font-medium text-white">{item.value}</div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, rotateX: 5, rotateY: -5 }}
              transition={{ duration: 0.35 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="rounded-[32px] border border-white/10 bg-slate-950/45 p-6 shadow-[0_25px_70px_rgba(2,8,23,0.45)] backdrop-blur-xl sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-200">
                  <FaRocket />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Flight Plan</p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">A footer that lands with purpose.</h3>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {deliverySteps.map((step, index) => (
                  <div key={step.title} className="relative pl-12">
                    {index < deliverySteps.length - 1 && (
                      <span className="absolute left-[14px] top-10 h-12 w-px bg-gradient-to-b from-cyan-300/50 to-transparent" />
                    )}
                    <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs font-semibold text-cyan-100">
                      {index + 1}
                    </div>
                    <h4 className="text-base font-semibold text-white">{step.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={footerReveal}
          className="grid gap-6 border-t border-white/10 py-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1fr)]"
        >
          <motion.div
            variants={footerItem}
            whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/10 bg-white text-slate-950 shadow-[0_18px_40px_rgba(255,255,255,0.08)]">
                <img
                  src="/ruthra-logo.png"
                  alt="Ruthra Digital Solutions Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-2xl font-semibold text-white">Ruthra Digital Solutions</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  Thoughtful interfaces, scalable systems, and launch-ready marketing crafted as one connected experience.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-200">
              <a
                href="mailto:ruthradigitalsolutions@outlook.com"
                className="inline-flex w-full items-center justify-between rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 transition-colors hover:bg-slate-950/50 sm:w-auto"
              >
                <span>Email</span>
                <span className="truncate pl-4 text-slate-400">ruthradigitalsolutions@outlook.com</span>
              </a>
              <a
                href="https://www.ruthradigitalsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-between rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 transition-colors hover:bg-slate-950/50 sm:w-auto"
              >
                <span>Website</span>
                <span className="truncate pl-4 text-slate-400">ruthradigitalsolutions.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={footerItem}
            whileHover={{ y: -6, rotateX: 4, rotateY: 4 }}
            transition={{ duration: 0.25 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Capabilities</p>
            <div className="mt-6 space-y-4">
              {serviceLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="group block rounded-[22px] border border-white/10 bg-slate-950/25 p-4 transition-all duration-300 hover:border-cyan-300/30 hover:bg-slate-950/45"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-white">{item.label}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
                    </div>
                    <FaChevronRight className="mt-1 text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-200" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={footerItem}
            whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Navigate</p>
            <div className="mt-6 space-y-3">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between rounded-[20px] border border-white/10 bg-slate-950/25 px-4 py-3 text-sm text-slate-200 transition-all duration-300 hover:border-white/20 hover:bg-slate-950/45"
                >
                  <span>{item.label}</span>
                  <FaChevronRight className="text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-200" />
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/privacy-policy"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition-colors hover:bg-white/10"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition-colors hover:bg-white/10"
              >
                Terms of Service
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-[22px] border border-white/10 bg-gradient-to-r from-cyan-300/10 to-emerald-300/10 px-4 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-100">
                <FaFacebook />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Social Presence</p>
                <a
                  href="https://www.facebook.com/share/14GojYU8wad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block truncate text-sm font-medium text-white hover:text-cyan-100"
                >
                  Follow the brand journey on Facebook
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-400">&copy; {currentYear} Ruthra Digital Solutions. All rights reserved.</p>
          <motion.a
            href="https://www.ruthradigitalsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10"
          >
            Built and managed by Ruthra Digital Solutions <FaArrowRight className="text-[10px]" />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
