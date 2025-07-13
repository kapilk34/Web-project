import React from 'react';

interface WebsiteType {
  name: string;
  backgroundImage: string;
}

const websiteTypes: WebsiteType[] = [
  {
    name: "Web Development",
    backgroundImage: "url('https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg')",
  },
  {
    name: "Web Design",
    backgroundImage: "url('https://careertraining.rowan.edu/common/images/1/16890/learn-web-design.jpg')",
  },
  {
    name: "UI/UX Design",
    backgroundImage: "url('https://mobitouch.net/_next/image?url=https%3A%2F%2Fnew.mobitouch.pl%2Fwp-content%2Fuploads%2F2023%2F09%2FUI-Designera_-Blog-Main.jpg&w=3840&q=75')",
  },
  {
    name: "Graphic Design",
    backgroundImage: "url('https://rmskytech.com/wp-content/uploads/2024/08/graphic-designer-hd-image.jpg.webp')",
  },
  {
    name: "Digital Marketing",
    backgroundImage: "url('https://digitaltrek.ca/wp-content/uploads/istockphoto-1443560890-612x612-1.jpg')",
  },
  {
    name: "Graphic Courses",
    backgroundImage: "url('https://www.dicsinnovatives.com/blog/wp-content/uploads/2024/05/Graphic-DesignTraining-Banner.jpg')",
  },
  {
    name: "Video Editing Courses",
    backgroundImage: "url('https://www.cdmi.in/courses@2x/5_Video_Editing.webp')",
  },
  {
    name: "Full Stack Courses",
    backgroundImage: "url('https://www.surat-training-course.com/ampimage/fullstackdevelopmentsurat.webp')",
  },
];

const WebsiteTypeCard: React.FC<{ websiteType: WebsiteType }> = ({ websiteType }) => {
  return (
    <div className="group relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-200/70 dark:border-gray-700/50">
      <div
        className="p-6 text-white relative h-48 flex items-end"
        style={{
          backgroundImage: `${websiteType.backgroundImage}`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

        <div className="relative z-10">
          <h3 className="text-xl font-bold">{websiteType.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default function Cards() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {websiteTypes.map((websiteType, index) => (
            <WebsiteTypeCard key={index} websiteType={websiteType} />
          ))}
        </div>
      </div>
    </div>
  );
}
