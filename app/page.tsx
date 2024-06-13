import { LampDemo } from "@/components/Lamp";
import CardFlip from "@/components/main/CardFlip";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import { HoverEffect } from "@/components/ui/HoverEffect";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { projects } from "@/constants/projects";
import { testimonials } from "@/constants/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <LampDemo />
        <Skills />
        <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        <HoverEffect items={projects} />
      </div>
    </main>
  );
}
