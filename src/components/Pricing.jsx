import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaGlobe, FaHotel, FaBullhorn, FaCheckCircle, 
  FaRocket, FaShieldAlt, FaChartLine, FaShoppingBag,
  FaGoogle, FaFacebook, FaInstagram, FaSearch, FaWhatsapp 
} from 'react-icons/fa';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('website');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setFormData({ name: '', phone: '', business: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '919626380310';
    const text = `*New Booking Inquiry - Ruthra Digital Solutions*%0A%0A` +
      `*Plan:* ${selectedPlan.name} (${selectedPlan.price})%0A` +
      `*Category:* ${activeTab === 'website' ? 'Website Development' : activeTab === 'hotel' ? 'Hotel Services' : 'Digital Marketing'}%0A%0A` +
      `*Client Details:*%0A` +
      `• Name: ${formData.name}%0A` +
      `• Phone: ${formData.phone}%0A` +
      `• Business: ${formData.business || 'N/A'}%0A` +
      `• Message: ${formData.message || 'No additional message'}%0A%0A` +
      `_Sent from Ruthra Digital Solutions Website_`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    handleCloseModal();
  };

  const tabs = [
    { id: 'website', label: 'Website Services', icon: <FaGlobe /> },
    { id: 'hotel', label: 'Hotel Services', icon: <FaHotel /> },
    { id: 'marketing', label: 'Digital Marketing', icon: <FaBullhorn /> }
  ];
// ... rest of variants and data
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const pricingData = {
    website: {
      image: '/images/pricing/website_pricing_mockup.png',
      plans: [
        {
          name: 'Basic Website',
          price: '8,000',
          bestFor: 'Small businesses, shops, startups',
          features: [
            '3–4 Pages (Home, About, Services, Contact)',
            'Mobile Responsive Design',
            'WhatsApp Integration',
            'Contact Form',
            'Basic SEO Setup',
            'Fast Loading Design'
          ],
          color: 'from-green-500 to-emerald-600'
        },
        {
          name: 'Standard Website',
          price: '12,000',
          bestFor: 'Growing businesses',
          features: [
            '5–6 Pages',
            'Custom Design Layout',
            'WhatsApp + Call Integration',
            'Google Map Integration',
            'Image Optimization',
            'SEO Setup'
          ],
          popular: true,
          color: 'from-blue-500 to-indigo-600'
        },
        {
          name: 'Premium Website',
          price: '18,000 – 25,000',
          bestFor: 'Advanced businesses / brands',
          features: [
            'All Standard Features',
            'Dynamic Website (Admin Panel)',
            'Advanced UI Design',
            'Lead / Enquiry Management System',
            'Performance Optimization'
          ],
          color: 'from-purple-500 to-pink-600'
        },
        {
          name: 'E-Commerce Website',
          price: '20,000 – 35,000',
          bestFor: 'Product-based businesses',
          features: [
            'Product Listing System',
            'Shopping Cart & Checkout',
            'Payment Gateway Integration',
            'Order Management Dashboard',
            'Mobile-Friendly Design'
          ],
          color: 'from-orange-500 to-red-600'
        }
      ],
      additional: [
        { name: 'Landing Page Design', price: '₹3,000 – ₹6,000' },
        { name: 'Website Maintenance', price: '₹1,000/month' },
        { name: 'Website Speed Optimization', price: '₹2,000 – ₹5,000' },
        { name: 'Website Redesign', price: '₹5,000 – ₹10,000' }
      ]
    },
    hotel: {
      image: '/images/pricing/hotel_management_mockup.png',
      plans: [
        {
          name: 'Basic Hotel Website',
          price: '12,000',
          features: [
            '4–5 Pages (Home, Rooms, About, Gallery, Contact)',
            'Mobile Responsive Design',
            'WhatsApp Booking Button',
            'Google Map Integration',
            'Basic SEO Setup'
          ],
          color: 'from-cyan-500 to-blue-600'
        },
        {
          name: 'Advanced Website',
          price: '20,000 – 25,000',
          features: [
            'All Basic Features',
            'Online Booking System',
            'Payment Gateway Integration',
            'Speed Optimization'
          ],
          popular: true,
          color: 'from-indigo-500 to-purple-600'
        },
        {
          name: 'OTA Setup (Per Platform)',
          price: '4,000',
          features: [
            'Booking.com, MMT, Goibibo',
            'Hotel Listing Creation',
            'Room Setup & Pricing',
            'Photo Upload',
            'Amenities & Policies',
            'Go Live Support'
          ],
          color: 'from-rose-500 to-red-600'
        },
        {
          name: 'Combo Offer (Web + OTA)',
          price: '15,000',
          features: [
            'Website + OTA Setup',
            '1–2 platforms included',
            'Best value for new hotels'
          ],
          color: 'from-amber-400 to-orange-500'
        }
      ],
      monthly: [
        { name: 'Starter Plan', price: '₹3,000/month', features: ['OTA Price & Availability Updates', 'Basic Support'] },
        { name: 'Standard Plan', price: '₹5,000/month', features: ['OTA Management', 'Google Review Management', 'Offer Setup'] },
        { name: 'Premium Plan', price: '₹8,000 – ₹10,000/month', features: ['All Standard Features', 'Google Ads / Promotion Support', 'Advanced Growth Strategy'] }
      ],
      additional: [
        { name: 'Google Ads Setup', price: '₹3,000 – ₹5,000' },
        { name: 'SEO Optimization', price: '₹5,000/month' },
        { name: 'Social Media Management', price: '₹3,000/month' }
      ]
    },
    marketing: {
      image: '/images/pricing/digital_marketing_mockup.png',
      plans: [
        {
          name: 'Starter Plan',
          price: '3,000/month',
          features: [
            'Social Media Setup / Optimization',
            '8 Posts per Month (IG / FB)',
            'Basic Caption & Hashtags',
            'Profile Improvement'
          ],
          color: 'from-teal-400 to-emerald-500'
        },
        {
          name: 'Growth Plan',
          price: '5,000/month',
          features: [
            '12–15 Posts per Month',
            'Social Media Management (IG+FB)',
            'Basic Lead Strategy',
            'Audience Engagement',
            'Monthly Performance Report'
          ],
          popular: true,
          color: 'from-blue-400 to-blue-600'
        },
        {
          name: 'Premium Plan',
          price: '8,000 – 15,000/month',
          features: [
            '20+ Posts / Reels',
            'Full Social Media Management',
            'Lead Generation Strategy',
            'Competitor Analysis',
            'Advanced Content Planning',
            'Monthly Report + Insights'
          ],
          color: 'from-purple-500 to-indigo-700'
        }
      ],
      specialized: [
        { 
          name: 'Paid Ads Services', 
          desc: 'Instants leads & traffic',
          items: [
            { name: 'Meta Ads (Setup)', price: '₹3,000 – ₹6,000' },
            { name: 'Meta Ads (Mgmt)', price: '₹3,000 – ₹8,000' },
            { name: 'Google Ads (Setup)', price: '₹3,000 – ₹6,000' },
            { name: 'Google Ads (Mgmt)', price: '₹4,000 – ₹10,000' }
          ]
        },
        { 
          name: 'SEO & GMB', 
          items: [
            { name: 'SEO Optimization', price: '₹5,000/month' },
            { name: 'GMB Management', price: '₹2,000 – ₹4,000/month' }
          ]
        }
      ]
    }
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800"
        >
          Ruthra Digital Solutions Pricing
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Choose the perfect plan to grow your business. High-quality services, transparent pricing, and guaranteed results.
        </motion.p>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="flex bg-white rounded-2xl shadow-xl p-2 border border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-4 px-2 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category Header & Mockup */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {tabs.find(t => t.id === activeTab)?.label}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Tailored solutions for your business needs. Our {activeTab} packages are designed to provide maximum value and ROI.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-primary-600 font-medium">
                    <FaCheckCircle /> <span>Transparent Pricing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary-600 font-medium">
                    <FaShieldAlt /> <span>Quality Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary-600 font-medium">
                    <FaRocket /> <span>Fast Delivery</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="rounded-3xl overflow-hidden shadow-2xl relative group"
                >
                  <img 
                    src={pricingData[activeTab].image} 
                    alt={activeTab} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <p className="text-white font-medium italic">Ruthra Digital Solutions - Premium {tabs.find(t => t.id === activeTab)?.label}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Pricing Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {pricingData[activeTab].plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className={`relative flex flex-col bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-300 ${
                    plan.popular ? 'border-primary-500 shadow-primary-100' : 'border-transparent'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-xs text-primary-600 font-medium mb-6 uppercase tracking-widest">{plan.bestFor}</p>
                  
                  <div className="mb-8">
                    <span className="text-3xl font-extrabold">₹{plan.price}</span>
                    <span className="text-gray-500 text-sm ml-1">{activeTab === 'marketing' ? '/mo' : ''}</span>
                  </div>

                  <ul className="flex-1 space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handleOpenModal(plan)}
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl hover:opacity-90 active:scale-95`}
                  >
                    Get Started
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Sections for specific tabs */}
            {activeTab === 'hotel' && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center mb-10">Monthly Growth Services</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {pricingData.hotel.monthly.map((m, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                      <h4 className="font-bold text-lg mb-2">{m.name}</h4>
                      <p className="text-primary-600 font-bold mb-4">{m.price}</p>
                      <ul className="space-y-2 mb-6">
                        {m.features.map((f, fi) => (
                          <li key={fi} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mr-2" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => handleOpenModal(m)}
                        className="w-full py-2 rounded-lg font-semibold border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
                      >
                        Enquire Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'marketing' && (
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                {pricingData.marketing.specialized.map((sec, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50">
                    <h3 className="text-2xl font-bold mb-2">{sec.name}</h3>
                    {sec.desc && <p className="text-gray-500 mb-6">{sec.desc}</p>}
                    <div className="space-y-4">
                      {sec.items.map((item, ii) => (
                        <div key={ii} className="flex justify-between items-center p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors duration-200 group">
                          <span className="font-medium text-gray-700">{item.name}</span>
                          <div className="flex items-center space-x-4">
                            <span className="font-bold text-primary-600">{item.price}</span>
                            <button 
                              onClick={() => handleOpenModal(item)}
                              className="opacity-0 group-hover:opacity-100 bg-primary-600 text-white text-xs px-3 py-1 rounded-md transition-all duration-200"
                            >
                              Book
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add-ons for Website and Hotel */}
            {(activeTab === 'website' || activeTab === 'hotel') && (
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-50 mb-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Additional Services</h3>
                    <p className="text-gray-500">Enhance your digital presence with these specialized add-ons.</p>
                  </div>
                  <FaChartLine className="text-5xl text-primary-100 hidden md:block" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pricingData[activeTab]?.additional?.map((add, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between group">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-semibold text-gray-800">{add.name}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-primary-600 font-bold">{add.price}</span>
                        <button 
                          onClick={() => handleOpenModal(add)}
                          className="opacity-0 group-hover:opacity-100 text-primary-600 text-xs font-bold hover:underline"
                        >
                          Enquire
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-primary-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <FaRocket className="text-9xl rotate-12" />
              </div>
              <h3 className="text-3xl font-bold mb-4 relative z-10">Not Sure Which Plan is Right for You?</h3>
              <p className="text-primary-100 mb-8 max-w-xl mx-auto relative z-10">
                Contact our experts for a free consultation. We'll help you find the perfect solution tailored to your business goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Link 
                  to="/#contact" 
                  className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Contact Us Now
                </Link>
                <a href="https://wa.me/919626380310" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <FaWhatsapp className="text-xl" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="bg-primary-600 p-6 text-white text-center">
                <h3 className="text-2xl font-bold">Book Your Professional Service</h3>
                {selectedPlan && (
                  <p className="text-primary-100 mt-2 font-medium">Plan: {selectedPlan.name}</p>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="WhatsApp number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Business Name</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    placeholder="Optional"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Tell us more about your needs</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Briefly describe your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 py-3 px-4 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-2 bg-primary-600 text-white py-3 px-8 rounded-xl font-bold shadow-lg hover:bg-primary-700 active:scale-95 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
                <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest">
                  Ruthra Digital Solutions - Premium Business Growth
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Pricing;
