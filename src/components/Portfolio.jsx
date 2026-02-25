import React, { useState } from 'react'
import { FaLayerGroup, FaLaptopCode, FaHotel, FaBullhorn, FaExternalLinkAlt, FaTag } from 'react-icons/fa'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Business Website',
      category: 'web',
      description: 'Modern e-commerce solution with advanced features',
      image: '/logos/logodheena.jpeg',
      link: 'https://ultrawavesndtservices.netlify.app/',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Luxury Hotel Booking System',
      category: 'hotel',
      description: 'Complete hotel management and booking platform',
      image: '/logos/logo.jpg',
      link: 'https://sampathresidency-palani.netlify.app/',
      tags: ['React', 'Express', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Corporate Website',
      category: 'marketing',
      description: 'Successful social media and SEO campaign',
      image: '/logos/jcd.png',
      link: 'https://www.jcdinterior.com/',
      tags: ['Next.JS', 'SEO', 'Social Media', 'Analytics'],
    },
    {
      id: 4,
      title: 'Business Website',
      category: 'web',
      description: 'Professional corporate website with CMS',
      image: '/logos/ruthra-logo.png',
      link: 'https://www.ruthradigitalsolutions.com/',
      tags: ['NextJS', 'Tailwind'],
    },
    {
      id: 5,
      title: 'Resort Management System',
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

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses grow.
          </p>
        </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="h-56 bg-gray-50 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <FaExternalLinkAlt className="text-primary-600 w-4 h-4" />
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                    >
                      <FaTag className="w-3 h-3 text-gray-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
