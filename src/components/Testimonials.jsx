import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHotel, FaPalette, FaShoppingCart, FaUtensils, FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sampath Kumar',
      role: 'Owner, Sampath Residency – Palani',
      content:
        'Ruthra Digital Solutions created a complete digital system for our hotel. From online booking to guest management, everything became smooth and organized. Our customer flow increased noticeably.',
      rating: 5,
      image: <FaHotel className="text-white w-10 h-10" />,
      color: 'from-blue-600/90 to-cyan-500/90',
      shadow: 'shadow-blue-500/20'
    },
    {
      id: 2,
      name: 'Sawan Kumar',
      role: 'Founder, Just Creative Designs',
      content:
        'They built our professional portfolio website and optimized the branding. The UI/UX quality, loading speed, and SEO performance were top-notch. We confidently showcase our brand because of their work.',
      rating: 5,
      image: <FaPalette className="text-white w-10 h-10" />,
      color: 'from-purple-600/90 to-pink-500/90',
      shadow: 'shadow-purple-500/20'
    },
    {
      id: 3,
      name: 'Aravind Murugan',
      role: 'E-Commerce Business Owner',
      content:
        'Our online store was completely redesigned by Ruthra Digital Solutions. Sales improved, page performance increased, and our customers love the new interface. Highly reliable and skilled team.',
      rating: 5,
      image: <FaShoppingCart className="text-white w-10 h-10" />,
      color: 'from-orange-600/90 to-red-500/90',
      shadow: 'shadow-orange-500/20'
    },
    {
      id: 4,
      name: 'Vignesh S',
      role: 'Restaurant Owner',
      content:
        'We needed a digital marketing strategy, and Ruthra Digital Solutions delivered beyond expectations. Our Google ranking improved and we gained more walk-in customers. Very professional and result-oriented.',
      rating: 5,
      image: <FaUtensils className="text-white w-10 h-10" />,
      color: 'from-green-600/90 to-emerald-600/90',
      shadow: 'shadow-green-500/20'
    },
    {
      id: 5,
      name: 'Ravichandran S',
      role: 'Owner, PVT Residency – Palani',
      content:
        'Ruthra Digital Solutions created a complete digital system for our hotel. From online booking to guest management, everything became smooth and organized. Excellent service and support!',
      rating: 5,
      image: <FaHotel className="text-white w-10 h-10" />,
      color: 'from-blue-700/90 to-indigo-600/90',
      shadow: 'shadow-indigo-500/20'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.8,
      z: -100
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      z: 0,
      transition: {
        rotateY: { type: 'spring', stiffness: 100, damping: 20 },
        x: { type: 'spring', stiffness: 100, damping: 20 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.8,
      z: -100,
      transition: {
        rotateY: { type: 'spring', stiffness: 100, damping: 20 },
        x: { type: 'spring', stiffness: 100, damping: 20 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      },
    }),
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* 3D Background Decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[120px] -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-[120px] translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-primary-600 uppercase bg-primary-50 rounded-full"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Real feedback from businesses we've helped transform with strategic digital solutions.
          </motion.p>
        </div>

        <div className="relative h-[650px] md:h-[500px] flex items-center justify-center" style={{ perspective: "2000px" }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ transformStyle: "preserve-3d" }}
              className="absolute w-full max-w-5xl"
            >
              <div className={`bg-white rounded-[40px] shadow-2xl overflow-hidden relative border border-gray-100 ${testimonials[currentIndex].shadow} transform-gpu`}>
                <div className="grid grid-cols-1 md:grid-cols-12 h-full min-h-[400px]">
                  {/* Branding/Persona Column */}
                  <div className={`md:col-span-5 bg-gradient-to-br ${testimonials[currentIndex].color} p-12 flex flex-col justify-center items-center text-white relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-[32px] flex items-center justify-center mb-8 shadow-2xl border border-white/30 relative z-10"
                    >
                      {testimonials[currentIndex].image}
                    </motion.div>
                    <div className="relative z-10 text-center">
                      <h3 className="text-3xl font-black mb-2">{testimonials[currentIndex].name}</h3>
                      <div className="w-12 h-1 bg-white/40 mx-auto mb-4 rounded-full"></div>
                      <p className="text-white/90 text-sm font-bold uppercase tracking-[0.2em]">{testimonials[currentIndex].role}</p>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                  </div>

                  {/* Content Column */}
                  <div className="md:col-span-7 p-12 md:p-16 flex flex-col justify-center relative bg-white">
                    <div className="absolute top-10 right-12 text-primary-50/50">
                      <FaQuoteLeft className="text-8xl" />
                    </div>

                    <div className="flex mb-8 gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="w-6 h-6 text-yellow-400 drop-shadow-sm" />
                      ))}
                    </div>

                    <p className="text-gray-700 text-xl md:text-2xl leading-[1.6] font-medium relative z-10">
                      <span className="text-4xl leading-none text-primary-600 font-serif mr-1">"</span>
                      {testimonials[currentIndex].content}
                      <span className="text-4xl leading-none text-primary-600 font-serif ml-1">"</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between items-center px-2 hidden md:flex pointer-events-none z-20">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="pointer-events-auto w-16 h-16 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-2xl flex items-center justify-center text-gray-800 hover:text-primary-600 transition-colors group border border-gray-100"
              aria-label="Previous Story"
            >
              <FaChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="pointer-events-auto w-16 h-16 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-2xl flex items-center justify-center text-gray-800 hover:text-primary-600 transition-colors group border border-gray-100"
              aria-label="Next Story"
            >
              <FaChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="group relative h-4 focus:outline-none"
              aria-label={`Go to story ${index + 1}`}
            >
              <div className={`h-full rounded-full transition-all duration-500 ${index === currentIndex ? 'w-12 bg-primary-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'w-4 bg-gray-200 hover:bg-gray-300'
                }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
