import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarBackground } from "../components/StarBackground";
import { motion, AnimatePresence } from "framer-motion";

// Example project data – update as needed
const projectData = {
  title: "Automated Weather Station Dashboard",
  description:
    "A full-stack web application for real-time monitoring and visualization of weather data collected from IoT-based weather stations. Features live charts, historical data analysis, and alert notifications.",
  image: "/Project_02/Project_02.png",
  tags: ["React", "Node.js", "IoT", "Data Visualization"],
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
            This project focuses on building a scalable and interactive dashboard for monitoring weather parameters such as temperature, humidity, wind speed, and rainfall. The system collects data from multiple IoT-enabled weather stations and provides real-time visualization and analytics for users.
          </p>
          <ol className="list-decimal list-inside mb-3 text-left">
            <li>Real-time data acquisition from remote sensors.</li>
            <li>Interactive charts and historical data analysis.</li>
            <li>Automated alerts for extreme weather conditions.</li>
          </ol>
          <div className="mb-3 text-left">
            <span className="font-bold bg-yellow-300 text-black px-2 py-1 rounded">
              Note: The dashboard is optimized for both desktop and mobile devices.
            </span>
          </div>
        </section>

        {/* 2. System Architecture */}
        <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-left flex items-center gap-2">
            <span className="text-primary">2</span>
            <span>System Architecture</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ImgCol
              src="/Project_02/architecture.png"
              alt="System Architecture"
              caption="Figure 1. System Architecture Overview"
              onClick={() => handleImgClick("/Project_02/architecture.png", "System Architecture")}
            />
            <div>
              <p className="mb-2 text-left">
                The architecture consists of IoT weather stations that transmit data to a cloud server via MQTT. The backend processes and stores the data in a time-series database, while the frontend dashboard fetches and visualizes the data in real time.
              </p>
              <ol className="list-decimal list-inside space-y-1 text-left">
                <li>
                  <span className="font-semibold text-primary">IoT Weather Stations</span> (ESP32-based)
                </li>
                <li>
                  <span className="font-semibold text-primary">Backend API</span> (Node.js, Express)
                </li>
                <li>
                  <span className="font-semibold text-primary">Frontend Dashboard</span> (React, Chart.js)
                </li>
                <li>
                  <span className="font-semibold text-primary">Database</span> (InfluxDB)
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* 3. Features */}
        <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-left flex items-center gap-2">
            <span className="text-primary">3</span>
            <span>Key Features</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <ImgCol
              src="/Project_02/feature_live.png"
              alt="Live Data"
              caption="Figure 2. Live Weather Data"
              onClick={() => handleImgClick("/Project_02/feature_live.png", "Live Data")}
            />
            <ImgCol
              src="/Project_02/feature_history.png"
              alt="Historical Data"
              caption="Figure 3. Historical Data Analysis"
              onClick={() => handleImgClick("/Project_02/feature_history.png", "Historical Data")}
            />
            <ImgCol
              src="/Project_02/feature_alerts.png"
              alt="Alerts"
              caption="Figure 4. Automated Alerts"
              onClick={() => handleImgClick("/Project_02/feature_alerts.png", "Alerts")}
            />
          </div>
        </section>

        {/* 4. Implementation Details */}
        <section className="w-full mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-left flex items-center gap-2">
            <span className="text-primary">4</span>
            <span>Implementation Details</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-left">4.1 Backend</h3>
              <p className="mb-4 text-left">
                The backend is built using Node.js and Express, providing RESTful APIs for data retrieval and alert management. MQTT is used for efficient real-time data ingestion from the weather stations.
              </p>
            </div>
            <ImgCol
              src="/Project_02/backend.png"
              alt="Backend API"
              caption="Figure 5. Backend API Overview"
              onClick={() => handleImgClick("/Project_02/backend.png", "Backend API")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-left">4.2 Frontend</h3>
              <p className="mb-4 text-left">
                The frontend dashboard is developed in React, featuring responsive design and interactive charts using Chart.js. Users can view live data, filter by date range, and receive notifications for critical events.
              </p>
            </div>
            <ImgCol
              src="/Project_02/frontend.png"
              alt="Frontend Dashboard"
              caption="Figure 6. Frontend Dashboard"
              onClick={() => handleImgClick("/Project_02/frontend.png", "Frontend Dashboard")}
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
            The dashboard successfully displays real-time and historical weather data from multiple stations. Automated alerts have improved response times to extreme weather events, and the system has proven reliable in continuous operation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <ImgCol
              src="/Project_02/result_1.png"
              alt="Live Dashboard"
              caption="Figure 7. Live Dashboard in Action"
              onClick={() => handleImgClick("/Project_02/result_1.png", "Live Dashboard")}
            />
            <ImgCol
              src="/Project_02/result_2.png"
              alt="Alert Example"
              caption="Figure 8. Example of Alert Notification"
              onClick={() => handleImgClick("/Project_02/result_2.png", "Alert Example")}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project_02;