// src/pages/misc/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="text-lg text-slate-600">Page not found</p>
      <Link to="/" className="text-blue-600 underline">
        Go home
      </Link>
    </section>
  );
}
