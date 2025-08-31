// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics"; // new component
import Sports from "./components/Sports";
import Community from "./components/Community";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

    
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

        <section id="sports">
        <Sports />
        </section>

        <section id="community">
        <Community />
        </section>


      {/* You can add more sections like Projects or Contact */}
    </div>
  );
}

export default App;
