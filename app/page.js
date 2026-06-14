import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #a78bfa, #60a5fa, transparent)" }} />
      <About />
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #a78bfa, #60a5fa, transparent)" }} />
      <Projects />
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #a78bfa, #60a5fa, transparent)" }} />
      <Experience />
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #a78bfa, #60a5fa, transparent)" }} />
      <Contact />
      <Footer />
    </main>
  );
}