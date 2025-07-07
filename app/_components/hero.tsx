"use client";

import React from "react";
import { motion } from "framer-motion";

const orbitIcons = [
  {
    id: 1,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    angle: 0,
  },
  {
    id: 2,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    angle: 72,
  },
  {
    id: 3,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    angle: 144,
  },
  {
    id: 4,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    angle: 216,
  },
  {
    id: 5,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    angle: 288,
  },
//   {
//     id: 6,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0_yhGEmhIF8QjL7poBJqowjSlIw0kKKOJA&s",
//     angle: 360,
//   },
];

const rotateOrbit = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 20,
      ease: "linear",
    },
  },
};

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build. Launch. Grow.
                <br />
                We Create{" "}
                <span className="text-green-500 relative">Digital Experiences.</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                We design and develop responsive, high-performing websites that help your
                business grow and stand out online.
              </p>
            </div>
          </div>

          {/* Right - Orbit UI */}
          <div className="relative flex justify-center items-center">
            {/* Orbit Container */}
            <motion.div
              variants={rotateOrbit}
              animate="animate"
              className="absolute w-96 h-96 rounded-full border border-dashed border-white/30"
            >
              {orbitIcons.map((icon) => {
                const radius = 220;
                const x = radius * Math.cos((icon.angle * Math.PI) / 180);
                const y = radius * Math.sin((icon.angle * Math.PI) / 180);
                return (
                  <motion.div
                    key={icon.id}
                    className="absolute w-10 h-10"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <img
                      src={icon.image}
                      alt="Tech Icon"
                      className="w-full h-full object-contain"
                      title={icon.image.split("/").pop()?.split("-")[0]?.toUpperCase()}
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Main Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full max-w-md h-96 flex items-center justify-center z-10"
            >
              <img
                src="https://gvu57hqxi3.ufs.sh/f/FOd38ztMu1UwHydJ2lNI50h6VMBPGnsak9oYCxpFQcEr4WLU"
                alt="Digital Experience"
                className="w-[90%] h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
