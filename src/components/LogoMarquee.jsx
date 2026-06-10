import React from "react";

const logos = [
  {
    id: 8,
    name: "Shri Valli Residency",
    logo: "/logos/valli-residency.png",
    url: "https://www.shrivalliresidency.com/",
  },
  {
    id: 1,
    name: "Sampath Residency",
    logo: "/logos/logo.jpg",
    url: "https://sampathresidency-palani.netlify.app/",
  },
  {
    id: 2,
    name: "Just Creative Designs",
    logo: "/logos/jcd.png",
    url: "https://www.jcdinterior.com/",
  },
  {
    id: 3,
    name: "Ultra Waves NDT Services",
    logo: "/logos/logodheena.jpeg",
    url: "https://ultrawavesndtservices.netlify.app/",
  },
  {
    id: 4,
    name: "Ruthra Digital Solutions",
    logo: "/logos/ruthra-logo.png",
    url: "https://www.ruthradigitalsolutions.com/",
  },
  {
    id: 5,
    name: "PVT Residency",
    logo: "/logos/Logo.jpeg",
    url: "https://pvtresidency.netlify.app/",
  },
  {
    id: 6,
    name: "Eshwaraa Cottage",
    logo: "/logos/cottage.jpg",
    url: "https://eshwaraacottage.netlify.app/",
  },
  {
    id: 7,
    name: "Royal Ayurvedic Body Massage",
    logo: "/logos/spa_royal.png",
    url: "https://www.royalayurvedicbodymassage.com/",
  },
  {
    id: 9,
    name: "Dhivyam Residency",
    logo: "/logos/logo_dhivyam.jpg",
    url: "https://www.dhivyamresidency.com/",
  },
  {
    id: 10,
    name: "Mayura Residency",
    logo: "/logos/mayura-logo.svg",
    url: "https://mayuraresidency.netlify.app/",
  }
];

const LogoMarquee = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
      <h3 className="text-center text-2xl font-bold text-gray-800 dark:text-white mb-8">
        Trusted by Our Clients
      </h3>

      <div className="relative w-full overflow-hidden group">
        {/* Marquee */}
        <div
          className="
            flex w-max gap-16
            animate-marquee
            md:animate-marquee-slow
            group-hover:[animation-play-state:paused]
          "
        >
          {[...logos, ...logos].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center "
            >
              <img
                src={item.logo}
                alt={item.name}
                title={item.name}
                className="
                  h-16 w-auto object-contain  bg-white
                  dark:brightness-90
                  hover:grayscale-0 hover:scale-110
                  transition-all duration-300
                "
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
