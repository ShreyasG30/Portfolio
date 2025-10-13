// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { StarBackground } from "../components/StarBackground";
// import "@google/model-viewer";

// const projectData = {
//   title: "Interactive Car Seat Design",
//   description:
//     "A detailed 3D CAD model of an automotive seat with interactive viewing capabilities. Users can explore the design through rotation, zoom, and pan controls while examining the structural components and ergonomic features.",
//   image: `${import.meta.env.BASE_URL}Project_02/carseat_preview.png`,
//   tags: ["CAD", "3D Modeling", "Three.js", "Interactive"],
// };

// // --- Simple GLB viewer using <model-viewer> ---
// function ModelViewer() {
//   const src = `${import.meta.env.BASE_URL}models/car_seat.glb`;
//   const poster = `${import.meta.env.BASE_URL}Project_02/carseat_preview.png`;

//   return (
//     <model-viewer
//       src={src}
//       poster={poster}
//       alt="Interactive car seat model"
//       camera-controls
//       auto-rotate
//       shadow-intensity="0.8"
//       exposure="1"
//       interaction-prompt="none"
//       ar-modes="webxr scene-viewer quick-look"
//       style={{
//         width: "100%",
//         height: "60vh",
//         borderRadius: "12px",
//         background: "#111",
//       }}
//     />
//   );
// }

// function ProjectHeader({ project }) {
//   return (
//     <div className="flex flex-col md:flex-row items-center gap-8 mb-12 mt-4 w-full">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="rounded-2xl shadow-lg border-2 border-white bg-white max-w-full md:max-w-[600px] w-full object-contain"
//         style={{ minHeight: 320, background: "#fff" }}
//       />
//       <div className="flex-1 flex flex-col items-center md:items-start">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-center md:text-left mb-4 text-primary">
//           {project.title}
//         </h1>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tags.map((tag) => (
//             <span
//               key={tag}
//               className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-base"
//             >
//               #{tag}
//             </span>
//           ))}
//         </div>
//         <p className="text-xl text-center md:text-left mb-6">
//           {project.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// function Project_02() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-background text-foreground flex flex-col items-center">
//       <StarBackground />
//       <div className="relative z-10 flex flex-col items-start w-full px-2 md:px-8 py-8 max-w-7xl mx-auto">
//         <button
//           className="mt-20 mb-8 px-6 py-2 bg-primary/80 hover:bg-primary text-white font-semibold rounded-lg shadow transition"
//           onClick={() => navigate("/")}
//         >
//           &larr; Back to Home
//         </button>

//         <ProjectHeader project={projectData} />

//         {/* 3D Model Viewer */}
//         <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
//           <h2 className="text-2xl font-bold mb-4 text-left flex items-center gap-2">
//             <span className="text-primary">1</span>
//             <span>Interactive 3D Model</span>
//           </h2>
//           <ModelViewer />
//           <div className="mt-4 text-sm text-center text-muted-foreground">
//             Use mouse to rotate. Scroll to zoom. Right-click to pan.
//           </div>
//         </section>

//         {/* Project Description */}
//         <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
//           <h2 className="text-2xl font-bold mb-2 text-left flex items-center gap-2">
//             <span className="text-primary">2</span>
//             <span>Project Overview</span>
//           </h2>
//           <p className="mb-3 text-left">
//             This project showcases a detailed 3D CAD model of an automotive seat
//             designed with emphasis on:
//           </p>
//           <ul className="list-disc list-inside mb-3 text-left space-y-2">
//             <li>Ergonomic design principles for optimal comfort</li>
//             <li>Structural integrity and safety considerations</li>
//             <li>Manufacturing feasibility and assembly optimization</li>
//             <li>Material selection for durability and cost-effectiveness</li>
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Project_02;

// src/pages/Project_02.jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarBackground } from "../components/StarBackground";
import "@google/model-viewer";

