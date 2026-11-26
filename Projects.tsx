import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github } from "lucide-react";
import { profile, projects } from "../data";
import { Badge, Section } from "../components/ui";

export default function Projects() {
  const [i, setI] = useState(0);
  const p = projects[i];
  return (
    <Section id="projects" label="experiment lab" title="Experiments: from input to model to output.">
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <div role="tablist" aria-label="Projects" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {projects.map((q, k) => (
            <button key={q.id} role="tab" aria-selected={k === i} onClick={() => setI(k)}
              className={`min-w-[220px] shrink-0 border p-4 text-left transition lg:min-w-0 ${k === i ? "border-sig bg-panel" : "border-line hover:border-dim"}`}>
              <span className={`font-mono text-[11px] ${k === i ? "text-sig" : "text-dim"}`}>experiment_0{k + 1}{q.status === "IN PROGRESS" ? " · in progress" : ""}</span>
              <span className="mt-1 block text-sm font-semibold leading-snug">{q.title}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.article key={p.id} role="tabpanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="border border-line bg-panel/80 p-6 backdrop-blur sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge live={p.status === "IN PROGRESS"}>{p.status === "IN PROGRESS" ? "IN PROGRESS" : "COMPLETED"}</Badge>
              <span className="font-mono text-xs text-dim">{p.category}</span>
            </div>
            <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{p.title}</h3>
            <p className="mt-1 font-mono text-xs text-dim">role: {p.role}</p>
            <p className="mt-5 max-w-2xl leading-relaxed text-dim">{p.summary}</p>
            {p.detail && <p className="mt-3 max-w-2xl leading-relaxed text-dim">{p.detail}</p>}
            <div className="mt-8 grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-0">
              {p.flow.map((f, k) => (
                <div key={k} className="contents">
                  {k > 0 && <span aria-hidden className="flow mx-auto h-8 w-px md:h-px md:w-10 md:self-center" />}
                  <div className="border border-line p-4"><span className="font-mono text-[11px] text-sig">{["input", "method", "output"][k]}</span><p className="mt-2 text-sm">{f}</p></div>
                </div>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="border border-line px-2.5 py-1 font-mono text-xs">{t}</li>)}</ul>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm text-sig hover:underline">
              <Github size={16} />More on my GitHub profile
            </a>
          </motion.article>
        </AnimatePresence>
      </div>
    </Section>
  );
}
