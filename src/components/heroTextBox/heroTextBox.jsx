import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DownloadIcon from "../../assets/images/Resume-Icon.svg";
import FbIcon from "../../assets/images/facebook.svg";
import InstaIcon from "../../assets/images/insta.svg";
import LinkedinIcon from "../../assets/images/LINKD.svg";
import Githubicon from "../../assets/images/github.svg";

import "./heroTextBox.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function HeroTextBox() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const titleWords = ["I", "am", "Waleed", "Hassan,", "Sr.", "Software", "Engineer"];

  return (
    <motion.div
      className="hero-box"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="hero-title">
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="hover-word"
            style={{ display: "inline-block", marginRight: "10px" }}
            whileHover={{ scale: 1.1, color: "#6D3D94" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h3
        className="static-text"
        variants={wordVariants}
      >
        <div className="roller">
          <div
            className="inner-roll"
            style={{
              transform: `translateY(-${index * 44}px)`,
            }}
          >
            <span className="highlight">Android</span>
            <span className="highlight">Flutter</span>
          </div>
        </div>
        Development
      </motion.h3>

      <motion.p className="hero-desc" variants={wordVariants}>
        Mobile Development Specialist | Practical, efficient, and focused on delivering real-world results
      </motion.p>

      <motion.a
        href="./Waleed-Resume.pdf"
        download="Waleed-Resume.pdf"
        className="resume-link"
        variants={wordVariants}
        animate={floatingAnimation}
      >
        <button className="resume-btn">
          <img src={DownloadIcon} alt="download icon" className="download-icon" />
          Download Resume
        </button>
      </motion.a>

      <motion.div
        className="social "
        variants={wordVariants}
      >
        {[
          { href: "https://www.facebook.com/waleed.hassan.96995238", icon: FbIcon, alt: "facebook" },
          { href: "https://www.instagram.com/waleeed_hasssan/", icon: InstaIcon, alt: "instagram" },
          { href: "https://www.linkedin.com/in/waleed-hassan-b211901bb/", icon: LinkedinIcon, alt: "linkedin" },
          { href: "https://github.com/Waleed055", icon: Githubicon, alt: "github" }
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.2 }}
            animate={{
              y: [0, -5, 0],
              transition: { duration: 2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <img src={social.icon} alt={social.alt} className="social-icon" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
