// src/components/Community.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Community() {
  const achievements = [
    { text: "🎓President of Interact Club of The Khaitan School 2020-2021", color: "#ff6a00" },
    { text: "💻 International Services Coordinator at Rotaract GEI 2023-24", color: "#00fff7" },
    { text: "🏆 Organised Various Cleanliness Drives and Donation Campaigns", color: "#f5ff00" },
    { text: "🚀 Conductung Rallies and Speaker Session for public awareness about social issues", color: "#ff6a00" },
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
      id="Community"
      className="Community-section"
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
        Community     Achievements
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
