// src/components/Academics.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Academics() {
  const achievements = [
    { text: "🎓 Bachelor's in Computer Science - 2022-2026", color: "#ff6a00" },
    { text: "💻 Internship at ixamBee", color: "#00fff7" },
    { text: "🏆 Participated in Smart India Hackathon 2023", color: "#f5ff00" },
    { text: "🚀 Built Portfolio Website", color: "#ff6a00" },
  ];

  // Variants for container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="academics"
      className="academics-section"
      style={{
        padding: "200px",
        textAlign: "center",
        color: "white",
        minHeight: "100vh",
        backgroundColor: "#0a0a23",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        style={{
          fontSize: "3.5rem",
          marginBottom: "2rem",
          color: "#ff2d95",
          textShadow: "0 0 10px #ff2d95, 0 0 20px #ff2d95",
        }}
        variants={itemVariants}
      >
        Academics   Achievements
      </motion.h2>

      <motion.ul
        style={{ listStyle: "none", padding: 0, fontSize: "1.5rem" }}
        variants={containerVariants}
      >
        {achievements.map((item, index) => (
          <motion.li
            key={index}
            style={{
              margin: "1rem 0",
              color: item.color,
              textShadow: `0 0 5px ${item.color}, 0 0 10px ${item.color}`,
            }}
            variants={itemVariants}
          >
            {item.text}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
