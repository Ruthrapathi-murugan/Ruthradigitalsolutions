import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useAnimationFrame } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiMongodb, SiNextdotjs, SiTailwindcss, SiGoogleads,
  SiMeta, SiWordpress, SiFigma, SiGoogleanalytics, SiShopify, SiFirebase,
} from 'react-icons/si'
import { FaBolt, FaShieldAlt, FaMobileAlt, FaChartPie, FaHandshake, FaSearchDollar } from 'react-icons/fa'
import TiltCard from './TiltCard'

const faces = [
  { icon: <SiReact />, label: 'React', color: '#61dafb', transform: 'rotateY(0deg)' },
  { icon: <SiNextdotjs />, label: 'Next.js', color: '#ffffff', transform: 'rotateY(90deg)' },
  { icon: <SiNodedotjs />, label: 'Node.js', color: '#5fa04e', transform: 'rotateY(180deg)' },
  { icon: <SiMongodb />, label: 'MongoDB', color: '#47a248', transform: 'rotateY(-90deg)' },
  { icon: <SiTailwindcss />, label: 'Tailwind', color: '#38bdf8', transform: 'rotateX(90deg)' },
  { icon: <SiGoogleads />, label: 'Google Ads', color: '#fbbc04', transform: 'rotateX(-90deg)' },
]

const orbitIcons = [
  { icon: <SiMeta />, color: '#0081fb' },
  { icon: <SiWordpress />, color: '#21759b' },
  { icon: <SiFigma />, color: '#f24e1e' },
  { icon: <SiGoogleanalytics />, color: '#e37400' },
  { icon: <SiShopify />, color: '#7ab55c' },
  { icon: <SiFirebase />, color: '#ffca28' },
]

const values = [
  { icon: <FaBolt />, title: 'Lightning-Fast Builds', text: 'Optimised code, compressed media and smart caching for sub-second page loads.', tint: 'from-sky-500 to-blue-600' },
  { icon: <FaMobileAlt />, title: 'Mobile-First Design', text: 'Every layout is crafted for phones first, then scaled up beautifully to desktops.', tint: 'from-violet-500 to-fuchsia-600' },
  { icon: <FaSearchDollar />, title: 'Built to Rank & Convert', text: 'SEO structure, schema markup and clear CTAs baked in from day one.', tint: 'from-emerald-500 to-teal-600' },
  { icon: <FaShieldAlt />, title: 'Secure by Default', text: 'SSL, hardened hosting, backups and monitoring so your business stays online.', tint: 'from-amber-500 to-orange-600' },
  { icon: <FaChartPie />, title: 'Transparent Reporting', text: 'Clear monthly insights on traffic, leads and bookings — no jargon.', tint: 'from-pink-500 to-rose-600' },
  { icon: <FaHandshake />, title: 'Long-Term Partnership', text: 'Direct WhatsApp access to your team and support long after launch.', tint: 'from-cyan-500 to-sky-600' },
]

/** Draggable, auto-rotating CSS 3D cube of the technologies we use */
const TechCube = () => {
  const rotX = useMotionValue(-20)
  const rotY = useMotionValue(30)
  const smoothX = useSpring(rotX, { stiffness: 80, damping: 20 })
  const smoothY = useSpring(rotY, { stiffness: 80, damping: 20 })
  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })
  const reduceMotion = useRef(false)

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useAnimationFrame((_, delta) => {
    if (!dragging.current && !reduceMotion.current) {
      rotY.set(rotY.get() + delta * 0.02)
    }
  })

  const onDown = (e) => {
    dragging.current = true
    last.current = { x: e.clientX, y: e.clientY }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onMove = (e) => {
    if (!dragging.current) return
    rotY.set(rotY.get() + (e.clientX - last.current.x) * 0.5)
    rotX.set(Math.max(-70, Math.min(70, rotX.get() - (e.clientY - last.current.y) * 0.5)))
    last.current = { x: e.clientX, y: e.clientY }
  }
  const onUp = () => {
    dragging.current = false
  }

  return (
    <div className="relative mx-auto flex h-[380px] w-full max-w-[420px] items-center justify-center sm:h-[440px]">
      {/* Orbiting icons */}
      <div className="tech-orbit absolute inset-0" aria-hidden="true">
        {orbitIcons.map((o, i) => (
          <div
            key={i}
            className="tech-orbit-item"
            style={{ '--angle': `${(360 / orbitIcons.length) * i}deg`, color: o.color }}
          >
            <span className="tech-orbit-icon">{o.icon}</span>
          </div>
        ))}
      </div>

      {/* Glow floor */}
      <div className="absolute bottom-6 h-10 w-56 rounded-full bg-sky-500/30 blur-2xl" aria-hidden="true" />

      <div
        className="tech-cube-scene cursor-grab touch-none active:cursor-grabbing"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        role="img"
        aria-label="Rotating cube showing React, Next.js, Node.js, MongoDB, Tailwind and Google Ads"
      >
        <motion.div className="tech-cube" style={{ rotateX: smoothX, rotateY: smoothY }}>
          {faces.map((f) => (
            <div key={f.label} className="tech-cube-face" style={{ transform: `${f.transform} translateZ(var(--cube-half))` }}>
              <span className="text-6xl sm:text-7xl" style={{ color: f.color, filter: `drop-shadow(0 0 18px ${f.color}88)` }}>
                {f.icon}
              </span>
              <span className="mt-3 text-xs font-black uppercase tracking-[0.25em] text-white/70">{f.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const TechStack3D = () => {
  return (
    <section id="why-us" className="relative overflow-hidden bg-slate-950 py-28 text-white">
      {/* Background */}
      <div className="tech-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-indigo-600/25 blur-[140px]" aria-hidden="true" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[140px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotateY: -25 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1200 }}
          >
            <TechCube />
            <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
              Drag to explore our stack
            </p>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-sky-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
                Why Ruthra Digital
              </span>
              <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
                Modern tech.{' '}
                <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Real business results.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-slate-300">
                We pair a proven, modern technology stack with practical marketing know-how — so your website
                doesn&apos;t just look stunning, it brings in enquiries, bookings and sales.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 40, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                  className="group"
                >
                  <TiltCard max={10} className="rounded-3xl">
                    <div className="tech-value-card h-full rounded-3xl p-6">
                      <div
                        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${v.tint} text-xl text-white shadow-lg`}
                        style={{ transform: 'translateZ(40px)' }}
                      >
                        {v.icon}
                      </div>
                      <h3 className="text-lg font-black tracking-tight" style={{ transform: 'translateZ(25px)' }}>
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.text}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack3D
