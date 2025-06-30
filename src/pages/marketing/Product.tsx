// src/pages/marketing/Product.tsx
import { Link } from "react-router-dom";
import FeatureCards from "../../components/marketing/FeatureCards";
import Button from "../../components/ui/Button";

/* --- image imports (replace src paths with real files) --- */
import heroImg     from "../../assets/product/hero.jpg";
import workflowImg from "../../assets/product/workflow.jpg";

export default function Product() {
  return (
    <main className="flex flex-col">
      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-tr from-blue-50 via-fuchsia-50 to-transparent">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
              Find the <span className="text-blue-600">best talent</span> in minutes
            </h1>
            <p className="mb-8 text-lg text-slate-700">
              Deema analyzes resumés, matches them to your job description and surfaces the
              strongest candidates—so you can hire faster with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Link to="/pricing">
                <Button variant="secondary" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>

          {/* hero image placeholder */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Screenshot of Deema dashboard"
              className="w-full rounded-xl shadow-lg ring-1 ring-slate-200 object-cover"
              loading="lazy"
            />
            {/* TODO: replace hero-placeholder.jpg with real dashboard shot */}
          </div>
        </div>
      </section>

      {/* ─────────────────── 3 KEY FEATURES ─────────────────── */}
      <FeatureCards />

      {/* ─────────────────── WORKFLOW SECTION ─────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center">
          {/* image placeholder */}
          <div className="order-last lg:order-first">
            <img
              src={workflowImg}
              alt="Workflow diagram"
              className="w-full rounded-xl shadow-lg ring-1 ring-slate-200 object-cover"
              loading="lazy"
            />
            {/* TODO: replace workflow-placeholder.jpg with a simple flowchart / mockup */}
          </div>

          {/* copy */}
          <div>
            <h2 className="mb-6 text-4xl font-bold">
              From upload&nbsp;to shortlist in <span className="text-blue-600">four steps</span>
            </h2>
            <ol className="space-y-6 pl-4 text-slate-700">
              <li className="relative pl-8">
                <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  1
                </span>
                Upload or paste your&nbsp;Job&nbsp;Description.
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  2
                </span>
                Drag &amp; drop candidate resumés&mdash;PDF or&nbsp;Word.
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  3
                </span>
                Pick how many top candidates you want (3&nbsp;&ndash;&nbsp;20).
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  4
                </span>
                Deema delivers an AI-ranked shortlist with key&nbsp;insights.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ─────────────────── CTA BANNER ─────────────────── */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to hire smarter?
          </h2>
          <p className="max-w-2xl text-blue-100">
            Sign up now and get 5 free tokens to see Deema in action with your own
            candidates and job description.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
