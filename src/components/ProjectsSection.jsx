import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = [
	{
		id: 1,
		title: "Anchor Assembly Simulation",
		description:
			"Finite Element Analysis (FEA) of a post-tensioned anchor system under axial load to evaluate displacement and stress distribution across cables, wedges, and anchor block.",
		image: `${import.meta.env.BASE_URL}Projects/Project_01.png`,
		tags: ["FEA", "ANSYS", "Structural"],
		githubUrl: "#",
	},
	// {
	// 	id: 2,
	// 	title: "Structural Analysis of Turbine Casing",
	// 	description:
	// 		"FEA of gas turbine casing under high-temperature and pressure with fatigue life prediction.",
	// 	image: `${import.meta.env.BASE_URL}Projects/Project_02.jpg`,
	// 	tags: ["FEA", "ANSYS", "Thermal"],
	// 	githubUrl: "#",
	// },
	// {
	// 	id: 3,
	// 	title: "FSI Analysis of Automotive Duct",
	// 	description:
	// 		"Fluid-Structure Interaction on flexible duct to optimize shape under aerodynamic loads.",
	// 	image: `${import.meta.env.BASE_URL}Projects/Project_03.png`,
	// 	tags: ["FSI", "ANSYS", "Coupled Analysis"],
	// 	githubUrl: "#",
	// },
	// {
	// 	id: 4,
	// 	title: "Heat Transfer in Engine Block",
	// 	description:
	// 		"Conjugate heat transfer simulation to evaluate coolant flow and thermal stress.",
	// 	image: `${import.meta.env.BASE_URL}Projects/Project_04.jpeg`,
	// 	tags: ["Thermal", "ANSYS Fluent", "Heat Transfer"],
	// 	githubUrl: "#",
	// },
	// {
	// 	id: 5,
	// 	title: "Aerodynamic Optimization of Vehicle",
	// 	description:
	// 		"Drag minimization via genetic algorithm and CFD on vehicle body.",
	// 	image: `${import.meta.env.BASE_URL}Projects/Project_05.jpeg`,
	// 	tags: ["CFD", "Optimization", "STAR-CCM+"],
	// 	githubUrl: "#",
	// },
	// {
	// 	id: 6,
	// 	title: "Vibration Analysis of Assembly",
	// 	description:
	// 		"Modal & harmonic response analysis to design vibration isolation system.",
	// 	image: `${import.meta.env.BASE_URL}Projects/Project_06.jpeg`,
	// 	tags: ["FEA", "Modal Analysis", "ANSYS"],
	// 	githubUrl: "#",
	// },
	// {
	// 	id: 7,
	// 	title: "Composite Laminate Design",
	// 	description:
	// 		"Progressive failure and fiber optimization of carbon laminate using Hashin criteria.",
	// 	image: `${import.meta.env.BASE_URL}Projects/Project_07.jpg`,
	// 	tags: ["Composites", "ANSYS ACP"],
	// 	githubUrl: "#",
	// },
	// {
	// 	id: 8,
	// 	title: "Pump Impeller CFD Analysis",
	// 	description:
	// 		"Cavitation and pressure pulsation study on centrifugal pump impeller.",
	// 	image: `${import.meta.env.BASE_URL}Projects/Project_08.png`,
	// 	tags: ["CFD", "Turbomachinery", "OpenFOAM"],
	// 	githubUrl: "#",
	// },
	// {
	// 	id: 9,
	// 	title: "Blast Loading on Structure",
	// 	description:
	// 		"Explicit dynamics simulation of steel frame under blast loads.",
	// 	image: `${import.meta.env.BASE_URL}Projects/Project_09.png`,
	// 	tags: ["LS-DYNA", "Blast Analysis"],
	// 	githubUrl: "#",
	// },
	// {
	// 	id: 10,
	// 	title: "HVAC System Optimization",
	// 	description:
	// 		"Comfort, flow distribution and energy analysis of building HVAC.",
	// 	image: `${import.meta.env.BASE_URL}Projects/Project_10.png`,
	// 	tags: ["CFD", "HVAC", "Energy Analysis"],
	// 	githubUrl: "#",
	// },
	// {
	// 	id: 11,
	// 	title: "Crashworthiness of Vehicle Frame",
	// 	description:
	// 		"Nonlinear crash analysis for energy absorption and safety.",
	// 	image: `${import.meta.env.BASE_URL}Projects/Project_11.jpg`,
	// 	tags: ["LS-DYNA", "Crash Analysis"],
	// 	githubUrl: "#",
	// },
	// {
	// 	id: 12,
	// 	title: "Wind Load on High-Rise Building",
	// 	description:
	// 		"CFD study to analyze vortex shedding and wind comfort zones.",
	// 	image: `${import.meta.env.BASE_URL}Projects/Project_12.jpeg`,
	// 	tags: ["CFD", "Wind Engineering"],
	// 	githubUrl: "#",
	// },
];

const allTags = Array.from(
	new Set(Projects.flatMap((project) => project.tags))
);

export const ProjectsSection = () => {
	const [selectedTags, setSelectedTags] = useState([]);
	const navigate = useNavigate();

	const filteredProjects =
		selectedTags.length === 0
			? Projects
			: Projects.filter((project) =>
					selectedTags.every((tag) => project.tags.includes(tag))
				);

	const toggleTag = (tag) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
		);
	};

	const clearFilters = () => setSelectedTags([]);

	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="w-full max-w-[95rem] px-6 mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Featured{" "}
					<span className="text-primary">Projects</span>
				</h2>
				<p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
					Here are some of my recent projects that showcase my skills and
					expertise.
				</p>

				{/* Filter Buttons */}
				<div className="flex flex-wrap justify-center gap-4 mb-10">
					{allTags.map((tag) => (
						<button
							key={tag}
							onClick={() => toggleTag(tag)}
							className={`
                px-6 py-2 rounded-full font-semibold text-lg border transition border-primary/30
                ${
					selectedTags.includes(tag)
						? "bg-primary text-white shadow"
						: `
                        bg-white text-primary
                        hover:bg-primary hover:text-white hover:shadow-lg
                        dark:bg-white/20 dark:text-white
                        dark:hover:bg-primary dark:hover:text-white
                      `
				}
                dark:border-white/30
              `}
							style={{ minWidth: "160px" }}
						>
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
						<div
							key={key}
							className="group bg-card rounded-lg shadow-xs card-hover overflow-hidden flex flex-col justify-between"
						>
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-6 flex flex-col items-center justify-center flex-1">
								<div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
									{project.tags.map((tag, index) => (
										<span
											key={index}
											className="
        bg-primary/10 text-primary border border-primary/20
        rounded-full
        px-2 py-1 text-xs
        sm:px-3 sm:py-1.5 sm:text-sm
        md:px-4 md:py-1 md:text-base
        font-medium text-center whitespace-nowrap
      "
										>
											{tag}
										</span>
									))}
								</div>
								<h3 className="text-xl font-semibold mb-2 text-center">
									{project.title}
								</h3>
								<p className="text-sm text-muted-foreground mb-4 text-center">
									{project.description}
								</p>
								<div className="flex justify-center items-center w-full mt-auto">
									<div
										onClick={() => navigate(`/projects/${project.id}`)}
										className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
										title="Open Project"
									>
										<ExternalLink size={20} />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
