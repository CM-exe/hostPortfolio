import { Header } from "../../_components/Header";
import { Hero } from "../../_components/Hero";
import { Status } from "../../_components/Status";
import { Spacer } from "../../_components/Spacer";
import { Metadata } from 'next';
import { Footer } from "../../_components/Footer";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Meteors } from "@/components/ui/meteors";
import { Section } from "@/app/_components/Section";
 
export const metadata: Metadata = {
  title: 'Clément MOURGUE - Porftolio - Projects',
};

export default function Home() {
  return (
    <main>
      <Header />
      {/* <WavyBackground colors={["#4380ed", "#0c3798", "#112c69","#030712"]} backgroundFill="hsl(224 71.4% 4.1%)"  blur={5} waveWidth={60} speed="fast" containerClassName="bg-background">
        <div className="container mx-auto pb-16">
          <h1 className="text-4xl font-bold font-caption text-center text-accent-foreground">Project SAÉ S3</h1>
        </div>
      </WavyBackground> */}
      <div className="container mx-auto pb-16">
          <h1 className="text-4xl font-bold font-caption text-center text-accent-foreground">Project SAÉ S3</h1>
          <Meteors number={20} />
      </div>
      <Spacer/>
      <Section>
        <h1 className="text-2xl font-bold font-caption text-center text-accent-foreground">Introduction</h1>
        <p className="text-lg text-accent-foreground">
          SAÉ S3 is a project of a web application that allows the management of the student's academic path. It is a project that I carried out during my third year of study at the University of Technology of Troyes. This project was carried out in a team of 5 students. The project was carried out in 3 months.
        </p>
      </Section>
      <Spacer/>
      <Status />
      <Footer />
    </main>
  );
}
