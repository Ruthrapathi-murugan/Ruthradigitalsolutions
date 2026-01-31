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
      image: <FaHotel className="text-white w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Sawan Kumar',
      role: 'Founder, Just Creative Designs',
      content:
        'They built our professional portfolio website and optimized the branding. The UI/UX quality, loading speed, and SEO performance were top-notch. We confidently showcase our brand because of their work.',
      rating: 5,
      image: <FaPalette className="text-white w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Aravind Murugan',
      role: 'E-Commerce Business Owner',
      content:
        'Our online store was completely redesigned by Ruthra Digital Solutions. Sales improved, page performance increased, and our customers love the new interface. Highly reliable and skilled team.',
      rating: 5,
      image: <FaShoppingCart className="text-white w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      name: 'Vignesh S',
      role: 'Restaurant Owner',
      content:
        'We needed a digital marketing strategy, and Ruthra Digital Solutions delivered beyond expectations. Our Google ranking improved and we gained more walk-in customers. Very professional and result-oriented.',
      rating: 5,
      image: <FaUtensils className="text-white w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 5,
      name: 'Ravichandran S',
      role: 'Owner, PVT Residency – Palani',
      content:
        'Ruthra Digital Solutions created a complete digital system for our hotel. From online booking to guest management, everything became smooth and organized. Excellent service and support!',
      rating: 5,
      image: <FaHotel className="text-white w-8 h-8" />,
      color: 'from-blue-600 to-indigo-600'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
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
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses to deliver digital excellence. Here's what they experience working with us.
            </p>
          </motion.div>
        </div>

        <div className="relative h-[600px] md:h-[450px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full max-w-4xl"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-gray-100 transform transition-all hover:shadow-primary-500/10">
                <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                  {/* Left Side (Gradient & Icon) */}
                  <div className={`md:col-span-2 bg-gradient-to-br ${testimonials[currentIndex].color} p-10 flex flex-col justify-center items-center text-white relative overflow-hidden`}>
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg border border-white/30">
                      {testimonials[currentIndex].image}
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">{testimonials[currentIndex].name}</h3>
                    <p className="text-white/80 text-center text-sm font-medium uppercase tracking-wider">{testimonials[currentIndex].role}</p>
                  </div>

                  {/* Right Side (Content) */}
                  <div className="md:col-span-3 p-10 md:p-12 flex flex-col justify-center relative bg-white">
                    <FaQuoteLeft className="text-primary-100 text-6xl absolute top-8 left-8 -z-10 opacity-50" />
                    <div className="flex mb-6 text-yellow-400">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic mb-8">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons (Desktop) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between items-center px-4 hidden md:flex pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="pointer-events-auto bg-white p-4 rounded-full shadow-lg hover:bg-primary-50 text-primary-600 transition-all transform hover:scale-110 focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="pointer-events-auto bg-white p-4 rounded-full shadow-lg hover:bg-primary-50 text-primary-600 transition-all transform hover:scale-110 focus:outline-none"
              aria-label="Next Testimonial"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-10 bg-primary-600' : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
