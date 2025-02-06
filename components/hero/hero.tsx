"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const tags = [
  "Targets & Biomarkers",
  "Small Molecules",
  "Antibodies",
  "Enzymes",
  "ASO",
  "mRNA",
  "Gene Tx",
  "CMC",
]

const poweredBy = [
  "Agentic & Generative AI",
  "Computational Biology",
  "Computational Chemistry",
]

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-sky-200 to-white flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('/science-ai-bg.svg')] bg-cover bg-center"></div>
      <div className="max-w-6xl w-full text-center space-y-12 relative z-10">
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-black drop-shadow-lg text-left mt-20"
        >
          Insight from PMWC 2025
        </motion.h1>

        {/* Image and Text in a Row */}
        <div className="flex md:flex-row flex-col items-center md:items-start gap-8">
          {/* Image */}
          <img
            src="https://media.licdn.com/dms/image/v2/D5622AQFkbiC8YTKNCg/feedshare-shrink_800/B56ZSvE5suHQAg-/0/1738104092502?e=2147483647&v=beta&t=ozJivKs7ptRVTfa50ZHRXKSNg2A6puS2HklEHAd2HG0"
            alt="PMWC Conference Banner"
            className="md:w-1/2 w-full h-auto rounded-xl"
          />

          {/* Text Container */}
          <div className="md:w-1/2 w-full text-left space-y-4">
            <p className="text-2xl text-red-800 drop-shadow-md leading-relaxed font-semibold">
              Experience Aganitha’s live AI demos and the future of medicine at PMWC25!
            </p>
            <p className="text-lg text-gray-800 drop-shadow-lg leading-relaxed">
              The Precision Medicine World Conference (PMWC) is the premier forum for precision medicine, convening top experts to discuss breakthroughs in genomics, AI-driven healthcare, personalized therapies, and biotechnology.
            </p>

            {/* Button Below Paragraphs */}
            <motion.a
              href="https://pmwcintl.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-black text-lg font-medium px-6 py-3 rounded-3xl shadow-lg hover:bg-blue-600 transition-all mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More at PMWC
            </motion.a>
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold text-blacck drop-shadow-lg text-left "
        >
          We harness AI to propel scientific innovation
        <p className="text-lg font-normal mt-2 text-gray-800 drop-shadow-md leading-relaxed text-left">
          Aganitha partners with global biopharma to bring better medicines to market faster.
        </p>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">
  {/* Left Side - Content */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="bg-white shadow-2xl rounded-3xl p-8 backdrop-blur-md bg-opacity-80 text-left hover:shadow-xl hover:scale-105 transition-transform"
  >
    {/* From Data To */}
    <h3 className="text-2xl font-semibold text-gray-700 text-center mb-4">From Data To</h3>
    <div className="grid grid-cols-2 gap-4 mb-6">
      {tags.map((item) => (
        <span
          key={item}
          className="bg-blue-200 text-center text-black px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-blue-100 hover:scale-105 transition-transform"
        >
          {item}
        </span>
      ))}
    </div>

    {/* Powered By */}
    <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Powered by</h3>
    <div className="grid grid-cols-2 gap-4">
      {poweredBy.map((tech) => (
        <span
          key={tech}
          className="bg-blue-200 text-black px-4 py-2 text-center rounded-lg text-sm font-medium shadow-md hover:bg-blue-100 hover:scale-105 transition-transform"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>

  {/* Right Side - Image */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="flex justify-center"
  >
    <img 
      src="https://techspert.com/hubfs/rchapz33_a_robot_doing_science_experiments_in_a_clinical_lab_se_15766fb6-f4ef-4e92-8757-22f4480d4ca6-1-1.png" 
      alt="Descriptive Alt Text" 
      className="max-w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform" 
    />
  </motion.div>
</div>
      </div>
    </div>
  )
}
