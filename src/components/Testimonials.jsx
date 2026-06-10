import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    // Dynamically inject the Elfsight Platform script on mount
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* 3D Background Decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[120px] -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-[120px] translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-primary-600 uppercase bg-primary-50 rounded-full">
            Reviews
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Google Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Discover what our clients have to say about working with Ruthra Digital Solutions.
          </p>
        </div>

        {/* Elfsight Google Reviews Widget Container */}
        <div className="elfsight-app-300e1f55-a7b7-48e1-acc0-d9893456666b" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default Testimonials;
