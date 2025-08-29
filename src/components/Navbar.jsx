import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["about", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white z-50">
      <div className="flex justify-between items-center p-5 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Rounak Sharma</h1>
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`} className="hover:text-blue-400 capitalize">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      {open && (
        <ul className="flex flex-col items-center gap-4 pb-4 md:hidden bg-gray-800">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="hover:text-blue-400 capitalize"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
