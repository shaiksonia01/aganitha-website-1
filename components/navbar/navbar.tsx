"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const navItems = {
  "Disease Areas": ["Immunology", "Rare Diseases", "Oncology", "CNS Disorders"],
  Solutions: ["Overview", "Genomic Analysis", "Transcriptomics", "Proteomics"],
  Services: ["Overview", "Computational Biology", "Computational Chemistry"],
  "Case Studies": [],
  Company: ["About", "Team", "Careers"],
  Blogs: [],
}

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar when at the top of the page or scrolling up
      if (currentScrollY <= 20 || currentScrollY < lastScrollY) {
        setIsVisible(true)
      } 
      // Hide navbar when scrolling down past the initial threshold
      else if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }
  
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      className={`fixed top-6 left-[10%] transform -translate-x-[45%] z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-full px-12 py-4 flex items-center space-x-12 max-w-7xl w-full mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="https://www.aganitha.ai/wp-content/uploads/2023/05/aganitha-logo.png" alt="Aganitha Logo" width={150} height={40} className="h-10 w-auto" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {Object.entries(navItems).map(([category, items]) => (
            <div
              key={category}
              className="relative"
              onMouseEnter={() => setActiveDropdown(category)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <span>{category}</span>
                {items.length > 0 && <ChevronDown className="h-5 w-5" />}
              </button>

              <AnimatePresence>
                {activeDropdown === category && items.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-56 py-2 mt-2 bg-white rounded-lg shadow-xl"
                  >
                    {items.map((item) => (
                      <Link
                        key={item}
                        href={`/${category.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors hidden md:inline"
        >
          Contact Us
        </Link>
      </div>
    </motion.nav>
  )
}