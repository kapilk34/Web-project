"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Zap, DollarSign, TrendingUp, Heart, MessageCircle, Share2, Users, Image, Palette, Layers, Type, Crop, Settings, Download } from 'lucide-react';

const SocialManagerLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState<Array<{id: number, x: number, y: number, icon: string, color: string}>>([]);
  const [activeTool, setActiveTool] = useState<string | null>(null);

  // Generate floating social icons
  useEffect(() => {
    const icons = [
      { id: 1, x: 85, y: 15, icon: 'facebook', color: 'bg-blue-500' },
      { id: 2, x: 10, y: 35, icon: 'twitter', color: 'bg-sky-400' },
      { id: 3, x: 90, y: 45, icon: 'instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
      { id: 5, x: 85, y: 75, icon: 'linkedin', color: 'bg-blue-600' },
      { id: 6, x: 5, y: 85, icon: 'message', color: 'bg-orange-500' },
    ];
    setFloatingIcons(icons);
  }, []);

  const SocialIcon = ({ type, className }: { type: string; className: string }) => {
    const iconMap = {
      facebook: <div className="w-6 h-6 bg-white rounded text-blue-500 flex items-center justify-center font-bold text-sm">f</div>,
      twitter: <MessageCircle className="w-6 h-6 text-white" />,
      instagram: <div className="w-6 h-6 bg-white rounded text-pink-500 flex items-center justify-center font-bold text-sm">@</div>,
      heart: <Heart className="w-6 h-6 text-white fill-current" />,
      linkedin: <Users className="w-6 h-6 text-white" />,
      message: <Share2 className="w-6 h-6 text-white" />,
    };
    
    return <div className={className}>{iconMap[type as keyof typeof iconMap]}</div>;
  };

  const graphicTools = [
    { name: 'Image Editor', icon: <Image className="w-6 h-6" />, description: 'Crop, resize, and enhance your images' },
    { name: 'Color Palette', icon: <Palette className="w-6 h-6" />, description: 'Create perfect color schemes' },
    { name: 'Layers', icon: <Layers className="w-6 h-6" />, description: 'Work with multiple design layers' },
    { name: 'Typography', icon: <Type className="w-6 h-6" />, description: 'Beautiful fonts for every post' },
    { name: 'Templates', icon: <Crop className="w-6 h-6" />, description: '100+ ready-to-use templates' },
    { name: 'Export', icon: <Download className="w-6 h-6" />, description: 'Save in multiple formats' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden relative">
      {/* Floating Social Icons */}
      {floatingIcons.map((icon) => (
        <div
          key={icon.id}
          className={`absolute w-12 h-12 ${icon.color} rounded-xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 animate-pulse`}
          style={{ 
            left: `${icon.x}%`, 
            top: `${icon.y}%`,
            animationDelay: `${icon.id * 0.5}s`,
            animationDuration: `${2 + icon.id * 0.3}s`
          }}
        >
          <SocialIcon type={icon.icon} className="" />
        </div>
      ))}

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Elevate Your Brand With <span className='text-green-500'>Visual Content</span> & Powerful Tools
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Create stunning social media graphics, manage all your accounts, and track performance - all in one place.
            </p>

            <div className="flex space-x-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                Start Designing
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10 p-4 ">
              <div>
                <img 
                  src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwEWQVoDRN98Yq5oMVpl3Pis7wxueh1Ofb0XF4"
                  alt="Social Media Manager"
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Floating Action Icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Heart className="w-8 h-8 text-white fill-current" />
              <span className="absolute -top-1 -right-1 bg-white text-red-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">24</span>
            </div>
            <div className="absolute top-20 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-sky-400 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Share2 className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Graphic Tools Section */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Powerful Graphic Tools</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Everything you need to create professional social media content without design skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graphicTools.map((tool) => (
              <div 
                key={tool.name}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        <div className="py-16 bg-white rounded-2xl shadow-lg mb-16 px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-20 blur-lg"></div>
                <img 
                  src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwEWQVoDRN98Yq5oMVpl3Pis7wxueh1Ofb0XF4"
                  alt="Design Preview"
                  className="relative rounded-xl shadow-2xl w-full"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Real-time Design Preview</h2>
              <p className="text-gray-600 text-lg">
                See your changes instantly with our live preview feature. Tweak colors, fonts, and layouts with immediate visual feedback.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">Drag-and-drop interface</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">1000+ premium design elements</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">AI-powered design suggestions</p>
                </li>
              </ul>
              <button className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:opacity-90">
                Try Design Studio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialManagerLanding;