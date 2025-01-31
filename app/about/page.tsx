"use client";
import { Header } from "../_components/Header";
import { Status } from "../_components/Status";
import { Spacer } from "../_components/Spacer";
import { Footer } from "../_components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { EvervaultCard } from "@/components/ui/everault-card";
import { Timeline } from "@/components/ui/timeline";
import { SparklingTitle } from "../_components/SparklingTitle";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Head from 'next/head';
import { HtmlIcon } from "../_components/icons/HtmlIcon";
import { CssIcon } from "../_components/icons/CssIcon";
import { DockerIcon } from "../_components/icons/DockerIcon";
import { AngularIcon } from "../_components/icons/AngularIcon";
import { AndroidIcon } from "../_components/icons/AndroidIcon";
import { JavascriptIcon } from "../_components/icons/JavascriptIcon";
import { CppIcon } from "../_components/icons/CppIcon";
import { JavaIcon } from "../_components/icons/JavaIcon";
import { BookImage, Map, MapPinned, PlaneTakeoff } from "lucide-react";

export default function Home() {
  const dataBut3 = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  const dataBut2 = [
    {
      title: "Html",
      description:
        (
          <div className="flex-1">
            <div className="m-auto w-fit">
              <HtmlIcon size={100} />
            </div>
          </div>
        ),
      link: "https://developer.mozilla.org/fr/docs/Web/HTML",
    },
    {
      title: "CSS",
      description:
      (
        <div className="flex-1">
          <div className="m-auto w-fit">
            <CssIcon size={100} />
          </div>
        </div>
      ),
      link: "https://developer.mozilla.org/fr/docs/Web/CSS",
    },
    {
      title: "Javascript",
      description:
      (
        <div className="flex-1">
          <div className="m-auto w-fit">
            <JavascriptIcon size={100} />
          </div>
        </div>
      ),
      link: "https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/What_is_JavaScript",
    },
    {
      title: "Docker",
      description:
      (
        <div className="flex-1">
          <div className="m-auto w-fit">
            <DockerIcon size={100} />
          </div>
        </div>
      ),
      link: "https://www.docker.com/",
    },
    {
      title: "Angular",
      description:
      (
        <div className="flex-1">
          <div className="m-auto w-fit">
            <AngularIcon size={100} />
          </div>
        </div>
      ),
      link: "https://angular.dev/",
    },
    {
      title: "Android",
      description:
      (
        <div className="flex-1">
          <div className="m-auto w-fit">
            <AndroidIcon size={100} />
          </div>
        </div>
      ),
      link: "https://www.android.com/",
    },
    {
      title: "C++",
      description:
      (
        <div className="flex-1">
          <div className="m-auto w-fit">
            <CppIcon size={100} />
          </div>
        </div>
      ),
      link: "https://www.w3schools.com/cpp/default.asp",
    },
    {
      title: "Java",
      description:
      (
        <div className="flex-1">
          <div className="m-auto w-fit">
            <JavaIcon size={100} />
          </div>
        </div>
      ),
      link: "https://www.java.com/",
    },
  ];

  const data = [
    {
      title: "2024-2025 (BUT3)",
      content: (
        <div>
          <p className="text-accent-foreground text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
            <HoverEffect items={dataBut3} />
        </div>
      ),
    },
    {
      title: "2022-2024 (DUT)",
      content: (
        <div>
          <p className="text-accent-foreground text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-accent-foreground text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <HoverEffect items={dataBut2} />
        </div>
      ),
    },
    {
      title: "Cursus lycéen (2019-2022)",
      content: (
        <div>
          <p className="text-accent-foreground text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-accent-foreground text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-accent-foreground text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-accent-foreground text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-accent-foreground text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-accent-foreground text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <main>
      <Head>
            <title>Clément MOURGUE - Porftolio - About</title>
            <meta name="description" content="The page for contacting me from my portfolio" />
        </Head>
      <Header />
      <SparklingTitle />
      <Spacer size="md" />
      <h3 className="text-4xl font-bold font-caption text-center text-accent-foreground mb-2">My interests</h3>
      <p className="text-center text-lg mb-10">Here are some of my interests and hobbies</p>
      <div className="flex m-auto w-full">
        <div className="block m-auto">
      <CardContainer className="m-auto" containerClassName="pb-20 pt-0">
      <CardBody className="bg-accent/50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold font-caption text-accent-foreground"
        >
          Rugby player
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-accent-foreground font-sans"
        >
          Rugby player at the Rugby Club Pays de Roquefort (RCPR)
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://s3.static-clubeo.com/uploads/phcapr/Medias/rubon0[1]__o1lmih.gif" /* https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */
            height="203"
            width="256"
            className="mx-auto object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
    </div>
    <div className="block m-auto">
    <CardContainer className="m-auto"  containerClassName="pb-20 pt-0">
      <CardBody className="bg-accent/50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold font-caption text-accent-foreground"
        >
          Coding
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-accent-foreground font-sans"
        >
          Coding, development and embedded systems
        </CardItem>
        <EvervaultCard text="Coding" className="h-[80%]" />
      </CardBody>
    </CardContainer>
    </div>
    <div className="block m-auto">
    <CardContainer className="m-auto"  containerClassName="pb-20 pt-0">
      <CardBody className="bg-accent/50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold font-caption text-accent-foreground"
        >
          Travelling
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-accent-foreground font-sans"
        >
          I like travelling and exploring multiples countries
        </CardItem>
        <CardItem>
          <div className="flex flex-col gap-2 mt-4 h-[400%] w-[200%]">
            <div className="flex m-auto">
            <Map size={100} />
            <PlaneTakeoff size={100} />
            </div>
            <div className="flex m-auto">
            <MapPinned size={100} />
            <BookImage size={100} />
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
    </div>
    </div>
      <Spacer/>
      <div className="w-full">
        <Timeline data={data} />
      </div>
      <Spacer/>
      <Status />
      <Footer />
    </main>
    
  );
}
