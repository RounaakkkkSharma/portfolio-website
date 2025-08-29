import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.png";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and Tailwind.",
      link: "#",
      image: project1
    },
    {
      title: "Todo App",
      description: "A simple todo app using React hooks and localStorage.",
      link: "#",
      image: project2
    },
    {
      title: "Weather App",
      description: "Shows weather info using OpenWeather API.",
      link: "#",
      image: project3
    }
  ];

  return (
    <section id="projects" className="p-10 bg-gray-100 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