const projectData = {
  title: "Interactive Car Seat Design",
  subtitle:
    "Explore the geometry, structure, and ergonomics of a seat assembly right in the browser.",
  description:
    "This interactive 3D viewer showcases an automotive seat concept exported from SolidWorks/CATIA to GLB. The page includes smooth orbit, pan, and zoom controls, with lighting tuned for clarity. Use the toolbar to toggle auto-rotate, reset the view, or go fullscreen.",
  image: `${import.meta.env.BASE_URL}Project_02/carseat_preview.png`,
  tags: ["CAD", "SolidWorks", "CATIA", "GLB", "Web 3D"],
  modelPath: `${import.meta.env.BASE_URL}models/car_seat.glb`,
};

// ──────────────────────────────────────────────────────────────
// Small badge
function Chip({ children }) {
  return (
    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
      {children}
    </span>
  );
}

// ──────────────────────────────────────────────────────────────
// // Model Viewer with toolbar + progress
// function ModelViewerCard({ src, poster }) {
//   const ref = useRef(null);
//   const [autoRotate, setAutoRotate] = useState(true);
//   const [exposure, setExposure] = useState(1);
//   const [shadowIntensity, setShadowIntensity] = useState(0.8);
//   const [progress, setProgress] = useState(0);
//   const [loaded, setLoaded] = useState(false);

