"use client";

import React from "react";

interface ToolCard {
  name: string;
  description: string;
  image: string;
//   category: string;
}

const webDevTools: ToolCard[] = [
  {
    name: "Adobe Photoshop",
    description: "The React framework for production",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/500px-Adobe_Photoshop_CC_icon.svg.png",
    // category: "Framework",
  },
  {
    name: "Canva",
    description: "Utility-first CSS framework",
    image: "https://logos-world.net/wp-content/uploads/2020/02/Canva-New-Logo.png",
    // category: "Styling",
  },
  {
    name: "Adobe Illustrator",
    description: "Typed JavaScript superset",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png",
    // category: "Framework",
  },
  {
    name: "CorelDRAW",
    description: "Modern database toolkit",
    image: "https://brandlogos.net/wp-content/uploads/2025/03/coreldraw-logo_brandlogos.net_96dfz.png",
    // category: "Framework",
  },
//   {
//     name: "Javascript",
//     description: "Cloud platform for frontend",
//     image: "https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png",
//     // category: "Language",
//   },
//   {
//     name: "MongoDB",
//     description: "Identity management",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChJIoeZ5_EvvIHB3P8aWGTQp3WufGdm5QCQ&s",
//     // category: "Database",
//   },
//   {
//     name: "Express.js",
//     description: "JavaScript bundler",
//     image: "https://www.manektech.com/storage/developer/1646733543.webp",
//     // category: "Build Tool",
//   },
//   {
//     name: "Node.js",
//     description: "JavaScript linter",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
//     // category: "Backend Framework",
//   },
];

const ToolCard: React.FC<{ tool: ToolCard }> = ({ tool }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 transform ">
      <div className="p-6 flex flex-col items-center text-center relative z-10">
        <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full p-4 mb-5 shadow-inner">
          <img src={tool.image} alt={tool.name} className="w-12 h-12 object-contain" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
        {/* <p className="text-sm text-gray-500 dark:text-gray-400">{tool.category}</p> */}
      </div>

      {/* Hidden description box */}
      {/* <div className="absolute inset-0 flex items-end justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 z-20">
        <p className="text-sm text-gray-700 dark:text-gray-200">{tool.description}</p>
      </div> */}
    </div>
  );
};

export default function GraphicToolsCards() {
  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Modern Graphic Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful creativity for crafting exceptional visual experiences
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
