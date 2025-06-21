import { ProjectsSection } from "@/components/ProjectsSection";

export const AllProjects = () => {
  return (
    <section className="min-h-screen py-24 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          All Projects
        </h1>
        <ProjectsSection />
      </div>
    </section>
  );
};
