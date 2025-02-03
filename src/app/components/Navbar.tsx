
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import "./nav.css"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const username= "Atul Bharti";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="welcome">Welcome, {username}</div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="navbuttons">Home</a>
            <a href="/login" className="navbuttons">Log Out</a>
            <a href="/register" className="navbuttons">Register</a>
            <a href="#" className="navbuttons">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
