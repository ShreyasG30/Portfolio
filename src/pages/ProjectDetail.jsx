import { useNavigate, useLocation } from "react-router-dom";
import { StarBackground } from "../components/StarBackground"; // Add this if you want the background

function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-gray-500">
        No project data found.
      </div>
    );
  }

  const { title, description, detailedDescription, image, tags, demoUrl, githubUrl } = project;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <StarBackground /> {/* Add your background effect */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16">
        <button
          className="mb-8 px-5 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/80 transition font-semibold"
          onClick={() => navigate("/#projects")}
        >
          &larr; Back to Home
        </button>
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full md:w-1/2 rounded-xl shadow-lg border object-contain"
            />
          )}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags && tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p className="text-lg mb-4">{description}</p>
            {detailedDescription && (
              <div className="text-base text-muted-foreground whitespace-pre-line mb-6">
                {detailedDescription}
              </div>
            )}
            <div className="flex gap-4">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                >
                  Live Demo
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;