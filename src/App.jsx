// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics"; // new component
import "./App.css";

function App() {
  return (
    <div>

    
      {/* Hero section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About section */}
      <section id="about">
        <About />
      </section>

      {/* Academics section */}
      <section id="academics">
        <Academics />
        </section>


      {/* You can add more sections like Projects or Contact */}
    </div>
  );
}

export default App;
