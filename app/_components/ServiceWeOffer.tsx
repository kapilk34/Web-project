"use client";

import React, { useState } from 'react';
import { Code2, Database, Layers, Zap, Globe, Smartphone, Server } from 'lucide-react';
import { motion } from "framer-motion";

interface WebService {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  color: string;
}

const WebDevelopmentServices: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1);

  const webServices: WebService[] = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Creating stunning, responsive user interfaces that engage and convert visitors with modern frameworks and best practices. Our frontend solutions prioritize performance, accessibility, and pixel-perfect design across all devices.",
      icon: <Code2 className="w-6 h-6" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
      color: "text-blue-600"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Building robust server-side solutions with scalable architecture, secure APIs, and efficient database management. We engineer backend systems that handle high traffic while maintaining security and performance standards.",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"],
      color: "text-emerald-600"
    },
    {
      id: 3,
      title: "Full-Stack Solutions",
      description: "End-to-end web applications from concept to deployment, seamlessly integrating frontend and backend technologies. Our full-stack approach ensures cohesive architecture and optimized performance across all layers.",
      icon: <Layers className="w-6 h-6" />,
      technologies: ["MERN Stack", "JAMstack", "Serverless", "GraphQL", "REST APIs", "Microservices"],
      color: "text-purple-600"
    },
    {
      id: 4,
      title: "E-commerce Platforms",
      description: "Custom online stores with secure payment integration, inventory management, and optimized shopping experiences. We build e-commerce solutions that convert visitors into loyal customers with smooth checkout flows.",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Magento", "Custom Solutions"],
      color: "text-orange-600"
    },
    {
      id: 5,
      title: "Progressive Web Apps",
      description: "App-like experiences on the web with offline functionality, push notifications, and native mobile performance. Our PWAs deliver engagement rates comparable to native apps with the reach of the web.",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["PWA", "Service Workers", "Web Push", "IndexedDB", "Workbox", "Manifest"],
      color: "text-indigo-600"
    },
    {
      id: 6,
      title: "Performance Optimization",
      description: "Lightning-fast websites with optimized loading, SEO improvements, and enhanced UX through technical excellence. We analyze and optimize every aspect of your site to maximize conversion rates.",
      icon: <Zap className="w-6 h-6" />,
      technologies: ["Core Web Vitals", "Lighthouse", "Webpack", "CDN", "Image Optimization", "Lazy Loading"],
      color: "text-red-600"
    }
  ];

  const activeServiceData = webServices.find(service => service.id === activeService);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-black bg-clip-text text-transparent mb-6">
            Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We build digital experiences that combine cutting-edge technology<br/> with exceptional design
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Navigation */}
          <div className="lg:w-2/5">
            <div className=" lg:sticky lg:top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 hidden lg:block">Our Specializations</h3>
              <div className="flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 lg:overflow-visible">
                {webServices.map(service => (
                  <button 
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`
                      flex items-center gap-4 p-4 rounded-xl transition-all duration-300 min-w-max lg:min-w-0
                      ${activeService === service.id
                        ? `bg-white/30 backdrop-blur-md border border-white/20 shadow-lg`
                        : 'bg-white/70 hover:bg-white/80 text-gray-800 backdrop-blur-sm border border-white/10'
                      }
                    `}
                  >
                    <div className={`p-3 rounded-lg ${activeService === service.id ? 'bg-white/20' : 'bg-white/50'}`}>
                      {React.cloneElement(service.icon as React.ReactElement, {
                        className: `${service.color} w-6 h-6`
                      })}
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold">{service.title}</h4>
                      {/* <p className="text-sm opacity-80">{service.description.split('.')[0]}.</p> */}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            {activeServiceData && (
              <div className="relative">
                <div className="absolute -z-10 top-0 left-0 w-full h-full opacity-10 bg-white rounded-3xl blur-2xl" />

                <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/20">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className={`p-4 rounded-xl bg-white/30 backdrop-blur-sm border border-white/20 ${activeServiceData.color}`}>
                      {React.cloneElement(activeServiceData.icon as React.ReactElement, {
                        className: "w-8 h-8"
                      })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{activeServiceData.title}</h3>
                      <div className={`h-1.5 w-24 mt-2 rounded-full ${activeServiceData.color} bg-opacity-30`} />
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed mb-8">{activeServiceData.description}</p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies We Use</h4>
                    <div className="flex flex-wrap gap-3">
                      {activeServiceData.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-white/70 backdrop-blur-sm text-gray-800 border border-gray-200/50 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-200/50 gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Database className="w-4 h-4" />
                      <span>Enterprise-grade solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;