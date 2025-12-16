"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "~/components/ui/Section";
import ProjectCard from "~/components/ProjectCard";
import TechStack from "~/components/TechStack";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaEye } from "react-icons/fa";

// Data for projects with enhanced descriptions and tags
const projects = [
  {
    title: "My Portfolio Website",
    description: "A modern, responsive portfolio built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui. Features smooth animations with Framer Motion and a sleek midnight blue theme.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/DankDaPancake/pancake-portfolio",
    demoLink: "/",
  },
  { 
    title: "GoTogether",
    description: "A collaborative travel planning application designed to help groups coordinate trips, share itineraries, and manage expenses together seamlessly.",
    tags: ["Mobile", "Travel", "Android", "Kotlin", "Google Maps API"],
    githubLink: "https://github.com/nightshade94/GoTogether",
    demoLink: "#",
  },
  {
    title: "WordLadder",
    description: "A spooky Halloween-themed Word Ladder puzzle game built with Python and Pygame! Transform words step by step, changing one letter at a time to reach the target word.",
    tags: ["Python", "Pygame", "Game Dev", "Puzzles"],
    githubLink: "https://github.com/DankDaPancake/WordLadder",
    demoLink: "#",
  },
  {
    title: "Tourgether",
    description: "A solution for tourism newly graduates, connecting travel business with new guides.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Tour", "Mediator"],
    githubLink: "https://github.com/NgTHung/Tourgether",
    demoLink: "#",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-sky-500/30">
      
      {/* === HERO SECTION === */}
      <Section id="home" className="flex flex-col items-center justify-center min-h-screen pt-20 bg-gradient-to-b from-[hsl(222,47%,5%)] via-[hsl(222,47%,7%)] to-[hsl(222,40%,10%)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Azure glow effect behind heading */}
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-sky-500/20 rounded-full scale-150"></div>
            <h1 className="relative text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
              Hi, I&apos;m <span className="text-sky-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.5)]">Minh Dang</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            A Sophomore in Information Technology building modern, accessible web experiences.
          </p>
          <div className="flex gap-6 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 transition-all duration-300" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-6 border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300" 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* === TECH STACK SECTION === */}
      <Section id="tech" className="bg-[hsl(222,40%,8%)] border-y border-sky-500/10">
        <TechStack />
      </Section>

      {/* === PROJECTS SECTION === */}
      <Section id="projects" title="Featured Projects" className="bg-gradient-to-b from-[hsl(222,40%,8%)] to-[hsl(222,47%,6%)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* === ABOUT SECTION === */}
      <Section id="about" title="About Me" className="bg-[hsl(222,40%,8%)] border-t border-sky-500/10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Profile Image */}
          <motion.div 
            className="relative w-72 h-72 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-sky-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full opacity-30 blur-2xl"></div>
            <Image
              src="/profile_picture.png"
              alt="Profile Picture"
              width={288}
              height={288}
              className="rounded-full object-cover border-4 border-sky-500/30 shadow-2xl shadow-sky-500/20 relative z-10"
            />
          </motion.div>
          
          {/* Bio Text */}
          <motion.div 
            className="text-lg text-slate-300 space-y-8 max-w-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="leading-relaxed">
              Hello! I&apos;m a passionate student originating from the High School for the Gifted.
              I bridge the gap between complex backend logic and beautiful frontend design.
            </p>
            <p className="leading-relaxed">
              Currently, I&apos;m diving deep into the <strong className="text-sky-400">Next.js</strong> ecosystem and learning low-level 
              computing concepts to understand how software truly interacts with hardware.
            </p>
            <p className="leading-relaxed">
              When I&apos;m not coding, you can find me exploring new tech stacks or optimizing my Linux Mint setup.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* === RESUME SECTION === */}
      <Section id="resume" title="My Resume" className="bg-gradient-to-b from-[hsl(222,40%,8%)] to-[hsl(222,35%,10%)] border-t border-sky-500/10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[hsl(222,40%,8%)] border border-sky-500/20 rounded-2xl p-8 md:p-12 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-sky-500/10 rounded-full flex items-center justify-center">
                <FaFileDownload className="text-sky-400" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Download My Resume</h3>
              <p className="text-slate-400 max-w-lg mx-auto">
                Get a comprehensive overview of my skills, education, projects, and experience in a downloadable PDF format.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 transition-all duration-300"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <FaFileDownload className="mr-3" />
                Download PDF
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="text-lg px-8 py-6 border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <FaEye className="mr-3" />
                View Online
              </Button>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* === CONTACT SECTION === */}
      <Section id="contact" title="Let's Connect" className="bg-gradient-to-b from-[hsl(222,40%,8%)] to-[hsl(222,47%,5%)]">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to learn and grow. 
            Feel free to reach out!
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              href="https://github.com/DankDaPancake"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[hsl(222,40%,10%)] rounded-xl border border-sky-500/10 text-slate-300 hover:text-sky-400 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dang-ly-huynh-minh-13bb51343/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[hsl(222,40%,10%)] rounded-xl border border-sky-500/10 text-slate-300 hover:text-sky-400 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a
              href="mailto:minhdanglee2006@gmail.com"
              className="p-4 bg-[hsl(222,40%,10%)] rounded-xl border border-sky-500/10 text-slate-300 hover:text-sky-400 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope size={32} />
            </motion.a>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="text-lg px-12 py-6 bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 transition-all duration-300"
            onClick={() => window.open('mailto:minhdanglee2006@gmail.com')}
          >
            <FaEnvelope className="mr-3" />
            Say Hello
          </Button>
        </motion.div>
      </Section>

    </div>
  );
}