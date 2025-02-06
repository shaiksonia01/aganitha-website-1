"use client";

import React, { useState, FC } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OfferingType {
  id: number;
  title: string;
  image: string;
  description: string;
}

const BiopharmaOfferings: FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const offerings: OfferingType[] = [
    {
      id: 1,
      title: "Our Solutions",
      image: "https://images.nature.com/lw1200/magazine-assets/d41586-018-05267-x/d41586-018-05267-x_15789480.jpg",
      description:
        "Customizable platforms and solutions across the drug discovery value chain from target discovery to therapeutic development.",
    },
    {
      id: 2,
      title: "Our Services",
      image: "https://www.ddw-online.com/wp-content/uploads/2000/08/LabCorp-continues-to-invest-in-the-CRO-of-the-future.jpg",
      description:
        "Offering services in computational sciences and technology to complement biopharma R&D.",
    },
    {
      id: 3,
      title: "Case Studies",
      image: "https://penntoday.upenn.edu/sites/default/files/2023-06/PR-Science-Tetlock-Main-.jpg",
      description:
        "Helping clients accelerate drug discovery and development by building computational biology, computational chemistry, and cloud solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-3xl md:text-left font-bold text-center mb-12 text-gray-900">
          Discover Our Offerings Across the Biopharma Value Chain
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering) => (
            <div
              key={offering.id}
              className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 bg-white hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={offering.image}
                alt={offering.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
                  {offering.title}
                  <ArrowRight className="ml-2 w-4 h-4 text-blue-600 transition-transform duration-300" />
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg mb-4">
            Get in touch to learn more about our offerings and how we can help you.
          </p>
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BiopharmaOfferings;
