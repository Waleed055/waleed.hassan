import { motion } from "framer-motion";
import "./rightCard.css";

export default function RightCard() {
  return (
    <motion.div
      className="right-card"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
    >
      <p className="info">
        I am a Senior Software Engineer specializing in Android and Flutter
        development, with a strong focus on creating high-quality, scalable,
        and user-centric mobile solutions. With years of hands-on experience,
        I excel in transforming complex requirements into intuitive and
        high-performance applications. My expertise spans clean architecture,
        responsive UI development, API integration, and performance optimization,
        allowing me to deliver products that are both reliable and delightful
        to use. I am passionate about building impactful digital experiences
        and continuously improving through innovation, best practices, and a
        deep understanding of modern mobile development .
      </p>

      <p className="quote">
        "If you are not going to tell the world who you are, the world is not
        going to tell you how good you are."
      </p>
    </motion.div>
  );
}

