import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Projects = [
  {
    id: 1,
    title: "CFD Simulation of Aircraft Wing",
    description: "Comprehensive flow simulation over a NACA 4412 airfoil using RANS turbulence modeling.",
    image: "/Projects/Project_01.jpeg",
    tags: ["CFD", "OpenFOAM", "Aerodynamics"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Structural Analysis of Turbine Casing",
    description: "FEA of gas turbine casing under high-temperature and pressure with fatigue life prediction.",
    image: "/Projects/Project_02.jpg",
    tags: ["FEA", "ANSYS", "Thermal"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "FSI Analysis of Automotive Duct",
    description: "Fluid-Structure Interaction on flexible duct to optimize shape under aerodynamic loads.",
    image: "/Projects/Project_03.png",
    tags: ["FSI", "ANSYS", "Coupled Analysis"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Heat Transfer in Engine Block",
    description: "Conjugate heat transfer simulation to evaluate coolant flow and thermal stress.",
    image: "/Projects/Project_04.jpeg",
    tags: ["Thermal", "ANSYS Fluent", "Heat Transfer"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Aerodynamic Optimization of Vehicle",
    description: "Drag minimization via genetic algorithm and CFD on vehicle body.",
    image: "/Projects/Project_05.jpeg",
    tags: ["CFD", "Optimization", "STAR-CCM+"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Vibration Analysis of Assembly",
    description: "Modal & harmonic response analysis to design vibration isolation system.",
    image: "/Projects/Project_06.jpeg",
    tags: ["FEA", "Modal Analysis", "ANSYS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Composite Laminate Design",
    description: "Progressive failure and fiber optimization of carbon laminate using Hashin criteria.",
    image: "/Projects/Project_07.jpg",
    tags: ["Composites", "ANSYS ACP"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Pump Impeller CFD Analysis",
    description: "Cavitation and pressure pulsation study on centrifugal pump impeller.",
    image: "/Projects/Project_08.png",
    tags: ["CFD", "Turbomachinery", "OpenFOAM"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Blast Loading on Structure",
    description: "Explicit dynamics simulation of steel frame under blast loads.",
    image: "/Projects/Project_09.png",
    tags: ["LS-DYNA", "Blast Analysis"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "HVAC System Optimization",
    description: "Comfort, flow distribution and energy analysis of building HVAC.",
    image: "/Projects/Project_10.png",
    tags: ["CFD", "HVAC", "Energy Analysis"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 11,
    title: "Crashworthiness of Vehicle Frame",
    description: "Nonlinear crash analysis for energy absorption and safety.",
    image: "/Projects/Project_11.jpg",
    tags: ["LS-DYNA", "Crash Analysis"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 12,
    title: "Wind Load on High-Rise Building",
    description: "CFD study to analyze vortex shedding and wind comfort zones.",
    image: "/Projects/Project_12.jpeg",
    tags: ["CFD", "Wind Engineering"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

// export default Projects;


export const ProjectsSection = () => {
  const navigate = useNavigate();
  const onClickProject = (project) => {
    navigate(`/projects/${project.id}`, { state: { project } });
  }
    return <section id="projects" className="py-24 px-4 relative">
        <div className="w-full max-w-[95rem] px-6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and expertise.
            </p>
            <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                {Projects.map((project,key) => (
                <div key={key} className="group bg-card rounded-lg shadow-xs card-hover overflow-hidden card-hover">
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                        <div className="flex flex-bar gap-2 mb-4">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="bg-secondary text-secondary-foreground border bg-primary/20 rounded-full px-2 py-1 text-xs font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                            <button className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer" onClick={() => onClickProject(project)}><ExternalLink size={20}/></button>
                            <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            {/* <div className="mt-12 text-center">
               <div className="mt-12 text-center">
                    <Link
                        to="/projects"  // ✅ Update to your route path
                        className="cosmic-button w-fit flex items-center mx-auto"
                    >
                        View All Projects <ArrowRight size={20} />
                    </Link>
                    </div>
            </div> */}
        </div>
    </section>
}
