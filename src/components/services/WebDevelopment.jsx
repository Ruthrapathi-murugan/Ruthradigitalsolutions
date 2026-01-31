import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';


const WebDevelopment = () => {
  const techStack = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'SQL', icon: <FaDatabase className="text-gray-600" /> },
  ];

  const processSteps = [
    { title: 'Discovery', desc: 'We analyze your requirements and business goals.' },
    { title: 'Design', desc: 'Creating wireframes and prototypes for approval.' },
    { title: 'Development', desc: 'Writing clean, scalable code with best practices.' },
    { title: 'Testing', desc: 'Rigorous testing for performance and security.' },
    { title: 'Launch', desc: 'Deploying your site and providing support.' },
  ];

  const clients = [
    { name: 'Ultra Waves NDT Services', logo: '/logos/logodheena.jpeg', link: 'https://ultrawavesndtservices.netlify.app/' },
    { name: 'JCD Interior', logo: '/logos/jcd.png', link: 'https://www.jcdinterior.com/' },
    { name: 'Ruthra Digital Solutions', logo: '/ruthra-logo.png', link: 'https://www.ruthradigitalsolutions.com/' },
  ];

  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/");

    setTimeout(() => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-800 rounded-full opacity-20 transform scale-150 animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Modern Web Development
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
              Building scalable, high-performance, and beautiful websites that drive growth and engagement.
            </p>
            <button
              onClick={goToContact}
              className="bg-white text-primary-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Start Your Project
            </button>


          </motion.div>
        </div>
      </div>

      {/* Intro & Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80"
              alt="Web Development Code"
              className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Solutions for Your Business</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We specialize in creating custom web applications tailored to your specific business needs. From simple landing pages to complex e-commerce platforms, we have the expertise to deliver solutions that are robust, secure, and easy to maintain.
            </p>
            <ul className="space-y-4">
              {[
                'Responsive Design Mobile First',
                'SEO Optimization Built-in',
                'Fast Loading Speeds',
                'Secure & Scalable Architecture',
                'CMS Integration'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 font-medium">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all cursor-pointer border border-gray-100 flex flex-col items-center justify-center transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="font-semibold text-gray-800">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Happy Clients</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">We've had the privilege of working with amazing brands and businesses.</p>
          <div className="flex flex-wrap justify-center gap-10">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center w-64 h-32 border border-gray-100"
              >
                <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>


      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Development Process</h2>
            <p className="mt-4 text-gray-600">A proven workflow to ensure project success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm group-hover:shadow-md transition-all h-full border-t-4 border-primary-500">
                  <div className="text-5xl font-bold text-gray-200 mb-4 absolute top-4 right-4">{index + 1}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{step.title}</h3>
                  <p className="text-sm text-gray-600 relative z-10">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Dream Website?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a digital experience that stands out.
          </p>
          <button
            onClick={goToContact}
            className="bg-white text-primary-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition duration-300 shadow-xl transform hover:scale-105"
          >
            Contact Us Today
          </button>

        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
