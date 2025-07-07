import React from 'react';
import { 
  ShoppingCart, 
  User, 
  Building, 
  BookOpen, 
  Camera, 
  TrendingUp, 
  Users, 
  Globe, 
  Heart, 
  Gamepad2, 
  Briefcase, 
  Newspaper 
} from 'lucide-react';

interface WebsiteType {
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  color: string;
  // features: string[];
  // techStack: string[];
  complexity: 'Simple' | 'Medium' | 'Complex';
  // timeline: string;
}

const websiteTypes: WebsiteType[] = [
  {
    name: "E-commerce Store",
    description: "Full-featured online store with payment processing, inventory management, and customer accounts",
    icon: <ShoppingCart className="w-6 h-6" />,
    category: "Business",
    color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    // features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management", "User Reviews"],
    // techStack: ["Next.js", "Stripe", "Prisma", "Auth0"],
    complexity: "Complex",
    // timeline: "8-12 weeks"
  },
  {
    name: "Portfolio Website",
    description: "Personal showcase for designers, developers, and artists to display their work and attract clients",
    icon: <User className="w-6 h-6" />,
    category: "Personal",
    color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    complexity: "Simple",
  },
  {
    name: "Corporate Website",
    description: "Professional online presence for companies with service descriptions, team profiles, and contact info",
    icon: <Building className="w-6 h-6" />,
    category: "Business",
    color: "bg-gradient-to-br from-blue-500 to-sky-600",
    complexity: "Medium",
  },
  {
    name: "Online Learning Platform",
    description: "E-learning site with course content, student dashboards, progress tracking, and quizzes",
    icon: <BookOpen className="w-6 h-6" />,
    category: "Education",
    color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    complexity: "Complex",
  },
  {
    name: "Startup Landing Page",
    description: "High-converting landing page for startups to showcase value propositions and capture leads",
    icon: <TrendingUp className="w-6 h-6" />,
    category: "Startup",
    color: "bg-gradient-to-br from-violet-500 to-fuchsia-500",
    complexity: "Simple",
  },
  {
    name: "Dating Website",
    description: "Platform with profiles, messaging, and intelligent matching algorithms",
    icon: <Heart className="w-6 h-6" />,
    category: "Social",
    color: "bg-gradient-to-br from-rose-500 to-pink-600",
    complexity: "Complex",
  },
];

const WebsiteTypeCard: React.FC<{ websiteType: WebsiteType }> = ({ websiteType }) => {
  const complexityColor = {
    Simple: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Complex: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-200/70 dark:border-gray-700/50">
      {/* Header with Icon and Category */}
      <div className={`${websiteType.color} p-6 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="p-2.5 bg-white/20 rounded-lg backdrop-blur-sm group-hover:rotate-12 transition-transform duration-300">
                {websiteType.icon}
              </div>
              <span className="text-xs font-medium opacity-90 tracking-wider">{websiteType.category}</span>
            </div>
            <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${complexityColor[websiteType.complexity]}`}>
              {websiteType.complexity}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-2">{websiteType.name}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{websiteType.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function WebsiteTypesCards() {
  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Website Types We Develop
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From bold and artistic to sleek and professional — we build websites that match your vision.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteTypes.map((websiteType, index) => (
            <WebsiteTypeCard key={index} websiteType={websiteType} />
          ))}
        </div>
      </div>
    </div>
  );
}