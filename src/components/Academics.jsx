// Academics.jsx
import React from "react";

export default function Academics() {
  const achievements = [
    { text: "🎓 Bachelor's in Computer Science - 2024", color: "#ff2d95" },
    { text: "💻 Internship at Company X", color: "#00fff7" },
    { text: "🏆 Winner of Coding Competition", color: "#f5ff00" },
    { text: "🚀 Built Portfolio Website", color: "#ff6a00" },
  ];

  return (
    <div
      id="academics" // <- add this
      className="academics-section"
      style={{
        padding: "4rem",
        textAlign: "center",
        color: "white",
        minHeight: "100vh",
        backgroundColor: "#0a0a23",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: "#ff2d95",
          textShadow: "0 0 10px #ff2d95, 0 0 20px #ff2d95",
        }}
      >
        Academics & Achievements
      </h2>

      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem" }}>
        {achievements.map((item, index) => (
          <li
            key={index}
            style={{
              margin: "1rem 0",
              color: item.color,
              textShadow: `0 0 5px ${item.color}, 0 0 10px ${item.color}`,
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
