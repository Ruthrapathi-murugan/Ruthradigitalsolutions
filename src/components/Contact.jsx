import React, { useState } from 'react'

const contactMethods = [
  {
    label: 'Call Ruthrapathi',
    value: '+91 96263 80310',
    href: 'tel:+919626380310',
    accent: 'from-amber-500 to-orange-500',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 5a2 2 0 012-2h1.74a2 2 0 011.94 1.43l.7 2.34a2 2 0 01-.95 2.3l-1.02.58a13.05 13.05 0 006.64 6.64l.58-1.02a2 2 0 012.3-.95l2.34.7A2 2 0 0121 18.26V20a2 2 0 01-2 2h-.75C9.31 22 2 14.69 2 5.75V5z"
      />
    ),
  },

  {
    label: 'Email',
    value: 'ruthrapathimurugan@outlook.com',
    href: 'mailto:ruthrapathimurugan@outlook.com',
    accent: 'from-purple-500 to-violet-600',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4h16v16H4z M22 6l-10 7L2 6"
      />
    ),
  },

  {
    label: 'WhatsApp',
    value: '+91 96263 80310',
    href: 'https://wa.me/+919626380310',
    accent: 'from-emerald-500 to-lime-500',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12.08A9 9 0 1111.92 3a9 9 0 019.08 9.08zM10 9h.01M14 9h.01M9 13c.87.63 1.92 1 3 1s2.13-.37 3-1"
      />
    ),
  },

  {
    label: 'LinkedIn',
    value: '@ruthrapathim',
    href: 'https://www.linkedin.com/in/ruthrapathim/',
    accent: 'from-sky-500 to-blue-600',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v11H2zM4 5a2 2 0 110 4 2 2 0 010-4z"
      />
    ),
  },


]


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/ruthrapathimurugan@outlook.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Contact from Ruthra Digital Solutions Website"
        })
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully. Check your email to activate if this is your first time.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      } else {
        alert('Something went wrong. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-primary-500 mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Connect directly with Ruthra Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These are the same touch points listed on Ruthrapathi’s public portfolio. Drop a
            line and you’ll usually hear back within 12 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Start a conversation</h3>
            <p className="text-gray-600 mb-8">
              Tell us about your website, hotel solution, or marketing idea—everything stays
              confidential.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Ruthra Digital Solutions Client"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="+91 90000 00000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  What do you need help with?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="">Select</option>
                  <option value="web-development">Website / Web App</option>
                  <option value="hotel-management">Hotel or Hospitality Solution</option>
                  <option value="digital-marketing">Digital Marketing / SEO</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project summary
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Share business goals, timelines, or links to references…"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Direct lines</h3>
              <p className="text-gray-600 mb-6">
                Based in India (Chennai · Bangalore + remote). Reach out through any of the
                verified links used on{' '}
                <a
                  href="https://ruthrapathi-info.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 font-semibold hover:underline"
                >
                  Ruthrapathi’s public portfolio
                </a>
                .
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-2xl p-5 bg-gradient-to-br ${method.accent} text-white flex flex-col gap-3 items-start hover:scale-[1.02] transition-transform`}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                        {method.icon}
                      </svg>

                      {/* label */}
                      <div className="text-sm uppercase tracking-widest opacity-90">
                        {method.label}
                      </div>
                    </div>

                    {/* value (wraps) */}
                    <span className="text-lg sm:text-xl font-semibold max-w-full break-words break-all">
                      {method.value}
                    </span>
                  </a>
                ))}
              </div>

            </div>

            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Preferred response window</h3>
              <p className="text-white/80 mb-6">
                WhatsApp and calls are monitored daily between 09:00 and 21:00 IST. Emails and
                form submissions receive a reply within 12 working hours.
              </p>
              <div className="space-y-2 text-sm uppercase tracking-wide">
                <p className="flex justify-between border-b border-white/20 pb-2">
                  <span>Weekdays</span>
                  <span className="font-semibold">09:00 AM – 09:00 PM IST</span>
                </p>
                <p className="flex justify-between pb-2">
                  <span>Weekends</span>
                  <span className="font-semibold">On-demand via WhatsApp</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


