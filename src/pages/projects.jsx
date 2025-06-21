import React, { useState } from "react";
import { ArrowLeft, ExternalLink, Github, Filter, Search, Calendar, Star, Eye } from "lucide-react";

// ✅ Renamed from AllProjects
const projectsData = [
  {
    id: 1,
    title: "CFD Simulation of Aircraft Wing",
    description: "Comprehensive flow simulation over a NACA 4412 airfoil using RANS turbulence modeling. Analysis includes pressure distribution, velocity contours, and lift-drag characteristics at various angles of attack.",
    image: "/Projects/Project_01.jpeg",
    tags: ["CFD", "OpenFOAM", "Aerodynamics"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    date: "2024-01",
    category: "Fluid Dynamics"
  },
  {
    id: 2,
    title: "Structural Analysis of Turbine Casing",
    description: "Finite Element Analysis of gas turbine casing under high-temperature and pressure conditions. Includes stress concentration analysis, thermal expansion effects, and fatigue life prediction.",
    image: "/Projects/Project_02.jpg",
    tags: ["FEA", "ANSYS", "Thermal", "Stress Analysis"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    date: "2024-02",
    category: "Structural Analysis"
  },
  {
    id: 3,
    title: "FSI Analysis of Automotive Duct",
    description: "Fluid-Structure Interaction study of flexible automotive air intake duct. Combined CFD and structural analysis to predict deformation under aerodynamic loads and optimize duct geometry.",
    image: "/Projects/Project_03.png",
    tags: ["FSI", "ANSYS", "Coupled Analysis"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    date: "2023-12",
    category: "Multiphysics"
  },
  {
    id: 4,
    title: "Heat Transfer Analysis in Engine Block",
    description: "Thermal analysis of internal combustion engine block using conjugate heat transfer. Study includes coolant flow patterns, temperature distribution, and thermal stress evaluation.",
    image: "/Projects/Project_04.jpeg",
    tags: ["Thermal", "ANSYS Fluent", "Heat Transfer"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2023-11",
    category: "Thermal Analysis"
  },
  {
    id: 5,
    title: "Aerodynamic Optimization of Vehicle Body",
    description: "Shape optimization study to minimize drag coefficient of passenger vehicle. Used genetic algorithms coupled with CFD simulations to optimize front bumper and rear spoiler geometry.",
    image: "/Projects/Project_05.jpeg",
    tags: ["CFD", "Optimization", "STAR-CCM+"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2023-10",
    category: "Optimization"
  },
  {
    id: 6,
    title: "Vibration Analysis of Mechanical Assembly",
    description: "Modal analysis and harmonic response of complex mechanical assembly. Identified critical frequencies, mode shapes, and designed vibration isolation system to reduce resonance.",
    image: "/Projects/Project_06.jpeg",
    tags: ["FEA", "Modal Analysis", "ANSYS Mechanical"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2023-09",
    category: "Dynamics"
  },
  {
    id: 7,
    title: "Composite Laminate Design & Analysis",
    description: "Design and analysis of carbon fiber composite laminate for aerospace application. Progressive failure analysis using Hashin criteria and optimization of fiber orientation for maximum strength-to-weight ratio.",
    image: "/Projects/Project_07.jpg",
    tags: ["Composites", "ANSYS ACP", "Material Design"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2023-08",
    category: "Materials"
  },
  {
    id: 8,
    title: "Pump Impeller Performance Analysis",
    description: "CFD analysis of centrifugal pump impeller to optimize hydraulic performance. Study includes cavitation analysis, pressure pulsations, and efficiency improvement through blade geometry modification.",
    image: "/Projects/Project_08.png",
    tags: ["CFD", "Turbomachinery", "OpenFOAM"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2023-07",
    category: "Turbomachinery"
  },
  {
    id: 9,
    title: "Blast Loading on Steel Structure",
    description: "Explicit dynamics simulation of steel frame structure subjected to blast loading. Analysis includes material nonlinearity, large deformation, and progressive collapse assessment.",
    image: "/Projects/Project_09.png",
    tags: ["Explicit Dynamics", "LS-DYNA", "Blast Analysis"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2023-06",
    category: "Impact Analysis"
  },
  {
    id: 10,
    title: "HVAC System Optimization",
    description: "CFD simulation of building HVAC system for optimal air distribution and energy efficiency. Includes comfort analysis, contaminant dispersion modeling, and energy consumption optimization.",
    image: "/Projects/Project_10.png",
    tags: ["CFD", "HVAC", "Energy Analysis"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2023-05",
    category: "Building Systems"
  },
  {
    id: 11,
    title: "Crashworthiness Analysis of Vehicle Frame",
    description: "Nonlinear explicit finite element analysis of vehicle frame under frontal impact. Evaluation of energy absorption, deformation patterns, and occupant safety using LS-DYNA solver.",
    image: "/Projects/Project_11.jpg",
    tags: ["Crashworthiness", "LS-DYNA", "Safety Analysis"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2023-04",
    category: "Automotive Safety"
  },
  {
    id: 12,
    title: "Wind Load Analysis on High-Rise Building",
    description: "CFD simulation of wind flow around high-rise building to determine wind loads and pressure coefficients. Includes vortex shedding analysis and pedestrian wind comfort assessment.",
    image: "/Projects/Project_12.jpeg",
    tags: ["CFD", "Wind Engineering", "Structural Loads"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    date: "2023-03",
    category: "Civil Engineering"
  }
];



// ⬇️ Individual Project Card
const ProjectCard = ({ project }) => (
  <div className="group bg-card rounded-lg shadow hover:shadow-lg transition-all overflow-hidden">
    <div className="relative h-52">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {project.featured && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <Star size={12} /> Featured
        </div>
      )}
      <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
        {project.category}
      </div>
    </div>
    <div className="p-4 space-y-2">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary border rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
      <div className="flex justify-between items-center pt-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar size={14} />
          {new Date(project.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
        </div>
        <div className="flex gap-2">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Github size={16} />
          </a>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Eye size={16} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

// ⬇️ Main Page Component
const ProjectsPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // const categories = [...new Set(projects.map((p) => p.category))];
  const categories = [...new Set(projectsData.map((p) => p.category))];

  // const filtered = projects.filter((p) => {
  const filtered = projectsData.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

    const matchCategory = category === "all" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          All <span className="text-primary">Projects</span>
        </h1>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          Simulation-driven engineering work — CFD, FEA, thermal, optimization, and more.
        </p>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setCategory("all")}
              className={`px-4 py-1 rounded-full ${category === "all" ? "bg-primary text-white" : "bg-muted"}`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1 rounded-full ${category === cat ? "bg-primary text-white" : "bg-muted"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">No projects found.</p>
            <button onClick={() => { setSearch(""); setCategory("all"); }} className="cosmic-button">
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;