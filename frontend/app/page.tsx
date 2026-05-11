import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";


export default function Home() {
  return (
    <div className="">
      <div className="lg:fixed lg:flex lg:flex-col-reverse lg:justify-center lg:min-h-screen bg-red-700 lg:w-1/3">
        <Navbar />
        <Hero />
      </div>
      <div className="lg:overflow-y-auto lg:h-screen lg:ml-[45%]">
        <div className="lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
          <About />
        </div>

        <Projects />
      </div>

    </div>
  );
}
