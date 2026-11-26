import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const nodes = [
  ["top", "Home"], ["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["profile", "Data profile"],
  ["education", "Education"], ["experience", "Experience"], ["certs", "Certifications"], ["resume", "Resume"], ["contact", "Contact"],
] as const;

/** Floating data-map navigation. A signal dot travels the rail as you scroll. */
export default function DataMap() {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const top = useTransform(p, (v) => `${v * 100}%`);

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nodes.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return (
    <>
      <nav aria-label="Sections" className="fixed left-6 top-1/2 z-40 hidden h-[62vh] -translate-y-1/2 lg:block">
        <div className="absolute left-[5px] top-0 h-full w-px bg-line" />
        <motion.div className="absolute left-[5px] top-0 h-full w-px origin-top bg-sig" style={{ scaleY: p }} />
        <motion.span aria-hidden className="absolute left-0 h-[11px] w-[11px] -translate-y-1/2 rounded-full bg-sig shadow-[0_0_14px_var(--color-sig)]" style={{ top }} />
        <ul className="relative flex h-full flex-col justify-between">
          {nodes.map(([id, label]) => (
            <li key={id}>
              <button onClick={() => go(id)} aria-label={`Go to ${label}`} aria-current={active === id} className="group flex items-center gap-3 font-mono text-[11px]">
                <span className={`h-[11px] w-[11px] rounded-full border transition-colors ${active === id ? "border-sig bg-sig" : "border-dim bg-ink"}`} />
                <span className={`transition-opacity ${active === id ? "text-sig" : "text-dim opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"}`}>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-line bg-ink/85 px-5 py-3 backdrop-blur lg:hidden">
        <span className="font-mono text-sm text-sig">MANOJRAJ.G</span>
        <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="p-1">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile sections" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-ink px-8 pb-10 pt-20 lg:hidden">
            <ul className="relative border-l border-line pl-6">
              {nodes.map(([id, label], i) => (
                <li key={id} className="relative py-3">
                  <span className={`absolute -left-[31px] top-[22px] h-2.5 w-2.5 rounded-full ${active === id ? "bg-sig" : "bg-line"}`} />
                  <button onClick={() => go(id)} className={`text-left text-3xl font-semibold ${active === id ? "text-sig" : ""}`}>
                    <span className="mr-3 font-mono text-xs text-dim">{String(i).padStart(2, "0")}</span>{label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
