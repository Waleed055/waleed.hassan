import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsCard from "../../components/projectsCard/projectsCard";
import { projectsData } from "./projectData";
import "./projectsPage.css";
import ProjectHeader from "../../components/projectsHeader/projectsHeader";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const allRef = useRef(null);
  const androidRef = useRef(null);
  const flutterRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    let currentBtn;

    if (filter === "all") currentBtn = allRef.current;
    if (filter === "android") currentBtn = androidRef.current;
    if (filter === "flutter") currentBtn = flutterRef.current;

    if (currentBtn && underlineRef.current) {
      underlineRef.current.style.width = currentBtn.offsetWidth + "px";
      underlineRef.current.style.left = currentBtn.offsetLeft + "px";
    }
  }, [filter]);

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((item) => item.category === filter);

  return (
    <div className="projects-page">
      <ProjectHeader />

      <motion.div
        className="filter-buttons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="filter-bar">
          <button ref={allRef}
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button ref={androidRef}
            className={filter === "android" ? "active" : ""}
            onClick={() => setFilter("android")}
          >
            Android
          </button>

          <button ref={flutterRef}
            className={filter === "flutter" ? "active" : ""}
            onClick={() => setFilter("flutter")}
          >
            Flutter
          </button>

          <span className="underline" ref={underlineRef}></span>
        </div>
      </motion.div>

      <motion.div
        layout
        className="projects-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((item) => (
            <ProjectsCard key={item.id} {...item} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

