import React, { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content:
        'Ruthra Digital Solutions transformed our online presence. Their web development team created a stunning website that increased our conversions by 300%. Highly recommended!',
      rating: 5,
      image: '👩‍💼',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Hotel Manager, Grand Plaza',
      content:
        'The hotel management system they built for us streamlined all our operations. Booking management, guest services, everything is now seamless. Outstanding work!',
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Fashion Brand',
      content:
        'Their digital marketing strategies helped us reach new audiences and grow our brand significantly. The ROI has been incredible. Thank you Ruthra Digital Solutions!',
      rating: 5,
      image: '👩‍💻',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Founder, E-Commerce Store',
      content:
        'Working with Ruthra Digital Solutions was a game-changer. They built our e-commerce platform from scratch and it has exceeded all our expectations. Professional and reliable.',
      rating: 5,
      image: '👨‍💻',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 transform transition-all duration-500">
            <div className="text-center">
              <div className="text-6xl mb-6">{testimonials[currentIndex].image}</div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentIndex].content}"
              </p>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary-600'
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + testimonials.length) % testimonials.length
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-primary-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-primary-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


