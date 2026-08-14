import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProjectsList } from "@/components/ProjectsList";
import { Services } from "@/components/Services";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Marquee />
      <ProjectsList />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
