import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { FaCalendarCheck, FaConciergeBell, FaBroom, FaCreditCard, FaBoxOpen, FaChartLine } from 'react-icons/fa';


const HotelManagement = () => {
    const features = [
        {
            title: 'Booking Engine',
            desc: 'Seamless reservation system allowing guests to book directly from your website, commission-free.',
            icon: <FaCalendarCheck className="text-primary-600" />
        },
        {
            title: 'Front Desk Operations',
            desc: 'Efficient check-in/check-out, room assignment, and guest profile management.',
            icon: <FaConciergeBell className="text-primary-600" />
        },
        {
            title: 'Housekeeping',
            desc: 'Real-time room status updates and automated task assignment for staff.',
            icon: <FaBroom className="text-primary-600" />
        },
        {
            title: 'Point of Sale (POS)',
            desc: 'Integrated billing for restaurants, spas, and other hotel amenities.',
            icon: <FaCreditCard className="text-primary-600" />
        },
        {
            title: 'Inventory Management',
            desc: 'Track stock levels for housekeeping, restaurant, and bar supplies automatically.',
            icon: <FaBoxOpen className="text-primary-600" />
        },
        {
            title: 'Analytics & Reporting',
            desc: 'Comprehensive reports on occupancy, revenue, and guest demographics.',
            icon: <FaChartLine className="text-primary-600" />
        }
    ];

    const clients = [
        { name: 'Sampath Residency Palani', logo: '/logos/logo.jpg', link: 'https://sampathresidency-palani.netlify.app/' },
        { name: 'PVT Residency', logo: '/logos/Logo.jpeg', link: 'https://pvtresidency.netlify.app/' },
        { name: 'Eshwaraa Cottage', logo: '/logos/cottage.jpg', link: 'https://eshwaraacottage.netlify.app/' },
    ];

    const integrations = [
        { name: 'Make My Trip', logo: '/logos/makemytrip.svg' },
        { name: 'Goibibo', logo: '/logos/goibibo.svg' },
        { name: 'Agoda', logo: '/logos/agoda.svg' },
        { name: 'Booking.com', logo: '/logos/booking.svg' },
        { name: 'Expedia', logo: '/logos/expedia.svg' },
        { name: 'Airbnb', logo: '/logos/airbnb.svg' },
        { name: 'TripAdvisor', logo: '/logos/tripadvisor.svg' },
        { name: 'Stripe', logo: '/logos/stripe.svg' },
        { name: 'Razorpay', logo: '/logos/razorpay.svg' },
    ];

    const navigate = useNavigate();

    const goToContact = () => {
        navigate("/");

        setTimeout(() => {
            document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
            });
        }, 150);
    };

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white py-32">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        alt="Hotel Background"
                        className="w-full h-full object-cover opacity-40 filter brightness-75"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
                            Hotel Management Solutions
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-10 drop-shadow-md">
                            Streamline operations, maximize revenue, and elevate guest experiences with our all-in-one platform.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={goToContact}
                                className="bg-primary-600 border border-transparent text-white font-bold py-3 px-8 rounded-md hover:bg-primary-700 transition duration-300 shadow-lg"
                            >
                                Request Demo
                            </button>

                            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-gray-900 transition duration-300">
                                View Features
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Key Benefits */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Why Choose Our DMS?</h2>
                        <p className="mt-4 text-gray-600">Designed for hotels of all sizes, from boutique to luxury chains.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-3">Increase Revenue</h3>
                            <p className="text-gray-600">Optimize room rates with dynamic pricing and upsell amenities directly to guests.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-3">Enhance Guest Experience</h3>
                            <p className="text-gray-600">Provide contactless check-in and personalized services that keep guests coming back.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-pink-500 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold mb-3">Automate Operations</h3>
                            <p className="text-gray-600">Reduce manual work by up to 40% with automated workflows and instant sync.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Comprehensive Modules</h2>
                    <p className="mt-4 text-xl text-gray-600">Everything you need to run your hotel efficiently.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-5xl mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Integrations Section */}
            <div className="bg-indigo-900 py-16 text-white text-center">
                <h2 className="text-3xl font-bold mb-8">Seamless Integrations & OTAs</h2>
                <p className="mb-10 opacity-80 max-w-2xl mx-auto">We connect with your favorite tools including OTAs, Payment Gateways, and Accounting Software.</p>
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {integrations.map((integration, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center w-40 h-28">
                            <img 
                                src={integration.logo} 
                                alt={integration.name} 
                                title={integration.name} 
                                className="max-h-20 max-w-36 object-contain" 
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Clients Section */}
            <div className="py-20 bg-gray-50 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Leading Hotels</h2>
                <div className="flex flex-wrap justify-center gap-10 px-4">
                    {clients.map((client, index) => (
                        <a
                            key={index}
                            href={client.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center w-64 h-32 border border-gray-100"
                        >
                            <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" />
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default HotelManagement;
