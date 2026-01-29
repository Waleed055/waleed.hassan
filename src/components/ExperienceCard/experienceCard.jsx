import React from "react";
import "./experienceCard.css";

export default function ExperienceCard({ company, role, duration, location, description, direction }) {
  return (
    <div className={`experience-card ${direction}`}>
      <h3 className="company-name">{company}</h3>
      <p className="role">{role}</p>
      <p className="duration-location">{duration} - {location}</p>
      <p className="description">{description}</p>
    </div>
  );
}
