export default function Footer() {
  return (
    <footer className="border-t border-border py-7 px-10 text-center">
      <p className="font-mono text-xs text-text-ghost">
        <span className="text-accent-cyan">&lt;</span>
        Designed & Built by{" "}
        <span className="text-text-secondary">Surya S</span>
        <span className="text-accent-cyan">/&gt;</span>
        {" "}· {new Date().getFullYear()}
      </p>
      <p className="font-mono text-[11px] text-border mt-2">
        suryas632003@gmail.com · Aruppukottai, Tamil Nadu, India
      </p>
    </footer>
  );
}
