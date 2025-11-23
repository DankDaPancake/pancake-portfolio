"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "~/components/ui/Section"; // Ensure this path is correct
import ProjectCard from "~/components/ProjectCard";
import TechStack from "~/components/TechStack";
import { Button } from "~/components/ui/button";
import Image from "next/image"; // Don't forget to import Image

// Data for projects
const projects = [
  {
    title: 'My Portfolio Website',
    description: 'The very site you are on right now! Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    githubLink: 'https://github.com/yourusername/repo',
    demoLink: '/',
  },
  {
    title: 'Vi Vu AI (Travel App)',
    description: 'A conceptual project for a unified travel app using AI. Features real-time location sharing and gamified check-ins.',
    tags: ['Mobile', 'AI', 'UX/UI'],
    githubLink: '#',
    demoLink: '#',
  },
  // Add more projects here...
];

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-500/30">
      
      {/* === HERO SECTION === */}
      <Section id="home" className="flex flex-col items-center justify-center min-h-screen pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-blue-500">[Your Name]</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A Sophomore in Information Technology building modern, accessible web experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* === TECH STACK SECTION === */}
      <Section id="tech" className="bg-slate-900/50">
        <TechStack />
      </Section>

      {/* === PROJECTS SECTION === */}
      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </Section>

      {/* === ABOUT SECTION === */}
      <Section id="about" title="About Me" className="bg-slate-900/50">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative w-64 h-64 flex-shrink-0">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <Image
              src="/profilepic.png" // Ensure this file exists in /public
              alt="Profile Picture"
              width={256}
              height={256}
              className="rounded-full object-cover border-4 border-slate-800 shadow-2xl relative z-10"
            />
          </div>
          
          {/* Bio Text */}
          <div className="text-lg text-slate-300 space-y-6 max-w-2xl">
            <p>
              Hello! I&apos;m a passionate student originating from the High School for the Gifted.
              I bridge the gap between complex backend logic and beautiful frontend design.
            </p>
            <p>
              Currently, I&apos;m diving deep into the <strong>Next.js</strong> ecosystem and learning low-level 
              computing concepts to understand how software truly interacts with hardware.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new tech stacks or optimizing my Linux Mint setup.
            </p>
          </div>
        </div>
      </Section>

    </div>
  );
}