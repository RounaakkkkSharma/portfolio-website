// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import CanvasBackground from "./CanvasBackground";
import "../App.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <CanvasBackground />

      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        whileInView={{ scale: 1.1, opacity: 0.9 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        style={{ zIndex: 1 }}
      >
        <h1 className="hero-name cyber-text">ROUNAK SHARMA</h1>
        <p className="hero-tagline">Learning, Understanding, Adapting</p>
      </motion.div>

      <div className="scroll-indicator"></div>
    </section>
  );
}
