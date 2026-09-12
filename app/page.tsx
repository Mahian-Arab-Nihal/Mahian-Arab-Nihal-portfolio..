import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

export default function Home() {
  return (
    <main id="top">
      <Loader />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
      <AIChatbot />
    </main>
  );
}
