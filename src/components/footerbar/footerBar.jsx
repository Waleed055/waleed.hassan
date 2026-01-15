import React from "react";
import "./footerBar.css";

// --- SVG IMPORTS (already correct) ---
import linkedinIcon from "../../assets/images/LinkekdinF.svg";
import githubIcon from "../../assets/images/githubF.svg";
import facebookIcon from "../../assets/images/FBF.svg";
import instagramIcon from "../../assets/images/instagramF.svg";
import whatsappIcon from "../../assets/images/whatsapp.svg";
import fiverrIcon from "../../assets/images/fiver.svg";
import upworkIcon from "../../assets/images/upwork.svg";

export default function FooterBar() {
  return (
    <div className="footer-bar">
      {/* Icons on top */}
      <div className="footer-icons mt-3 ">
        <a href="https://www.facebook.com/waleed.hassan.96995238" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="icon" />
        </a>
        <a href="https://www.instagram.com/waleeed_hasssan/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/waleed-hassan-b211901bb/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </a>
        <a href="tel:+923001234567" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="icon" />
        </a>
        <a href="https://www.fiverr.com/s/e6VmAK3" target="_blank" rel="noopener noreferrer">
          <img src={fiverrIcon} alt="Fiverr" className="icon" />
        </a>
        <a href="https://www.upwork.com/freelancers/~01db6ae7361e7f7552" target="_blank" rel="noopener noreferrer">
          <img src={upworkIcon} alt="Upwork" className="icon" />
        </a>
        <a href="https://github.com/Waleed055" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="icon" />
        </a>
      </div>

      {/* Paragraph below icons */}
      <p className="footer-text">
        Connect with me via the links above for business discussions and professional networking.
      </p>
    </div>
  );
}
