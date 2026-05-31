export const NAV_LINKS = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export const SKILLS = {
  Frontend: [
    { name: "React.js", level: 70 },
    { name: "HTML5 / CSS3", level: 60 },
    { name: "Tailwind CSS", level: 60 },
    { name: "JavaScript (ES6+)", level: 55 },
  ],
  Backend: [
    { name: "Node.js & Express.js", level: 70 },
    { name: "FastAPI (Python)", level: 70 },
    { name: "REST API Design", level: 90 },
    { name: "Java / OOP", level: 75 },
  ],
  "Database & DevOps": [
    { name: "MongoDB", level: 82 },
    { name: "SQL / MySQL", level: 75 },
    { name: "Docker", level: 52 },
    { name: "Kubernetes", level: 55 },
    { name: "CI/CD Pipelines", level: 60 },
    { name: "Git & GitHub", level: 80 },
  ],
  "AI / ML": [
    { name: "RAG (Retrieval-Augmented Gen)", level: 50 },
    { name: "LangChain", level: 50 },
    { name: "LLMs & Generative AI", level: 50 },
    { name: "Prompt Engineering", level: 60 },
    { name: "ChromaDB", level: 50 },
    { name: "SAP BTP", level: 50 },
  ],
};

export const EXPERIENCE = [
  {
    role: "Ex-Software Developer Intern",
    company: "SAP Labs",
    location: "Bengaluru, India",
    period: "Aug 2025 – Jun 2026 · 10 months",
    color: "cyan",
    icon: "🏢",
    points: [
      "Developed & maintained backend services for a Retrieval-Augmented Generation (RAG) system used in document grounding applications.",
      "Built and optimized multiple RESTful APIs using FastAPI, focusing on scalability, reliability, and performance.",
      "Delivered a major performance optimization by redesigning collection deletion logic — reducing execution time from 300+ seconds to under 2 seconds in production.",
      "Worked on debugging production issues and improving backend efficiency across core workflows.",
    ],
  },
  {
    role: "Summer Intern",
    company: "Vortex Engineering Pvt. Ltd.",
    location: "Chennai, India",
    period: "April 2023 – May 2023",
    color: "purple",
    icon: "🏦",
    points: [
      "Acquired practical knowledge of ATM software architecture and real-time transaction processing.",
      "Understood cash withdrawal workflows, card authentication, and secure banking operations.",
      "Gained exposure to backend system interactions in a financial technology environment.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Resume Building Platform",
    tag: "MERN Stack + AI",
    desc: "Web application that lets users create resumes using predefined templates with integrated AI assistance to enhance profile content and improve wording. Focused on user experience and dynamic resume generation.",
    tech: ["React.js", "Tailwind CSS", "Express.js", "MongoDB", "AI Integration"],
    color: "cyan",
    icon: "📄",
  },
  {
    title: "TextBook GPT",
    tag: "AI / Python",
    desc: "AI-powered application that answers textbook-related questions and supports academic note-taking. Integrated Google Search with LLM-based retrieval and ChromaDB for contextual and accurate responses.",
    tech: ["Python", "Gradio UI", "LangChain", "ChromaDB", "Google Search API"],
    color: "purple",
    icon: "📚",
  },
  {
    title: "Job Search & Recruitment Platform",
    tag: "React · Frontend",
    desc: "Frontend of a job search and recruitment platform to connect job seekers with recruiters. Built with a focus on responsive UI design and smooth user experience.",
    tech: ["React.js", "Tailwind CSS", "REST APIs", "Responsive Design"],
    color: "orange",
    icon: "💼",
  },
];

export const EDUCATION = [
  {
    degree: "M.Tech – CSE (Information Security)",
    institution: "NIT Calicut",
    location: "Kozhikode, Kerala",
    period: "2024 – 2026",
    grade: "CGPA: 7.48 / 10",
    color: "cyan",
  },
  {
    degree: "B.E – Computer Science & Engineering",
    institution: "Government College of Engineering Bargur",
    location: "Bargur, Tamil Nadu",
    period: "2020 – 2024",
    grade: "CGPA: 8.66 / 10",
    color: "purple",
  },
];

export const CERTIFICATIONS = [
  {
    name: "Professional Readiness for Innovation, Employability & Entrepreneurship",
    issuer: "IBM",
    icon: "🏅",
  },
  {
    name: "Retrieval Augmented Generation",
    issuer: "Krish Naik · Udemy",
    icon: "🤖",
  },
  {
    name: "MERN Fullstack Course",
    issuer: "E-Learn Infotech",
    icon: "⚡",
  },
];

export const COLOR_MAP = {
  cyan:   { hex: "#00ffc8", bg: "bg-accent-cyan/10",   border: "border-accent-cyan/30",   text: "text-accent-cyan",   dot: "bg-accent-cyan",   glow: "shadow-accent-cyan/20" },
  purple: { hex: "#7c6ffa", bg: "bg-accent-purple/10", border: "border-accent-purple/30", text: "text-accent-purple", dot: "bg-accent-purple", glow: "shadow-accent-purple/20" },
  orange: { hex: "#fa8231", bg: "bg-accent-orange/10", border: "border-accent-orange/30", text: "text-accent-orange", dot: "bg-accent-orange", glow: "shadow-accent-orange/20" },
  pink:   { hex: "#ff6b9d", bg: "bg-accent-pink/10",   border: "border-accent-pink/30",   text: "text-accent-pink",   dot: "bg-accent-pink",   glow: "shadow-accent-pink/20" },
};
