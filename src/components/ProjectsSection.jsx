import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Projects = [
  {
    id: 1,
    title: "Anchor Assembly Simulation",
    description: "Finite Element Analysis (FEA) of a post-tensioned anchor system under axial load to evaluate displacement and stress distribution across cables, wedges, and anchor block.",
    image: `${import.meta.env.BASE_URL}Projects/Project_01.png`,
    tags: ["FEA", "ANSYS", "Structural"],
    demoUrl: `${import.meta.env.BASE_URL}projects/1`,
    githubUrl: "#"
  },
];


// export default Projects;

// Get all unique tags from all projects
const allTags = Array.from(
  new Set(Projects.flatMap(project => project.tags))
);

function ProjectHeader({ project }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-12 mt-4">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-2xl shadow-lg border-2 border-white bg-white max-w-full md:max-w-[600px] w-full object-contain"
        style={{ minHeight: 320, background: "#fff" }}
      />
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center md:text-left mb-4 text-primary">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-base"
            >
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-xl text-center md:text-left mb-6">{project.description}</p>
        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export const ProjectsSection = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();

  // Filter projects based on selected tags
  const filteredProjects =
    selectedTags.length === 0
      ? Projects
      : Projects.filter(project =>
          selectedTags.every(tag => project.tags.includes(tag))
        );

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => setSelectedTags([]);
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="w-full max-w-[95rem] px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and expertise.
        </p>
  
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={[
                "px-6 py-2 rounded-full font-semibold text-lg border transition border-primary/30 dark:border-white/30",
                selectedTags.includes(tag)
                  ? "bg-primary text-white shadow"
                  : "bg-white text-primary hover:bg-primary hover:text-white hover:shadow-lg"
              ].join(" ")}>
                
              {tag}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="px-6 py-2 rounded-full font-semibold text-lg bg-gray-500/80 text-white shadow transition"
              style={{ minWidth: "160px" }}
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {filteredProjects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg shadow-xs card-hover overflow-hidden flex flex-col justify-between">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col items-center justify-center flex-1">
                {/* Centered, wrapping tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-secondary-foreground border bg-primary/20 rounded-full px-4 py-1 text-base font-medium text-center"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">{project.description}</p>
                <div className="flex justify-center items-center w-full mt-auto">
                  <button
                    onClick={() => navigate(project.demoUrl)}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
                    title="Open Project"
                    style={{ background: "none", border: "none", padding: 0 }}
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
