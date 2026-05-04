"use client"
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";


export default function Home() {
  return (
    <div className="space-y-40">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
