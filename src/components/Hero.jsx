import React from "react";
import { motion } from "framer-motion";
import CanvasBackground from "./CanvasBackground";
import Interactive3DModel from "./Interactive3DModel";
import "../App.css";

export default function Hero() {
  return (
    <section className="hero-section" style={{ position: "relative" }}>
      {/* Background */}
      <CanvasBackground />

      {/* Bouncing Text */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{
          zIndex: 1,
          position: "relative",
          textAlign: "center",
          paddingTop: "100px", // <-- add padding from top
        }}
      >
        <h1 className="hero-name cyber-text">ROUNAK SHARMA</h1>
        <p className="hero-tagline">Learning, Understanding, Adapting</p>
      </motion.div>

      {/* Interactive 3D Model */}
      <Interactive3DModel modelUrl="/models/spaceship.glb" />

      <div className="scroll-indicator"></div>
    </section>
  );
}
