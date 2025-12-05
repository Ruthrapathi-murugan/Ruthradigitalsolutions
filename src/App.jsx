import React from 'react'
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

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />  
      <Portfolio />
      <Testimonials />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

