import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

export default function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 transition-all duration-300
        ${scrolled ? "bg-bg-primary/95 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}
    >
      {/* Logo */}
      <div className="font-mono text-lg font-medium text-white tracking-tight">
        <span className="text-accent-cyan">&lt;</span>
        Surya
        <span className="text-accent-purple">S</span>
        <span className="text-accent-cyan">/&gt;</span>
      </div>

      {/* Nav links */}
      <div className="flex gap-1">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className={`font-mono text-xs px-4 py-1.5 rounded-lg transition-all duration-200
              ${active === link
                ? "bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan"
                : "border border-transparent text-text-muted hover:text-text-secondary"
              }`}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}
