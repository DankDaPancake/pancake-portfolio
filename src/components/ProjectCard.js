export default function ProjectCard({title, description, githubLink, demoLink}) {
  return (
    <div className="bg-gray-800 round-lg overflow-hidden shadow-lg hover:shadow-blue-400/30 transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">Project Title</h3>
        <p className="text-gray-400 mb-4">
          This is a short description of the project. It outlines the main idea, the tech used, and what I learned.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
            View Code (Github)
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}