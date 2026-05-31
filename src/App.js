import { useState } from "react";
import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import About     from "./components/About";
import Skills    from "./components/Skills";
import Experience from "./components/Experience";
import Projects  from "./components/Projects";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("Home");

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <div className="bg-bg-primary min-h-screen text-text-secondary font-sans">
      <Navbar active={active} setActive={setActive} />
      <Hero      scrollTo={scrollTo} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
