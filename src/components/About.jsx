import { useInView } from "../hooks/useInView";
import { EDUCATION, CERTIFICATIONS } from "../data";

const STATS = [
  ["8.66", "B.E CGPA"],
  ["3", "Projects Built"],
  ["150x", "API Speedup @ SAP"],
  ["2", "Internships"],
];

const ORBIT_ICONS = [
  { e: "⚛️", a: 0 },
  { e: "🐍", a: 60 },
  { e: "🍃", a: 120 },
  { e: "🤖", a: 180 },
  { e: "🐳", a: 240 },
  { e: "⚡", a: 300 },
];

const COLOR_CLS = {
  cyan: "text-accent-cyan border-l-accent-cyan",
  purple: "text-accent-purple border-l-accent-purple",
};

export default function About() {
  const [ref, inView] = useInView();
  const [certRef, certInView] = useInView();

  return (
    <section id="about" className="py-24 px-10 max-w-6xl mx-auto">
      <div
        ref={ref}
        className={`grid grid-cols-2 gap-16 items-center transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Left — text */}
        <div>
          <p className="font-mono text-[11px] text-accent-cyan tracking-widest mb-3">// about me</p>
          <h2 className="font-syne font-extrabold text-4xl text-text-primary leading-tight mb-6">
            Building scalable systems,{" "}
            <span className="text-accent-cyan">solving real problems</span>
          </h2>
          <p className="text-text-muted text-sm leading-relaxed mb-4">
            I'm <strong className="text-text-secondary">Surya S</strong>, a Full Stack Developer
            graduated M.Tech in Information Security at NIT Calicut. Passionate about building
            scalable systems and pushing the boundaries of modern web technologies and AI.
          </p>
          <p className="text-text-muted text-sm leading-relaxed mb-8">
            Ex-intern at SAP Labs, where I worked on RAG systems and high-performance backend APIs.
            My stack spans MERN, FastAPI, LangChain, Docker, and cloud platforms — blending
            traditional engineering with cutting-edge AI.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3.5 mb-7">
            {STATS.map(([n, l]) => (
              <div key={l} className="bg-bg-card border border-border rounded-xl p-4">
                <div className="font-syne text-3xl font-extrabold text-accent-cyan">{n}</div>
                <div className="font-mono text-xs text-text-faint mt-1">{l}</div>
              </div>
            ))}
          </div>

          {/* Education */}
          <p className="font-mono text-[11px] text-text-ghost tracking-widest mb-3">// education</p>
          <div className="space-y-3">
            {EDUCATION.map((ed) => (
              <div
                key={ed.institution}
                className={`bg-bg-card rounded-xl p-4 border-l-4 border border-border
                  ${ed.color === "cyan" ? "border-l-accent-cyan" : "border-l-accent-purple"}`}
              >
                <p className="font-syne font-bold text-text-primary text-[13px] mb-1">{ed.degree}</p>
                <p className={`font-mono text-xs mb-1 ${COLOR_CLS[ed.color]?.split(" ")[0]}`}>
                  {ed.institution}
                </p>
                <div className="flex justify-between">
                  <span className="text-text-ghost text-[11px]">{ed.location}</span>
                  <span className="font-mono text-text-faint text-[11px]">
                    {ed.grade} · {ed.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — avatar + certs */}
        <div className="flex flex-col items-center gap-8">
          {/* Orbiting avatar */}
          <div className="relative w-72 h-72">
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-bg-primary to-bg-card border-2 border-border flex items-center justify-center text-9xl animate-float">
              👨‍💻
            </div>
            {ORBIT_ICONS.map(({ e, a }) => {
              const rad = (a * Math.PI) / 180;
              const r = 148;
              return (
                <div
                  key={a}
                  className="absolute w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center text-lg shadow-md shadow-accent-cyan/5"
                  style={{
                    left: 144 + r * Math.cos(rad) - 20,
                    top: 144 + r * Math.sin(rad) - 20,
                  }}
                >
                  {e}
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <div
            ref={certRef}
            className={`w-full transition-all duration-700 delay-200
              ${certInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <p className="font-mono text-[11px] text-text-ghost tracking-widest mb-3">
              // certifications
            </p>
            <div className="space-y-2.5">
              {CERTIFICATIONS.map((c) => (
                <div
                  key={c.name}
                  className="bg-bg-card border border-border rounded-xl p-3 flex items-start gap-3"
                >
                  <span className="text-xl flex-shrink-0">{c.icon}</span>
                  <div>
                    <p className="text-text-secondary text-xs font-medium mb-0.5">{c.name}</p>
                    <p className="font-mono text-text-ghost text-[11px]">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
