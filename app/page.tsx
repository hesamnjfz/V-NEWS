import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Expertise />
      <Contact />
    </main>
  );
}
