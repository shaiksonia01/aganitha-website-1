"use client"

import { motion } from "framer-motion";
import { Brain, FlaskRoundIcon as Flask, Cpu } from "lucide-react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Multiscale Systems Biology",
    icon: Brain,
    description:
      "Holistic understanding of target biology at multiple levels through GWAS and Omics analysis with gaps bridged by generative AI and combined with biomarker analysis.",
  },
  {
    title: "Better Chemistry",
    icon: Flask,
    description:
      "Design of novel or better SMOL and biologicals through integration of generative AI with quantum chemistry principles.",
  },
  {
    title: "Generative AI",
    icon: Cpu,
    description:
      "LLMs built on protein and chemistry spaces allow us to address many use cases of the pharma industry with conditional generation for optimized properties.",
  },
  {
    title: "Wet Lab & In Silico Loop",
    icon: Cpu,
    description:
      "Creating a virtuous cycle between in silico modeling and wet lab experiments to enhance de novo drug design.",
  },
  {
    title: "Platform & Data Approach",
    icon: Cpu,
    description:
      "Leveraging robust platforms and structured data to drive better decision-making in drug discovery and development.",
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const IconComponent = services[current].icon;

  return (
    <section className="py-24 bg-white text-black relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Heading & Paragraph */}
        <div className="md:w-1/2 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold leading-tight "
          >
            Revolutionizing Biopharma R&D
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 max-w-xl"
          >
            Aganitha integrates cutting-edge AI with advanced scientific methodologies to transform drug discovery and development.
          </motion.p>
        </div>

        {/* Right Side - Services Carousel */}
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="relative w-full overflow-hidden flex items-center justify-center">
            <motion.div
              key={services[current].title}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative bg-blue-100 p-8 rounded-xl shadow-lg w-full max-w-lg border text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-blue-500 text-white shadow-lg mx-auto">
                <IconComponent className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mt-4 text-black mb-2">
                {services[current].title}
              </h3>
              <p className="text-md text-gray-700 leading-relaxed">
                {services[current].description}
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center items-center mt-6 gap-4">
            <button onClick={prevSlide} className="p-3 bg-gray-700 rounded-full hover:bg-gray-600">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button onClick={nextSlide} className="p-3 bg-gray-700 rounded-full hover:bg-gray-600">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
