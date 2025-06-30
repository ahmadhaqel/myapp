// src/pages/dashboard/ResumeAnalyzePage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

export default function ResumeAnalyzePage() {
  const [jdFile,      setJdFile]      = useState<File | null>(null);
  const [jdText,      setJdText]      = useState("");
  const [resumeFiles, setResumeFiles] = useState<FileList | null>(null);
  const [topN,        setTopN]        = useState(5);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔗 TODO: send jdFile, jdText, resumeFiles, topN to backend
    console.log({ jdFile, jdText, resumeFiles, topN });

    // TEMP: navigate to static results page
    navigate("/dashboard/analyze/results");
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="mb-8 text-3xl font-bold">Analyze Resumés</h2>

      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        {/* Job Description upload */}
        <div>
          <label className="block font-medium">Upload Job Description</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={(e) => setJdFile(e.target.files?.[0] ?? null)}
            className="mt-2 block w-full rounded border border-slate-300 file:mr-4 file:rounded file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
          />
          {jdFile && (
            <p className="mt-2 text-sm text-slate-600">Selected: {jdFile.name}</p>
          )}
        </div>

        {/* Paste JD textarea */}
        <div>
          <label className="block font-medium">…or paste Job Description here</label>
          <textarea
            rows={6}
            value={jdText}
            onChange={(e) => setJdText(e.target.value)}
            placeholder="Paste JD here…"
            className="mt-2 w-full resize-none rounded border border-slate-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Resumé uploads */}
        <div>
          <label className="block font-medium">Upload Resumés</label>
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResumeFiles(e.target.files)}
            className="mt-2 block w-full rounded border border-slate-300 file:mr-4 file:rounded file:border-0 file:bg-emerald-600 file:px-4 file:py-2 file:text-white hover:file:bg-emerald-700"
          />
          {resumeFiles && (
            <p className="mt-2 text-sm text-slate-600">
              {resumeFiles.length} file(s) selected
            </p>
          )}
        </div>

        {/* Top-N dropdown */}
        <div>
          <label className="block font-medium">Number of top candidates</label>
          <select
            value={topN}
            onChange={(e) => setTopN(Number(e.target.value))}
            className="mt-2 w-32 rounded border border-slate-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            {[3, 5, 10, 20].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <Button type="submit" className="px-6 py-3">
          Submit
        </Button>
      </form>
    </section>
  );
}
