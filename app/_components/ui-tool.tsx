"use client";

import React from "react";

interface ToolCard {
  name: string;
  description: string;
  image: string;
}

const webDevTools: ToolCard[] = [
  {
    name: "Figma",
    description: "The React framework for production",
    image: "https://static.vecteezy.com/system/resources/previews/065/386/871/non_2x/figma-logo-icon-figma-app-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.png",
  },
  {
    name: "Adobe XD",
    description: "Utility-first CSS framework",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png",
  },
  {
    name: "Sketch",
    description: "Typed JavaScript superset",
    image: "https://static.vecteezy.com/system/resources/previews/046/437/262/non_2x/sketch-logo-transparent-free-png.png",
  },
  {
    name: "UXPin",
    description: "Modern database toolkit",
    image: "https://www.bookmarks.design/media/image/uxpin.jpg",
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

export default function UIToolsCards() {
  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Modern UI/UX Tools
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
