"use client";

import React from "react";
import { CheckCircle, Cpu, FlaskConical, Users } from "lucide-react";

const BiopharmaSolutions = () => {
  const features = [
    {
      title: "Multi-Domain Expertise",
      description: "Integrated skills in Biology, Chemistry, AI/ML, DevOps, and Cloud.",
      category: "Expertise",
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Industry Focus",
      description: "Dedicated to advancing biopharma R&D with cutting-edge solutions.",
      category: "Expertise",
      icon: <FlaskConical className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Tech-Driven",
      description: "Leveraging DevOps and cloud for scalable, high-quality solutions.",
      category: "Technology",
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Agile & Scalable",
      description: "Combining startup agility with enterprise-grade execution.",
      category: "Technology",
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Client-Centric",
      description: "Flexible engagement while ensuring client IP and licensing control.",
      category: "Service",
      icon: <Users className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Seamless Collaboration",
      description: "Aligning with biopharma teams to meet R&D goals.",
      category: "Service",
      icon: <Users className="w-8 h-8 text-orange-500" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-white flex flex-col md:flex-row items-start gap-12">
      {/* Left Content */}
      <div className="md:w-1/3">
        <h2 className="text-lg font-medium text-blue-600 uppercase tracking-widest">Why Aganitha?</h2>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mt-4">
          Expertise-Driven Biopharma Solutions
        </h1>
        <p className="text-gray-600 mt-4 text-base">
          We integrate expertise, technology, and collaboration to accelerate biopharma innovation with a futuristic approach.
        </p>
      </div>

      {/* Right Features List */}
      <div className="md:w-2/3 grid grid-cols-1 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4 transition-all transform hover:scale-105 hover:shadow-lg p-4 rounded-lg bg-gray-50">
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-xs text-gray-500 uppercase mt-1">{feature.category}</p>
              <p className="text-gray-700 text-sm leading-relaxed mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiopharmaSolutions;