//   // Progress & load listeners
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const onProgress = (e) => {
//       const p = e?.detail?.totalProgress ?? 0;
//       setProgress(p);
//     };
//     const onLoad = () => {
//       setLoaded(true);
//       setProgress(1);
//     };

//     el.addEventListener("progress", onProgress);
//     el.addEventListener("load", onLoad);
//     return () => {
//       el.removeEventListener("progress", onProgress);
//       el.removeEventListener("load", onLoad);
//     };
//   }, []);

//   // Keep element attributes in sync with state
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     // toggle auto-rotate attribute
//     if (autoRotate) el.setAttribute("auto-rotate", "");
//     else el.removeAttribute("auto-rotate");
//     // exposure & shadows
//     el.setAttribute("exposure", String(exposure));
//     el.setAttribute("shadow-intensity", String(shadowIntensity));
//   }, [autoRotate, exposure, shadowIntensity]);

//   const toggleRotate = () => setAutoRotate((v) => !v);

//   const resetView = () => {
//     const el = ref.current;
//     if (!el) return;
//     // model-viewer provides a helper on the element in modern versions:
//     if (typeof el.resetTurntableRotation === "function") {
//       el.resetTurntableRotation();
//     }
//     // also “jump” the camera to its goal to avoid easing delay
//     if (typeof el.jumpCameraToGoal === "function") {
//       el.jumpCameraToGoal();
//     }
//     // as a fallback, you could also set attributes:
//     // el.setAttribute("camera-orbit", "auto");
//     // el.setAttribute("camera-target", "auto");
//   };

//   const goFullscreen = () => {
//     const el = ref.current;
//     if (!el) return;
//     if (document.fullscreenElement) {
//       document.exitFullscreen?.();
//     } else {
//       el.requestFullscreen?.();
//     }
//   };

//   return (
//     <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/80">
//       {/* Toolbar */}
//       <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
//         <button
//           onClick={toggleRotate}
//           className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm"
//           title="Toggle auto-rotate"
//         >
//           {autoRotate ? "Pause" : "Rotate"}
//         </button>
//         <button
//           onClick={resetView}
//           className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm"
//           title="Reset view"
//         >
//           Reset
//         </button>
//         <button
//           onClick={goFullscreen}
//           className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm"
//           title="Fullscreen"
//         >
//           Fullscreen
//         </button>
//       </div>

//       {/* Viewer */}
//       <model-viewer
//         ref={ref}
//         src={src}
//         poster={poster}
//         alt="Interactive car seat model"
//         camera-controls
//         // auto-rotate handled by state/attribute sync above
//         ar-modes="webxr scene-viewer quick-look"
//         interaction-prompt="none"
//         reveal="auto"
//         loading="eager"
//         style={{
//           width: "100%",
//           height: "62vh",
//           background: "#0b0b0b",
//         }}
//         // initial values (kept in sync via effect)
//         exposure={exposure}
//         shadow-intensity={shadowIntensity}
//       />

//       {/* Bottom HUD: exposure / shadows */}
//       <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-3 flex flex-col gap-2">
//         <div className="flex gap-3 items-center text-white/90 text-xs">
//           <span className="hidden sm:inline">Exposure</span>
//           <input
//             type="range"
//             min="0.6"
//             max="1.6"
//             step="0.02"
//             value={exposure}
//             onChange={(e) => setExposure(parseFloat(e.target.value))}
//             className="w-full sm:w-40"
//           />
//           <span className="hidden sm:inline">Shadows</span>
//           <input
//             type="range"
//             min="0"
//             max="1"
//             step="0.05"
//             value={shadowIntensity}
//             onChange={(e) => setShadowIntensity(parseFloat(e.target.value))}
//             className="w-full sm:w-40"
//           />
//         </div>
//         <div className="text-center text-white/70 text-[12px]">
//           Drag to rotate • Scroll to zoom • Right-click to pan
//         </div>
//       </div>

//       {/* Progress bar */}
//       {!loaded && (
//         <div className="absolute left-4 right-4 bottom-4 z-20">
//           <div className="h-1.5 w-full rounded bg-white/15 overflow-hidden">
//             <div
//               className="h-full bg-white/80 transition-all"
//               style={{ width: `${Math.round(progress * 100)}%` }}
//             />
//           </div>
//           <div className="mt-1 text-right text-[11px] text-white/70">
//             {Math.round(progress * 100)}%
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// ──────────────────────────────────────────────────────────────
// Transparent Model Viewer Card
function ModelViewerCard({ src, poster }) {
  const ref = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [exposure, setExposure] = useState(1.1);
  const [shadowIntensity, setShadowIntensity] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Track progress/loading
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onProgress = (e) => setProgress(e?.detail?.totalProgress ?? 0);
    const onLoad = () => { setLoaded(true); setProgress(1); };

    el.addEventListener("progress", onProgress);
    el.addEventListener("load", onLoad);
    return () => {
      el.removeEventListener("progress", onProgress);
      el.removeEventListener("load", onLoad);
    };
  }, []);

  // Update viewer attributes when state changes
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (autoRotate) el.setAttribute("auto-rotate", "");
    else el.removeAttribute("auto-rotate");

    el.setAttribute("exposure", String(exposure));
    el.setAttribute("shadow-intensity", String(shadowIntensity));

    // Transparent background → no environment image
    el.removeAttribute("skybox-image");
    el.removeAttribute("environment-image");
  }, [autoRotate, exposure, shadowIntensity]);

  const resetView = () => {
    const el = ref.current;
    el?.resetTurntableRotation?.();
    el?.jumpCameraToGoal?.();
  };

  const goFullscreen = () => {
    const el = ref.current;
    if (!el) return;
    document.fullscreenElement
      ? document.exitFullscreen?.()
      : el.requestFullscreen?.();
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/15 backdrop-blur-sm bg-transparent">
      {/* Toolbar */}
      <div className="absolute top-3 right-3 z-10 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setAutoRotate((v) => !v)}
          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm"
        >
          {autoRotate ? "Pause" : "Rotate"}
        </button>
        <button
          onClick={resetView}
          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm"
        >
          Reset
        </button>
        <button
          onClick={goFullscreen}
          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm"
        >
          Fullscreen
        </button>
      </div>

      {/* Transparent viewer */}
      <model-viewer
        ref={ref}
        src={src}
        poster={poster}
        alt="Interactive car seat model"
        camera-controls
        interaction-prompt="none"
        reveal="auto"
        loading="eager"
        style={{
          width: "100%",
          height: "62vh",
          background: "transparent", // ✅ transparent background
        }}
        exposure={exposure}
        shadow-intensity={shadowIntensity}
        shadow-softness="0.7"
      />

      {/* Lighting controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/40 to-transparent p-3 flex flex-col gap-2">
        <div className="flex gap-3 items-center text-white/90 text-xs">
          <span className="hidden sm:inline">Exposure</span>
          <input
            type="range"
            min="0.6"
            max="1.6"
            step="0.02"
            value={exposure}
            onChange={(e) => setExposure(parseFloat(e.target.value))}
            className="w-full sm:w-40"
          />
          <span className="hidden sm:inline">Shadows</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={shadowIntensity}
            onChange={(e) => setShadowIntensity(parseFloat(e.target.value))}
            className="w-full sm:w-40"
          />
        </div>
        <div className="text-center text-white/70 text-[12px]">
          Drag to rotate • Scroll to zoom • Right-click to pan
        </div>
      </div>

      {/* Progress bar */}
      {!loaded && (
        <div className="absolute left-4 right-4 bottom-4 z-20">
          <div className="h-1.5 w-full rounded bg-white/15 overflow-hidden">
            <div
              className="h-full bg-white/80 transition-all"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <div className="mt-1 text-right text-[11px] text-white/70">
            {Math.round(progress * 100)}%
          </div>
        </div>
      )}
    </div>
  );
}





