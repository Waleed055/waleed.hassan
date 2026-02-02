import { motion } from "framer-motion";
import "./hybridAppCard.css";
import hybridIcon from "../../assets/images/hybird.svg";

export default function HybridAppCard() {
  return (
    <motion.div
      className="hybrid"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 45, damping: 15, delay: 0.3 }}
    >
      <div className="outer-line">
        <div className="lt"></div>
        <div className="rt"></div>
        <div className="lb"></div>
        <div className="rb"></div>

        <div className="hybrid-icon">
          <img src={hybridIcon} alt="hybrid icon" />
        </div>

        <h4 className="hybrid-heading">Hybrid Apps (Flutter) </h4>

        <p className="hybrid-description">
          I build high-performance hybrid apps using Flutter/React Native,
          ensuring smooth UI, fast performance, and consistent experience across
          Android and iOS. My focus is on clean architecture, scalable development
          practices, and intuitive user experiences. I collaborate effectively with
          teams to transform ideas into polished, production-ready applications.
        </p>
      </div>
    </motion.div>
  );
}

