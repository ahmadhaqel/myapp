import { Link } from "react-router-dom";
import Button    from "../ui/Button";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started with Deema.",
    features: ["5 free tokens", "Up to 300 resumes per token"],
    cta: "Get started",
    highlight: false,
    to: "/signup",                 // 👈 goes to sign-up
  },
  {
    name: "Standard",
    price: "Flexible",
    description: "We use flexible pricing based on your hiring needs.",
    features: [
      "Flexible pricing based on needs",
      "Unlimited resumes",
      "API integration (100 tokens minimum)",
      "Customer support",
    ],
    cta: "Check pricing",
    highlight: true,
    to: "/pricing",                // 👈 detailed pricing page
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For customizing Deema for your enterprise.",
    features: [
      "Customized Deema instance",
      "Finetuned on your data",
      "Hosting & license rights",
    ],
    cta: "Contact sales",
    highlight: false,
    to: "/contact",                // 👈 contact form / page
  },
];

export default function PricingTable() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Pricing that fits your every need
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-xl border bg-white p-8 shadow-sm ${
                tier.highlight ? "ring-2 ring-blue-600" : "border-slate-200"
              }`}
            >
              <h3 className="mb-2 text-xl font-semibold">{tier.name}</h3>
              <p className="mb-6 text-slate-600">{tier.description}</p>

              <span className="mb-6 text-4xl font-extrabold">
                {tier.price}
              </span>

              <ul className="mb-8 space-y-2 text-sm text-slate-600">
                {tier.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              {/* ---------- CTA button wrapped in Link ---------- */}
              <Link to={tier.to} className="mt-auto">
                <Button
                  variant={tier.highlight ? "primary" : "secondary"}
                  className="w-full justify-center"
                >
                  {tier.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
