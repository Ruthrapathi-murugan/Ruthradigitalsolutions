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
      image: '/images/hero/web_4k.png',
      title: 'Future-Ready Web Solutions',
      subtitle: 'High-performance websites, landing pages, and business systems built for speed, trust, and leads.',
      icon: <FaCode />,
      badge: 'Development',
      accentClass: 'text-sky-300',
      buttonClass: 'bg-sky-600 hover:bg-sky-500',
      chips: ['Responsive UI', 'SEO Ready', 'Fast Loading'],
      metric: '98%',
      metricLabel: 'Performance focus',
      cta: 'View Portfolio',
      link: '/service/web-development'
    },
    {
      id: 'hotel',
      image: '/images/hero/hotel_4k.png',
      title: 'Smart Hotel Growth Systems',
      subtitle: 'Hotel websites, OTA setup, direct bookings, and guest-focused digital tools for stronger occupancy.',
      icon: <FaHotel />,
      badge: 'Hospitality',
      accentClass: 'text-emerald-300',
      buttonClass: 'bg-emerald-600 hover:bg-emerald-500',
      chips: ['OTA Setup', 'Direct Booking', 'Guest Flow'],
      metric: '24/7',
      metricLabel: 'Booking ready',
      cta: 'Explore System',
      link: '/service/hotel-management'
    },
    {
      id: 'marketing',
      image: '/images/strategies/seo_strategy.png',
      title: 'Data-Driven Digital Growth',
      subtitle: 'SEO, social media, paid ads, and local business campaigns designed to turn attention into enquiries.',
      icon: <FaChartLine />,
      badge: 'Marketing',
      accentClass: 'text-amber-300',
      buttonClass: 'bg-amber-600 hover:bg-amber-500',
      chips: ['SEO', 'Paid Ads', 'Social Growth'],
      metric: '3x',
      metricLabel: 'Lead strategy',
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

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950 text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.25, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/78 to-slate-950/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30 z-10" />
          <div className="absolute inset-0 hero-grid-overlay z-10 opacity-70" />
          <motion.img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.04, 1], x: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center lg:grid-cols-[1.05fr_0.95fr] gap-10">
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
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 ${slide.accentClass}`}>
                <span className="text-xl">{slide.icon}</span>
                <span className="font-semibold uppercase tracking-wider text-sm">{slide.badge}</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-glow">
                {slide.title}
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                {slide.subtitle}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.34 }}
                className="mb-8 flex flex-wrap gap-3"
              >
                {slide.chips.map((chip, index) => (
                  <motion.span
                    key={chip}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.42 + index * 0.08 }}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/85 shadow-lg backdrop-blur-md"
                  >
                    {chip}
                  </motion.span>
                ))}
              </motion.div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate(slide.link)}
                  className={`px-8 py-4 rounded-full font-bold text-lg text-white transition-all transform hover:scale-105 flex items-center gap-2 shadow-2xl ${slide.buttonClass}`}
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

        <AnimatePresence mode="wait">
          <motion.div
            key={`${slide.id}-preview`}
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: 24, rotateY: 8 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className="hidden lg:block hero-perspective"
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotateX: [0, 1.5, 0], rotateY: [0, -1.5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-card relative overflow-visible rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            >
              <div className="relative overflow-hidden rounded-[1.45rem]">
                <motion.img
                  src={slide.image}
                  alt={`${slide.title} preview`}
                  className="h-[420px] w-full object-cover"
                  animate={{ scale: [1, 1.05, 1], y: [0, -8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-white/10" />
                <div className="hero-scanline absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/25 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-10 top-10 rounded-2xl border border-white/15 bg-slate-950/70 px-5 py-4 shadow-2xl backdrop-blur-md"
              >
                <div className={`text-3xl font-black ${slide.accentClass}`}>{slide.metric}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-widest text-white/55">{slide.metricLabel}</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute -right-8 top-28 space-y-2 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md"
              >
                {slide.chips.map((chip) => (
                  <div key={chip} className="flex items-center gap-2 text-xs font-bold text-white/80">
                    <span className={`h-2 w-2 rounded-full ${slide.buttonClass.split(' ')[0]}`} />
                    {chip}
                  </div>
                ))}
              </motion.div>

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/15 bg-slate-950/55 p-5 shadow-2xl backdrop-blur-md">
                <div className={`mb-2 text-3xl ${slide.accentClass}`}>{slide.icon}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/60">{slide.badge}</div>
                <div className="mt-1 text-2xl font-black text-white">{slide.title}</div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
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
