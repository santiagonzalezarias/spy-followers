import { Hero } from "@/components/spy/hero";
import { CodeBox } from "@/components/spy/code-box";
import { Instructions } from "@/components/spy/instructions";
import { Footer } from "@/components/spy/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-neon-purple selection:text-white pb-10">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-20" />

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none -z-10" />

      <Hero />
      <CodeBox />
      <Instructions />
      <Footer />
    </main>
  );
}
