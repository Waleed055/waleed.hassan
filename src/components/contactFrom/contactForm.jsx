// components/ContactForm.jsx
import React from "react";
import "./contactForm.css";

// --- SVG IMPORTS (you will replace these with your real files) ---
import phoneIcon from "../../assets/images/phone.svg";
import emailIcon from "../../assets/images/email.svg";

export default function ContactForm() {
  return (
    <div className="contact-form ">
      <h3 className="mt-5">GET IN TOUCH</h3>
      <p className="form-line ">Let’s build something together :)</p>

      {/* PHONE CLICK → MOBILE DIALER OPEN */}
      <a href="tel: " className="display-box mt">
        <img src={phoneIcon} alt="phone" className="icon" />
        <p>+92 323 5067742</p>
      </a>

      {/* EMAIL CLICK → GMAIL / OUTLOOK OPEN */}
      <a href="mailto:waleedhassan4311@gmail.com" className="display-box">
        <img src={emailIcon} alt="email" className="icon" />
        <p>waleedhassan4311@gmail.com</p>
      </a>


    </div>
  );
}
