import { motion } from "framer-motion";
import "./about.css";
import AboutHeader from "../../components/aboutHeader/aboutHeader";
import AboutLeftCard from "../../components/leftCard/leftCard";
import AboutRightCard from "../../components/rightCard/rightCard";

export default function AboutSection() {
  return (
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <AboutHeader />
      </motion.div>

      <div className="about-flex">
        <AboutLeftCard />
        <AboutRightCard />
      </div>
    </div>
  );
}

