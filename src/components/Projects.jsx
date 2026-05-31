import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data";

const COLOR_MAP = {
  cyan:   { hex: "#00ffc8", text: "text-accent-cyan",   badge: "bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan",   glow: "hover:border-accent-cyan/40 hover:shadow-accent-cyan/10" },
  purple: { hex: "#7c6ffa", text: "text-accent-purple", badge: "bg-accent-purple/10 border-accent-purple/30 text-accent-purple", glow: "hover:border-accent-purple/40 hover:shadow-accent-purple/10" },
  orange: { hex: "#fa8231", text: "text-accent-orange", badge: "bg-accent-orange/10 border-accent-orange/30 text-accent-orange", glow: "hover:border-accent-orange/40 hover:shadow-accent-orange/10" },
};

function ProjectCard({ project, i }) {
  const [ref, inView] = useInView(0.1);
  const c = COLOR_MAP[project.color];

  return (
    <div
      ref={ref}
      className={`group relative bg-bg-primary border border-border rounded-2xl p-7 transition-all duration-300
        hover:bg-bg-card hover:shadow-xl ${c.glow}
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${i * 100}ms` }}
    >
      {/* Top shimmer on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${c.hex}, transparent)` }}
      />

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <span className="text-4xl">{project.icon}</span>
        <span className={`font-mono text-[11px] px-3 py-1 rounded-full border whitespace-nowrap ${c.badge}`}>
          {project.tag}
        </span>
      </div>

      <h3 className="font-syne font-bold text-xl text-text-primary mb-3">{project.title}</h3>
      <p className="text-text-muted text-sm leading-relaxed mb-5">{project.desc}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="bg-bg-input border border-border font-mono text-[11px] text-text-faint px-2.5 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-10 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-[11px] text-accent-cyan tracking-widest mb-3">
            // what I've built
          </p>
          <h2 className="font-syne font-extrabold text-5xl text-text-primary">Featured Projects</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
