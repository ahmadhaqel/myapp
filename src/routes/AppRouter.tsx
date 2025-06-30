// src/routes/AppRouter.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/marketing/Home";
import Product from "../pages/marketing/Product";
import Pricing from "../pages/marketing/Pricing";
import Contact from "../pages/marketing/Contact"
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import NotFound from "../pages/misc/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout     from "../components/layout/DashboardLayout";
import OverviewPage        from "../pages/dashboard/OverviewPage";
import ResumeAnalyzePage   from "../pages/dashboard/ResumeAnalyzePage";
import MarketingLayout    from "../MarketingLayout";
import AnalyzeResultPage from "../pages/dashboard/AnalyzeResultPage"


const router = createBrowserRouter([
 // Marketing (public)
  {
    element: <MarketingLayout />,
    children: [
      { path: "/",          element: <Home /> },
      { path: "/product",   element: <Product /> },
      { path: "/pricing",   element: <Pricing /> },
      { path: "/contact",   element: <Contact /> },
      { path: "/login",     element: <Login /> },
      { path: "/signup",    element: <SignUp /> },
    ],
  },

  // Dashboard (private)
  {
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard",           element: <OverviewPage /> },
      { path: "/dashboard/analyze",   element: <ResumeAnalyzePage /> },
      { path: "/dashboard/analyze/results", element: <AnalyzeResultPage />}
      // more dashboard routes…
    ],
  },

  // 404
  { path: "*", element: <NotFound /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
