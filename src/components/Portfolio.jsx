import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLayerGroup, FaLaptopCode, FaHotel, FaBullhorn, FaExternalLinkAlt, FaTag } from 'react-icons/fa'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 9,
      title: 'Shri Valli Residency',
      category: 'hotel',
      description: 'Premium hospitality website designed for seamless room discovery, modern amenities showcase, and direct booking enquiries.',
      image: '/logos/valli-residency.png',
      link: 'https://www.shrivalliresidency.com/',
      tags: ['Hotel Website', 'Room Showcase', 'Direct Booking'],
    },
    {
      id: 7,
      title: 'Dhivyam Residency',
      category: 'hotel',
      description: 'Hospitality website for showcasing rooms, amenities, and direct stay enquiries.',
      image: '/logos/logo_dhivyam.jpg',
      link: 'https://www.dhivyamresidency.com/',
      tags: ['Hotel Website', 'Room Showcase', 'Lead Generation'],
    },
    {
      id: 8,
      title: 'Mayura Residency',
      category: 'hotel',
      description: 'Modern residency website crafted for room discovery, trust-building, and booking-ready presentation.',
      image: '/logos/mayura-logo.svg',
      link: 'https://mayuraresidency.netlify.app/',
      tags: ['Hospitality Branding', 'Responsive UI', 'Booking Flow'],
    },
    {
      id: 1,
      title: 'Royal Ayurvedic Body Massage',
      category: 'web',
      description: 'Ayurvedic spa & wellness website with booking and SEO optimization',
      image: '/logos/spa_royal.png',
      link: 'https://www.royalayurvedicbodymassage.com/',
      tags: ['React', 'SEO', 'Google Analytics'],
    },
    {
      id: 2,
      title: 'Sampath Residency',
      category: 'hotel',
      description: 'Complete hotel management and booking platform',
      image: '/logos/logo.jpg',
      link: 'https://sampathresidency-palani.netlify.app/',
      tags: ['React', 'Express', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Just Creative Designs',
      category: 'marketing',
      description: 'Successful social media and SEO campaign',
      image: '/logos/jcd.png',
      link: 'https://www.jcdinterior.com/',
      tags: ['Next.JS', 'SEO', 'Social Media', 'Analytics'],
    },
    {
      id: 4,
      title: 'Ruthra Digital Solutions',
      category: 'web',
      description: 'Professional corporate website with CMS',
      image: '/logos/ruthra-logo.png',
      link: 'https://www.ruthradigitalsolutions.com/',
      tags: ['NextJS', 'Tailwind'],
    },
    {
      id: 5,
      title: 'PVT Residency',
      category: 'hotel',
      description: 'Comprehensive resort booking and management',
      image: '/logos/Logo.jpeg',
      link: 'https://pvtresidency.netlify.app/',
      tags: ['React.js', 'MongoDB'],
    },
    {
      id: 6,
      title: 'Eshwaraa Cottage',
      category: 'hotel',
      description: 'Premium cottage booking and management platform',
      image: '/logos/cottage.jpg',
      link: 'https://eshwaraacottage.netlify.app/',
      tags: ['React', 'Tailwind'],
    },
    {
      id: 10,
      title: 'Ultra Waves NDT Services',
      category: 'web',
      description: 'Industrial NDT testing and inspection services website built for professional service showcase and lead acquisition.',
      image: '/logos/logodheena.jpeg',
      link: 'https://ultrawavesndtservices.netlify.app/',
      tags: ['Industrial Website', 'Service Showcase', 'SEO Setup'],
    }
  ]

  const filters = [
    { id: 'all', name: 'All Projects', icon: <FaLayerGroup /> },
    { id: 'web', name: 'Web Development', icon: <FaLaptopCode /> },
    { id: 'hotel', name: 'Hotel Management', icon: <FaHotel /> },
    { id: 'marketing', name: 'Digital Marketing', icon: <FaBullhorn /> },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            whileInView={{ scale: 1, y: 0 }}
            initial={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Our Portfolio
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our successful projects and see how we've helped businesses grow.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter.id
                ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary-600 border border-gray-200'
                }`}
            >
              {filter.icon}
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <div className="h-56 bg-gray-50 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.15 }}
                />
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                  whileHover={{ rotate: 90 }}
                >
                  <FaExternalLinkAlt className="text-primary-600 w-4 h-4" />
                </motion.div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>

                <motion.p 
                  className="text-gray-600 mb-6 text-sm leading-relaxed"
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0.7 }}
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-2 pt-4 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      whileHover={{ backgroundColor: "#dbeafe", color: "#1e40af" }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaTag className="w-3 h-3 text-gray-400" />
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
