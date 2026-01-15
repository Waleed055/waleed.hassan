// about.jsx
import "./about.css";
import AboutHeader from "../../components/aboutHeader/aboutHeader";
import AboutLeftCard from "../../components/leftCard/leftCard";
import AboutRightCard from "../../components/rightCard/rightCard";

export default function AboutSection() {
  return (
    <div className="about-container">
      
      <AboutHeader />

      <div className="about-flex">
        <AboutLeftCard />
       
        <AboutRightCard />
      </div>

    </div>
  );
}
