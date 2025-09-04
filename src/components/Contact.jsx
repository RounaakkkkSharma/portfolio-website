// src/components/ContactMe.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    { type: "Email", value: "mail2rounaksharma@gmail.com", icon: "✉️", color: "#ff6a00", href: "mailto:mail2rounaksharma@gmail.com" },
    { type: "Phone", value: "+91 9871013068", icon: "📞", color: "#00fff7", href: "tel:+919871013068" },
    { type: "LinkedIn", value: "linkedin.com/in/rounak", icon: "🔗", color: "#0a66c2", href: "https://www.linkedin.com/in/rounaksharma04/" },
    { type: "GitHub", value: "github.com/rounak", icon: "🐱", color: "#f5ff00", href: "https://github.com/RounaakkkkSharma" },
  ];

  // Container variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  // Item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="contact"
      className="contact-section"
      style={{
        padding: "200px",
        textAlign: "center",
        color: "white",
        minHeight: "100vh",
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
        Contact Me
      </motion.h2>

      <motion.ul
        style={{ listStyle: "none", padding: 0, fontSize: "1.5rem" }}
        variants={containerVariants}
      >
        {contacts.map((contact, index) => (
          <motion.li
            key={index}
            style={{
              margin: "1rem 0",
              color: contact.color,
              textShadow: `0 0 5px ${contact.color}, 0 0 10px ${contact.color}`,
            }}
            variants={itemVariants}
          >
            <span style={{ marginRight: "1rem" }}>{contact.icon}</span>
            <strong>{contact.type}:</strong>{" "}
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: contact.color, textDecoration: "underline" }}
            >
              {contact.value}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
