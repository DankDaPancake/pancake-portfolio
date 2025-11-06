import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  // Get the current year automatically
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-gray-800 text-gray-400 mt-16 py-8">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Copyright */}
        <div>
          <p>&copy; {currentYear} [Ly Huynh Minh Dang]. All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a 
            href="https://github.com/DankDaPancake" // Replace with your GitHub URL
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/dang-ly-huynh-minh-13bb51343/" // Replace with your LinkedIn URL
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          {/* Add more social links here as needed */}
        </div>

      </div>
    </footer>
  );
}