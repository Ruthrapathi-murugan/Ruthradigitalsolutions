import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <WhatsAppButton />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
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
          <Route path="/service/web-development" element={<WebDevelopment />} />
          <Route path="/service/hotel-management" element={<HotelManagement />} />
          <Route path="/service/digital-marketing" element={<DigitalMarketing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

