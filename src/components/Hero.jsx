import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4"
    >
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-28 h-28 md:w-36 md:h-36 rounded-full mb-6 shadow-lg object-cover"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Hi, I’m Rounak Sharma
      </motion.h1>
      <motion.p
        className="text-base md:text-xl mb-6 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Frontend Developer | React Enthusiast | I build modern, responsive, and interactive web applications.
      </motion.p>
      <motion.a
        href="#projects"
        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        See My Work
      </motion.a>
    </section>
  );
}
