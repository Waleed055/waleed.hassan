import { useState, useEffect } from "react";
import DownloadIcon from "../../assets/images/Resume-Icon.svg";


import "./heroTextBox.css";
// ⭐ APNI SVG FILES IMPORT KARO

export default function HeroTextBox() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-box">
      <h1 className="hero-title">
        <span className="hover-word">I</span>{" "}
        <span className="hover-word">am</span>{" "}
        <span className="hover-word">Waleed</span>{" "}
        <span className="hover-word">Hassan,</span>{" "}
        <span className="hover-word">Sr.</span>{" "}
        <span className="hover-word">Software</span>{" "}
        <span className="hover-word">Engineer</span>
      </h1>

      <h3 className="static-text">
        <div className="roller">
          <div
            className="inner-roll"
            style={{
              transform: `translateY(-${index * 40}px)`,  // ✅ FIXED
            }}
          >
            <span className="highlight">Android</span>
            <span className="highlight">Flutter</span>
          </div>

        </div>
        Development

      </h3>
      <p>Mobile  Development  Specialist  |  Practical,  efficient,  and  focused  on  delivering  real-world  results</p>
      <a href="/Waleed-Android&Flutter.pdf" download="Waleed-Resume.pdf" className="resume-link">
        <button className="resume-btn">
          <img
            src={DownloadIcon}
            alt="download icon"
            className="download-icon"
          />
          Download Resume
        </button>
      </a>


    </div>
  );
}
