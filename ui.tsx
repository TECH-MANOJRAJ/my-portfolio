import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Section shell. Lights up when the scroll "signal" reaches it. */
export function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const on = useInView(ref, { margin: "-40% 0px -40% 0px" });
  return (
    <section id={id} ref={ref} className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:pl-28">
      <div className="mb-8 flex items-center gap-4 font-mono text-xs">
        <span className={`transition-colors duration-500 ${on ? "text-sig" : "text-dim"}`}>{label}</span>
        <span className="h-px flex-1 bg-line" />
        <span className={`transition-colors duration-500 ${on ? "text-sig" : "text-dim"}`}>{on ? "signal: active" : "standby"}</span>
      </div>
      <h2 className="mb-10 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h2>
      {children}
    </section>
  );
}

export const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay }} className={className}>{children}</motion.div>
);

export const Badge = ({ children, live }: { children: ReactNode; live?: boolean }) => (
  <span className={`inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[11px] ${live ? "border-sig text-sig" : "border-line text-dim"}`}>
    {live && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sig" />}{children}
  </span>
);
