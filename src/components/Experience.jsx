import { useInView } from "../hooks/useInView";
import { EXPERIENCE } from "../data";

const COLOR_MAP = {
  cyan:   { hex: "#00ffc8", text: "text-accent-cyan",   border: "border-l-accent-cyan",   badge: "bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan",   dot: "bg-accent-cyan shadow-accent-cyan/50" },
  purple: { hex: "#7c6ffa", text: "text-accent-purple", border: "border-l-accent-purple", badge: "bg-accent-purple/10 border-accent-purple/30 text-accent-purple", dot: "bg-accent-purple shadow-accent-purple/50" },
};

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="py-24 px-10">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-[11px] text-accent-cyan tracking-widest mb-3">
            // work experience
          </p>
          <h2 className="font-syne font-extrabold text-5xl text-text-primary">Internships</h2>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-border" />

          {EXPERIENCE.map((exp, i) => {
            const c = COLOR_MAP[exp.color];
            return (
              <div
                key={exp.company}
                className={`relative mb-10 transition-all duration-700
                  ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-10 top-5 w-4 h-4 rounded-full border-2 border-bg-primary shadow-lg ${c.dot}`}
                />

                {/* Card */}
                <div className={`bg-bg-primary border border-border rounded-2xl p-7 border-l-4 ${c.border}`}>
                  {/* Header */}
                  <div className="flex justify-between items-start flex-wrap gap-3 mb-1">
                    <div>
                      <h3 className="font-syne font-bold text-xl text-text-primary mb-1">
                        {exp.icon} {exp.role}
                      </h3>
                      <p className={`font-mono text-sm ${c.text}`}>
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className={`font-mono text-[11px] px-3 py-1.5 rounded-full border whitespace-nowrap ${c.badge}`}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-5 space-y-2.5">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex gap-3 text-text-muted text-sm leading-relaxed">
                        <span className={`flex-shrink-0 mt-1 ${c.text}`}>▹</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
