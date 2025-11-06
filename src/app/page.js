"use client"

import { motion } from "framer-motion"

import TechStack from "@/components/TechStack"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold md-4">
          Hi, I&apos;m <span className="text-blue-400">Minh Dang</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          A Sophomore in Information Technology specializing in building modern applications.
        </p>

        <a href="/projects" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
          View My Work
        </a>
      </motion.div>

      <TechStack />
    </div>
  )
}