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
import { useState } from "react";
import { Beams, Lens, Rays } from "@/components/ui/lens";
import { motion } from "motion/react";
import { FocusCards } from "@/components/ui/focus-cards";

export default function Home() {
  const [hovering, setHovering] = useState(false);

  const dataBut3 = [
    {
      title: "Kubernetes",
      src: "https://sue.eu/wp-content/uploads/sites/6/2022/09/6.png",
    },
    {
      title: "Jenkins",
      src: "https://img-0.journaldunet.com/Z1UbLv8x9HzkskXOTJ8AxTsQmxI=/1500x/smart/4c631fb74d004887af2883e4c53271c3/ccmcms-jdn/19530600.jpg",
    },
    {
      title: "Three js",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUyPLMCrdBvL7byu5KkMnOssbQigrkiRxZw&s",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
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
            <FocusCards cards={dataBut3} />
        </div>
      ),
    },
    {
      title: "2022-2024 (DUT)",
      content: (
        <div>
          <p className="text-accent-foreground text-xs md:text-sm font-normal mb-8">
            I have learn a lot of things during my DUT in computer science at the IUT of Bayonne and the Basque Country.
          </p>
          <p className="text-accent-foreground text-xs md:text-sm font-normal mb-8">
            Notably, I have learned the following languages and technologies:
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
            I made my baccalauréat général with mention très bien in 2022 with specialities in mathematics, engineering sciences and computer science at the Lycée Victor Duruy in Mont-de-Marsan.
          </p>
          <Lens hovering={hovering} setHovering={setHovering}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/2004_Baccalaur%C3%A9at_g%C3%A9n%C3%A9ral.pdf/page1-1200px-2004_Baccalaur%C3%A9at_g%C3%A9n%C3%A9ral.pdf.jpg"
              alt="image"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </Lens>
          <motion.div
            animate={{
              filter: hovering ? "blur(1px)" : "blur(0px)",
            }}
            className="py-4 relative z-10"
          >
            <h2 className="text-2xl text-left font-bold">
              Baccalauréat général
            </h2>
            <p className="text-left  mt-4">
              Baccalauréat général spécialités mathématiques, sciences de l&apos;ingénieur et informatique<br/>section européenne Maths/anglais et option maths expertes avec mention très bien.
            </p>
          </motion.div>
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
      <div className="flex m-auto max-w-screen">
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
          <div className="flex flex-col gap-2 my-8 h-[400%] w-[200%]">
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
