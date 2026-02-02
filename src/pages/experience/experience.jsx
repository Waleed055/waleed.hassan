import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../../components/ExperienceCard/experienceCard";
import "./experience.css";

const experienceData = [
  {
    company: "Senifone",
    role: "Sr. Software Engineer - Flutter",
    duration: "2024 - Present",
    location: "Netherlands (Remote)",
    description: "Independently manage the complete lifecycle of their Flutter application. From designing intuitive cross-platform UI/UX to building scalable architecture and integrating complex APIs, ensuring the app performs seamlessly across Android and iOS. Manage releases, handle bug fixes, and maintain performance, security, and user satisfaction — delivering a high-quality product as a one-person mobile team."
  },
  {
    company: "elGrocer by Etisalat",
    role: "Sr. Software Engineer - Android",
    duration: "2023 - Present",
    location: "Lahore, Pakistan (Hybrid)",
    description: "Lead the development of scalable, high-performance mobile applications using Kotlin, Java, and modern Android frameworks. Architect and implement clean, maintainable code while optimizing app performance, security, and user experience."
  },
  {
    company: "Razzaq.com",
    role: "Sr. Software Engineer - Android",
    duration: "2023 - 2024",
    location: "Remote",
    description: "Lead the development of scalable, high-performance mobile applications using Kotlin, Java, and modern Android frameworks. Architect and implement clean, maintainable code while optimizing app performance, security, and user experience."
  },
  {
    company: "Ozi Technology",
    role: "Sr. Software Engineer - Android",
    duration: "2022 - 2024",
    location: "Lahore, Pakistan",
    description: "Design and develop high-performance mobile applications using Kotlin, Java, and modern Android architectures like MVVM. Specialize in building scalable, user-friendly solutions while integrating RESTful APIs, Firebase, and third-party SDKs."
  },
  {
    company: "Techreneur Solutions",
    role: "Associate Software Engineer - Android",
    duration: "2020 - 2022",
    location: "Lahore, Pakistan",
    description: "Contributed to building robust, user-friendly applications using modern Android development tools and frameworks, ensuring seamless performance and an engaging user experience."
  },
  {
    company: "Upwork & Fiverr",
    role: "Sr. Mobile Application Developer",
    duration: "2021 - Present",
    location: "Remote",
    description: "Specialize in both Android and Flutter development. With expertise in Kotlin, Java, Dart, and modern frameworks, design scalable, high-performance apps with a focus on delivering seamless cross-platform experiences."
  }
];

export default function Experience() {
  // Split data into rows of 2 cards
  const rows = [];
  for (let i = 0; i < experienceData.length; i += 2) {
    rows.push(experienceData.slice(i, i + 2));
  }

  return (
    <div className="experience-container">
      <motion.h2
        className="proessional-experience"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
      >
        Professional Experience
      </motion.h2>
      <div className="experience-grid">
        {rows.map((row, rowIndex) => (
          <div className="experience-row" key={rowIndex}>
            {row.map((exp, idx) => (
              <ExperienceCard
                key={idx}
                {...exp}
                direction={idx === 0 ? "left" : "right"}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

