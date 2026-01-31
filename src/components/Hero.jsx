import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaHotel, FaChartLine, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      id: 'web',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
      title: 'Modern Web Solutions',
      subtitle: 'Building scalable, high-performance websites that drive business growth.',
      icon: <FaCode />,
      color: 'blue',
      cta: 'View Portfolio',
      link: '/service/web-development'
    },
    {
      id: 'hotel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
      title: 'Smart Hotel Management',
      subtitle: 'Streamline operations, bookings, and guest experiences with our DMS.',
      icon: <FaHotel />,
      color: 'emerald',
      cta: 'Explore System',
      link: '/service/hotel-management'
    },
    {
      id: 'marketing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      title: 'Data-Driven Growth',
      subtitle: 'Digital marketing strategies that increase visibility and conversions.',
      icon: <FaChartLine />,
      color: 'orange',
      cta: 'Boost Revenue',
      link: '/service/digital-marketing'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  const getColorClass = (color) => {
    switch (color) {
      case 'blue': return 'bg-blue-600 hover:bg-blue-700';
      case 'emerald': return 'bg-emerald-600 hover:bg-emerald-700';
      case 'orange': return 'bg-orange-600 hover:bg-orange-700';
      default: return 'bg-blue-600';
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gray-900 text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Icon Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-${slide.color}-400`}>
                <span className="text-xl">{slide.icon}</span>
                <span className="font-semibold uppercase tracking-wider text-sm">{slide.id === 'web' ? 'Development' : slide.id === 'hotel' ? 'Hospitality' : 'Marketing'}</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate(slide.link)}
                  className={`px-8 py-4 rounded-full font-bold text-lg text-white transition-all transform hover:scale-105 flex items-center gap-2 ${getColorClass(slide.color)}`}
                >
                  {slide.cta} <FaArrowRight />
                </button>

                <a
                  href="https://wa.me/+919626380310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full font-bold text-lg bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <FaWhatsapp className="text-green-400" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4">
        {slides.map((s, index) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-12 bg-white' : 'w-6 bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
