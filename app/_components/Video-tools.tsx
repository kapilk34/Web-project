"use client";

import React from "react";

interface ToolCard {
  name: string;
  description: string;
  image: string;
}

const webDevTools: ToolCard[] = [
  {
    name: "Adobe Premiere Pro",
    description: "The React framework for production",
    image: "https://w7.pngwing.com/pngs/517/344/png-transparent-adobe-premiere-pro-premiere-pro-multimedia-software-aplication-app-adobe-family-software-icon.png",
  },
  {
    name: "Adobe After Effects",
    description: "Utility-first CSS framework",
    image: "https://w7.pngwing.com/pngs/384/735/png-transparent-adobe-after-effects-computer-icons-adobe-creative-cloud-adobe-animate-animation-purple-violet-logo.png",
  },
  {
    name: "Final Cut Pro",
    description: "Typed JavaScript superset",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSvbAoTpB4_kaLqaP2vMACW5ZyXFrZleH0g&s",
  },
  {
    name: "Blender",
    description: "Modern database toolkit",
    image: "https://download.blender.org/branding/community/blender_community_badge_orange.png",
  },
];

const ToolCard: React.FC<{ tool: ToolCard }> = ({ tool }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 transform ">
      <div className="p-6 flex flex-col items-center text-center relative z-10">
        <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full p-4 mb-5 shadow-inner">
          <img src={tool.image} alt={tool.name} className="w-12 h-12 object-contain" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
      </div>
    </div>
  );
};

export default function VideoToolsCards() {
  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Modern Video Editing Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
           Innovative UI/UX solutions for crafting seamless and visually compelling <br/>digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {webDevTools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
