import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
