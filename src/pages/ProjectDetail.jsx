import { useNavigate, useLocation } from "react-router-dom";

function ProjectDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state?.project;
  
    if (!project) {
      return <div>No project data found.</div>;
    }
  
    const { id, title, description, image, tags, demoUrl, githubUrl } = project;
  
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <button
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 self-start cursor-pointer"
            onClick={() =>navigate(-1)}
        >
            &larr; Back
        </button>
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