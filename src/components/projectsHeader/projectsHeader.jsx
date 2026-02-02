import { motion } from "framer-motion";
import "./projectsHeader.css"
import SVGS from "../../assets/images/lines.svg"

export default function ProjectHeader() {
  return (
    <motion.div
      className="project-header"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      <img src={SVGS} alt="line" className="project-icon left-icon" />
      <h2 className="project-heading">Projects</h2>
      <img src={SVGS} alt="line" className="project-icon right-icon" />
    </motion.div>
  );
}

