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
            <div className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[100px] opacity-60"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full"
                        >
                            Powerful Advantages
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Choose Our DMS?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Designed for hotels of all sizes, from boutique to luxury chains, seeking operational excellence.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                title: 'Direct Revenue Growth',
                                desc: 'Eliminate OTA commissions and boost your bottom line with a high-converting direct booking engine designed to maximize ROI.',
                                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
                                color: 'indigo'
                            },
                            {
                                title: 'Superior Guest Loyalty',
                                desc: 'Deliver hyper-personalized experiences with smart guest profiling and contactless services that build lasting brand affinity.',
                                image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800',
                                color: 'purple'
                            },
                            {
                                title: 'Zero-Touch Automation',
                                desc: 'Streamline 40% of manual operations with intelligent workflows, real-time sync across channels, and automated inventory control.',
                                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
                                color: 'pink'
                            }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10, rotateY: 5, rotateX: -5 }}
                                className="group relative bg-white rounded-[32px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 transform-gpu transition-all duration-500 hover:shadow-2xl"
                                style={{ perspective: '1000px' }}
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                                    <img 
                                        src={benefit.image} 
                                        alt={benefit.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className={`absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl z-20 flex items-center justify-center border border-white/30`}>
                                        <div className={`w-3 h-3 rounded-full bg-white`}></div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">{benefit.desc}</p>
                                    <div className={`mt-6 inline-flex items-center text-sm font-bold text-indigo-600 group-hover:translate-x-2 transition-transform`}>
                                        Learn more <span className="ml-2">→</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        Feature-Rich Platform
                    </motion.span>
                    <h2 className="text-4xl font-black text-gray-900 mb-4">Comprehensive Modules</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">A unified ecosystem engineered to manage every facet of your hospitality business.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        ...features,
                        {
                            title: 'Reputation Management',
                            desc: 'Automatically collect and manage guest reviews across Google, TripAdvisor, and social media.',
                            icon: <FaChartLine className="text-indigo-600" />
                        },
                        {
                            title: 'Revenue Management',
                            desc: 'Intelligent pricing algorithms that adjust rates based on demand, seasonality, and competitor data.',
                            icon: <FaChartLine className="text-indigo-600" />
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-10 bg-white rounded-3xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] border border-gray-50 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 transform group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-indigo-50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
                            
                            <div className="mt-8 pt-8 border-t border-gray-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-bold text-indigo-500 uppercase tracking-tighter">Standard Module</span>
                                <div className="w-8 h-px bg-indigo-100"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Dashboard Showcase Section */}
            <div className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">📊 Smart Dashboard</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Real-Time Analytics at Your Fingertips
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Monitor your hotel's performance with our intuitive dashboard. Track occupancy rates, revenue trends, room availability, and guest insights — all in one centralized view.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Live occupancy & revenue tracking',
                                    'Room availability grid with drag-and-drop',
                                    'Daily, weekly & monthly performance reports',
                                    'Staff productivity & housekeeping status'
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
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl blur-lg opacity-20"></div>
                            <img
                                src="/images/hotel-dashboard.png"
                                alt="Hotel Management Dashboard"
                                className="relative rounded-xl shadow-2xl w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Online Booking Section */}
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
                                src="/images/hotel-booking.png"
                                alt="Hotel Online Booking System"
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
                            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">🌐 Direct Booking Engine</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Commission-Free Online Bookings
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Empower your guests to book directly from your website or mobile. Our booking engine offers a seamless experience with real-time availability, instant confirmation, and integrated payment processing.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { num: '0%', label: 'Commission Fees' },
                                    { num: '24/7', label: 'Booking Availability' },
                                    { num: '3x', label: 'More Direct Bookings' },
                                    { num: '< 2min', label: 'Booking Completion' }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-gray-50 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-indigo-600">{stat.num}</div>
                                        <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Guest Experience Section */}
            <div className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">🏨 Guest Experience</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Delight Every Guest, Every Stay
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                From contactless check-in to personalized room preferences, our platform helps you create memorable experiences that earn 5-star reviews and repeat bookings.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: 'Contactless Check-in/Check-out', desc: 'Guests can check in via mobile — no queues, no waiting.' },
                                    { title: 'Guest Preference Profiles', desc: 'Remember room temperature, pillow type, and dietary preferences.' },
                                    { title: 'Automated Feedback Collection', desc: 'Send review requests post-checkout to boost your ratings.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                        <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">{i + 1}</div>
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
                            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl blur-lg opacity-20"></div>
                            <img
                                src="/images/hotel-guest.png"
                                alt="Hotel Guest Experience"
                                className="relative rounded-xl shadow-2xl w-full"
                            />
                        </motion.div>
                    </div>
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
