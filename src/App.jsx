import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { AllProjects } from "./pages/AllProjects";
import { Navbar } from "@/components/Navbar"; 
import { ThemeToggle } from "@/components/ThemeToggle"; 
import { StarBackground } from "@/components/StarBackground"; 
import ProjectDetail from "./pages/ProjectDetail";
import Project_01 from "./pages/Project_01"; 
import { FooterSection } from "./components/FooterSection";



function App() {
  return (
    <>
      <StarBackground />
      <ThemeToggle />
      <Navbar />
        <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/projects" element={<AllProjects />}/> */}
          <Route path="projects/1" element={<Project_01 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
      <FooterSection />
    </>
  );
}

export default App;