import { motion } from "framer-motion";
import { certs, education, experience, projects } from "../data";
import { Badge, Reveal, Section } from "../components/ui";

export function Education() {
  const steps = [
    { k: "start", t: "2023", d: "Began B.Tech in Computer Science Engineering (Data Science)." },
    { k: "education", t: `${education.dept}`, d: `${education.college} · ${education.period} · CGPA ${education.cgpa}` },
    { k: "skill development", t: `${certs.length} certifications`, d: certs.map((c) => c.issuer).join(", ") },
    { k: "projects", t: `${projects.length} projects`, d: "Computer vision, NLP, predictive modeling, and AI × VLSI research." },
    { k: "current focus", t: "Now", d: "Data Analyst Intern at NEXLIMA SOLUTIONS, and AI-Based VLSI Routing Optimization (in progress).", live: true },
  ];
  return (
    <Section id="education" label="education pipeline" title="From first semester to current focus.">
      <ol className="relative ml-2 border-l border-line">
        {steps.map((s, i) => (
          <Reveal key={s.k} delay={i * 0.05} className="relative pb-9 pl-8 last:pb-0">
            <span className={`absolute -left-[6px] top-1.5 h-[11px] w-[11px] rounded-full ${s.live ? "animate-pulse bg-sig" : "border border-dim bg-ink"}`} />
            <p className={`font-mono text-xs ${s.live ? "text-sig" : "text-dim"}`}>{s.k}</p>
            <p className="mt-1 text-xl font-semibold">{s.t}</p>
            <p className="mt-1 max-w-2xl text-dim">{s.d}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" label="career data timeline" title="Internships and hands-on work.">
      <ol className="space-y-4">
        {experience.map((e, i) => (
          <Reveal key={e.org} delay={i * 0.05}>
            <li className={`p-6 sm:p-8 ${e.current ? "border border-sig bg-sig/5 shadow-[0_0_40px_-18px_var(--color-sig)]" : "border border-line bg-panel/70"}`}>
              <div className="flex flex-wrap items-center gap-3">
                {e.current && <Badge live>CURRENTLY WORKING</Badge>}
                <span className="font-mono text-xs text-dim">{e.period}</span>
              </div>
              <h3 className={`mt-3 font-semibold ${e.current ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{e.role}</h3>
              <p className="mt-1 text-sig">{e.org}</p>
              <p className="mt-3 max-w-2xl text-dim">{e.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certs" label="achievement vault" title="Certifications on file.">
      <div className="grid gap-4 sm:grid-cols-2">
        {certs.map((c, i) => (
          <motion.article key={c.title} whileHover={{ y: -4 }} className="flex flex-col justify-between border border-line bg-panel/80 p-6 transition-colors hover:border-sig">
            <div><p className="font-mono text-xs text-dim">item_0{i + 1} · {c.issuer}</p>
              <h3 className="mt-3 text-xl font-semibold leading-snug">{c.title}</h3></div>
            <p className="mt-5 text-sm text-dim">{c.text}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
