import { useState, useRef, useEffect } from "react";
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

      <div className="filter-buttons">
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
      </div>

      <div className="projects-grid">
        {filteredProjects.map((item, index) => (
          <div
            key={item.id}
            className="card-animation-wrapper"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <ProjectsCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
