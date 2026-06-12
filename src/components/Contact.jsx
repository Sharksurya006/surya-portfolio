import { useState } from "react";

const CONTACT_INFO = [
  { icon: "📧", label: "Email",     value: "suryas632003@gmail.com",    color: "text-accent-cyan" },
  { icon: "📱", label: "Phone",     value: "+91 9080615003",             color: "text-accent-purple" },
  { icon: "📍", label: "Location",  value: "Aruppukottai, Tamil Nadu",   color: "text-accent-orange" },
  { icon: "🎓", label: "Education", value: "NIT Calicut (M.Tech)",       color: "text-accent-pink" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact from " + formData.name);
    const body = encodeURIComponent(
      "Name: " + formData.name + "\n" +
      "Email: " + formData.email + "\n\n" +
      "Message:\n" + formData.message
    );
    window.open("mailto:suryas632003@gmail.com?subject=" + subject + "&body=" + body);
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const isDisabled = !formData.name || !formData.email || !formData.message;

  return (
    <section id="contact" className="py-24 px-10">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-mono text-[11px] text-accent-cyan tracking-widest mb-3">
            // let's connect
          </p>
          <h2 className="font-syne font-extrabold text-5xl text-text-primary mb-4">Get In Touch</h2>
          <p className="text-text-muted text-base leading-relaxed">
            Open to full-time roles, internships, and interesting projects. Let's build something great together.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-2 gap-3.5 mb-8">
          {CONTACT_INFO.map((item) => (
            <div
              key={item.label}
              className="bg-bg-primary border border-border rounded-xl p-4 flex items-center gap-3"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-mono text-[10px] text-text-ghost mb-1">{item.label}</p>
                <p className={`font-mono text-xs ${item.color}`}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-bg-primary border border-border rounded-2xl p-9">
          {sent ? (
            <div className="text-center py-9">
              <div className="text-5xl mb-4">✅</div>
              <p className="font-syne font-bold text-2xl text-accent-cyan mb-2">Message Sent!</p>
              <p className="text-text-muted text-sm">I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSend} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block font-mono text-[11px] text-text-faint mb-2 tracking-widest">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Surya S"
                  className="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text-primary text-sm placeholder-text-ghost focus:outline-none focus:border-accent-cyan/40 transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-[11px] text-text-faint mb-2 tracking-widest">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="suryas632003@gmail.com"
                  className="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text-primary text-sm placeholder-text-ghost focus:outline-none focus:border-accent-cyan/40 transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-[11px] text-text-faint mb-2 tracking-widest">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-bg-card border border-border rounded-xl px-4 py-3 text-text-primary text-sm placeholder-text-ghost focus:outline-none focus:border-accent-cyan/40 transition-colors duration-200 resize-y"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isDisabled}
                className={`w-full py-3.5 rounded-xl font-bold text-sm font-syne tracking-wide transition-all duration-200
                  bg-gradient-to-r from-accent-cyan to-[#00c4a0] text-bg-primary
                  shadow-lg shadow-accent-cyan/20
                  ${isDisabled ? "opacity-40 cursor-not-allowed" : "hover:shadow-accent-cyan/40 hover:scale-[1.01] cursor-pointer"}`}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>

        {/* LinkedIn + Resume */}
        <div className="flex gap-3 justify-center mt-7 flex-wrap">
          <a
            href="https://www.linkedin.com/in/surya-s-0a9121268/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 bg-bg-primary border border-border rounded-xl px-6 py-3 font-mono text-sm text-text-faint hover:border-[#0A66C2]/50 hover:text-[#0A66C2] transition-all duration-200"
          >
            <span className="text-lg">💼</span> LinkedIn
          </a>
          <a
            href="/Surya_S_Resume.pdf"
            download="Surya_S_Resume.pdf"
            className="flex items-center gap-2.5 bg-accent-cyan/5 border border-accent-cyan/25 rounded-xl px-6 py-3 font-mono text-sm text-accent-cyan hover:bg-accent-cyan/15 hover:border-accent-cyan/60 transition-all duration-200"
          >
            <span className="text-lg">📄</span> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
