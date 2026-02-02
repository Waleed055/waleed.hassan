import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import "./mainPage.css";
import HeroTextBox from "../../components/heroTextBox/heroTextBox.jsx";
import AboutSection from "../aboutPage/about.jsx";
import Experience from "../experience/experience.jsx";
import Profile from "../../components/profilePic/profilePic.jsx";
import Services from "../servicesPage/servicesPage.jsx"
import Projects from "../projects/projectsPage.jsx";
import ContactPage from "../contactPage/contactPage.jsx";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 0, // FIXED: Set y to 0 to prevent the reload 'jump'
    scale: 0.98,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 20,
      duration: 1.5
    }
  }
};


export default function MainPage() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Create a smooth skew effect based on scroll velocity
  const skewVelocity = useTransform(scrollVelocity, [-2000, 2000], [-5, 5]);
  const skew = useSpring(skewVelocity, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={containerRef}
      className="mainPage"
      style={{
        skewY: skew,
        transformOrigin: "center",
        transition: "skewY 0.1s ease-out"
      }}
    >
      {/* HOME SECTION */}
      <motion.div
        id="home"
        className="background"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="hero-container">
          <HeroTextBox />
        </div>
        <Profile />
      </motion.div>

      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.section>

      {/* EXPERIENCE SECTION */}
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Experience />
      </motion.section>

      {/* SERVICES SECTION */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <Services />
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <ContactPage />
      </motion.section>

    </motion.div>
  );
}

