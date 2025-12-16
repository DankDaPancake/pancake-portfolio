import "./globals.css";

import Navbar from "~/components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ly Huynh Minh Dang | Portfolio",
  description: "Sophomore IT student passionate about web development, Next.js, and building accessible modern applications.",
  keywords: ["portfolio", "developer", "Next.js", "React", "Vietnam"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
