import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-screen-xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT COLUMN — STAY CENTERED */}
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold">
              Passionate Engineer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I’m a mechanical engineer with strong foundations in CAD, FEM, and CFD.
              I specialize in building robust engineering solutions using simulation and modeling tools.
            </p>

            <p className="text-muted-foreground">
              My passion lies in solving complex real-world problems and learning new technologies to improve
              efficiency and innovation.
            </p>

            {/* FIX BUTTON ALIGNMENT */}
            <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 pt-6">
              <a href="#contact" className="cosmic-button w-full sm:w-auto text-center">
                Get In Touch
              </a>
              <a
                href="/docs/Shreyas_Girish.pdf" download="Shreyas_Girish_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 w-full sm:w-auto text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — ALIGN LEFT */}
          <div className="grid grid-cols-1 gap-6 text-left">
            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Engineering Simulations</h4>
                  <p className="text-muted-foreground">
                    I create high-fidelity simulations using tools like ANSYS, OpenFOAM, and KratosMultiphysics.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">CAD & Modeling</h4>
                  <p className="text-muted-foreground">
                    I design and analyze mechanical components using SolidWorks, CATIA, and SpaceClaim.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Project Experience</h4>
                  <p className="text-muted-foreground">
                    Hands-on experience across automotive, renewable energy, and civil engineering projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
