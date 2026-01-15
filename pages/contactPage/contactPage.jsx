// pages/ContactPage.jsx
import React from "react";
import ContactHeader from "../../components/contactHeader/contactHeader";
import ContactForm from "../../components/contactFrom/contactForm";
import ContactImage from "../../components/contactImage/contactImage";
// import SocialBar from "../components/SocialBar";
import FooterBar from "../../components/footerbar/footerBar";
import "./contactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <ContactHeader />

      <div className="contact-section">
        <div className="left">
          <ContactForm />
        </div>

        <div className="right">
          <ContactImage />
        </div>
      </div>

      <FooterBar/>
    </div>
  );
}
