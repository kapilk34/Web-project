"use client"

import React, { useState, useEffect } from 'react';
import { Clock, Star, ShoppingBag, Play, Check, MapPin, Phone, User, ChevronRight, Menu, Rocket, Code, Palette, Smartphone, Globe, BarChart2 } from 'lucide-react';

const UIHeroSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [activeTool, setActiveTool] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tools = [
    { icon: <Code size={20} />, name: "Clean Code", color: "text-blue-500" },
    { icon: <Palette size={20} />, name: "UI Design", color: "text-purple-500" },
    { icon: <Smartphone size={20} />, name: "Responsive", color: "text-green-500" },
    { icon: <Globe size={20} />, name: "SEO Optimized", color: "text-yellow-500" },
    { icon: <BarChart2 size={20} />, name: "Analytics", color: "text-red-500" }
  ];

  useEffect(() => {
    setIsAnimated(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Tool rotation animation
    const toolInterval = setInterval(() => {
      setActiveTool(prev => (prev + 1) % tools.length);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(toolInterval);
    };
  }, []);

  return (
    <div className=" bg-gradient-to-br from-pink-50 via-white to-cyan-50 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full opacity-40 blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full opacity-40 blur-xl animate-float-delay"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full opacity-20 blur-lg animate-float"></div>
      
      {/* Floating UI Elements */}
      <div 
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center p-3 animate-bounce-slow"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <Rocket className="text-purple-500 w-full h-full" />
      </div>
      
      <div 
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center p-2 animate-bounce-slow-delay"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        <Star className="text-yellow-400 w-full h-full" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 py-12 max-w-7xl mx-auto relative z-10">
        {/* Left Side - Content */}
        <div className={`flex-1 max-w-2xl transform transition-all duration-1000 ${isAnimated ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">We're accepting new projects</span>
            <ChevronRight className="ml-2 w-4 h-4 text-gray-500" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Make Your Website Not Just Seen,<br/> 
            <span className="relative inline-block">
              <span className="text-green-400 relative z-10">But Remembered</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-green-100 opacity-60 z-0"></span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
            We combine visual beauty with intuitive usability to create immersive experiences that capture attention, keep users engaged, and drive meaningful interaction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
              <Play className="mr-2 w-4 h-4" />
              Get Started
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 w-4 h-4" />
              Book a Call
            </button>
          </div>

          {/* Tools Carousel */}
          <div className="relative max-w-md h-12">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className={`absolute top-0 left-0 flex items-center space-x-3 px-4 py-2 bg-white rounded-lg shadow-sm transition-all duration-500 ${activeTool === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className={`${tool.color}`}>{tool.icon}</div>
                <span className="font-medium text-gray-700">{tool.name}</span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image and UI Elements */}
        <div className={`flex-1 relative mt-12 lg:mt-0 transform transition-all duration-1000 delay-300 ${isAnimated ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative max-w-lg mx-auto">
            {/* Main Device Mockup */}
            <div className="relative">
              <img 
                src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwqibrF56WTuEra5gpLyiNsO2BSQ1G3lX0Dqe7" 
                alt="Website design showcase"
              />
              
              {/* Floating metrics */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Check className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Satisfaction</p>
                    <p className="font-bold text-gray-800">100%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Clock className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Avg. Load Time</p>
                    <p className="font-bold text-gray-800">0.8s</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* User testimonial bubble */}
            <div className="absolute -bottom-10 right-0 bg-white p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <User className="text-purple-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 mb-1">"This design increased our conversions by 40%!"</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bounce-slow-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 7s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-bounce-slow-delay { animation: bounce-slow-delay 5s ease-in-out infinite 1s; }
      `}</style>
    </div>
  );
};

export default UIHeroSection;