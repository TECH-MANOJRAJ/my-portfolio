import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { asset, experience, profile, projects } from "../data";
import { Badge } from "../components/ui";

export default function Hero() {
  const links = [
    { href: profile.github, label: "GitHub", icon: <Github size={18} />, ext: true },
    { href: profile.linkedin, label: "LinkedIn", icon: <Linkedin size={18} />, ext: true },
    { href: `mailto:${profile.email}`, label: "Email", icon: <Mail size={18} />, ext: false },
  ];
  return (
    <section id="top" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:pl-28">
      <div>
        <p className="font-mono text-xs text-dim">Data Science · Machine Learning · Problem Solving</p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="mt-5 text-[clamp(3rem,10vw,7.5rem)] font-bold leading-[0.9] tracking-tighter">MANOJRAJ G</motion.h1>
        <p className="mt-5 text-xl font-medium text-sig sm:text-2xl">{profile.title}</p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-dim sm:text-lg">{profile.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Badge live>Now: {experience[0].role}, {experience[0].org}</Badge>
          <Badge live>Building: {projects[0].title}</Badge>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="bg-sig px-6 py-3 font-medium text-ink transition hover:brightness-110">Explore portfolio</a>
          <a href={profile.resume} download className="inline-flex items-center gap-2 border border-line px-6 py-3 transition hover:border-sig hover:text-sig"><Download size={16} />Download resume</a>
        </div>
        <div className="mt-8 flex gap-5">
          {links.map((l) => (
            <a key={l.label} href={l.href} aria-label={l.label} {...(l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-dim transition hover:text-sig">{l.icon}</a>
          ))}
        </div>
      </div>
      <motion.figure initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, duration: 0.8 }} className="mx-auto w-full max-w-sm">
        <div className="relative">
          <span aria-hidden className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-sig" />
          <span aria-hidden className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-sig" />
          <div className="relative aspect-[3/4] overflow-hidden border border-line bg-panel">
            <img src={asset("profile.webp")} alt="Portrait of Manojraj G" width={720} height={1080} className="h-full w-full object-cover" />
            <span aria-hidden className="scan absolute inset-x-0 h-px bg-sig/80 shadow-[0_0_12px_var(--color-sig)]" />
          </div>
        </div>
        <figcaption className="mt-4 flex justify-between font-mono text-[11px] text-dim"><span>id: manojraj.g</span><span>Kumbakonam, IN</span></figcaption>
      </motion.figure>
    </section>
  );
}
