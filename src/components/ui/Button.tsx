// src/components/ui/Button.tsx
import { cn } from "../../utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";          // 👈 new
};

export default function Button({
  variant = "primary",
  size = "md",                        // 👈 default
  className,
  children,
  ...rest
}: Props) {
  // map size → padding + font
  const sizeClasses =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "lg"
      ? "px-8 py-3 text-lg"
      : "px-5 py-2 text-base";

  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
      : "bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50";

  return (
    <button className={cn(base, sizeClasses, variantClasses, className)} {...rest}>
      {children}
    </button>
  );
}
