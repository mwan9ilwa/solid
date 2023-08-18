import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Service from "@/components/Services";
import About from "@/components/About";
import ServicesTab from "@/components/ServicesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Quest | Your Quest, Our Innovation",
  description: "This is Home for Solid Pro",
  // other metadata
};


export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Service />
      <About />
      <ServicesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Project />
    </main>
  );
}
