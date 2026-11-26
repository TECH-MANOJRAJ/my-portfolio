import { useCallback, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Boot from "./components/Boot";
import DataMap from "./components/DataMap";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import DataProfile from "./sections/DataProfile";
import { Certifications, Education, Experience } from "./sections/Journey";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import { profile } from "./data";

export default function App() {
  const [ready, setReady] = useState(false);
  const done = useCallback(() => setReady(true), []);
  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{!ready && <Boot key="boot" onDone={done} />}</AnimatePresence>
      {ready && (
        <>
          <DataMap />
          <main>
            <Hero /><About /><Skills /><Projects /><DataProfile /><Education /><Experience /><Certifications /><Resume /><Contact />
          </main>
          <footer className="border-t border-line bg-ink/90 px-5 py-10 sm:px-8 lg:pl-28">
            <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xl font-semibold">{profile.name}</p>
                <p className="font-mono text-xs text-dim">{profile.title}</p>
                <p className="mt-3 font-mono text-xs text-dim">© 2026 {profile.name}</p>
              </div>
              <div className="flex gap-5 text-dim">
                <a aria-label="GitHub" href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-sig"><Github size={20} /></a>
                <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sig"><Linkedin size={20} /></a>
                <a aria-label="Email" href={`mailto:${profile.email}`} className="hover:text-sig"><Mail size={20} /></a>
              </div>
            </div>
          </footer>
        </>
      )}
    </MotionConfig>
  );
}
