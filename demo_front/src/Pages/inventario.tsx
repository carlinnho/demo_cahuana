import { FinalCTA } from "../components/sections/FinalCTA";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { TargetAudience } from "../components/sections/TargetAudience";
import { Testimonials } from "../components/sections/Testimonials";

export default function Inventario() {
    return (
        <main className="min-h-screen bg-[#f8fafc] text-brand-text">
            <Hero />
            <Services />
            <TargetAudience />
            <Testimonials />
            <FinalCTA />
        </main>
    );
}
