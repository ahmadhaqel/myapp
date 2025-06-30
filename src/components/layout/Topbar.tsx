export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-end gap-4 border-b bg-white px-6">
      {/* trial badge placeholder */}
      <span className="rounded bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
        14-day trial
      </span>

      {/* avatar placeholder */}
      <div className="h-8 w-8 rounded-full bg-slate-300" />
    </header>
  );
}
