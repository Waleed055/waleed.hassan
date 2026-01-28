import "./contactHeader.css";
import SVGS from "../../assets/images/lines.svg"

export default function ContactHeader() {
  return (
    
    <div className="contact-header mt-2">
      <img src={SVGS} alt="line" className="contact-icon left-icon" />

      <h2 className="contact-heading">CONTACT</h2>

      <img src={SVGS} alt="line" className="contact-icon right-icon" />
    </div>
  );
}
