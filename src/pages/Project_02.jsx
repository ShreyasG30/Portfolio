import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StarBackground } from "../components/StarBackground";

const projectData = {
  title: "Anchor Assembly Simulation",
  description: "Finite Element Analysis (FEA) of a post-tensioned anchor system under axial load to evaluate displacement and stress distribution across cables, wedges, and anchor block.",
  image: `${import.meta.env.BASE_URL}Project_02/Project_02.png`,
  tags: ["FEA", "ANSYS", "Structural", "Post-Tensioning"],
};

function ProjectHeader({ project }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-12 mt-4 w-full">
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
      </div>
    </div>
  );
}

function Project_02() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col items-center">
      <StarBackground />
      <div className="relative z-10 flex flex-col items-start w-full px-2 md:px-8 py-8 max-w-7xl mx-auto">
        <button
          className="mt-20 mb-8 px-6 py-2 bg-primary/80 hover:bg-primary text-white font-semibold rounded-lg shadow transition"
          onClick={() => navigate("/")}
        >
          &larr; Back to Home
        </button>

        <ProjectHeader project={projectData} />

        {/* 1. Introduction */}
        <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2 text-left flex items-center gap-2">
            <span className="text-primary">1</span>
            <span>Introduction</span>
          </h2>
          <p className="mb-3 text-left">
            The model aims to understand the structural integrity based on the load application. In this case study, we study the effect of applied load on the anchor assembly and understand the behavior of the anchor to the applied load. A FEM study is performed to analyze it:
          </p>
          <ol className="list-decimal list-inside mb-3 text-left">
            <li>Understand the deformation due to the applied load on the cable strands.</li>
            <li>Understand the stress induced in the anchor due to the applied load.</li>
          </ol>
          <div className="mb-3 text-left">
            <span className="font-bold bg-yellow-300 text-black px-2 py-1 rounded">
              Note: The mesh considered is too coarse due to computational restraints, thus the results obtained may be too approximated.
            </span>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default Project_02;