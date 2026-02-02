import { motion } from "framer-motion";
import "./leftCard.css";
import FbIcon from "../../assets/images/facebook.svg";
import InstaIcon from "../../assets/images/insta.svg";
import LinkedinIcon from "../../assets/images/LINKD.svg";
import Githubicon from "../../assets/images/github.svg";

export default function LeftCard() {
  return (
    <motion.div
      className="left-card"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
    >
      <p className="label">Name:</p>
      <p className="value">Waleed Hassan</p>

      <p className="label">Profile:</p>
      <p className="value">Mobile App Developer</p>

      <p className="label"> Email:</p>
      <p className="value">waleedhassan4311@gmail.com</p>

      <p className="label">Phone:</p>
      <p className="value " >+92 323 5067742</p>
      <div className="socials">

        <a href="https://www.facebook.com/waleed.hassan.96995238" target="_blank" rel="noopener noreferrer">
          <img src={FbIcon} alt="facebook" className="social-icon" />
        </a>

        <a href="https://www.instagram.com/waleeed_hasssan/" target="_blank" rel="noopener noreferrer">
          <img src={InstaIcon} alt="instagram" className="social-icon" />
        </a>

        <a href="https://www.linkedin.com/in/waleed-hassan-b211901bb/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedinIcon} alt="linkedin" className="social-icon" />
        </a>

        <a href="https://github.com/Waleed055" target="_blank" rel="noopener noreferrer">
          <img src={Githubicon} alt="github" className="social-icon" />
        </a>

      </div>
    </motion.div>
  );
}

