import React, { useState } from "react";

const certificates = [
  {
    name: "Coursera Machine Learning.pdf",
    displayName: "Machine Learning – Coursera (Stanford, Andrew Ng)",
    file: `${import.meta.env.BASE_URL}certificates/Coursera Machine Learning.pdf`,
    date: "14-07-2024",
    verification: "https://coursera.org/verify/DX8GEA4SU9LN",
    tags: ["Machine Learning", "Supervised Learning", "Coursera", "Stanford"]
  },
  {
    name: "PUMPS 24_Shreyas Girish.pdf",
    displayName: "PUMPS+AI ACM Summer School – BSC",
    file: `${import.meta.env.BASE_URL}certificates/PUMPS 24_Shreyas Girish.pdf`,
    date: "12-07-2024",
    verification: "",
    tags: ["High Performance Computing", "AI", "Parallel Programming", "Supercomputing", "BSC"]
  },
  {
    name: "CIMNE_Winter_school.pdf",
    displayName: "CIMNE Winter School – Multiphysics",
    file: `${import.meta.env.BASE_URL}certificates/CIMNE_Winter_school.pdf`,
    date: "05-02-2024",
    verification: "",
    tags: ["Numerical Methods", "Multiphysics", "CIMNE", "Winter School", "Simulation"]
  },
  {
    name: "Finite Element Analysis.pdf",
    displayName: "Finite Element Analysis",
    file: `${import.meta.env.BASE_URL}certificates/Finite Element Analysis.pdf`,
    date: "31-07-2023",
    verification: "",
    tags: ["FEA", "Stress Analysis", "Simulation"]
  },
  {
    name: "Advanced CFD using ANSYS Fluent.pdf",
    displayName: "Advanced CFD using ANSYS Fluent",
    file: `${import.meta.env.BASE_URL}certificates/Advanced CFD using ANSYS Fluent.pdf`,
    date: "10-07-2022",
    verification: "https://skill-lync.com/certification/individual/89lqoc42rieu5k7d",
    tags: ["CFD", "ANSYS Fluent", "Simulation"]
  },
  {
    name: "Advanced CFD for IC Engine Applications.pdf",
    displayName: "Advanced CFD for IC Engine Applications",
    file: `${import.meta.env.BASE_URL}certificates/Advanced CFD for IC Engine Applications.pdf`,
    date: "20-06-2022",
    verification: "https://skill-lync.com/certification/individual/C6lhXp0YXlzOd3ga",
    tags: ["CFD", "IC Engine", "Combustion", "Turbulence Modeling"]
  },
  {
    name: "A Literature Survey on Automobile fuel system technologies.pdf",
    displayName: "Automobile Fuel System Technologies – Literature Survey",
    file: `${import.meta.env.BASE_URL}certificates/A Literature Survey on Automobile fuel system technologies.pdf`,
    date: "15-04-2022",
    verification: "https://core.ac.uk/download/228553945.pdf",
    tags: ["Automotive", "Fuel Systems", "IC Engine", "Literature Review"]
  },
  {
    name: "Pirple_C++.pdf",
    displayName: "C++ for the Rest of Us – Pirple",
    file: `${import.meta.env.BASE_URL}certificates/Pirple_C++.pdf`,
    date: "13-01-2022",
    verification: "https://www.pirple.com/certificates/rtfyh6hk8f",
    tags: ["C++", "OOP", "Programming", "Pirple"]
  },
  {
    name: "Pirple_JAVA.pdf",
    displayName: "Fundamentals of Java – Pirple",
    file: `${import.meta.env.BASE_URL}certificates/Pirple_JAVA.pdf`,
    date: "29-12-2021",
    verification: "https://www.pirple.com/certificates/fbl07sxcp8",
    tags: ["Java", "OOP", "GUI", "Programming", "Pirple"]
  },
  {
    name: "Pirple_Python.pdf",
    displayName: "Python is Easy – Pirple",
    file: `${import.meta.env.BASE_URL}certificates/Pirple_Python.pdf`,
    date: "25-09-2021",
    verification: "https://www.pirple.com/certificates/bn7ylhjieo",
    tags: ["Python", "Programming", "Pirple", "OOP"]
  },
  {
    name: "Automobile Sketching _ Styling.pdf",
    displayName: "Automobile Sketching & Styling",
    file: `${import.meta.env.BASE_URL}certificates/Automobile Sketching _ Styling.pdf`,
    date: "10-10-2021",
    verification: "",
    tags: ["Automotive Design", "Sketching", "Styling", "Concept Development"]
  },
  {
    name: "MITx 6.00.1x Certificate _ edX_new.pdf",
    displayName: "Introduction to Computer Science Using Python – MITx",
    file: `${import.meta.env.BASE_URL}certificates/MITx 6.00.1x Certificate _ edX_new.pdf`,
    date: "29-10-2021",
    verification: "https://courses.edx.org/certificates/f5d53ed0f73a47c0a93b66e3feea5adf",
    tags: ["Python", "Computer Science", "MITx", "Programming"]
  },
  {
    name: "MATLAB OnRamp Certificate.pdf",
    displayName: "MATLAB OnRamp",
    file: `${import.meta.env.BASE_URL}certificates/MATLAB OnRamp Certificate.pdf`,
    date: "27-08-2021",
    verification: "",
    tags: ["MATLAB", "Programming", "MathWorks", "Training"]
  },
  {
    name: "Introduction to CFD using MATLAB and OpenFOAM.pdf",
    displayName: "Introduction to CFD using MATLAB and OpenFOAM",
    file: `${import.meta.env.BASE_URL}certificates/Introduction to CFD using MATLAB and OpenFOAM.pdf`,
    date: "10-07-2021",
    verification: "https://skill-lync.com/certification/individual/WS67AFGQZRGmNGTs",
    tags: ["CFD", "MATLAB", "OpenFOAM", "Simulation"]
  },
  {
    name: "NPTEL_ML_FM.pdf",
    displayName: "Machine Learning – NPTEL",
    file: `${import.meta.env.BASE_URL}certificates/NPTEL_ML_FM.pdf`,
    date: "01-06-2021",
    verification: "https://elearn.nptel.ac.in/Ecertificate/?q=NP24WS270127948053",
    tags: ["Machine Learning", "NPTEL", "Data Science"]
  },
  {
    name: "Udemy_ANSYS_Spaceclaim_Direct_modeller.pdf",
    displayName: "ANSYS SpaceClaim Direct Modeler – Udemy",
    file: `${import.meta.env.BASE_URL}certificates/Udemy_ANSYS_Spaceclaim_Direct_modeller.pdf`,
    date: "01-06-2020",
    verification: "https://www.udemy.com/certificate/UC-af7c81bf-aeb0-4749-a542-2f83aa88d77b/",
    tags: ["ANSYS", "SpaceClaim", "CAD", "Direct Modeling", "Udemy"]
  },
  {
    name: "Faurecia_Rewards_and_Recognition.pdf",
    displayName: "Faurecia Rewards and Recognition",
    file: `${import.meta.env.BASE_URL}certificates/Faurecia_Rewards_and_Recognition.pdf`,
    date: "15-12-2020",
    verification: "",
    tags: ["Industry Experience", "Recognition", "Faurecia"]
  },
  {
    name: "Gesture Based Robotics certificate.pdf",
    displayName: "Gesture Based Robotics – Skyfi Labs",
    file: `${import.meta.env.BASE_URL}certificates/Gesture Based Robotics certificate.pdf`,
    date: "11-10-2015",
    verification: "https://www.skyfilabs.com/verify-certificate/26170040",
    tags: ["Robotics", "Gesture Control", "Workshop", "Embedded Systems"]
  },
  {
    name: "caddcentre_certificate_1.pdf",
    displayName: "Master Diploma in Product Design and Analysis – CADD Centre",
    file: `${import.meta.env.BASE_URL}certificates/caddcentre_certificate_1.pdf`,
    date: "29-10-2018",
    verification: "https://registry.caddcentre.com/ghbji.php?asdsad=RWx0RTRqenE0cEFyRHhsYSsvV3FRb2F2Y3kvMnFsZ2JrcFhXRFM4eXZHOXFrUEN5ME92TitmVGQvaGJzQjFsaQ==",
    tags: ["CAD", "FEA", "CATIA", "NX CAD", "ANSYS", "HyperMesh", "Product Design", "GD&T"]
  }
];



const CertificatesSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="CertificatesSection" className="py-24 px-4 relative">
      <div className="w-full max-w-[95rem] px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Certificates</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my professional certifications.
        </p>
        <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-lg shadow-xs card-hover overflow-hidden flex flex-col items-center p-6 cursor-pointer transition hover:shadow-lg"
              onClick={() => setSelected(cert)}
            >
              <div className="w-full h-40 flex items-center justify-center bg-gray-100 dark:bg-white/10 rounded mb-4 overflow-hidden">
                <embed
                  src={cert.file}
                  type="application/pdf"
                  className="w-full h-40 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                {cert.displayName}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                  {cert.date}
                </span>
                {cert.verification && (
                  <a
                    href={cert.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs underline"
                  >
                    Verify
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged certificate */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white dark:bg-[#232136] rounded-lg shadow-2xl p-6 max-w-3xl w-full relative animate-fade-in"
              style={{ maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-2xl text-primary hover:text-red-500"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex flex-col items-center">
                <embed
                  src={selected.file}
                  type="application/pdf"
                  className="w-full h-[60vh] object-contain rounded mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-center">
                  {selected.displayName}
                </h3>
                <div className="flex flex-wrap justify-center gap-2 mb-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                    {selected.date}
                  </span>
                  {selected.verification && (
                    <a
                      href={selected.verification}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs underline"
                    >
                      Verify
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {selected.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-primary/20 border border-primary/40 text-primary font-semibold px-4 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;