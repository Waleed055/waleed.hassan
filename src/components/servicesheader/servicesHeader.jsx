import "./servicesHeader.css";
import SVGS from "../../assets/images/lines.svg"

export default function AboutHeader() {
  return (
    
    <div className="service-header">
      <img src={SVGS} alt="line" className="service-icon left-icon" />

      <h2 className="service-heading">SERVICES</h2>

      <img src={SVGS} alt="line" className="service-icon right-icon" />
    </div>
  );
}
