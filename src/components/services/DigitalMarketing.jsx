import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGoogle, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa6";

const DigitalMarketing = () => {
    const strategies = [
        {
            title: 'Search Engine Optimization (SEO)',
            desc: 'Improve your website ranking on Google to attract organic traffic.',
            points: ['Keyword Research', 'On-Page Optimization', 'Backlink Building']
        },
        {
            title: 'Social Media Marketing',
            desc: 'Engage with your audience on platforms where they spend their time.',
            points: ['Content Creation', 'Community Management', 'Paid Social Campaigns']
        },
        {
            title: 'Pay-Per-Click (PPC)',
            desc: 'Immediate visibility and traffic through targeted ad campaigns.',
            points: ['Google Ads', 'Facebook Ads', 'ROI Tracking']
        },
        {
            title: 'Content Marketing',
            desc: 'Create valuable content that educates and converts your audience.',
            points: ['Blog Writing', 'Video Production', 'Infographics']
        }
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

    const client = { name: 'JCD Interior', logo: '/logos/jcd.png', link: 'https://www.jcdinterior.com/' };

    const platforms = [
        { name: 'Facebook', icon: <FaFacebook />, color: 'text-blue-600', border: 'border-blue-100', bg: 'hover:bg-blue-50' },
        { name: 'Instagram', icon: <FaInstagram />, color: 'text-pink-600', border: 'border-pink-100', bg: 'hover:bg-pink-50' },
        { name: 'Google Ads', icon: <FaGoogle />, color: 'text-green-600', border: 'border-green-100', bg: 'hover:bg-green-50' },
        { name: 'LinkedIn', icon: <FaLinkedin />, color: 'text-blue-700', border: 'border-blue-100', bg: 'hover:bg-blue-50' },
        { name: 'YouTube', icon: <FaYoutube />, color: 'text-red-600', border: 'border-red-100', bg: 'hover:bg-red-50' },
        { name: 'Whatsapp', icon: <FaWhatsapp />, color: 'text-green-600', border: 'border-green-100', bg: 'hover:bg-green-50' },
    ];

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-indigo-900 rounded-3xl shadow-2xl overflow-hidden text-white p-12 md:p-20 text-center"
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-indigo-900/80 mix-blend-multiply z-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-indigo-900/40 to-black/60 z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                            alt="Digital Marketing Analytics"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-overlay blur-3xl -translate-x-1/2 -translate-y-1/2 z-10"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 opacity-20 rounded-full mix-blend-overlay blur-3xl translate-x-1/3 translate-y-1/3 z-10"></div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">Digital Marketing Mastery</h1>
                    <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto relative z-10">
                        We craft data-driven strategies to amplify your brand, drive targeted traffic, and maximize your ROI.
                    </p>
                    <button
                        onClick={goToContact}
                        className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition duration-300 shadow-xl relative z-10"
                    >
                        Get Your Strategy
                    </button>

                </motion.div>

                {/* Strategy Grid */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Proven Strategies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {strategies.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600 mb-6">{item.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.points.map((point, idx) => (
                                        <span key={idx} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                            {point}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Social Media Demo Section */}
                <div className="mt-24 py-16 bg-white rounded-3xl overflow-hidden relative shadow-lg">
                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-3xl font-bold text-gray-900">Social Media Advertisements</h2>
                        <p className="mt-4 text-gray-600">See how we capture attention on Instagram and Facebook.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-16 relative z-10 px-6">
                        {/* Instagram Reel Mockup */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-pink-600 font-bold mb-4 flex items-center"><span className="text-2xl mr-2">📸</span> Instagram Reel Ad</div>
                            <div className="w-[280px] h-[580px] bg-black rounded-[2rem] border-8 border-gray-900 relative overflow-hidden shadow-2xl">
                                {/* Video Player */}
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    poster="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                >
                                    <source src="https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Instagram UI Overlays */}
                                <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
                                    <div className="text-white font-bold drop-shadow-md">Reels</div>
                                    <div className="text-white drop-shadow-md">📷</div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                                    <div className="flex items-center mb-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 mr-2"></div>
                                        <span className="text-white font-bold text-sm">Targeted Brand</span>
                                        <span className="ml-2 px-1 py-0.5 border border-white/50 text-white/[0.8] text-[10px] rounded">Sponsored</span>
                                    </div>
                                    <p className="text-white text-sm mb-4 line-clamp-2">Boost your sales with our proven strategies! 🚀 #marketing #growth</p>
                                    <div className="flex justify-between items-center text-white">
                                        <div className="flex flex-col items-center"><span className="text-xl">❤️</span><span className="text-xs">4.2k</span></div>
                                        <div className="flex flex-col items-center"><span className="text-xl">💬</span><span className="text-xs">128</span></div>
                                        <div className="flex flex-col items-center"><span className="text-xl">✈️</span></div>
                                        <div className="flex flex-col items-center"><span className="text-xl">⋮</span></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Facebook Feed Mockup */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-blue-600 font-bold mb-4 flex items-center"><span className="text-2xl mr-2">f</span> Facebook Feed Ad</div>
                            <div className="w-[340px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                                {/* Header */}
                                <div className="p-3 flex items-center justify-between border-b border-gray-100">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">B</div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-sm">Business Growth Experts</div>
                                            <div className="text-xs text-gray-500">Sponsored · 🌍</div>
                                        </div>
                                    </div>
                                    <div className="text-gray-400">•••</div>
                                </div>

                                {/* Text Content */}
                                <div className="px-3 py-2 text-sm text-gray-800">
                                    Stop guessing and start growing. Our data-driven marketing campaigns deliver real ROI. Book your consultation today! 📈
                                </div>

                                {/* Video Content */}
                                <div className="relative aspect-video bg-black">
                                    <video
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src="https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-busy-office-4392-large.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute bottom-2 right-2 bg-black/50 px-1 rounded text-white text-xs">0:15</div>
                                </div>

                                {/* CTA Bar */}
                                <div className="bg-gray-50 px-3 py-2 flex justify-between items-center border-b border-gray-100">
                                    <div className="text-xs text-gray-500">CORP.WEBSITE.COM</div>
                                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs px-3 py-1.5 rounded font-semibold transition">Learn More</button>
                                </div>

                                {/* Engagement Footer */}
                                <div className="p-2 border-t border-gray-100">
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2 px-1">
                                        <div className="flex items-center">👍 ❤️ 245</div>
                                        <div>24 Comments · 12 Shares</div>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-100 pt-1">
                                        <button className="flex-1 py-1 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded"><span className="mr-1">👍</span> Like</button>
                                        <button className="flex-1 py-1 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded"><span className="mr-1">💬</span> Comment</button>
                                        <button className="flex-1 py-1 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded"><span className="mr-1">↗️</span> Share</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Platforms Section */}
                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10">Platforms We Dominate</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.15, rotate: 3, transition: { type: "spring", stiffness: 300 } }}
                                className={`flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl w-36 md:w-44 cursor-default border ${platform.border} ${platform.bg} transition-colors duration-300`}
                            >
                                <div className={`text-5xl mb-4 ${platform.color} drop-shadow-sm`}>
                                    {platform.icon}
                                </div>
                                <span className={`font-bold text-lg ${platform.color} tracking-wide`}>
                                    {platform.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Clients Section */}
                <div className="mt-24 bg-white py-16 rounded-3xl shadow-sm border border-gray-100">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Happy Clients</h2>
                        <div className="flex flex-wrap justify-center gap-10 opacity-90 px-4">
                            <a
                                href={client.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center w-64 h-32 border border-gray-100"
                            >
                                <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">150+</div>
                        <div className="text-gray-600 text-sm">Clients Served</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">200%</div>
                        <div className="text-gray-600 text-sm">Avg ROAS</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">50k+</div>
                        <div className="text-gray-600 text-sm">Leads Generated</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
                        <div className="text-gray-600 text-sm">Support</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketing;
