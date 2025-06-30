// src/components/layout/Header.tsx
import { NavLink } from "react-router-dom";
import Button      from "../ui/Button";
import { cn }      from "../../utils";
import logo        from "../../assets/logo-small.svg";

const navItems = [
  { label: "Product", to: "/product" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* ---------- left block: logo • brand • nav ---------- */}
        <div className="flex items-center gap-8">
          {/* ONE NavLink wraps logo + brand name  */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="Deema logo" className="h-8 w-8" />
            {/* Play with color / font right here */}
          </NavLink>

          {/* primary nav */}
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map(({ label, to }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    cn(
                      "font-medium text-slate-600 hover:text-slate-900",
                      isActive && "text-blue-600"
                    )
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- right block: auth buttons ---------- */}
        <div className="flex gap-3">
          <NavLink to="/login">
            <Button variant="secondary" className="px-4 py-1.5">
              Log in
            </Button>
          </NavLink>
          <NavLink to="/signup">
            <Button className="px-4 py-1.5">Start Free Trial</Button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
