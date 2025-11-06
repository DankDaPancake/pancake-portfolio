// We need "use client" to use Framer Motion animations
"uses client";

import { motion } from "framer-motion";
// Import the icons we'll use
// 'Fa' is Font Awesome, 'Si' is Simple Icons
import { FaReact, FaNode, FaLinux, FaUnity } from "react-icons/fa"
import { SiReact, SiNodedotjs, SiPython, SiLinux,
         SiNextdotjs, SiTailwindcss, SiAndroidstudio, SiCplusplus, 
         SiUnity, SiFirebase } from "react-icons/si"

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
  animate: { opacity: 1, scale: 1},
};

export default function TechStack() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-blue-400">Tech Stack</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {techList.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center gap-2 p-4 bg-gray-700 rounded-lg shadow-lg"
              variants={iconVariant}
              initial="initial"
              // "whileInView" is a magic prop: animation triggers when it scrolls into view
              whileInView="animate" 
              viewport={{ once: true }} // Only animate once
              // "transition.delay" creates a nice "stagger" effect
              transition={{ duration: 0.3, delay: index * 0.1 }} 
            >
              <span className="text-blue-400">{tech.icon}</span>
              <span className="text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}