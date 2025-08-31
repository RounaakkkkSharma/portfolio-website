// src/components/Sports.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Sports() {
  const sportsAchievements = [
    { text: "🛼 National Level Roller Skater", color: "#ff2d95" },
    { text: "⚽ School Roller Hockey Team Captain", color: "#ff2d95" },
    { text: "🏆 School Vice Sports Captain", color: "#ff2d95" },
    { text: "🏀 Won Best Athelete Award 2019-20,2018-2019", color: "#ff2d95" },
    { text: "🥇 Fastest Under-16 Speed Skater(Rink and Road)", color: "#ff2d95" },
    { text: "🏆 Participated in National Sports Meet", color: "#ff2d95" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="sports"
      style={{
        padding: "200px",
        minHeight: "100vh",
        textAlign: "center",
        backgroundColor: "#0a0a23",
        color: "white",
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
          color: "#00fff7",
          textShadow: "0 0 10px #00fff7, 0 0 20px #00fff7",
        }}
        variants={itemVariants}
      >
        Sports & Achievements
      </motion.h2>

      <motion.ul
        style={{ listStyle: "none", padding: 0, fontSize: "1.5rem" }}
        variants={containerVariants}
      >
        {sportsAchievements.map((item, index) => (
          <motion.li
            key={index}
            style={{
              margin: "1rem 0",
              color: item.color,
              textShadow: `0 0 5px ${item.color}, 0 0 10px ${item.color}`,
              cursor: "default",
            }}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              textShadow: `0 0 10px ${item.color}, 0 0 20px ${item.color}`,
            }}
          >
            {item.text}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
