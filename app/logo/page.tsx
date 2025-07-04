"use client";

import React from "react";

const LogoCarousel = () => {
  const logos = [
    { id: 1, name: 'Netflix', img: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456' },
    { id: 2, name: 'Google', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { id: 3, name: 'Apple', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { id: 4, name: 'Microsoft', img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { id: 5, name: 'Amazon', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { id: 6, name: 'Meta', img: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { id: 7, name: 'Tesla', img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
    { id: 8, name: 'Nike', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
    { id: 9, name: 'Spotify', img: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
    { id: 10, name: 'Adobe', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Adobe-logo.svg/2560px-Adobe-logo.svg.png' },
    { id: 11, name: 'Uber', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg' },
    { id: 12, name: 'Airbnb', img: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg' },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">
            Trusted by Leading Companies
          </h1>
          <p className="text-xl text-gray-500">
            Join thousands of companies who trust our platform
          </p>
        </div>

        <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white/10 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white/10 to-transparent z-10"></div>

          {/* Forward Carousel */}
          <div className="flex animate-scroll-left mb-8">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`forward-${index}`}
                className="flex-shrink-0 mx-6 group cursor-pointer"
              >
                <div className="w-32 h-20 bg-white/10 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-300">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  {logo.img ? (
                    <img src={logo.img} alt={logo.name} className="h-10 object-contain relative z-10" />
                  ) : (
                    <span className="text-white font-bold text-lg relative z-10">{logo.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Backward Carousel */}
          <div className="flex animate-scroll-right opacity-80">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`backward-${index}`}
                className="flex-shrink-0 mx-6 group cursor-pointer"
              >
                <div className="w-32 h-20 bg-white/10 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-300">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  {logo.img ? (
                    <img src={logo.img} alt={logo.name} className="h-10 object-contain relative z-10" />
                  ) : (
                    <span className="text-white font-bold text-lg relative z-10">{logo.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-600 mb-2">500+</div>
            <div className="text-gray-600">Companies Trust Us</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-600 mb-2">10M+</div>
            <div className="text-gray-600">Users Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;