// ──────────────────────────────────────────────────────────────
// Header + Right sidebar
function ProjectHeader({ project }) {
  return (
    <div className="w-full mb-8">
      <div className="rounded-2xl p-6 md:p-8 bg-white/5 backdrop-blur border border-white/10">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="text-primary">{project.title}</span>
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              {project.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// Page
export default function Project_02() {
  const navigate = useNavigate();
  const { modelPath, image } = projectData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <StarBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-3 md:px-8 pb-16">
        {/* Top bar */}
        <div className="pt-20 mb-6">
          <button
            className="px-5 py-2 rounded-lg bg-primary/80 hover:bg-primary text-white shadow transition"
            onClick={() => navigate("/")}
          >
            &larr; Back to Home
          </button>
        </div>

        <ProjectHeader project={projectData} />

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Viewer card spans 2 cols on large */}
          <div className="lg:col-span-2">
            <ModelViewerCard src={modelPath} poster={image} />
          </div>

          {/* Right: details card */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10">
              <h3 className="text-xl font-semibold mb-2">About this model</h3>
              <p className="text-sm text-muted-foreground">{projectData.description}</p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-muted-foreground">Source</div>
                  <div>CATIA / SolidWorks</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Format</div>
                  <div>GLB (glTF 2.0)</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Viewer</div>
                  <div>&lt;model-viewer&gt;</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Controls</div>
                  <div>Orbit / Zoom / Pan</div>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={modelPath}
                  download
                  className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition"
                >
                  Download GLB
                </a>
                <a
                  href="https://github.com/ShreyasG30"
                  target="_blank"
                  className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
                >
                  View Repo
                </a>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Design Notes</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Ergonomics-first geometry, simplified for web performance.</li>
                <li>Merged meshes & tuned materials for clarity.</li>
                <li>Exported with GLB to preserve PBR shading.</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Overview section */}
        <section className="mt-10 rounded-2xl p-6 md:p-8 bg-white/5 backdrop-blur border border-white/10">
          <h2 className="text-2xl font-bold mb-3">
            <span className="text-primary">Overview</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="mb-3">
                This page demonstrates a smooth web viewer experience using the{" "}
                <code className="px-1 py-0.5 rounded bg-white/10">&lt;model-viewer&gt;</code>{" "}
                component. The toolbar lets you pause rotation, reset the camera, and
                enter fullscreen without leaving the page.
              </p>
              <p className="text-muted-foreground">
                For even heavier assemblies, consider compressing the GLB (Draco),
                merging by material, and limiting transparency.
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li>High-contrast dark canvas for geometry focus</li>
              <li>Adaptive lighting via exposure + shadows sliders</li>
              <li>Progress bar during asset loading</li>
              <li>Responsive layout, mobile-friendly controls</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
