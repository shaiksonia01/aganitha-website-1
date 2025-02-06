import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiBluesky } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white bg-opacity-50 text-black py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Certification */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400">Aganitha</h2>
          <p className="mt-2">Registered Supplier at scientist.com</p>
        </div>
        
        {/* Disease Areas */}
        <div>
          <h3 className="text-lg font-semibold">Disease Areas</h3>
          <ul className="mt-2 space-y-2">
            <li>Immunology</li>
            <li>Rare Diseases</li>
            <li>Oncology</li>
            <li>CNS Disorders</li>
          </ul>
        </div>

        {/* Services & Solutions */}
        <div>
          <h3 className="text-lg font-semibold">Services & Solutions</h3>
          <ul className="mt-2 space-y-2">
            <li>Large Language Model Services</li>
            <li>Computational Biology</li>
            <li>Proteomics</li>
            <li>Gene Therapy</li>
            <li>SMOL Drug Design</li>
          </ul>
        </div>
        
        {/* Company & Social Links */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-2">
            <li>About Us</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>News and Events</li>
          </ul>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-blue-400 text-xl"><FaLinkedin /></a>
            <a href="#" className="text-blue-300 text-xl"><FaTwitter /></a>
            <a href="#" className="text-blue-500 text-xl"><SiBluesky /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Aganitha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
