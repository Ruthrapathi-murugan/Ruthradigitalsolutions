import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'

/**
 * Mouse-tracked 3D tilt wrapper with a moving glare highlight.
 * Children can use the `tilt-layer-*` utility classes to pop out in depth.
 */
const TiltCard = ({ children, className = '', max = 12, glare = true, scale = 1.02, ...rest }) => {
  const ref = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const springCfg = { stiffness: 180, damping: 18, mass: 0.6 }
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), springCfg)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), springCfg)
  const s = useSpring(1, springCfg)

  const glareX = useTransform(px, (v) => `${v * 100}%`)
  const glareY = useTransform(py, (v) => `${v * 100}%`)
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.45), transparent 55%)`

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    px.set(0.5)
    py.set(0.5)
    s.set(1)
  }

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerEnter={() => s.set(scale)}
        onPointerLeave={handleLeave}
        style={{ rotateX, rotateY, scale: s, transformStyle: 'preserve-3d' }}
        className={`relative h-full will-change-transform ${className}`}
        {...rest}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glareBg }}
          />
        )}
      </motion.div>
    </div>
  )
}

export default TiltCard
