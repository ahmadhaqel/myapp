import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>

      <input
        className="border px-3 py-2 rounded mb-3"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <p className="text-xl">Hello, {name}!</p>}
    </main>
  );
}
