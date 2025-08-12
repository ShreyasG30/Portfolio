import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { AllProjects } from "./pages/AllProjects";
import { Navbar } from "@/components/Navbar"; 
import { ThemeToggle } from "@/components/ThemeToggle"; 
import { StarBackground } from "@/components/StarBackground"; 
import ProjectDetail from "./pages/ProjectDetail";
import Project_01 from "./pages/Project_01";
import Project_02 from "./pages/Project_02"; 
import { FooterSection } from "./components/FooterSection";



function App() {
  return (
    <>
      <StarBackground />
      <ThemeToggle />
        <BrowserRouter  basename="/Portfolio">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/projects" element={<AllProjects />}/> */}
          {/* <Route path="projects/1" element={<Project_01 />} /> */}
          <Route path="projects/2" element={<Project_02 />} />
          <Route path="projects/:projectId" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
      <FooterSection />
    </>
  );
}

export default App;