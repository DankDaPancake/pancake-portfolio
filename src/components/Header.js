import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 rounded-lg my-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">
          My<span className="text-blue-400">Portfolio</span>
        </Link>

        <div className="flex gap-6">
          <Link href="/" className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300">
            Home
          </Link>
          <Link href="/about" className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300">
            About
          </Link>

          <Link href="/projects" className="text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300">
            Projects
          </Link>
        </div>
      </nav>
    </header>
  );
}