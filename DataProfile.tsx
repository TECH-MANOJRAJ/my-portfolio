import { motion } from "framer-motion";
import { certs, experience, projects, skills } from "../data";
import { Section } from "../components/ui";

// Every number here is counted from data.ts; nothing is hand-typed.
function Bar({ label, value, max }: { label: string; value: number; max: number }) {
  return (
    <div className="grid grid-cols-[130px_1fr_auto] items-center gap-3 text-sm sm:grid-cols-[170px_1fr_auto]">
      <span className="truncate">{label}</span>
      <div className="h-1.5 bg-line"><motion.div initial={{ width: 0 }} whileInView={{ width: `${(value / max) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full bg-sig" /></div>
      <span className="font-mono text-xs text-dim">{value}</span>
    </div>
  );
}

export default function DataProfile() {
  const freq = new Map<string, number>();
  projects.forEach((p) => p.tech.forEach((t) => freq.set(t, (freq.get(t) ?? 0) + 1)));
  const top = [...freq].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]);
  const totals: [string, number][] = [["projects", projects.length], ["internships", experience.length], ["certifications", certs.length], ["technologies", skills.reduce((s, g) => s + g.items.length, 0)]];
  return (
    <Section id="profile" label="my data profile" title="The resume, plotted.">
      <div className="mb-10 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
        {totals.map(([k, v]) => <div key={k} className="bg-ink/95 p-5"><p className="text-4xl font-semibold">{v}</p><p className="mt-1 font-mono text-xs text-dim">{k}</p></div>)}
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4"><h3 className="font-mono text-xs text-sig">technologies per skill category</h3>
          {skills.map((g) => <Bar key={g.group} label={g.group} value={g.items.length} max={6} />)}</div>
        <div className="space-y-4"><h3 className="font-mono text-xs text-sig">technologies reused across projects (of {projects.length})</h3>
          {top.map(([t, n]) => <Bar key={t} label={t} value={n} max={projects.length} />)}</div>
      </div>
    </Section>
  );
}
