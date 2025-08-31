// src/components/About.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import Book from "./Academics"; // Your Academics component

export default function About() {
  const [showBook, setShowBook] = useState(false);

  // Container animation for achievements
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Box animation for each achievement or image
  const boxVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  // Text animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="about-section"
      style={{
        backgroundColor: "#0a0a23",
        color: "#fff",
        padding: "4rem 2rem",
        minHeight: "100vh",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Flex container: Text + Image */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4rem",
          flexWrap: "wrap",
          marginBottom: "3rem",
        }}
      >
        {/* Text Column */}
        <motion.div style={{ flex: "1", minWidth: "300px" }} variants={containerVariants}>
          <motion.h2
            variants={textVariants}
            style={{
              fontSize: "3.5rem",
              color: "#ff2d95",
              textShadow: "0 0 10px #ff2d95, 0 0 20px #ff2d95",
              marginBottom: "1.5rem",
            }}
          >
            About Me
          </motion.h2>

          <motion.p
            variants={textVariants}
            style={{
              fontSize: "1.5rem",
              color: "#00fff7",
              textShadow: "0 0 5px #00fff7, 0 0 10px #00fff7",
            }}
          >
            I am a web developer passionate about building futuristic web experiences.
            I love exploring cutting-edge technologies and creating smooth, interactive,
            and visually appealing user interfaces.
          </motion.p>
        </motion.div>

        {/* Image Column with hover glow */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: `
              0 0 20px #ff2d95, 
              0 0 40px #ff2d95, 
              0 0 30px #00fff7, 
              0 0 50px #00fff7
            `,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          <img
            src="/assets/profile.png"
            alt="My Portrait"
            style={{
              width: "350px",
              borderRadius: "20px",
              display: "block",
            }}
          />
        </motion.div>
      </div>

      {/* Achievements */}
      <motion.div
        className="achievements-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {/* Academic Box */}
        <motion.div
          className="achievement-box"
          variants={boxVariants}
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            const element = document.getElementById("academics");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{
            cursor: "pointer",
            backgroundColor: "#1a0a3c",
            padding: "1.5rem",
            borderRadius: "12px",
            width: "250px",
            boxShadow: "0 0 10px #ff2d95, 0 0 20px #ff2d95",
            color: "#ff2d95",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem" }}>Academic</h3>
          <p>Top of the class, scholarships, coding competitions</p>
        </motion.div>

        {/* Sports Box */}
        <motion.div
          className="achievement-box"
          variants={boxVariants}
          whileHover={{ scale: 1.05 }}
          onClick={() => {
  const element = document.getElementById("sports");
  if (element) element.scrollIntoView({ behavior: "smooth" });
}}
          style={{
            cursor: "pointer",
            backgroundColor: "#001f3f",
            padding: "1.5rem",
            borderRadius: "12px",
            width: "250px",
            boxShadow: "0 0 10px #00fff7, 0 0 20px #00fff7",
            color: "#00fff7",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem" }}>Sports</h3>
          <p>School/college sports captain, tournaments won</p>
        </motion.div>

        {/* Community Box */}
        <motion.div
          className="achievement-box"
          variants={boxVariants}
          whileHover={{ scale: 1.05 }}
          style={{
            cursor: "pointer",
            backgroundColor: "#3a0a0a",
            padding: "1.5rem",
            borderRadius: "12px",
            width: "250px",
            boxShadow: "0 0 10px #ff6a00, 0 0 20px #ff6a00",
            color: "#ff6a00",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem" }}>Community</h3>
          <p>Volunteering, workshops, community service</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
