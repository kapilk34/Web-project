import React from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  size: 'small' | 'medium' | 'large' | 'wide';
}

const GallerySection: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    { id: 1, title: "Modern Architecture", image: "", size: "medium" },
    { id: 2, title: "Urban Landscape", image: "", size: "wide" },
    { id: 3, title: "Minimalist Design", image: "", size: "small" },
    { id: 4, title: "Creative Workspace", image: "", size: "small" },
    { id: 5, title: "Nature Abstract", image: "", size: "medium" },
    { id: 6, title: "Digital Art", image: "", size: "small" },
    { id: 7, title: "Scenic View", image: "", size: "wide" },
    { id: 8, title: "Product Design", image: "", size: "small" },
  ];

  const getSizeClasses = (size: string) => {
    return `
      ${size === 'small' ? 'col-span-1 row-span-1' : ''}
      ${size === 'medium' ? 'col-span-1 row-span-2 sm:col-span-2 sm:row-span-1 md:col-span-1 md:row-span-2' : ''}
      ${size === 'large' ? 'col-span-2 row-span-2' : ''}
      ${size === 'wide' ? 'col-span-1 sm:col-span-2 row-span-1' : ''}
    `;
  };

  return (
    <section className="py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Our Workshops
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the visuals of our latest workshops, creative sessions, and inspiring projects.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${getSizeClasses(item.size)} group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer 
              border border-transparent hover:border-blue-400/30 hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.5)]`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300" />
                <div className="absolute inset-0 p-3 sm:p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-sm sm:text-lg font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
