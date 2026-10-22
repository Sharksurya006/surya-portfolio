import { useInView } from "../hooks/useInView";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/Sharksurya006",
    icon: "🐙",
    external: true,
    hoverCls: "hover:border-text-primary/50 hover:text-text-primary",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/surya-s-0a9121268/",
    icon: "💼",
    external: true,
    hoverCls: "hover:border-[#0A66C2]/50 hover:text-[#0A66C2]",
  },
  {
    name: "Email",
    href: "mailto:suryas632003@gmail.com",
    icon: "📧",
    external: false,
    hoverCls: "hover:border-accent-cyan/50 hover:text-accent-cyan",
  },
];

export default function Footer() {
  const [ref, inView] = useInView();

  return (
    <footer
      ref={ref}
      className={`border-t border-border py-7 px-10 text-center transition-all duration-700
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <p className="font-mono text-xs text-text-ghost">
        <span className="text-accent-cyan">&lt;</span>
        Designed & Built by{" "}
        <span className="text-text-secondary">Surya S</span>
        <span className="text-accent-cyan">/&gt;</span>
        {" "}· {new Date().getFullYear()}
      </p>

      <div className="flex items-center justify-center gap-3.5 mt-4">
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            aria-label={s.name}
            {...(s.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className={`w-9 h-9 flex items-center justify-center rounded-full bg-bg-card border border-border text-text-faint text-base transition-all duration-200 hover:scale-110 ${s.hoverCls}`}
          >
            {s.icon}
          </a>
        ))}
      </div>

      <p className="font-mono text-[11px] text-border mt-4">
        suryas632003@gmail.com · Aruppukottai, Tamil Nadu, India
      </p>
    </footer>
  );
}
