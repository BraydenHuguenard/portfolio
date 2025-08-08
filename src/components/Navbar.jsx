import { FaInstagram, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white flex items-center justify-between px-6 h-16 shadow-md">
      <ul className="flex space-x-6">
        {["about", "education", "projects", "classes"].map((id) => (
          <li key={id}>
            <a href={`#${id}`} className="hover:underline capitalize hover:text-[#a5b4fc]">
              {id}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4 text-xl">
        <a href="/assets/Fall-2025-Resume.pdf" target="_blank" rel="noopener noreferrer" className="relative flex items-center group">
          <FaFileDownload className="hover:text-violet-400" />
          <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black px-2 py-1 rounded text-sm text-white pointer-events-none z-50">
            Resume
          </span>
        </a>
        <a href="mailto:brayden.huguenard@gmail.com" aria-label="Email">
          <FaEnvelope className="hover:text-[#a5b4fc]" />
        </a>
        <a
          href="https://linkedin.com/in/brayden-huguenard"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="hover:text-blue-500" />
        </a>
        <a
          href="https://instagram.com/brayden_huguenard"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="hover:text-pink-400" />
        </a>
      </div>
    </nav>
  );
}