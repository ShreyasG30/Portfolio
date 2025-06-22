import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { AllProjects } from "./pages/AllProjects";
import { Navbar } from "@/components/Navbar"; // ✅ Add this
import { ThemeToggle } from "@/components/ThemeToggle"; // ✅ Add this
import { StarBackground } from "@/components/StarBackground"; // ✅ Optional
import ProjectDetail from "./pages/ProjectDetail";



function App() {
  return (
    <>
      <StarBackground />
      <ThemeToggle />
      <Navbar />
        <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<AllProjects />}/>
          <Route path="*" element={<NotFound />} />
          <Route path="projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;