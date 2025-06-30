// src/pages/marketing/Home.tsx
import Hero from "../../components/marketing/Hero";
import FeatureCards from "../../components/marketing/FeatureCards";
import PricingTable from "../../components/marketing/PricingTable";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <PricingTable />
    </>
  );
}
