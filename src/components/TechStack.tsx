"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "~/components/ui/badge"; // Using shadcn Badge!
// Import the icons we'll use
// 'Fa' is Font Awesome, 'Si' is Simple Icons
import { FaReact, FaNode, FaLinux, FaUnity } from "react-icons/fa"
import { SiReact, SiNodedotjs, SiPython, SiLinux,
         SiNextdotjs, SiTailwindcss, SiAndroidstudio, SiCplusplus, 
         SiUnity, SiFirebase } from "react-icons/si"

// Define type for our tech items
interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const techList = [
  { name: "Next.js", icon: <SiNextdotjs size={48}/> },
  { name: "React", icon: <FaReact size={48}/> },
  { name: "Node.js", icon: <SiNodedotjs size={48}/> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={48}/> },
  { name: "Python", icon: <SiPython size={48}/> },
  { name: "C++", icon: <SiCplusplus size={48}/> },
  { name: "Unity", icon: <FaUnity size={48}/> },
  { name: "Android Studio", icon: <SiAndroidstudio size={48}/> },
  { name: "Firebase", icon: <SiFirebase size={48}/> },
  { name: "Linux", icon: <FaLinux size={48}/> },
]

// 2. Define the animation for each icon
const iconVariant = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
};

export default function TechStack() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-8 text-slate-200">
        Technologies I Use
      </h3>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-3xl">
        {techList.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center gap-3 group"
            variants={iconVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {/* Icon Container with hover effect */}
            <div className="p-4 bg-slate-800 rounded-xl shadow-sm group-hover:shadow-blue-500/20 group-hover:text-blue-400 transition-all duration-300 border border-slate-700">
              {tech.icon}
            </div>
            {/* Using shadcn Badge for the label */}
            <Badge variant="secondary" className="bg-slate-800 text-slate-300 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors border-slate-700">
              {tech.name}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
}