import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false) // For Mobile
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // If we are not on the home page, we want the navbar to be solid/visible usually, 
  // or we can keep the transparent-to-scroll logic. 
  // Since other pages have content starting closely, let's keep it consistent 
  // but maybe ensure text is visible if the background is light.
  // For simplicity, we'll keep the existing logic but usage of 'isScrolled' might need tweaking for non-home pages if they don't have dark hero sections.
  // However, the new service pages have hero sections with backgrounds, so it should be fine.

  const isHomePage = location.pathname === '/'

  const navLinks = [
    { name: 'Home', href: '/' },
    // Services is handled separately
    { name: 'Portfolio', href: '/#portfolio' }, // Using hash links for home sections
    { name: 'Process', href: '/#process' },
    { name: 'About', href: '/#about' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/#contact' },
  ]

  const serviceLinks = [
    { name: 'Web Development', href: '/service/web-development' },
    { name: 'Hotel Management', href: '/service/hotel-management' },
    { name: 'Digital Marketing', href: '/service/digital-marketing' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img
              src="/ruthra-logo.png"
              alt="Ruthra Digital Solutions Logo"
              className="h-10 w-10 object-contain"
            />
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className={`text-2xl font-bold ${isScrolled || !isHomePage ? 'text-primary-600' : 'text-white'
                }`}
            >
              Ruthra Digital Solutions
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className={`transition-colors duration-200 ${isScrolled || !isHomePage
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-primary-200'
                  } font-medium`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center transition-colors duration-200 ${isScrolled || !isHomePage
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white hover:text-primary-200'
                    } font-medium`}
                >
                  Services
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600"
                        role="menuitem"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <a // Using anchor for hash links on home page, but if on other page, this might reload. Ideally use HashLink or handle scroll.
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 ${isScrolled || !isHomePage
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white hover:text-primary-200'
                    } font-medium`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-xl p-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  Services
                  <svg className={`h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="pl-6 space-y-2 mt-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
