// components/ContactImage.jsx
import React from "react";
import samplePic from "../../assets/images/footer.svg"; 
import "./contactImage.css";

export default function ContactImage() {
  return (
    <div className="contact-image">
      <img src={samplePic} alt="contact" />
    </div>
  );
}
