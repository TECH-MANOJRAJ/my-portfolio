import { motion } from "framer-motion";
import { education, profile } from "../data";
import { Section } from "../components/ui";

export default function About() {
  const rows: [string, string][] = [
    ["identity", profile.name],
    ["role", profile.title],
    ["location", profile.location],
    ["education", `${education.degree}, ${education.dept} · ${education.college} · CGPA ${education.cgpa}`],
    ["focus", "Machine Learning, NLP, Data Analytics, Predictive Modeling"],
    ["interests", profile.interests.join(", ")],
    ["languages", profile.languages.join(", ")],
    ["strengths", profile.strengths.join(", ")],
    ["hobbies", profile.hobbies.join(", ")],
  ];
  return (
    <Section id="about" label="profile" title="Who is behind the data.">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4 text-lg leading-relaxed text-dim">
          <p>{profile.intro}</p>
          <p>{profile.goal}</p>
        </div>
        <dl className="border border-line bg-panel/80 font-mono text-sm backdrop-blur">
          {rows.map(([k, v], i) => (
            <motion.div key={k} initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="grid gap-1 border-b border-line px-4 py-3 last:border-0 sm:grid-cols-[110px_1fr] sm:gap-4">
              <dt className="text-sig">{k}</dt><dd>{v}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
