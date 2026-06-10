import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LogoMarquee from './components/LogoMarquee'
import WebDevelopment from './components/services/WebDevelopment'
import HotelManagement from './components/services/HotelManagement'
import DigitalMarketing from './components/services/DigitalMarketing'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import ChatBot from './components/ChatBot'
import Pricing from './components/Pricing'

const pageVariants = {
  initial: { opacity: 0, y: 18, filter: 'blur(8px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    filter: 'blur(6px)',
    transition: { duration: 0.24, ease: 'easeInOut' },
  },
}

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="motion-page"
      >
        <Routes location={location}>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Portfolio />
              <Testimonials />
              <LogoMarquee />
              <Process />
              <About />
              <FAQ />
              <Contact />
            </>
          } />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/service/web-development" element={<WebDevelopment />} />
          <Route path="/service/hotel-management" element={<HotelManagement />} />
          <Route path="/service/digital-marketing" element={<DigitalMarketing />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <WhatsAppButton />
        <ChatBot />   {/* AI Chatbot added */}
      <div className="min-h-screen site-canvas">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  )
}


export default App

