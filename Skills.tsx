import { useMemo, useState } from "react";
import { projects, skills } from "../data";
import { Section } from "../components/ui";

/** Hover (or tap) a technology: everything used alongside it in a project lights up. */
export default function Skills() {
  const [hot, setHot] = useState<string | null>(null);
  const used = useMemo(() => (hot ? projects.filter((p) => p.tech.includes(hot)) : []), [hot]);
  const related = useMemo(() => new Set(used.flatMap((p) => p.tech)), [used]);
  const cls = (t: string) =>
    !hot ? "border-line" : t === hot ? "border-sig bg-sig text-ink" : related.has(t) ? "border-sig text-sig" : "border-line opacity-30";

  return (
    <Section id="skills" label="tech stack matrix" title="Tools I work with, and what they connect to.">
      <p className="mb-6 h-5 font-mono text-xs text-sig" aria-live="polite">
        {hot ? `${hot}: used in ${used.length} project${used.length === 1 ? "" : "s"}` : "Hover or tap a technology to see its connections."}
      </p>
      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="bg-ink/95 p-6 backdrop-blur">
            <h3 className="mb-4 font-mono text-xs text-dim">{g.group}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((t) => (
                <button key={t} onMouseEnter={() => setHot(t)} onMouseLeave={() => setHot(null)} onFocus={() => setHot(t)} onBlur={() => setHot(null)}
                  onClick={() => setHot(hot === t ? null : t)} className={`border px-3 py-1.5 text-sm transition ${cls(t)}`}>{t}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
