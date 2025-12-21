import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ruthra Digital Solutions</h3>
            <p className="text-gray-400">
              Transforming businesses with innovative digital solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Hotel Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow &amp; connect</h4>
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  label: 'Facebook',
                  href:
                    'https://www.facebook.com/ruthrapathi.m?mibextid=qi2Omg&rdid=uGGQcy74swtlCaq9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FcnJMbDH8bdM3s31e%2F%3Fmibextid%3Dqi2Omg',
                  icon: (
                    <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v9h4v-9h3l1-4h-4V6a1 1 0 011-1h3z" />
                  ),
                },
                {
                  label: 'X / Twitter',
                  href: 'https://x.com/ruthrapathi1',
                  icon: <path d="M4 4l16 16M20 4l-7.5 7.5M4 20l7.5-7.5" />,
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/ruthrapathim/',
                  icon: (
                    <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v11H2zM4 5a2 2 0 110 4 2 2 0 010-4z" />
                  ),
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/Ruthrapathi-murugan',
                  icon: (
                    <path d="M15 22v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0018.5 4a5.07 5.07 0 00-.09-3.73S17 0 15 1.79a13.38 13.38 0 00-6 0C7 0 5.59.27 5.59.27A5.07 5.07 0 005.5 4a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.6V22" />
                  ),
                },
                {
                  label: 'WhatsApp',
                  href: 'https://wa.me/+919626380310',
                  icon: (
                    <path d="M21 12.08A9 9 0 1111.92 3a9 9 0 019.08 9.08zM10 9h.01M14 9h.01M9 13c.87.63 1.92 1 3 1s2.13-.37 3-1" />
                  ),
                },
                {
                  label: 'Call',
                  href: 'tel:+919626380310',
                  icon: (
                    <path d="M2 5a2 2 0 012-2h1.74a2 2 0 011.94 1.43l.7 2.34a2 2 0 01-.95 2.3l-1.02.58a13.05 13.05 0 006.64 6.64l.58-1.02a2 2 0 012.3-.95l2.34.7A2 2 0 0121 18.26V20a2 2 0 01-2 2h-.75C9.31 22 2 14.69 2 5.75V5z" />
                  ),
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={item.label}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
  <p>
    © {currentYear} All rights reserved • Built & Managed by{" "}
    <a
      href="https://ruthradigitalsolutions.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-400 hover:text-indigo-300 font-semibold"
    >
      Ruthra Digital Solutions
    </a>
  </p>
</div>

      </div>
    </footer>
  )
}

export default Footer

