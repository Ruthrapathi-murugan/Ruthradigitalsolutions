import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Ruthra Digital Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              At Ruthra Digital Solutions, we are passionate about helping businesses succeed in the digital landscape. With years of experience and a team of skilled professionals, we deliver innovative solutions that drive growth and success.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our mission is to provide exceptional digital services that transform businesses and create lasting value for our clients. We combine creativity, technical expertise, and strategic thinking to deliver results that exceed expectations.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom solutions tailored to your needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Competitive pricing and transparent communication</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ongoing support and maintenance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Latest technologies and best practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


