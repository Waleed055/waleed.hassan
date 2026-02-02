import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import { useRef } from "react";
import "./projectsCard.css";
import play from "../../assets/images/playstroe.svg";
import apple from "../../assets/images/apple.svg";
import web from "../../assets/images/web.svg";

export default function ProjectsCard({ title, image, androidLink, iosLink, webLink }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  // Parallax: card moves slightly up/down at a different rate
  const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Velocity Scale: reacts to scroll speed
  const scaleVelocity = useTransform(velocity, [-3000, 0, 3000], [0.97, 1, 0.97]);
  const scale = useSpring(scaleVelocity, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      className="new-project-card"
      layout
      style={{ y: yParallax, scale }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="npc-img">
        <img src={image} alt="project" />
      </div>

      <h3 className="npc-title">{title}</h3>
      <h6>1M+ Downloads</h6>

      <div className="npc-icons">
        {androidLink && androidLink !== "#" && (
          <motion.div className="icons-svg" whileHover={{ scale: 1.2 }}>
            <a href={androidLink} target="_blank" rel="noopener noreferrer">
              <img src={play} alt="android" />
            </a>
          </motion.div>
        )}

        {iosLink && iosLink !== "#" && (
          <motion.div className="icons-svg" whileHover={{ scale: 1.2 }}>
            <a href={iosLink} target="_blank" rel="noopener noreferrer">
              <img src={apple} alt="ios" />
            </a>
          </motion.div>
        )}

        {webLink && webLink !== "#" && (
          <motion.div className="icons-svg" whileHover={{ scale: 1.2 }}>
            <a href={webLink} target="_blank" rel="noopener noreferrer">
              <img src={web} alt="web" />
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}


