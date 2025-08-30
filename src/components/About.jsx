// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import "../App.css";

export default function About() {
  return (
    <motion.section
      className="about-section"
      initial={{ scale: 0.9, opacity: 0.8 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <h2>About Me</h2>
      <p>
        I am a web developer passionate about building futuristic web experiences.
        I love exploring cutting-edge technologies and creating smooth, interactive,
        and visually appealing user interfaces.
      </p>
    </motion.section>
  );
}
