import React from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import "./experienceCard.css";

export default function ExperienceCard({ company, role, duration, location, description, direction }) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  // Subtle scale-down when scrolling fast
  const scaleVelocity = useTransform(velocity, [-3000, 0, 3000], [0.96, 1, 0.96]);
  const scale = useSpring(scaleVelocity, { stiffness: 150, damping: 30 });

  return (
    <motion.div
      className={`experience-card ${direction}`}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ scale }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
    >
      <h3 className="company-name">{company}</h3>
      <p className="role">{role}</p>
      <p className="duration-location">{duration} - {location}</p>
      <p className="description">{description}</p>
    </motion.div>
  );
}


