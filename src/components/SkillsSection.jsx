import { useState } from "react";
import { cn } from "../libs/utils";

const skills = [
  // 🧠 Programming & Scripting
  { name: "Python", level: 90, category: "Programming" },
  { name: "MATLAB", level: 85, category: "Programming" },
  { name: "C++", level: 70, category: "Programming" },
  { name: "TCL/TK", level: 60, category: "Scripting" },

  // ⚙️ Simulation & Analysis Tools
  { name: "ANSYS Workbench", level: 95, category: "FEM/CFD Tools" },
  { name: "Abaqus", level: 85, category: "FEM/CFD Tools" },
  { name: "OpenFOAM", level: 60, category: "FEM/CFD Tools" },
  { name: "Fluent", level: 90, category: "FEM/CFD Tools" },
  { name: "KratosMultiphysics", level: 60, category: "FEM/CFD Tools" },
  { name: "Star-CCM+", level: 80, category: "FEM/CFD Tools" },

  // 🛠 CAD & Modeling
  { name: "SolidWorks", level: 90, category: "CAD" },
  { name: "CATIA", level: 95, category: "CAD" },
  { name: "SpaceClaim", level: 80, category: "CAD" },
  { name: "AutoCAD", level: 70, category: "CAD" },
  { name: "HyperMesh", level: 85, category: "Meshing" },

  // 🧮 Numerical Methods & Scientific Computing
  { name: "Finite Element Method (FEM)", level: 90, category: "Numerical Methods" },
  { name: "Computational Fluid Dynamics (CFD)", level: 95, category: "Numerical Methods" },
  { name: "Reduced Order Modeling", level: 65, category: "Numerical Methods" },
  { name: "Operator Inference", level: 60, category: "Numerical Methods" },

//   // 🔧 Dev Tools
//   { name: "Git", level: 70, category: "Version Control" },
//   { name: "LaTeX", level: 90, category: "Documentation" },
//   { name: "Linux", level: 60, category: "OS/Tools" },

  // 🌍 Languages
  { name: "English", level: 95, category: "Language" },
  { name: "Spanish", level: 30, category: "Language" },
  { name: "German", level: 40, category: "Language" }
];


const category = ["All", "Programming", "FEM/CFD Tools", "CAD", "Numerical Methods", "Language"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(skill =>
        activeCategory === "All" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="py-24 px-4 bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex justify-center mb-12 mb-12 flex-wrap gap-4">  
                    {category.map((category, key) => (
                        <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-muted-foreground hover:bg-secondary/70")}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            {/* Skill Title */}
                            <div className="mb-4 text-left">
                                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                            </div>

                            {/* Progress Bar with Level Text Below */}
                            <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out]"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>

                            {/* Percent Value */}
                            <div className="text-right mt-2">
                                <span className="text-muted-foreground text-sm">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
