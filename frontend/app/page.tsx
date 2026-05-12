import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* left pannel */}
      <div className="xl:fixed xl:flex xl:flex-col-reverse xl:justify-center xl:min-h-screen xl:w-1/3">
        <Navbar />
        <Hero />
      </div>

      {/* Right panel */}
      <div className="xl:overflow-y-auto xl:h-screen xl:ml-[45%] xl:p-5">
        <div className="xl:min-h-screen xl:flex xl:flex-col xl:justify-center ">
          <About />
        </div>

        <Projects />
      </div>

    </div>
  );
}
