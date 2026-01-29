import { motion } from "framer-motion";
import "./mainPage.css";
import HeroTextBox from "../../components/heroTextBox/heroTextBox.jsx";
import AboutSection from "../aboutPage/about.jsx";
import Experience from "../experience/experience.jsx";
import Profile from "../../components/profilePic/profilePic.jsx";
import Services from "../servicesPage/servicesPage.jsx"
import Projects from "../projects/projectsPage.jsx";
import ContactPage from "../contactPage/contactPage.jsx";


export default function MainPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="mainPage">
      {/* HOME SECTION */}
      <div id="home" className="background">
        <div className="hero-container">
          <HeroTextBox />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Profile />
        </motion.div>
      </div>

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
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Services />
      </motion.section>

      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.section>

      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ContactPage />
      </motion.section>
    </div>
  );
}
