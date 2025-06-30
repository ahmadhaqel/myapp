// src/pages/auth/SignUp.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

export default function SignUp() {
  const [fullName,     setFullName]     = useState("");
  const [workEmail,    setWorkEmail]    = useState("");
  const [org,          setOrg]          = useState("");
  const [role,         setRole]         = useState("");
  const [hiringNeeds,  setHiringNeeds]  = useState("1-50");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔗 TODO: send data to your signup endpoint
    console.log({ fullName, workEmail, org, role, hiringNeeds });
    // clear
    setFullName(""); setWorkEmail(""); setOrg(""); setRole("");
  };

  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Start your free trial</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full name */}
          <div>
            <label className="mb-1 block text-sm font-medium">Full name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Work email */}
          <div>
            <label className="mb-1 block text-sm font-medium">Work email</label>
            <input
              type="email"
              required
              value={workEmail}
              onChange={(e) => setWorkEmail(e.target.value)}
              className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Organization */}
          <div>
            <label className="mb-1 block text-sm font-medium">Organization</label>
            <input
              type="text"
              required
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Role / Title */}
          <div>
            <label className="mb-1 block text-sm font-medium">Role / Title</label>
            <input
              type="text"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Hiring needs */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Typical hires per year
            </label>
            <select
              value={hiringNeeds}
              onChange={(e) => setHiringNeeds(e.target.value)}
              className="w-full rounded border border-slate-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              {["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"].map((range) => (
                <option key={range}>{range}</option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full justify-center py-3">
            Create account
          </Button>
        </form>

        {/* Login link */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
