import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  // Get the current year automatically
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-[hsl(222,47%,4%)] text-slate-400 mt-0 py-12 border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Copyright */}
        <div>
          <p>&copy; {currentYear} <span className="text-sky-400">Ly Huynh Minh Dang</span>. All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a 
            href="https://github.com/DankDaPancake"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/dang-ly-huynh-minh-13bb51343/"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
}