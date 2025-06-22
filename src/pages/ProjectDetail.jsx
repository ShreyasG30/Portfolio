import { useNavigation, useLocation } from "react-router-dom";

function ProjectDetail() {
    const location = useLocation();
    const project = location.state?.project;
  
    if (!project) {
      return <div>No project data found.</div>;
    }
  
    const { id, title, description, image, tags, demoUrl, githubUrl } = project;
  
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{description}</p>
        <div>
          {tags.map((tag, idx) => (
            <span key={idx}>{tag} </span>
          ))}
        </div>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    );
  }
export default ProjectDetail