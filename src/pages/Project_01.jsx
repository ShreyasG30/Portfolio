import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarBackground } from "../components/StarBackground";
import { motion, AnimatePresence } from "framer-motion";

// ...existing imports...

const img = (path) => `${import.meta.env.BASE_URL}${path}`;

const projectData = {
  title: "Anchor Assembly Simulation",
  description: "Finite Element Analysis (FEA) of a post-tensioned anchor system under axial load to evaluate displacement and stress distribution across cables, wedges, and anchor block.",
  image: img("/Project_01/Project_01.png"),
  tags: ["FEA", "ANSYS", "Structural", "Post-Tensioning"],
};


function ProjectHeader({ project }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-12 mt-4 w-full">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-2xl shadow-lg border-2 border-white bg-white max-w-full md:max-w-[600px] w-full object-contain"
        style={{ minHeight: 320, background: "#fff" }}
      />
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center md:text-left mb-4 text-primary">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-base"
            >
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-xl text-center md:text-left mb-6">{project.description}</p>
      </div>
    </div>
  );
}


// Modal animation
const modalVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2 } },
};

function ImageModal({ src, alt, onClose }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          onClick={onClose}
        >
          <motion.img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={e => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ImgCol({ src, alt, caption, onClick }) {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <motion.img
        src={src}
        alt={alt}
        className="rounded-lg border shadow bg-white cursor-pointer w-full h-auto max-h-72 object-contain transition-all"
        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #60a5fa55" }}
        onClick={onClick}
      />
      <span className="text-xs text-muted-foreground mt-2 italic text-center">{caption}</span>
    </div>
  );
}


function Project_01() {
  const navigate = useNavigate();
  const [modalImg, setModalImg] = useState({ src: null, alt: "" });
  const handleImgClick = (src, alt) => setModalImg({ src, alt });
  const closeModal = () => setModalImg({ src: null, alt: "" });

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col items-center">
      <StarBackground />
      <ImageModal src={modalImg.src} alt={modalImg.alt} onClose={closeModal} />
      <div className="relative z-10 flex flex-col items-start w-full px-2 md:px-8 py-8 max-w-7xl mx-auto">

        {/* Back Button */}
        <button
          className="mt-20 mb-8 px-6 py-2 bg-primary/80 hover:bg-primary text-white font-semibold rounded-lg shadow transition"
          onClick={() => navigate("/")}
          style={{ zIndex: 20, position: "relative" }}
        >
          &larr; Back to Home
        </button>

         <ProjectHeader project={projectData} />

        {/* 1. Introduction */}
        <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2 text-left flex items-center gap-2">
            <span className="text-primary">1</span>
            <span>Introduction</span>
          </h2>
          <p className="mb-3 text-left">
            The model aims to understand the structural integrity based on the load application. In this case study, we study the effect of applied load on the anchor assembly and understand the behavior of the anchor to the applied load. A FEM study is performed to analyze it:
          </p>
          <ol className="list-decimal list-inside mb-3 text-left">
            <li>Understand the deformation due to the applied load on the cable strands.</li>
            <li>Understand the stress induced in the anchor due to the applied load.</li>
          </ol>
          <div className="mb-3 text-left">
            <span className="font-bold bg-yellow-300 text-black px-2 py-1 rounded">
              Note: The mesh considered is too coarse due to computational restraints, thus the results obtained may be too approximated.
            </span>
          </div>
        </section>

        {/* 2. Model Description */}
        <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-left flex items-center gap-2">
            <span className="text-primary">2</span>
            <span>Model Description</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ImgCol
              src={img("/Project_01/Anchor assembly.png")}
              alt="Anchor assembly"
              caption="Figure 1. Anchor assembly"
              onClick={() => handleImgClick(img("/Project_01/Anchor assembly.png"), "Anchor assembly")}
            />
            <div>
              <p className="mb-2 text-left">
                The initial model provided is cleaned and considered model is as shown in the figure.
                This model contains only necessary CAD information as required. The parts that are considered for FEM study are:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-left">
                <li>
                  <span className="font-semibold text-primary">Cable x 24 x 2</span> (Inner x Outside)
                </li>
                <li>
                  <span className="font-semibold text-primary">Wedge x 24 x 2</span> (Inner x Outside)
                </li>
                <li>
                  <span className="font-semibold text-primary">Anchor</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* 3. Dimension Description */}
        <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-left flex items-center gap-2">
            <span className="text-primary">3</span>
            <span>Dimension Description</span>
          </h2>
          <p className="mb-4 text-left">
            The dimensions of the model considered for FEM simulation are as follows:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <ImgCol
              src={img("/Project_01/P01_Figure_03.png")}
              alt="Bottom Plate"
              caption="Figure 3. Dimensions of the Bottom Fixed Plate"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_03.png"), "Bottom Plate")}
            />
            <ImgCol
              src={img("/Project_01/P01_Figure_04.png")}
              alt="Bottom Plate Section"
              caption="Figure 3. Dimensions of the Bottom Fixed Plate (Section)"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_04.png"), "Bottom Plate Section")}
            />
            <ImgCol
              src={img("/Project_01/P01_Figure_05.png")}
              alt="Bottom Plate Dimensions"
              caption="Figure 3. Dimensions of the Bottom Fixed Plate (Drawing)"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_05.png"), "Bottom Plate Dimensions")}
            />
          </div>
        </section>

        {/* 4. Material, Mesh and Boundary Conditions */}
        <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-left flex items-center gap-2">
            <span className="text-primary">4</span>
            <span>Material, Mesh and Boundary Conditions</span>
          </h2>
          {/* 4.2 Mesh */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-left">4.2 Mesh</h3>
              <p className="mb-4 text-left">
                In order to obtain solution with quicker an approximate a very coarse mesh is used. This ensures that an approximate solution is obtained without compromising much on runtime of the FEM study and an approximate understanding of deformation can be obtained.
              </p>
            </div>
            <ImgCol
              src={img("/Project_01/P01_Figure_06.png")}
              alt="Mesh Representation"
              caption="Figure 9. Mesh Representation"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_06.png"), "Mesh Representation")}
            />
          </div>
          {/* 4.3 Boundary Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-left">4.3 Boundary Conditions</h3>
              <p className="mb-2 text-left">
                The boundary conditions applied to the model to replicate the physical behaviour of the model is as described below:
              </p>
              <h4 className="text-base md:text-lg font-bold mb-1 text-left">4.3.1 Fixed Boundary Conditions</h4>
              <p className="mb-2 text-left">
                The purple face on the bottom face of the outer cable strands is constrained with fixed condition, both in displacements and moments is constrained and is as shown in the figure below.
              </p>
            </div>
            <ImgCol
              src={img("/Project_01/P01_Figure_07.png")}
              alt="Fixed Boundary Condition"
              caption="Figure 10. Fixed Boundary Condition"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_07.png"), "Fixed Boundary Condition")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h4 className="text-base md:text-lg font-bold mb-1 text-left">4.3.2 Loading Condition</h4>
              <p className="mb-2 text-left">
                Now to replicate the tensile load acting on the inner cable string a pulling force is applied on one end face of the cable that is on the opposite side of the wedge. A force of 299460N is applied on every strand individually. The loading condition applied is as shown in the figure below:
              </p>
            </div>
            <ImgCol
              src={img("/Project_01/P01_Figure_08.png")}
              alt="UDL Condition"
              caption="Figure 11. UDL Condition"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_08.png"), "UDL Condition")}
            />
          </div>
        </section>

        {/* 5. Results and Discussion */}
        <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-left flex items-center gap-2">
            <span className="text-primary">5</span>
            <span>Results and Discussion</span>
          </h2>
          <p className="mb-4 text-left">
            Once the setup is performed with the conditions mentioned as per the above discussions, the following results are obtained for both cases.
          </p>
          {/* 5.1 Displacement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-left">5.1 Displacement</h3>
              <p className="mb-2 text-left">
                The total deformation of the full assembly (<b>Figure 12</b>) reveals a maximum displacement of approximately <b>6.95 mm</b>, predominantly along the length of the cables, which is consistent with the expected response under axial tensile loading. Localized deformations are observed at the interface regions between the anchor, wedges, and cables, highlighting the areas of intense load transfer and mechanical interaction.
              </p>
            </div>
            <ImgCol
              src={img("/Project_01/P01_Figure_09.png")}
              alt="Total Deformation of the Assembly"
              caption="Figure 12. Total Deformation of the Assembly"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_09.png"), "Total Deformation of the Assembly")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <ImgCol
              src={img("/Project_01/P01_Figure_10.png")}
              alt="Deformation of Anchor"
              caption="Figure 13. Deformation of Anchor"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_10.png"), "Deformation of Anchor")}
            />
            <ImgCol
              src={img("/Project_01/P01_Figure_11.png")}
              alt="Deformation of Outer Wedge"
              caption="Figure 14. Deformation of Outer Wedge"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_11.png"), "Deformation of Outer Wedge")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <ImgCol
              src={img("/Project_01/P01_Figure_12.png")}
              alt="Deformation of Inner Wedge"
              caption="Figure 15. Deformation of Inner Wedge"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_12.png"), "Deformation of Inner Wedge")}
            />
            <ImgCol
              src={img("/Project_01/P01_Figure_13.png")}
              alt="Deformation of Cable"
              caption="Figure 16. Deformation of Cable"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_13.png"), "Deformation of Cable")}
            />
          </div>
          {/* 5.2 Stress */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-left">5.2 Stress</h3>
              <p className="mb-2 text-left">
                The stress distribution of the full assembly (<b>Figure 17</b>) highlights that the maximum equivalent (von-Mises) stress reaches approximately <b>2038.4 MPa</b>, with the highest concentration occurring near the interface where the cables enter the anchor body. This is consistent with expectations, as this region experiences the most intense contact pressure and mechanical interaction during post-tensioning. The cables themselves are under axial tensile stress, while the anchor and wedge components experience localized compressive and shear stresses due to the confinement and load transfer mechanisms.
              </p>
            </div>
            <ImgCol
              src={img("/Project_01/P01_Figure_14.png")}
              alt="Stress Distribution of the Assembly"
              caption="Figure 17. Stress Distribution of the Assembly"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_14.png"), "Stress Distribution of the Assembly")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <ImgCol
              src={img("/Project_01/P01_Figure_15.png")}
              alt="Stress Distribution of Anchor"
              caption="Figure 18. Stress Distribution of Anchor"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_15.png"), "Stress Distribution of Anchor")}
            />
            <ImgCol
              src={img("/Project_01/P01_Figure_16.png")}
              alt="Stress Distribution of Outer Wedge"
              caption="Figure 19. Stress Distribution of Outer Wedge"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_16.png"), "Stress Distribution of Outer Wedge")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <ImgCol
              src={img("/Project_01/P01_Figure_17.png")}
              alt="Stress Distribution of Inner Wedge"
              caption="Figure 20. Stress Distribution of Inner Wedge"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_17.png"), "Stress Distribution of Inner Wedge")}
            />
            <ImgCol
              src={img("/Project_01/P01_Figure_18.png")}
              alt="Stress Distribution of Cable"
              caption="Figure 21. Stress Distribution of Cable"
              onClick={() => handleImgClick(img("/Project_01/P01_Figure_18.png"), "Stress Distribution of Cable")}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project_01;