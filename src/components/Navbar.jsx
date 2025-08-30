// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "1rem 2rem",
        background: "#1e1e2f",
        color: "#fff",
        display: "flex",
        justifyContent: "flex-start",
        gap: "2rem",
        zIndex: 2,
      }}
    >
      <button
        onClick={() => scrollToSection("about")}
        style={buttonStyle}
      >
        About Me
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        style={buttonStyle}
      >
        Projects
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        style={buttonStyle}
      >
        Contact
      </button>
    </nav>
  );
}

const buttonStyle = {
  background: "transparent",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "bold",
};
