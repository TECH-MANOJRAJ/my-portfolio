import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logs = ["mount profile.db", "load skills.matrix", "load experiments[5]", "link experience.timeline", "open contact.channel", "system ready"];

export default function Boot({ onDone }: { onDone: () => void }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { onDone(); return; }
    const t = setInterval(() => setN((v) => v + 1), 300);
    const skip = () => onDone();
    window.addEventListener("keydown", skip);
    return () => { clearInterval(t); window.removeEventListener("keydown", skip); };
  }, [onDone]);
  useEffect(() => {
    if (n > logs.length) { const t = setTimeout(onDone, 300); return () => clearTimeout(t); }
  }, [n, onDone]);

  return (
    <motion.div role="status" aria-label="Loading portfolio" onClick={onDone} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex cursor-pointer flex-col justify-between bg-ink p-6 sm:p-12">
      <p className="font-mono text-xs text-dim">sys / boot / {profileTag}</p>
      <div>
        <p className="font-mono text-sm text-sig">initializing</p>
        <h1 className="mt-2 text-[clamp(2.2rem,9vw,6rem)] font-semibold leading-none tracking-tight">{profileTag}</h1>
        <p className="mt-4 font-mono text-sm text-dim">Data Science · Machine Learning · Problem Solving</p>
        <div className="mt-8 h-px w-full max-w-md bg-line"><div className="h-px bg-sig transition-all duration-300" style={{ width: `${Math.min(100, (n / logs.length) * 100)}%` }} /></div>
      </div>
      <ul className="font-mono text-xs text-dim">
        {logs.slice(0, n).map((l) => <li key={l}><span className="text-sig">ok</span> {l}</li>)}
        <li className="mt-3 opacity-60">click or press any key to skip</li>
      </ul>
    </motion.div>
  );
}
const profileTag = "MANOJRAJ.G";
