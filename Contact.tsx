import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data";
import { Section } from "../components/ui";

const field = "w-full border border-line bg-ink/80 px-4 py-3 text-base outline-none transition focus:border-sig";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  // No backend: this opens the visitor's email app with the message prefilled.
  const send = (e: FormEvent) => {
    e.preventDefault();
    const body = `${f.message}\n\n— ${f.name} (${f.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio message from ${f.name}`)}&body=${encodeURIComponent(body)}`;
  };
  const items = [
    { icon: <Mail size={18} />, text: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone size={18} />, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: <Github size={18} />, text: "github.com/TECH-MANOJRAJ", href: profile.github },
    { icon: <Linkedin size={18} />, text: "linkedin.com/in/manojraj-tech", href: profile.linkedin },
    { icon: <MapPin size={18} />, text: profile.location },
  ];
  return (
    <Section id="contact" label="establish connection" title="Open to opportunities, collaborations and projects.">
      <p className="-mt-4 mb-10 max-w-2xl text-dim">Data Science, Machine Learning, Artificial Intelligence and Data Analytics. Send a signal and I will reply by email.</p>
      <div className="grid gap-10 lg:grid-cols-2">
        <ul className="space-y-4">
          {items.map((it) => (
            <li key={it.text} className="flex items-center gap-4 text-lg">
              <span className="text-sig">{it.icon}</span>
              {it.href ? <a href={it.href} {...(it.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="break-all hover:text-sig">{it.text}</a> : <span>{it.text}</span>}
            </li>
          ))}
        </ul>
        <form onSubmit={send} className="space-y-4 border border-line bg-panel/80 p-6 backdrop-blur">
          <p className="font-mono text-xs text-sig">connection request</p>
          <label className="block"><span className="mb-1 block font-mono text-xs text-dim">name</span><input required className={field} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} autoComplete="name" /></label>
          <label className="block"><span className="mb-1 block font-mono text-xs text-dim">email</span><input required type="email" className={field} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} autoComplete="email" /></label>
          <label className="block"><span className="mb-1 block font-mono text-xs text-dim">message</span><textarea required rows={4} className={field} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></label>
          <button type="submit" className="bg-sig px-6 py-3 font-medium text-ink transition hover:brightness-110">Send signal</button>
          <p className="font-mono text-[11px] text-dim">Opens your email app with the message ready to send.</p>
        </form>
      </div>
    </Section>
  );
}
