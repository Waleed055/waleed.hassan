// import Navbar from "../../components/navbar/navbar.jsx";
import "./mainPage.css";
import HeroTextBox from "../../components/heroTextBox/heroTextBox.jsx";
import AboutSection from "../aboutPage/about.jsx";
import Experience from "../experience/experience.jsx";
import Profile from "../../components/profilePic/profilePic.jsx";
import Services from "../servicesPage/servicesPage.jsx"
import Projects from "../projects/projectsPage.jsx";
import ContactPage from "../contactPage/contactPage.jsx";
// import AdvancedStars from "../../animation/mainBackground.jsx";


export default function MainPage() {
return ( <div className="mainPage">

  {/* <Navbar /> */}

  {/* HOME SECTION */}
  <div id="home" className="background">
    
    <div className="hero-container">
      <HeroTextBox />
      {/* <AdvancedStars/>     */}
    </div>
      <Profile />
  </div>

  {/* ABOUT SECTION */}
  <section id="about">
    <AboutSection />
  </section>

  {/* EXPERIENCE SECTION */}
  <section id="experience">
    <Experience />
  </section>
  {/* SERVICES SECTION */}
  <section id="services">
    <Services/>
  </section>

<section id="projects">
  <Projects/>
</section>

<section id="contact">
  <ContactPage/>
</section>

</div>


);
}
