// src/pages/dashboard/AnalyzeResultPage.tsx
import Button from "../../components/ui/Button";

const candidates = [
  {
    name: "Amira Hassan",
    reasons: [
      "7 years of data-driven recruiting experience in tech",
      "80 % successful placement rate in last role",
      "Strong Python & SQL skills match JD requirements",
    ],
  },
  {
    name: "Jorge Alvarez",
    reasons: [
      "Led ATS migration project at Fortune 500 company",
      "Certified HR Analytics Professional",
      "Publishes thought leadership on DEI hiring practices",
    ],
  },
  {
    name: "Noura Al-Kuwari",
    reasons: [
      "Master’s in Industrial Engineering (process optimization)",
      "Built university-wide student recruiting program",
      "Fluent in Arabic & English—matches regional needs",
    ],
  },
];

export default function AnalyzeResultPage() {
  const handleDownload = () => {
    // 🔗 TODO: fetch PDF/CSV from backend
    alert("Download coming soon!");
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <h2 className="mb-8 text-3xl font-bold">Top candidates</h2>

      <div className="space-y-8">
        {candidates.map((c) => (
          <article
            key={c.name}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-blue-600">{c.name}</h3>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-700">
              {c.reasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button onClick={handleDownload} className="px-8 py-3">
          Download full report
        </Button>
      </div>
    </section>
  );
}
