import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <div className="bg-blue-50 dark:bg-blue-950/30">
        <Navbar />
        <Hero />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-32">
        <Services />
      </main>
      <CTA />
    </>
  );
}
