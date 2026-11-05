import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin gradient bar at the top of the viewport showing page scroll progress */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500 shadow-[0_0_12px_rgba(99,102,241,0.7)]"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
