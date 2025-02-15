"use client";
import { Header } from "../../_components/Header";
import { Status } from "../../_components/Status";
import { Spacer } from "../../_components/Spacer";
import { Footer } from "../../_components/Footer";
import { MeteorsFullWidth } from "@/components/ui/meteors";
import { Section } from "@/app/_components/Section";
import Head from "next/head";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { IconBrandLaravel } from "@tabler/icons-react";
 

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const variants = {
    initial: {
      y: 0, 
      x: 0,
    },
    rightRotating: {
      rotate: 360,
      x: typeof window !== 'undefined' ? window.innerWidth /3 : 0,
      //y: scrollYProgress,
      transition: {
        rotate: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 1, // Adjust duration to control speed of rotation
          ease: 'linear',
        },
      },
    },
  };

  const scrollY = useTransform(scrollYProgress, [0, 1], [500, 0]); // Adjust values as needed to control movement

  return (
    <main>
      <Head>
        <title>Clément MOURGUE - Porftolio - Project SAE S3</title>
        <meta name="description" content="The page of my project of SAE S3" />
      </Head>
      <Header />
      <div className="container mx-auto pb-16">
          <h1 className="text-4xl font-bold font-caption text-center text-accent-foreground">Project SAÉ S3</h1>
            <MeteorsFullWidth number={50} />
      </div>
      <Spacer/>
      <Section>
        <h1 className="text-2xl font-bold font-caption text-center text-accent-foreground">Introduction</h1>
        <p className="text-lg text-accent-foreground">
          SAÉ S3 is a project of a web application that allows the management of the student&apos;s academic path. It is a project that I carried out during my third year of study at the University of Technology of Bayonne and Basque country. This project was carried out in a team of 5 students. The project was carried out in 3 months.
        </p>
      </Section>
      <Spacer/>
      <Spacer size="xl"/>
      <div ref={ref} className="h-fit">
      <motion.div
      variants={variants}
      style={{ y: scrollY }}
      initial="intial"
      whileInView={"rightRotating"}
      className="w-fit mx-auto"
      viewport={{ margin: "-250px" }}>
        <IconBrandLaravel size={100} className="m-auto" />
      </motion.div>
      <Section>
        <h1 className="text-2xl font-bold font-caption text-center text-accent-foreground">Technologies used</h1>
        <p className="text-lg text-accent-foreground">
          The project was made with the Laravel framework. Laravel is a PHP framework that allows the creation of web applications. It is a very powerful framework that allows the creation of web applications quickly and efficiently.
        </p>
        <h2 className="text-xl font-bold font-caption text-center text-accent-foreground">Laravel</h2>
        <p className="text-lg text-accent-foreground">
          Laravel is a PHP framework that allows the creation of web applications. It is a very powerful framework that allows the creation of web applications quickly and efficiently.
        </p>
        <h2 className="text-xl font-bold font-caption text-center text-accent-foreground">PHP</h2>
        <p className="text-lg text-accent-foreground">
          PHP is a programming language that is widely used in web development. It is a very powerful language that allows the creation of web applications quickly and efficiently.
        </p>
        <h2 className="text-xl font-bold font-caption text-center text-accent-foreground">HTML</h2>
        <p className="text-lg text-accent-foreground">
          HTML is a markup language that is used to create web pages. It is a very powerful language that allows the creation of web pages quickly and efficiently.
        </p>
      </Section>
      </div>
      <Spacer size="xl"/>
      <Status />
      <Footer />
    </main>
  );
}
