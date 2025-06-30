// src/pages/marketing/Contact.tsx
import { useState } from "react";
import Button from "../../components/ui/Button";

export default function Contact() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔗 TODO: send to backend / email service
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="mb-2 text-center text-4xl font-bold">Contact us</h1>
      <p className="mb-12 text-center text-slate-600">
        Have questions about Deema? Drop us a message and we’ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name */}
        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-1 block text-sm font-medium">Message</label>
          <textarea
            rows={6}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full justify-center py-3">
          Send message
        </Button>
      </form>
    </section>
  );
}
