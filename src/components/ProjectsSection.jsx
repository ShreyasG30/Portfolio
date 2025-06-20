import { ArrowRight, ExternalLink, Github } from "lucide-react";


const Projects = [
    {
        id: 1, title: "Project One", 
        description: "Description of project one", 
        image: "/Projects/Project_01.jpeg", 
        tags: ["React", "JavaScript"], 
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2, title: "Project Two", 
        description: "Description of project two",
        image: "/Projects/Project_02.jpg",
        tags: ["Python", "Flask"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3, title: "Project Three",
        description: "Description of project three",
        image: "/Projects/Project_03.png",
        tags: ["Django", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                            <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <a className="cosmic-button w-fit flex items-center mx-auto" target="_blank" href="https://github.com/ShreyasG30">View All Projects <ArrowRight size={20}/></a>
            </div>
        </div>
    </section>
}
