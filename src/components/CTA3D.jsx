import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaWhatsapp, FaStar, FaRocket } from 'react-icons/fa'

const highlights = [
  { value: 'Free', label: 'Strategy consultation' },
  { value: '100%', label: 'Mobile-responsive builds' },
  { value: '24/7', label: 'WhatsApp support' },
]

const CTA3D = () => {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, rotateX: 25, y: 60 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1400 }}
        className="cta-panel relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-16 text-white sm:px-12 md:py-20"
      >
        {/* Animated gradient border + floating 3D shapes */}
        <div className="cta-shape cta-shape-1" aria-hidden="true" />
        <div className="cta-shape cta-shape-2" aria-hidden="true" />
        <div className="cta-ring" aria-hidden="true" />
        <div className="cta-cube" aria-hidden="true">
          {['front', 'back', 'right', 'left', 'top', 'bottom'].map((f) => (
            <span key={f} className={`cta-cube-face cta-cube-${f}`} />
          ))}
        </div>

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] backdrop-blur">
              <FaRocket className="text-amber-300" /> Let&apos;s build together
            </div>
            <h2 className="text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Ready to turn visitors into{' '}
              <span className="cta-highlight">loyal customers?</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg font-medium text-white/75">
              Tell us about your business and get a free, no-obligation growth plan — website, hotel system or
              marketing campaign — tailored to your goals and budget.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="cta-button group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-black text-slate-900 shadow-2xl"
              >
                Get Free Consultation
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/+919626380310"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold backdrop-blur transition hover:bg-white/20"
              >
                <FaWhatsapp className="text-green-300" /> Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white/70">
              <span className="flex text-amber-300">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </span>
              Trusted by hotels & businesses across Tamil Nadu
            </div>
          </div>

          <div className="grid gap-4" style={{ perspective: 1000 }}>
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 40, rotateY: -30 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
                whileHover={{ rotateY: -12, rotateX: 6, z: 30, scale: 1.03 }}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur-md transform-gpu"
              >
                <div className="text-4xl font-black">{h.value}</div>
                <div className="mt-1 text-sm font-bold uppercase tracking-widest text-white/60">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default CTA3D
