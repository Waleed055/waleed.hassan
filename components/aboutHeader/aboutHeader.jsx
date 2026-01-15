import "./aboutHeader.css";
import SVGS from "../../assets/images/lines.svg"

export default function ServicesHeader() {
  return (
    
    <div className="about-header mt-2">
      <img src={SVGS} alt="line" className="about-icon left-icon" />

      <h2 className="about-heading">ABOUT ME</h2>

      <img src={SVGS} alt="line" className="about-icon right-icon" />
    </div>
  );
}
