import ProjectCard from '../../components/ProjectCard'; // Import our new component

const projects = [
  {
    title: "My Portfolio Website",
    description: "",
    githubLink: "#",
    demoLink: "#",
  },
  { 
    title: "GoTogether",
    description: "",
    githubLink: "#",
    demoLink: "#",
  },
  {
    title: "WordLadder",
    description: "",
    githubLink: "#",
    demoLink: "#",
  },
  {
    title: "Android Map Integration",
    description: "",
    githubLink: "#",
    demoLink: "#",
  },
]

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        My <span className="text-blue-400">Projects</span>
      </h1>

      {/* This is our grid system */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
}