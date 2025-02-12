"use client";
import { Header } from "../../_components/Header";
import { Status } from "../../_components/Status";
import { Spacer } from "../../_components/Spacer";
import { Footer } from "../../_components/Footer";
import { MeteorsFullWidth } from "@/components/ui/meteors";
import { Section } from "@/app/_components/Section";
import Head from "next/head";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
 

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref,
    {margin: "-200px"}
  );

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <main>
      <Head>
        <title>Clément MOURGUE - Porftolio - Project SAE S3</title>
        <meta name="description" content="The page of my project of SAE S3" />
      </Head>
      <Header />
      {/* <WavyBackground colors={["#4380ed", "#0c3798", "#112c69","#030712"]} backgroundFill="hsl(224 71.4% 4.1%)"  blur={5} waveWidth={60} speed="fast" containerClassName="bg-background">
        <div className="container mx-auto pb-16">
          <h1 className="text-4xl font-bold font-caption text-center text-accent-foreground">Project SAÉ S3</h1>
        </div>
      </WavyBackground> */}
      <div className="container mx-auto pb-16">
          <h1 className="text-4xl font-bold font-caption text-center text-accent-foreground">Project SAÉ S3</h1>
            <MeteorsFullWidth number={50} />
      </div>
      <Spacer/>
      <Section>
        <h1 className="text-2xl font-bold font-caption text-center text-accent-foreground">Introduction</h1>
        <p className="text-lg text-accent-foreground">
          SAÉ S3 is a project of a web application that allows the management of the student&apos;s academic path. It is a project that I carried out during my third year of study at the University of Technology of Troyes. This project was carried out in a team of 5 students. The project was carried out in 3 months.
        </p>
      </Section>
      <Spacer/>
      <Spacer size="xl"/>
      <div ref={ref} className=" relative mx-auto w-96 grid h-32">
        <h1 className="z-0 text-3xl m-auto text-accent-foreground">
          This a onScroll show
        </h1>
      {/* <motion.div className="w-1/3 pb-16 bg-muted top-0 bottom-0 left-0 right-0 absolute z-10"
      initial={{opacity: 1}}
      whileInView={{opacity: 0}}
      viewport={{margin: "-200px"}}
      /> */}
      <motion.div className="w-1/3 pb-16 bg-muted top-0 bottom-0 left-0 right-0 absolute z-10"
      animate={{
        y: isInView ? "-100%" : "0%",
      }}
      />
      <motion.div className="w-1/3 pb-16 bg-muted top-0 bottom-0 left-1/3 right-0 absolute z-10"
      animate={{
        y: isInView ? "100%" : "0%",
      }}
      />
      <motion.div className="w-1/3 pb-16 bg-muted top-0 bottom-0 left-2/3 right-0 absolute z-10"
      animate={{
        y: isInView ? "-100%" : "0%",
      }}
      />
      </div>
      <Spacer size="xl"/>
      <Status />
      <Footer />
    </main>
  );
}
