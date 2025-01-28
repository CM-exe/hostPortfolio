import { Header } from "../../_components/Header";
import { Hero } from "../../_components/Hero";
import { Status } from "../../_components/Status";
import { Spacer } from "../../_components/Spacer";
import { Metadata } from 'next';
import { Footer } from "../../_components/Footer";
import { WavyBackground } from "@/components/ui/wavy-background";
 
export const metadata: Metadata = {
  title: 'Clément MOURGUE - Porftolio - Projects',
};

export default function Home() {
  return (
    <main>
      <Header />
      <WavyBackground colors={["#4380ed", "#0c3798", "#112c69","#030712"]} backgroundFill="hsl(224 71.4% 4.1%)"  blur={5} waveWidth={60} speed="slow" containerClassName="bg-background">
        <div className="container mx-auto pb-16">
          <h1 className="text-4xl font-bold font-caption text-center text-accent-foreground">Project SAÉ S3</h1>
        </div>
      </WavyBackground>
      <Spacer size="xs" />
      <Hero />
      <Spacer/>
      <Status />
      <Footer />
    </main>
  );
}
