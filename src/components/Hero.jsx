import { useState, useEffect } from "react";

const TYPEWRITER_TEXTS = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "FastAPI Backend Dev",
  "RAG & GenAI Builder",
  "M.Tech @ NIT Calicut",
];

const TECH_PILLS = ["React.js", "Node.js", "FastAPI", "MongoDB", "Python", "LangChain", "Docker", "SAP BTP"];

function TypewriterText() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TYPEWRITER_TEXTS[idx];
    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % TYPEWRITER_TEXTS.length);
    }
  }, [displayed, deleting, idx]);

  return (
    <span className="text-accent-cyan font-mono">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  );
}

export default function Hero({ scrollTo }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-10 pt-28 pb-20 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-[12%] left-[5%] w-80 h-80 rounded-full bg-accent-cyan/5 animate-glow pointer-events-none" />
      <div className="absolute bottom-[15%] right-[8%] w-72 h-72 rounded-full bg-accent-purple/5 animate-glow-reverse pointer-events-none" />
      <div className="absolute top-[50%] right-[20%] w-52 h-52 rounded-full bg-accent-orange/5 animate-glow pointer-events-none" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Content */}
      <div className="text-center max-w-3xl animate-fadeUp">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent-cyan/5 border border-accent-cyan/20 rounded-full px-4 py-1.5 mb-9 font-mono text-xs text-accent-cyan">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse2 inline-block" />
          Available for hire · Ex-SAP Labs Intern
        </div>

        <p className="font-mono text-sm text-text-ghost mb-3 tracking-widest">Hello, World! I'm</p>

        <h1 className="font-syne font-extrabold text-text-primary leading-none mb-5 tracking-tight"
          style={{ fontSize: "clamp(52px, 9vw, 96px)" }}>
          Surya S
        </h1>

        <div className="text-xl min-h-9 mb-8 mt-4">
          <TypewriterText />
        </div>

        <p className="text-text-muted text-base leading-relaxed max-w-xl mx-auto mb-11 font-light">
          Enthusiastic software developer with a strong foundation in full stack development and AI/ML.
          Ex-intern at{" "}
          <span className="text-accent-cyan font-medium">SAP Labs, Bengaluru</span>{" "}
          — built RAG systems and high-performance FastAPI backends.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollTo("Projects")}
            className="bg-gradient-to-r from-accent-cyan to-[#00c4a0] text-bg-primary font-bold text-sm px-8 py-3.5 rounded-xl border-none cursor-pointer shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 transition-all duration-200 hover:scale-105"
          >
            View Projects →
          </button>
          <button
            onClick={() => scrollTo("Contact")}
            className="bg-transparent text-text-primary text-sm px-8 py-3.5 rounded-xl border border-border cursor-pointer hover:border-border-muted transition-all duration-200"
          >
            Get in Touch
          </button>
        </div>

        {/* Tech pills */}
        <div className="flex gap-2.5 justify-center mt-14 flex-wrap">
          {TECH_PILLS.map((t) => (
            <span
              key={t}
              className="bg-bg-card border border-border rounded-lg px-3.5 py-2 font-mono text-[11px] text-text-faint"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
