import { Header } from "../_components/Header";
import { Status } from "../_components/Status";
import { Spacer } from "../_components/Spacer";
import { Metadata } from 'next';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { EvervaultCard } from "@/components/ui/everault-card";
 
export const metadata: Metadata = {
  title: 'Clément MOURGUE - Porftolio - About',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Spacer size="xs" />
      <CardContainer className="inter-var">
      <CardBody className="bg-accent/50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
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
          Rugby player at the Rugby Clup Pays de Roquefort (RCPR)
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
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>

    <CardContainer className="inter-var">
      <CardBody className="bg-accent/50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
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
        <CardItem translateZ="100" className="w-full mt-4">
          <EvervaultCard text="Coding" />
        </CardItem>
      </CardBody>
    </CardContainer>
      <Spacer/>
      <Status />
    </main>
  );
}
