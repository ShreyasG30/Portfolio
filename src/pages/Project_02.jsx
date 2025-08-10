import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarBackground } from "../components/StarBackground";
import { motion, AnimatePresence } from "framer-motion";

// ...existing imports...

const projectData = {
  title: "Anchor Assembly Simulation",
  description: "Finite Element Analysis (FEA) of a post-tensioned anchor system under axial load to evaluate displacement and stress distribution across cables, wedges, and anchor block.",
  image: "/Project_01/Project_01.png", 
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
function Project_02() {
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
        
        </div>
        </div>
  )
}

export default Project_02;