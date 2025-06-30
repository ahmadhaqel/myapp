// src/components/marketing/Hero.tsx
import { Link } from "react-router-dom";
import Button    from "../ui/Button";
import heroImg   from "../../assets/hero/hero-default.jpeg";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* decorative gradient blob */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[-8rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-16rem]"
      >
        <div
          className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-blue-500 to-fuchsia-500 opacity-20"
          style={{ clipPath: "polygon(74% 44%, 100% 65%, 82% 100%, 0 100%, 0 0, 64% 0)" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
        {/* text block */}
        <div className="text-center lg:text-left">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Build your Dream <br className="hidden sm:inline" />
            Team with <span className="text-blue-600">Deema</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg text-slate-600 lg:mx-0">
            Deema uses an advanced alogirthm to read through all your resumes and find you the best candidates within seconds.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link to="/signup">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Link to="/product">
              <Button variant="secondary" size="lg">
                See Product
              </Button>
            </Link>
          </div>
        </div>

        {/* image block */}
        <div className="relative">
          <img
            src={heroImg}
            alt="Teacher reviewing AI-graded papers"
            className="w-full rounded-xl shadow-lg ring-1 ring-slate-200 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
