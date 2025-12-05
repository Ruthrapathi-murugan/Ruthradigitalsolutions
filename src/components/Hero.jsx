
import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);

    const handleMouseMove = (e) => {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      target.current.x = (nx - 0.5) * 2;
      target.current.y = (ny - 0.5) * 2;
    };

    const handleTouch = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      handleMouseMove(e.touches[0]);
    };

    const hero = heroRef.current;
    hero && hero.addEventListener('mousemove', handleMouseMove);
    hero && hero.addEventListener('touchmove', handleTouch, { passive: true });

    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.12);
      current.current.y = lerp(current.current.y, target.current.y, 0.12);

      const root = heroRef.current;
      if (root) {
        const rotateX = current.current.y * 8;
        const rotateY = current.current.x * 12;
        root.style.setProperty('--hero-rot-x', `${rotateX}deg`);
        root.style.setProperty('--hero-rot-y', `${rotateY}deg`);

        const blobs = root.querySelectorAll('[data-parallax]');
        blobs.forEach((el) => {
          const depth = Number(el.getAttribute('data-depth')) || 1;
          const tx = current.current.x * 30 * depth;
          const ty = current.current.y * 18 * depth;
          el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${1 + depth * 0.02})`;
        });

        const content = root.querySelectorAll('[data-content]');
        content.forEach((el) => {
          const dz = 20;
          el.style.transform = `translateZ(${dz}px) rotateX(${rotateX * 0.08}deg) rotateY(${rotateY * 0.08}deg)`;
        });
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      hero && hero.removeEventListener('mousemove', handleMouseMove);
      hero && hero.removeEventListener('touchmove', handleTouch);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-3d hero-gradient hero-noise preserve-3d"
      style={{
        transformStyle: 'preserve-3d',
        '--hero-rot-x': '0deg',
        '--hero-rot-y': '0deg',
      }}
    >
      <div className="hero-blob hero-blob--1" data-parallax data-depth="1.15" aria-hidden></div>
      <div className="hero-blob hero-blob--2" data-parallax data-depth="0.85" aria-hidden style={{ animation: 'floatSlight 8s ease-in-out infinite' }}></div>
      <div className="hero-blob hero-blob--3" data-parallax data-depth="0.55" aria-hidden style={{ animation: 'floatSlight 10s ease-in-out infinite' }}></div>

      <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none" aria-hidden></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-40 h-40 hero-shape preserve-3d" style={{ transform: 'translateZ(60px) rotateZ(-8deg)', animation: 'floatSlight 6s ease-in-out infinite' }} data-parallax data-depth="0.9" aria-hidden></div>
        <div className="absolute right-16 top-44 w-28 h-28 hero-shape rounded-full preserve-3d" style={{ transform: 'translateZ(48px) rotateZ(18deg)', animation: 'spinSlow 36s linear infinite' }} data-parallax data-depth="0.7" aria-hidden></div>
      </div>

      <div className="relative z-10 max-w-6xl px-6 text-center" data-content>
     
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mt-6">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-cyan-200 to-yellow-200">
            Ruthra Digital Solutions
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
          Transforming businesses with cutting-edge web development, modern hotel management systems and growth-focused digital marketing.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-3 rounded-lg font-semibold text-lg shadow-xl hero-button preserve-3d bg-white text-primary-700 hover:scale-105 transform transition-transform"
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateZ(30px) scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateZ(0) scale(1)')}
          >
            Our Services
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-lg font-semibold text-lg shadow-lg preserve-3d border border-white/30 text-white hover:bg-white hover:text-primary-700 transition-all"
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateZ(30px) scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateZ(0) scale(1)')}
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-12 top-1/3 w-16 h-16 p-2 rounded-lg bg-white/6 shadow-lg preserve-3d" data-parallax data-depth="1.2" style={{ transform: 'translateZ(60px)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-white/30">
            <path d="M12 2v20" />
            <path d="M2 12h20" />
          </svg>
        </div>

        <div className="absolute right-24 top-1/4 w-12 h-12 rounded-full bg-white/6 preserve-3d flex items-center justify-center" data-parallax data-depth="0.8" style={{ transform: 'translateZ(40px)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-white/30">
            <path d="M12 3v6" />
            <path d="M12 15v6" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 animate-bounce" aria-hidden>
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
