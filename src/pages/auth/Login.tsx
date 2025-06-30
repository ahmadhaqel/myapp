// src/pages/auth/Login.tsx
import { useState } from "react";
import { Link }     from "react-router-dom";
import Button       from "../../components/ui/Button";      // your existing Button

export default function Login() {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔗 TODO: call real login endpoint
    console.log({ email, password });
  };

  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Log in to Deema</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* EMAIL */}
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* REMEMBER + FORGOT */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
              Remember me
            </label>
            <Link to="#" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* SUBMIT */}
          <Button type="submit" className="w-full justify-center py-2">
            Log in
          </Button>
        </form>

        {/* SIGN-UP LINK */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Start free trial
          </Link>
        </p>
      </div>
    </section>
  );
}
