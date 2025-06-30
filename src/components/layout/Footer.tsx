// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t bg-white py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()}. Mind Technologies LLC. All rights reserved.
    </footer>
  );
}
