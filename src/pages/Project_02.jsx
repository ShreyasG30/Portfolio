import { useState, useEffect } from "react";  // Add useEffect import
import { useNavigate } from "react-router-dom";
import { StarBackground } from "../components/StarBackground";
import { motion, AnimatePresence } from "framer-motion";

// ...existing imports...

const projectData = {
  title: "Your Project 2 Title",  // Update this
  description: "Your Project 2 Description",  // Update this
  image: `${import.meta.env.BASE_URL}Project_02/Project_02.png`,  // Update path
  tags: ["Your", "Tags", "Here"],  // Update tags
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


export default Project_02;