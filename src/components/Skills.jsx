import { useInView } from "../hooks/useInView";
import { SKILLS } from "../data";

const CATEGORY_COLORS = ["cyan", "purple", "orange", "pink"];

const COLOR_MAP = {
  cyan:   { hex: "#00ffc8", bar: "from-accent-cyan/60 to-accent-cyan",   text: "text-accent-cyan",   border: "border-l-accent-cyan" },
  purple: { hex: "#7c6ffa", bar: "from-accent-purple/60 to-accent-purple", text: "text-accent-purple", border: "border-l-accent-purple" },
  orange: { hex: "#fa8231", bar: "from-accent-orange/60 to-accent-orange", text: "text-accent-orange", border: "border-l-accent-orange" },
  pink:   { hex: "#ff6b9d", bar: "from-accent-pink/60 to-accent-pink",   text: "text-accent-pink",   border: "border-l-accent-pink" },
};

const STACK_BADGES = [
  { label: "MERN Stack",     color: "cyan",   desc: "MongoDB · Express · React · Node" },
  { label: "FastAPI + RAG",  color: "purple", desc: "Python · LangChain · ChromaDB" },
  { label: "DevOps",         color: "orange", desc: "Docker · Kubernetes · CI/CD · Git" },
];

function SkillBar({ name, level, colorKey }) {
  const [ref, inView] = useInView();
  const c = COLOR_MAP[colorKey];

  return (
    <div ref={ref} className="mb-3.5">
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-[12px] text-text-secondary">{name}</span>
        <span className={`font-mono text-[11px] ${c.text}`}>{level}%</span>
      </div>
      <div className="bg-bg-input rounded h-1.5 overflow-hidden border border-border">
        <div
          className={`h-full rounded bg-gradient-to-r ${c.bar} skill-bar-fill`}
          style={{ width: inView ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, items, colorKey, delay }) {
  const [ref, inView] = useInView(0.1);
  const c = COLOR_MAP[colorKey];

  return (
    <div
      ref={ref}
      className={`bg-bg-primary border border-border rounded-2xl p-6 transition-all duration-700
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2.5 mb-5">
        <div className={`w-1 h-5 rounded-sm bg-gradient-to-b ${c.bar}`} />
        <span className="font-syne font-bold text-[15px] text-text-primary">{category}</span>
      </div>
      {items.map((skill, i) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} colorKey={colorKey} />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-10 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-[11px] text-accent-cyan tracking-widest mb-3">
            // skills & expertise
          </p>
          <h2 className="font-syne font-extrabold text-5xl text-text-primary">Tech Arsenal</h2>
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-2 gap-7">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <SkillCard
              key={category}
              category={category}
              items={items}
              colorKey={CATEGORY_COLORS[i % CATEGORY_COLORS.length]}
              delay={i * 120}
            />
          ))}
        </div>

        {/* Stack badges */}
        <div className="flex gap-4 justify-center mt-11 flex-wrap">
          {STACK_BADGES.map((b) => {
            const c = COLOR_MAP[b.color];
            return (
              <div
                key={b.label}
                className={`bg-bg-primary border rounded-2xl px-7 py-5 text-center border-opacity-30`}
                style={{ borderColor: COLOR_MAP[b.color].hex + "44" }}
              >
                <p className={`font-syne font-bold text-lg mb-1.5 ${c.text}`}>{b.label}</p>
                <p className="font-mono text-text-muted text-xs">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
