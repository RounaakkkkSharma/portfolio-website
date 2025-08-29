import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="p-10 bg-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg max-w-xl mx-auto">
        I am a frontend developer passionate about building clean and responsive web applications using React and Tailwind CSS. I love learning new technologies and improving my skills every day.
      </p>
    </motion.section>
  );
}
