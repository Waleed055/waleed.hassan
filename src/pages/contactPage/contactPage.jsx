import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <ContactHeader />
      </motion.div>

      <div className="contact-section">
        <motion.div
          className="left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          className="right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.4 }}
        >
          <ContactImage />
        </motion.div>
      </div>

      <FooterBar />
    </div>

  );
}
