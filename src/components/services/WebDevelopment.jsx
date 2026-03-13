import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaSearch, FaPalette, FaCode, FaVial, FaRocket } from 'react-icons/fa';
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
    { title: 'Discovery', desc: 'We analyze your requirements and business goals.', icon: <FaSearch /> },
    { title: 'Design', desc: 'Creating wireframes and prototypes for approval.', icon: <FaPalette /> },
    { title: 'Development', desc: 'Writing clean, scalable code with best practices.', icon: <FaCode /> },
    { title: 'Testing', desc: 'Rigorous testing for performance and security.', icon: <FaVial /> },
    { title: 'Launch', desc: 'Deploying your site and providing support.', icon: <FaRocket /> },
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
      <div className="relative bg-primary-900 text-white py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-primary-900/40 to-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
            alt="Web Development Space"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-500 rounded-full opacity-20 transform scale-150 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
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

      {/* Responsive Design Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">📱 Responsive Design</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pixel-Perfect on Every Device
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Your website will look stunning on desktops, tablets, and smartphones. We design mobile-first, ensuring seamless user experiences across all screen sizes with fluid layouts and touch-friendly interactions.
              </p>
              <ul className="space-y-3">
                {[
                  'Mobile-first design approach',
                  'Cross-browser compatibility (Chrome, Safari, Firefox, Edge)',
                  'Touch-optimized navigation & interactions',
                  'Adaptive images & media for fast loading',
                  'PWA-ready for app-like experience'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-20"></div>
              <img
                src="/images/responsive-design.png"
                alt="Responsive Web Design on Multiple Devices"
                className="relative rounded-xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* E-Commerce Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-lg opacity-20"></div>
              <img
                src="/images/ecommerce-website.png"
                alt="E-Commerce Website Development"
                className="relative rounded-xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">🛒 E-Commerce Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sell Online With Confidence
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Launch your online store with a fully customized e-commerce platform. From product catalogs to secure checkout, we build everything you need to sell online and grow your revenue.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '100%', label: 'Secure Payments' },
                  { num: '50+', label: 'Features Included' },
                  { num: '2-4', label: 'Weeks to Launch' },
                  { num: '99.9%', label: 'Uptime Guarantee' }
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary-600">{stat.num}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SEO & Performance Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">🚀 SEO & Performance</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Rank Higher, Load Faster
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Every website we build is optimized for search engines and blazing-fast performance. Get found on Google, convert more visitors, and deliver an exceptional user experience.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'On-Page SEO Optimization', desc: 'Meta tags, structured data, sitemaps, and keyword-optimized content built into every page.' },
                  { title: 'Core Web Vitals Optimized', desc: 'LCP, FID, and CLS scores that meet Google\'s performance standards for top rankings.' },
                  { title: 'Google Analytics & Search Console', desc: 'Full integration with analytics tools to track traffic, conversions, and user behavior.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">{i + 1}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl blur-lg opacity-20"></div>
              <img
                src="/images/seo-performance.png"
                alt="SEO & Performance Analytics Dashboard"
                className="relative rounded-xl shadow-2xl w-full"
              />
            </motion.div>
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
      <div className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-primary-600 uppercase bg-primary-50 rounded-full"
            >
              How we work
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-gray-900"
            >
              Our Development Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
            >
              A proven workflow that ensures excellence from conception to launch.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Connecting line (Desktop only) */}
            <div className="hidden md:block absolute top-[45%] left-0 w-full h-0.5 bg-gradient-to-r from-primary-100 via-primary-300 to-primary-100 z-0"></div>

            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative z-10 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className="flex flex-col items-center">
                  {/* Step Bubble */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 mb-6 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl text-primary-600 border border-primary-50 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300"
                  >
                    {step.icon}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-sm font-bold text-primary-600 border-2 border-white shadow-sm group-hover:bg-white transition-colors">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 h-full">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
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
