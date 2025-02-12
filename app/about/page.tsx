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
import { BookImage, Box, Map, MapPinned, PlaneTakeoff, Search, Settings, Sparkles } from "lucide-react";
import { useState } from "react";
import { Beams, Lens, Rays } from "@/components/ui/lens";
import { motion } from "motion/react";
import { FocusCards } from "@/components/ui/focus-cards";
import { Tabs } from "@/components/ui/tabs";
import { WorldMap } from "@/components/ui/world-map";
import { Section } from "../_components/Section";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import nouvelle_aquitaine from "../../public/nouvelle-aquitaine.png";
import Image from "next/image";
import { IconBallAmericanFootball, IconDeviceGamepad2 } from "@tabler/icons-react";
import { GridItem } from "@/components/ui/glowing-effect";

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

  const offset = -10;

  const dotsMap = [
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: {
        lat: offset + 45.5031824,
        lng: -73.5698065,
      }, // Montréal
    },
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: { lat: 69.6516345 - offset, lng: 18.9558585 }, // Tromso
    },
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: { lat: offset +3 +  53.2744122, lng: -9.0490601 }, // Galway
    },
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: { lat: offset -2 +  33.7735976, lng: 10.8861888 }, // Djerba
    },
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: { lat: offset*1.5 +  34.0346534, lng: -5.0161926 }, // Fes
    },
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: { lat: offset*1.4 +  39.613432, lng: 2.8829185 }, // Majorque
    },
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: { lat: offset*1.4 +  39.9492572, lng: 4.0499642 }, // Minorque
    },
  ];

  const tabs = [
    {
      title: "Rugby",
      value: "rugby",
      content: (
        <div className="w-full overflow-y-auto no-visible-scrollbar relative h-full rounded-2xl p-10 bg-gradient-to-br from-accent to-muted">
          <h2 className="text-xl md:text-4xl font-bold text-accent-foreground">Rugby</h2>
          <p className="text-accent-foreground text-sm md:text-base font-normal mb-5">Here is the team I play with. More than a team, a family!</p>
          <img src="https://media.sudouest.fr/19916328/1200x-1/armagnac-77e34f2d99bb4b98a25cf961a805ead6-155542-ph0.jpg"
          alt="RCPR"
          className="rounded-xl mx-auto"
          width={500}
          />
          <Spacer size="xs" />
          <p className="text-accent-foreground text-sm md:text-base font-normal">We play at the level of Regional 3 currently (2024/2025)<br/>
          It&apos;s a club located at Roquefort (RCPR is for Rugby Club Pays de Roquefort)</p>
          <Image src={nouvelle_aquitaine}
          alt="Nouvelle-Aquitaine"
          className="mx-auto mt-2" />
          <Spacer size="xs" />
        </div>
      ),
    },
    {
      title: "Coding",
      value: "coding",
      content: (
        <div className="w-full overflow-y-auto no-visible-scrollbar relative h-full rounded-2xl p-10 bg-gradient-to-br from-accent to-muted">
          <h2 className="text-xl md:text-4xl font-bold text-accent-foreground">Coding</h2>
          <p className="text-accent-foreground text-sm md:text-base font-normal">Of course I like coding, because computer science is the subject of my studies.<br/>
          I like robotics, developing and also play video games.</p>
          <Spacer size="sm" />
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
              <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<IconDeviceGamepad2 className="h-4 w-4" />}
                title="Playing video games"
                description="I like playing video games, often on my console."
              />
          
              <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icon={<Settings className="h-4 w-4" />}
                title="The best AI code editor ever."
                description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
              />
          
              <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={<Settings className="h-4 w-4" />}
                title="You should buy Aceternity UI Pro"
                description="It's the best money you'll ever spend"
              />
          
              <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icon={<Sparkles className="h-4 w-4" />}
                title="This card is also built by Cursor"
                description="I'm not even kidding. Ask my mom if you don't believe me."
              />
          
              <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<Search className="h-4 w-4" />}
                title="Coming soon on Aceternity UI"
                description="I'm writing the code as I record this, no shit."
              />
            </ul>
            <Spacer size="xs" />
        </div>
      ),
    },
    {
      title: "Travelling",
      value: "travelling",
      content: (
        <div className="w-full overflow-y-auto no-visible-scrollbar relative h-full rounded-2xl p-10 bg-gradient-to-br from-accent to-muted">
          <h2 className="text-xl md:text-4xl font-bold text-accent-foreground">Travelling</h2>
          <p className="text-accent-foreground text-sm md:text-base font-normal">Here are the multiple countries I have the opportunity to visit</p>
          <Spacer size="sm" />
        <WorldMap
        backgroundColor="bg-accent"
        dots={dotsMap}
      />
      <Spacer size="xs" />
      <p className="text-accent-foreground text-sm md:text-base font-normal">Images can help too imagine easily!</p>
      <Section className="flex flex-col items-center gap-5 max-w-3xl mt-5">
              <div className="flex gap-5">
            <DirectionAwareHover imageUrl={"https://www.flightgift.com/media/wp/FG/2024/02/tromso-1024x768.jpeg"}>
              <p className="font-bold text-xl">Tromso, Norway</p>
              <p className="font-normal text-sm">lat: 69.6516345, lng: 18.9558585</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={"https://www.ou-et-quand.net/partir/images/illustration/oualler/djerba-guellala_116.jpg"}>
              <p className="font-bold text-xl">Djerba, Tunisia</p>
              <p className="font-normal text-sm">lat: 33.7735976, lng: 10.8861888</p>
            </DirectionAwareHover>
            </div>
            <div className="flex gap-5">
            <DirectionAwareHover imageUrl={"https://uniqueirishhomes.ie/wp-content/uploads/2023/05/How-to-Spend-72-Hours-in-County-Galway.jpg"}>
              <p className="font-bold text-xl">Galway, Ireland</p>
              <p className="font-normal text-sm">lat: 53.2744122, lng: -9.0490601</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={"https://cdn.generationvoyage.fr/2021/07/Cala-Llombards.jpg"}>
              <p className="font-bold text-xl">Majorque, Islas Baleares, Spain</p>
              <p className="font-normal text-sm">lat: 39.613432, lng: 2.8829185</p>
            </DirectionAwareHover>
            </div>
            <div className="flex gap-5">
            <DirectionAwareHover imageUrl={"https://res.cloudinary.com/lastminute-contenthub/s--k8fVR0SJ--/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Europe/Spain/Menorca/shutterstock_566785840"}>
              <p className="font-bold text-xl">Menorca, Islas Baleares, Spain</p>
              <p className="font-normal text-sm">lat: 69.6516345, lng: 18.9558585</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={"https://riad-layalina-fes.com/wp-content/uploads/vue-mosquee-quaraouiyine-650x500.jpg"}>
              <p className="font-bold text-xl">Fes, Marocco</p>
              <p className="font-normal text-sm">lat: 34.0346534, lng: -5.0161926</p>
            </DirectionAwareHover>
            </div>
            <div className="flex gap-5">
            <DirectionAwareHover imageUrl={"https://www.francaisaletranger.fr/wp-content/uploads/2022/11/Montreal.jpg"}>
              <p className="font-bold text-xl">Montréal, Canada</p>
              <p className="font-normal text-sm">lat: 45.5031824, lng: -73.5698065</p>
            </DirectionAwareHover>
            </div>
            </Section>
            <Spacer size="xs" />
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
      <h3 className="text-6xl font-bold font-caption text-center text-accent-foreground mb-2">My interests</h3>
      <p className="text-center text-2xl mb-10">Here are some of my interests and hobbies</p>
      <div className="flex flex-col md:flex-row m-auto max-w-screen">
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
        <CardItem translateZ="100">
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
    <div className="h-[50rem] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-5 md:my-40">
      <h3 className="text-4xl font-bold font-caption text-center text-accent-foreground mb-2 w-full">If you want more details about one of them<br/>Just click on a tab !</h3>
      <Tabs tabs={tabs} />
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
