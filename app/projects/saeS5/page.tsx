'use client';

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

import { Header } from "../../_components/Header";
import { Section } from "../../_components/Section";
import { Spacer } from "../../_components/Spacer";
import { LaravelIcon } from "../../_components/icons/LaravelIcon";
import { Spotlight } from "@/components/ui/spotlight";
import { Code } from "@/app/_components/Hero";
import { Footer } from "@/app/_components/Footer";
import { LaravelParallax } from "@/components/ui/logo-parallax";


export default function Home() {

  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
          <img
            src="https://blog.pwskills.com/wp-content/uploads/2024/02/C-Plus-Plus-Tutorial-01.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <img
            src="https://blog.pwskills.com/wp-content/uploads/2024/02/C-Plus-Plus-Tutorial-01.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="https://blog.pwskills.com/wp-content/uploads/2024/02/C-Plus-Plus-Tutorial-01.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="https://blog.pwskills.com/wp-content/uploads/2024/02/C-Plus-Plus-Tutorial-01.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "",
      description:
        "",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          
        </div>
      ),
    },
  ];

  return (
    <main>
      <Header />
      <Spacer size="xs" />
      <Section>
        <Spotlight
          className="-top-[20vh] left-1/4"
          fill="white"
        />
            <h2 className="font-caption text-4xl font-bold mt-[20vh] text-center">PROJET DE SAÉ S5</h2>
            <h4 className="font-caption text-2xl mb-3">La <Code>SAÉ</Code> est une Situation d&apos;Apprentissage Évalué qui a lieu durant les études de BUT Informatique</h4>
            <p>
                Écrire du <Code><LaravelIcon size={16}></LaravelIcon>code</Code>
            </p>
        </Section>
      <Spacer />
      <StickyScroll content={content} />
      <Spacer />
      <LaravelParallax title="Laravel" />
      <Section>
        <h2 className="font-caption text-4xl font-bold mt-[20vh] text-center">Additional Section</h2>
        <p>This is some additional content for the page.</p>
      </Section>
      <Spacer size="xs" />
      <Footer />
    </main>
  );
}
