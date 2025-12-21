import React, { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

const projects = [
  {
    id: 1,
    title: 'business website',
    category: 'web',
    description: 'Modern e-commerce solution with advanced features',
    image: '/logos/logodheena.jpeg',
    link: 'https://ultrawavendtservices.netlify.app/',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Luxury Hotel Booking System',
    category: 'hotel',
    description: 'Complete hotel management and booking platform',
    image: '/logos/logo.jpg',
    link: 'https://sampathresidency-palani.netlify.app/',
    tags: ['React', 'Express', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'marketing',
    description: 'Successful social media and SEO campaign',
    image: '/logos/jcd.png',
    link: 'https://www.jcdinterior.com/',
    tags: ['SEO', 'Social Media', 'Analytics'],
  },
  {
    id: 4,
    title: 'Business Website',
    category: 'web',
    description: 'Professional corporate website with CMS',
    image: '/logos/ruthra-logo.png',
    link: 'https://ruthradigitalsolutions.netlify.app/',
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
];


  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'hotel', name: 'Hotel Management' },
    { id: 'marketing', name: 'Digital Marketing' },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-white">
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
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
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
              className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-110"
  />
</div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
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
