import { motion } from "framer-motion";
import "./servicesHeader.css";
import SVGS from "../../assets/images/lines.svg"

export default function AboutHeader() {
  return (
    <motion.div
      className="service-header"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      <img src={SVGS} alt="line" className="service-icon left-icon" />
      <h2 className="service-heading">SERVICES</h2>
      <img src={SVGS} alt="line" className="service-icon right-icon" />
    </motion.div>
  );
}

