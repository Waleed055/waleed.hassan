import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./mainBackground.css";

export default function AdvancedStars() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,

        interactivity: {
          events: {
            onHover: { enable: true, mode: "attract" }, // Mouse par aaye → attract
            onLeave: { enable: true, mode: "repulse" }, // Mouse hatay → repulse
            resize: true,
          },
          modes: {
            attract: {
              distance: 150, // mouse ke kitne paas star khichain
              duration: 0.2,
              factor: 3, // jitna zyada factor → utna strong pull
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },

        particles: {
          number: { value: 20, density: { enable: true, area: 800 } },
          color: { value: "#6D3D94" },
          shape: { type: "star" },

          opacity: {
            value: { min: 0.3, max: 0.9 },
            animation: { enable: true, speed: 1 },
          },

          size: { value: { min: 1, max: 3 } },

          move: {
            enable: true,
            speed: { min: 0.2, max: 1 },
            random: true,
            direction: "none",
            straight: false,
            outModes: { default: "out" },
          },
        },

        detectRetina: true,
      }}
    />
  );
}
