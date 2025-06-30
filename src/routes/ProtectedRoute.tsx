// src/routes/ProtectedRoute.tsx
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const isLoggedIn = true; // TODO: replace with real auth state
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
