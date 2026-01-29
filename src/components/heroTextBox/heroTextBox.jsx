import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DownloadIcon from "../../assets/images/Resume-Icon.svg";
import "./heroTextBox.css";
import FacebookIcon from "../../assets/images/FBF.svg";
import InstagramIcon from "../../assets/images/instagramF.svg";
import LinkedInIcon from "../../assets/images/LinkekdinF.svg";
import GithubIcon from "../../assets/images/githubF.svg";

export default function HeroTextBox() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="hero-box"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="hover-word">I</span>{" "}
        <span className="hover-word">am</span>{" "}
        <span className="hover-word">Waleed</span>{" "}
        <span className="hover-word">Hassan,</span>{" "}
        <span className="hover-word">Sr.</span>{" "}
        <span className="hover-word">Software</span>{" "}
        <span className="hover-word">Engineer</span>
      </motion.h1>

      <motion.h3
        className="static-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="roller">
          <div
            className="inner-roll"
            style={{
              transform: `translateY(-${index * 40}px)`,  // ✅ FIXED
            }}
          >
            <span className="highlight">Android</span>
            <span className="highlight">Flutter</span>
          </div>
        </div>
        Development
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Mobile Development Specialist | Practical, efficient, and focused on delivering real-world results
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a href="/Waleed-Android&Flutter.pdf" download="Waleed-Resume.pdf" className="resume-link">
          <button className="resume-btn">
            <img
              src={DownloadIcon}
              alt="download icon"
              className="download-icon"
            />
            Download Resume
          </button>
        </a>

        <div className="social-links">
          <a href="https://www.facebook.com/share/12G6yV6B6p/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/waleedhassan_78?igsh=MXRzN3dkeHdjaXpneg==" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/waleed-hassan-90761a216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/waleed055" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={GithubIcon} alt="GitHub" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
