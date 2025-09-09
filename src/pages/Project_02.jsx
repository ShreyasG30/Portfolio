import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarBackground } from "../components/StarBackground";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FileLoader } from 'three/examples/jsm/loaders/FileLoader';

const projectData = {
  title: "Interactive Car Seat Design",
  description: "A detailed 3D CAD model of an automotive seat with interactive viewing capabilities. Users can explore the design through rotation, zoom, and pan controls while examining the structural components and ergonomic features.",
  image: `${import.meta.env.BASE_URL}Project_02/carseat_preview.png`,
  tags: ["CAD", "3D Modeling", "Three.js", "Interactive"],
};

function ModelViewer() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.6);
    mountRef.current.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Load the STL model
    const loader = new THREE.FileLoader();
    loader.load(
      `${import.meta.env.BASE_URL}models/car_seat.igs`,
      (data) => {
        // Handle the loaded data
        console.log('Model loaded successfully');
        // You'll need to parse the IGES data here
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.6);
    }
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-[60vh] rounded-lg overflow-hidden border-2 border-white/20"
    />
  );
}

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

function Project_02() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col items-center">
      <StarBackground />
      <div className="relative z-10 flex flex-col items-start w-full px-2 md:px-8 py-8 max-w-7xl mx-auto">
        <button
          className="mt-20 mb-8 px-6 py-2 bg-primary/80 hover:bg-primary text-white font-semibold rounded-lg shadow transition"
          onClick={() => navigate("/")}
        >
          &larr; Back to Home
        </button>

        <ProjectHeader project={projectData} />

        {/* 3D Model Viewer */}
        <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-left flex items-center gap-2">
            <span className="text-primary">1</span>
            <span>Interactive 3D Model</span>
          </h2>
          <ModelViewer />
          <div className="mt-4 text-sm text-center text-muted-foreground">
            Use mouse to rotate. Scroll to zoom. Right-click to pan.
          </div>
        </section>

        {/* Project Description */}
        <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2 text-left flex items-center gap-2">
            <span className="text-primary">2</span>
            <span>Project Overview</span>
          </h2>
          <p className="mb-3 text-left">
            This project showcases a detailed 3D CAD model of an automotive seat designed with emphasis on:
          </p>
          <ul className="list-disc list-inside mb-3 text-left space-y-2">
            <li>Ergonomic design principles for optimal comfort</li>
            <li>Structural integrity and safety considerations</li>
            <li>Manufacturing feasibility and assembly optimization</li>
            <li>Material selection for durability and cost-effectiveness</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Project_02;