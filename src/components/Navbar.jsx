import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false)
  const location = useLocation()
  const desktopServicesRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
        setIsServicesOpen(false)
      } else {
        setIsDesktopServicesOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (desktopServicesRef.current && !desktopServicesRef.current.contains(event.target)) {
        setIsDesktopServicesOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
    setIsDesktopServicesOpen(false)
  }, [location.pathname, location.hash])

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">

          {/* Logo Section */}
          <div className="flex min-w-0 flex-1 items-center space-x-3">
            <img
              src="/ruthra-logo.png"
              alt="Ruthra Digital Solutions Logo"
              className="h-10 w-10 flex-shrink-0 object-contain"
            />
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className={`min-w-0 truncate text-base font-bold sm:text-xl lg:text-lg xl:text-2xl ${isScrolled || !isHomePage ? 'text-primary-600' : 'text-white'
                }`}
            >
              Ruthra Digital Solutions
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-end">
            <div className="flex items-center space-x-5 xl:space-x-8">
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

              <Link
                to="/pricing"
                onClick={() => window.scrollTo(0, 0)}
                className={`transition-colors duration-200 ${isScrolled || !isHomePage
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-primary-200'
                  } font-medium`}
              >
                Pricing
              </Link>

              {/* Services Dropdown */}
              <div
                ref={desktopServicesRef}
                className="relative"
                onMouseEnter={() => setIsDesktopServicesOpen(true)}
                onMouseLeave={() => setIsDesktopServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsDesktopServicesOpen((prev) => !prev)}
                  aria-expanded={isDesktopServicesOpen}
                  aria-haspopup="menu"
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
                <div
                  className={`absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 origin-top-left ${isDesktopServicesOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0 pointer-events-none'
                    }`}
                >
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsDesktopServicesOpen(false)}
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
          <div className="flex-shrink-0 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
          <div className="mt-4 rounded-lg bg-white p-4 pb-4 shadow-xl lg:hidden">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                onClick={() => {
                  closeMobileMenu()
                  window.scrollTo(0, 0)
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>

              <Link
                to="/pricing"
                onClick={() => {
                  closeMobileMenu()
                  window.scrollTo(0, 0)
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Pricing
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-expanded={isServicesOpen}
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
                        onClick={closeMobileMenu}
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
                  onClick={closeMobileMenu}
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
