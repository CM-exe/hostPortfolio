"use client";
import { Header } from "../_components/Header";
import { Spacer } from "../_components/Spacer";
import Head from 'next/head';
import { Footer } from "../_components/Footer";
import { Section } from "../_components/Section";
import { PinContainer } from "@/components/ui/3d-pin";
import { Code } from "../_components/Hero";
import { LaravelIcon } from "../_components/icons/LaravelIcon";
import { NextjsIcon } from "../_components/icons/NextjsIcon";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Clément MOURGUE - Porftolio - Projects</title>
        <meta name="description" content="The page all the project I putted in my portfolio" />
      </Head>
      <Header />
      <Spacer size="xs" />
      <Section>
        <h1 className="text-4xl font-bold font-caption text-center text-accent-foreground">All my projects</h1>
        <p className="text-center">Here is the list of all the projects I putted in my portfolio</p>
        <ShootingStars />
        <StarsBackground />
        <Spacer size="xs" />
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-20 md:gap-0 md:flex-row m-auto">
          <PinContainer
          title="/saeS3"
          href="/projects/saeS3"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base">
                Project of SAÉ S3
              </h3>
              <div className="text-sm !m-0 !p-0 font-normal">
                <span>
                  The project in <Code><LaravelIcon size={16} /> code</Code> is a project that I made during my second year of IUT school.
                  It is a project that I made with a team of 5 people.
                  The goal of this project was to create a web application that allows the user to create a schedule for the week.
                  The user can add courses, delete them, modify them, and see the schedule in a calendar view.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
          <PinContainer
          title="/portfolioNextjs"
          href="/projects/portfolioNextjs"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base">
                Portfolio in Nextjs, React, Tailwind CSS
              </h3>
              <div className="text-sm !m-0 !p-0 font-normal">
                <span>
                  The project in <Code><NextjsIcon size={16} /> code</Code> is a personnal project that I made during my third year of IUT school.
                  It is a project that I made alone.
                  The goal of this project was to create my own portfolio.
                  The portfolio is made with Nextjs, React and Tailwind CSS.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-red-700 via-orange-600 to-yellow-400" />
            </div>
          </PinContainer>
          </div>
          <div className="flex m-auto">
          <PinContainer
          title="/saeS5"
          href="/projects/saeS5"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base">
                Project of SAÉ S5
              </h3>
              <div className="text-sm !m-0 !p-0 font-normal">
                <span>
                  The project in <Code><LaravelIcon size={16} /> code</Code> is a project that I made during my third year of IUT school.
                  It is a project that I made with a team of 5 people.
                  The goal of this project was to create a web application that allows the user to create a schedule for the week.
                  The user can add courses, delete them, modify them, and see the schedule in a calendar view.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
          </div>
        </div>
      </Section>
      <Spacer/>
      <Footer />
    </main>
  );
}
