import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaGoogle, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa6";

const DigitalMarketing = () => {
    const strategies = [
        {
            title: 'Search Engine Optimization (SEO)',
            desc: 'Dominate search results and capture high-intent traffic with our technical and creative SEO strategies.',
            points: ['Keyword Research', 'On-Page Optimization', 'Backlink Building'],
            image: '/images/strategies/seo_strategy.png',
            color: 'from-blue-600 to-indigo-600'
        },
        {
            title: 'Social Media Marketing',
            desc: 'Build a community that converts. We create viral-ready content tailored for every social ecosystem.',
            points: ['Content Creation', 'Community Management', 'Paid Social Campaigns'],
            image: '/images/strategies/social_media_strategy.png',
            color: 'from-pink-600 to-purple-600'
        },
        {
            title: 'Pay-Per-Click (PPC)',
            desc: 'Stop wasting ad spend. Get instant visibility with high-performance campaigns that scale with your growth.',
            points: ['Google Ads', 'Facebook Ads', 'ROI Tracking'],
            image: '/images/strategies/ppc_strategy.png',
            color: 'from-green-600 to-emerald-600'
        },
        {
            title: 'Content Marketing',
            desc: 'Tell your brand story with authority. We deliver value that educates, engages, and converts your audience.',
            points: ['Blog Writing', 'Video Production', 'Infographics'],
            image: '/images/strategies/content_marketing_strategy.png',
            color: 'from-orange-600 to-amber-600'
        },
        {
            title: 'Influencer Marketing',
            desc: 'Leverage trust. Partner with authentic voices to amplify your brand message across the right channels.',
            points: ['Brand Collaborations', 'Influencer ROI Tracking', 'Viral Campaigns'],
            image: '/images/strategies/influencer_marketing_strategy.png',
            color: 'from-purple-600 to-blue-600'
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
        <div className="pt-20 min-h-screen bg-gray-50/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-indigo-900 rounded-[40px] shadow-2xl overflow-hidden text-white p-12 md:p-20 text-center"
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-indigo-950/80 mix-blend-multiply z-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent to-black/20 z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                            alt="Digital Marketing Analytics"
                            className="w-full h-full object-cover opacity-60"
                        />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-8 relative z-10 tracking-tight leading-tight">Digital Marketing <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Mastery</span></h1>
                    <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto relative z-10 font-medium">
                        Accelerate your growth with high-precision, data-driven strategies that turn attention into conversion.
                    </p>
                    <button
                        onClick={goToContact}
                        className="bg-white text-indigo-900 font-black py-4 px-12 rounded-2xl hover:bg-blue-50 transition duration-300 shadow-2xl relative z-10 transform hover:-translate-y-1"
                    >
                        Scale Your Brand Now
                    </button>
                </motion.div>

                {/* Strategy Grid */}
                <div className="mt-32 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-indigo-600 to-transparent mb-8"></div>
                    <div className="text-center mb-20 pt-16">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full"
                        >
                            Our Core Arsenal
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">Our Proven Strategies</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">We don't follow trends. We set them with high-precision tactics designed for scale.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {strategies.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                style={{ perspective: "1500px" }}
                            >
                                <motion.div
                                    whileHover={{ rotateY: 8, rotateX: -5, translateZ: 20 }}
                                    className="bg-white rounded-[40px] overflow-hidden shadow-[0_25px_80px_-20px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col h-full transform-gpu transition-all duration-500 hover:shadow-2xl"
                                >
                                    <div className="h-72 relative overflow-hidden group">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 z-10`}></div>
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute bottom-6 left-6 z-20">
                                            <span className="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}></div>
                                                Strategy Focus
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-10 flex-1 flex flex-col">
                                        <h3 className="text-3xl font-black text-gray-900 mb-5 tracking-tight">{item.title}</h3>
                                        <p className="text-gray-500 mb-8 text-lg font-medium leading-relaxed flex-1">{item.desc}</p>
                                        
                                        <div className="space-y-4">
                                            <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Key Focus Areas</div>
                                            <div className="flex flex-wrap gap-3">
                                                {item.points.map((point, idx) => (
                                                    <span key={idx} className="bg-gray-50 text-gray-700 px-5 py-2.5 rounded-2xl text-sm font-bold border border-gray-100 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
                                                        {point}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="mt-10 pt-8 border-t border-gray-50 flex justify-between items-center group">
                                            <span className="text-indigo-600 font-black text-sm uppercase tracking-tighter">Explore Strategy</span>
                                            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:translate-x-1">
                                                →
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Social Media Demo Section */}
                <div className="mt-24 py-16 bg-white rounded-3xl overflow-hidden relative shadow-lg">
                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-3xl font-bold text-gray-900">Social Media Advertisements</h2>
                        <p className="mt-4 text-gray-600">See how we capture attention on Instagram, Facebook, LinkedIn, Google, YouTube, and WhatsApp.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-12 relative z-10 px-6">
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
                                        <span className="text-white font-bold text-sm">Ruthra Digital Solutions</span>
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
                                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">R</div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-sm">Ruthra Digital Solutions</div>
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
                                    <div className="text-xs text-gray-500">RUTHRADIGITALSOLUTIONS.COM</div>
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

                        {/* LinkedIn Ad Mockup */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-blue-700 font-bold mb-4 flex items-center"><span className="text-2xl mr-2">in</span> LinkedIn Sponsored Ad</div>
                            <div className="w-[340px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                                {/* Header */}
                                <div className="p-3 flex items-start gap-3 border-b border-gray-100">
                                    <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-lg shrink-0">R</div>
                                    <div className="flex-1">
                                        <div className="font-bold text-gray-900 text-sm">Ruthra Digital Solutions</div>
                                        <div className="text-xs text-gray-500">12,450 followers</div>
                                        <div className="text-xs text-gray-400 mt-0.5">Promoted</div>
                                    </div>
                                    <div className="text-gray-400">•••</div>
                                </div>

                                {/* Text Content */}
                                <div className="px-3 py-3 text-sm text-gray-800">
                                    🚀 Looking to scale your business digitally? We help brands grow with data-driven marketing, SEO, and social media strategies. Let's connect!
                                    <span className="text-blue-600 text-xs block mt-1">#DigitalMarketing #SEO #GrowYourBrand</span>
                                </div>

                                {/* Image Content */}
                                <div className="relative aspect-[1.91/1] bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 flex items-center justify-center">
                                    <div className="text-center text-white p-6">
                                        <div className="text-2xl font-bold mb-2">Grow Your Business</div>
                                        <div className="text-sm opacity-80 mb-4">Digital Marketing Solutions That Deliver Results</div>
                                        <div className="inline-block bg-white text-blue-700 font-bold px-5 py-2 rounded-full text-sm">Get Started →</div>
                                    </div>
                                </div>

                                {/* Engagement Footer */}
                                <div className="p-3 border-t border-gray-100">
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                                        <div className="flex items-center gap-1">👍 💡 ❤️ <span>1,832</span></div>
                                        <div>86 comments · 42 reposts</div>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-100 pt-2">
                                        <button className="flex-1 py-1 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded text-xs font-semibold gap-1">👍 Like</button>
                                        <button className="flex-1 py-1 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded text-xs font-semibold gap-1">💬 Comment</button>
                                        <button className="flex-1 py-1 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded text-xs font-semibold gap-1">🔄 Repost</button>
                                        <button className="flex-1 py-1 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded text-xs font-semibold gap-1">✉️ Send</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Google Search Ad Mockup */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-green-600 font-bold mb-4 flex items-center"><span className="text-2xl mr-2">G</span> Google Search Ad</div>
                            <div className="w-[340px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                                {/* Google Search Bar */}
                                <div className="p-4 border-b border-gray-100 bg-gray-50">
                                    <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2.5 shadow-sm">
                                        <span className="text-xl mr-3">🔍</span>
                                        <span className="text-gray-800 text-sm">best digital marketing agency</span>
                                    </div>
                                </div>

                                {/* Ad Result 1 */}
                                <div className="p-4 border-b border-gray-100 hover:bg-gray-50 transition">
                                    <div className="flex items-center gap-1 mb-1">
                                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded">Sponsored</span>
                                    </div>
                                    <div className="text-xs text-green-700 mb-0.5">www.ruthradigitalsolutions.com</div>
                                    <div className="text-blue-800 font-semibold text-base mb-1 hover:underline cursor-pointer">Ruthra Digital Solutions — #1 Digital Marketing Agency</div>
                                    <p className="text-gray-600 text-xs leading-relaxed">Grow your business with expert SEO, social media marketing, PPC campaigns & web development. 150+ happy clients. Get a free consultation today!</p>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                                        <span className="text-blue-700 text-xs hover:underline cursor-pointer">📞 Call Now</span>
                                        <span className="text-blue-700 text-xs hover:underline cursor-pointer">📍 Palani, TN</span>
                                        <span className="text-blue-700 text-xs hover:underline cursor-pointer">⭐ 4.9 Rating</span>
                                    </div>
                                </div>

                                {/* Ad Result 2 */}
                                <div className="p-4 border-b border-gray-100 hover:bg-gray-50 transition">
                                    <div className="flex items-center gap-1 mb-1">
                                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded">Sponsored</span>
                                    </div>
                                    <div className="text-xs text-green-700 mb-0.5">www.example-agency.com</div>
                                    <div className="text-blue-800 font-semibold text-sm mb-1">Example Marketing Agency — Digital Growth Partner</div>
                                    <p className="text-gray-600 text-xs leading-relaxed">Full-service digital marketing solutions for modern businesses. SEO, PPC, and more.</p>
                                </div>

                                {/* Organic Result */}
                                <div className="p-4 hover:bg-gray-50 transition">
                                    <div className="text-xs text-green-700 mb-0.5">www.another-example.com</div>
                                    <div className="text-blue-800 font-semibold text-sm mb-1">Top 10 Digital Marketing Agencies in 2025</div>
                                    <p className="text-gray-600 text-xs leading-relaxed">Discover the best digital marketing agencies that deliver proven results...</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* YouTube Ad Mockup */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-red-600 font-bold mb-4 flex items-center"><span className="text-2xl mr-2">▶️</span> YouTube Pre-Roll Ad</div>
                            <div className="w-[340px] bg-black rounded-xl shadow-xl border border-gray-800 overflow-hidden">
                                {/* Video Player Area */}
                                <div className="relative aspect-video bg-gray-900">
                                    <video
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {/* Ad Badge */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="bg-yellow-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded">Ad</span>
                                                <span className="text-white text-xs">0:15</span>
                                            </div>
                                            <button className="bg-white text-black text-xs font-bold px-3 py-1 rounded hover:bg-gray-200 transition">Skip Ad →</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Ad Info Card */}
                                <div className="bg-gray-900 p-3 border-t border-gray-700">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold shrink-0">R</div>
                                        <div className="flex-1">
                                            <div className="font-bold text-white text-sm">Ruthra Digital Solutions</div>
                                            <div className="text-gray-400 text-xs mt-0.5">ruthradigitalsolutions.com</div>
                                            <p className="text-gray-300 text-xs mt-1">Transform your business with expert digital marketing 🚀</p>
                                        </div>
                                    </div>
                                    <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded transition">Visit Website</button>
                                </div>

                                {/* YouTube Controls */}
                                <div className="bg-gray-900 px-3 pb-3 flex items-center justify-between text-gray-400">
                                    <div className="flex items-center gap-4 text-xs">
                                        <span>👍 1.2K</span>
                                        <span>👎</span>
                                        <span>↗️ Share</span>
                                    </div>
                                    <span className="text-xs">•••</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* WhatsApp Business Ad Mockup */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-green-600 font-bold mb-4 flex items-center"><span className="text-2xl mr-2">💬</span> WhatsApp Business Ad</div>
                            <div className="w-[280px] bg-[#e5ddd5] rounded-[2rem] border-8 border-gray-900 overflow-hidden shadow-2xl">
                                {/* WhatsApp Header */}
                                <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">R</div>
                                    <div className="flex-1">
                                        <div className="text-white font-bold text-sm">Ruthra Digital Solutions</div>
                                        <div className="text-green-200 text-[10px]">Business Account · Online</div>
                                    </div>
                                    <div className="flex gap-3 text-white text-sm">
                                        <span>📹</span>
                                        <span>📞</span>
                                        <span>⋮</span>
                                    </div>
                                </div>

                                {/* Chat Area */}
                                <div className="p-3 space-y-3 min-h-[320px] bg-[url('https://i.pinimg.com/originals/97/c0/07/97c00759d90d786d9b6096cb1f08e6f5.jpg')] bg-cover bg-center relative">
                                    <div className="absolute inset-0 bg-[#e5ddd5]/80"></div>
                                    <div className="relative z-10 space-y-3">
                                        {/* Business Message */}
                                        <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[85%] shadow-sm">
                                            <p className="text-gray-800 text-xs leading-relaxed">👋 Welcome to <strong>Ruthra Digital Solutions!</strong></p>
                                            <p className="text-gray-600 text-xs mt-2">We offer:</p>
                                            <p className="text-gray-700 text-xs mt-1">🌐 Web Development</p>
                                            <p className="text-gray-700 text-xs">📱 Social Media Marketing</p>
                                            <p className="text-gray-700 text-xs">📈 SEO & Google Ads</p>
                                            <p className="text-gray-700 text-xs">🎯 Influencer Marketing</p>
                                            <div className="text-[10px] text-gray-400 text-right mt-1">10:30 AM ✓✓</div>
                                        </div>

                                        {/* Promotional Card */}
                                        <div className="bg-white rounded-lg rounded-tl-none max-w-[85%] shadow-sm overflow-hidden">
                                            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 text-center">
                                                <div className="text-white font-bold text-sm">🔥 Special Offer!</div>
                                                <div className="text-white/90 text-xs mt-1">Get 20% OFF on your first project</div>
                                            </div>
                                            <div className="p-3">
                                                <p className="text-gray-700 text-xs">Limited time offer for new clients. Start your digital journey today!</p>
                                                <div className="text-[10px] text-gray-400 text-right mt-1">10:31 AM ✓✓</div>
                                            </div>
                                        </div>

                                        {/* Reply */}
                                        <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none p-3 max-w-[75%] ml-auto shadow-sm">
                                            <p className="text-gray-800 text-xs">Hi! I'm interested in your services 🙌</p>
                                            <div className="text-[10px] text-gray-500 text-right mt-1">10:32 AM ✓✓</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Reply Buttons */}
                                <div className="bg-[#e5ddd5] px-3 pb-2 pt-1 flex flex-wrap gap-1.5 relative z-10">
                                    <button className="bg-white text-green-700 text-[10px] font-medium px-3 py-1.5 rounded-full border border-green-200 shadow-sm">📞 Call Us</button>
                                    <button className="bg-white text-green-700 text-[10px] font-medium px-3 py-1.5 rounded-full border border-green-200 shadow-sm">💰 Get Quote</button>
                                    <button className="bg-white text-green-700 text-[10px] font-medium px-3 py-1.5 rounded-full border border-green-200 shadow-sm">🌐 Visit Site</button>
                                </div>

                                {/* Input Bar */}
                                <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2">
                                    <span className="text-xl">😊</span>
                                    <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-xs text-gray-400">Type a message...</div>
                                    <span className="text-xl">🎤</span>
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
