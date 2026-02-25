import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa'

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
                <Link to="/service/web-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/service/hotel-management" className="hover:text-white transition-colors">
                  Hotel Management
                </Link>
              </li>
              <li>
                <Link to="/service/digital-marketing" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/#process" className="hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow & connect</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: 'Facebook',
                  href: 'https://www.facebook.com/share/14GojYU8wad/',
                  icon: <FaFacebook />,
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/ruthra-digital-solutions/',
                  icon: <FaLinkedin />,
                },
                {
                  label: 'WhatsApp',
                  href: 'https://wa.me/+919626380310',
                  icon: <FaWhatsapp />,
                },
                {
                  label: 'Call',
                  href: 'tel:+919626380310',
                  icon: <FaPhone />,
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
                  <span className="w-5 h-5 flex items-center justify-center text-xl">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} All rights reserved • Built & Managed by{" "}
            <a
              href="https://www.ruthradigitalsolutions.com/"
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
