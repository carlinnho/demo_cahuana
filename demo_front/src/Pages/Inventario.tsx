import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { TargetAudience } from "../components/sections/TargetAudience";
import { Testimonials } from "../components/sections/Testimonials";
import { FinalCTA } from "../components/sections/FinalCTA";

export default function Inventario() {
  return (
    <div className="inventario-page">
      <Hero />
      <Services />
      <TargetAudience />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}