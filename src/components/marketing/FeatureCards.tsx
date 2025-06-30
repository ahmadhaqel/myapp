import { Rocket, ShieldCheck, Server } from "lucide-react";

const cards = [
  {
    title: "Top Candidates",
    body: "Our alogirthm finds the best fit for your job openings.",
    icon: <Server className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Fast Processing",
    body: "Can read and process 1000 resumes within 15 minutes.",
    icon: <Rocket className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Secure Encryption",
    body: "All job and candidates data is securely encrypted and 100% for your eyes only.",
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">Why choose us</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, body, icon }) => (
            <article
              key={title}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-center gap-2">{icon}</div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
