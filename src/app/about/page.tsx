"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12"
		>
			<div className="flex flex-col md:flex-row items-center gap-12">
				<motion.div 
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl flex-shrink-0"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
					<Image
						src="/placeholder.png"
						alt="My profile picture"
						width={256}
						height={256}
						className="object-cover w-full h-full"
					/>
					
					<div className="w-full h-hull bg-gray-700 flex items-center justify-center text-gray-500">
					<Image
						src=""
						alt="My profile picture"
						width={256}
						height={256}
						className="object-cover w-full h-full"
					/>
					</div>
				</motion.div>
					<div className="text-center md:text-left">
						<h1 className="text-4xl font-bold mb-4">
							About <span className="text-blue-400">Me</span>
						</h1>
						<p className="text-lg text-gray-300 mb-4">
							Hello! I&apos;m a passionate Sophomore in Information Technology with a strong foundation in informatics from my time at the High School for the Gifted.
						</p>
						<p className="text-lg text-gray-300 mb-4">
							I love the challenge of solving problems and building things. From diving into the logic of computer architecture and linear algebra to building full-stack applications with Next.js, I&apos;m driven by the process of turning an idea into a real, functional product.
						</p>
						<p className="text-lg text-gray-300 mb-6">
							My goal is to leverage my skills in both software and hardware to create technology that is intuitive, efficient, and makes a positive impact.
						</p>
					</div>

				</div>

				<div className="text-center mt-12">
					<h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
					<p className="text-lg text-gray-400 mb-6">
						I&apos;m always open to discussing	new projects, creative ideas, or opoortunities to learn.
					</p>
					<Link 
						href="/projects" 
						className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
					>
						See My Work
					</Link>
				</div>
		</motion.div>
	);
}