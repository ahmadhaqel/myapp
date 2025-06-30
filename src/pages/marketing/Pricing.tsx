// src/pages/marketing/Pricing.tsx
import { useState } from "react";
import Button from "../../components/ui/Button";      // your existing Button

/* ---------- helper ---------- */
const priceForTokens = (t: number) =>
  t * (20 - (17 / 999) * (t - 1)); // hits 20 at t=1 and 3 000 at t=1000

export default function Pricing() {
  const [tokens, setTokens] = useState(10);

  const total      = priceForTokens(tokens);
  const perToken   = total / tokens;

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="mb-2 text-center text-4xl font-bold">Token-based pricing</h1>
      <p className="mb-12 text-center text-lg text-slate-600">
        Buy only what you need—tokens never expire and are consumed each time you run
        <em> Deema Resume Analyzer</em>.
      </p>

      {/* ---------- slider card ---------- */}
      <div className="mx-auto w-full max-w-xl rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="w-full">
            <label className="mb-2 block font-medium">
              Select tokens to purchase
            </label>
            <input
              type="range"
              min={1}
              max={1000}
              value={tokens}
              onChange={(e) => setTokens(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="mt-2 text-sm text-slate-600">
              {tokens} token{tokens > 1 && "s"}
            </div>
          </div>

          {/* totals */}
          <div className="text-center sm:text-right">
            <div className="text-3xl font-extrabold">${total.toFixed(0)}</div>
            <div className="text-sm text-slate-600">
              (${perToken.toFixed(2)} per token)
            </div>
          </div>
        </div>

        <Button className="w-full justify-center py-3">Purchase tokens</Button>
      </div>

      {/* ---------- explanatory copy ---------- */}
      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-slate-700">
        <details open>
          <summary className="cursor-pointer text-lg font-semibold">
            How tokens work
          </summary>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>
              <strong>1 token = 1 analysis run</strong> (one job description vs. any
              number of resumés).
            </li>
            <li>Tokens do <em>not</em> expire—use them whenever you need.</li>
            <li>
              Buy more at once to save—price per token drops linearly from $20 to $3.
            </li>
          </ul>
        </details>

        <details>
          <summary className="cursor-pointer text-lg font-semibold">
            Example costs
          </summary>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[1, 50, 500].map((t) => (
              <div
                key={t}
                className="rounded-lg border border-slate-200 bg-white p-4 text-center"
              >
                <div className="text-2xl font-bold">{t}</div>
                <div className="text-sm text-slate-600">token{t > 1 && "s"}</div>
                <div className="mt-2 text-lg font-semibold">
                  ${priceForTokens(t).toFixed(0)}
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
