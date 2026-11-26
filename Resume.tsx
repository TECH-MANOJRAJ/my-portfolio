import { Download, Eye } from "lucide-react";
import { profile } from "../data";
import { Section } from "../components/ui";

export default function Resume() {
  return (
    <Section id="resume" label="resume terminal" title="The full record, as a PDF.">
      <div className="max-w-2xl border border-line bg-panel/90 font-mono text-sm">
        <div className="flex gap-1.5 border-b border-line px-4 py-2.5"><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-sig" /></div>
        <div className="space-y-2 p-5">
          <p><span className="text-dim">$</span> resume --status</p>
          <p className="text-sig">RESUME_STATUS: AVAILABLE</p>
          <p className="text-dim">file: Manojraj-G-Resume.pdf</p>
          <div className="flex flex-wrap gap-3 pt-4 font-sans">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-line px-5 py-3 hover:border-sig hover:text-sig"><Eye size={16} />View resume</a>
            <a href={profile.resume} download className="inline-flex items-center gap-2 bg-sig px-5 py-3 font-medium text-ink hover:brightness-110"><Download size={16} />Download PDF</a>
          </div>
        </div>
      </div>
    </Section>
  );
}
