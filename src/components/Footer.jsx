import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-5 bg-gray-800 text-white text-center flex flex-col items-center gap-3">
      <div className="flex gap-4">
        <a href="#" target="_blank"><FaGithub size={24} /></a>
        <a href="#" target="_blank"><FaLinkedin size={24} /></a>
        <a href="#" target="_blank"><FaTwitter size={24} /></a>
      </div>
      <p>© 2025 Rounak Sharma. All rights reserved.</p>
    </footer>
  );
}
