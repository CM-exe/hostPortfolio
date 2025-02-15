import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Status } from "./_components/Status";
import { Spacer } from "./_components/Spacer";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Footer } from "./_components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconBriefcase, IconCertificate, IconEmpathize, IconFolder, IconMailFast, IconQuestionMark, IconStepInto, IconUserSearch } from "@tabler/icons-react";
import { ArrowRightFromLine, BookCopy, FolderGit2, HeartHandshake, MailPlus, School, UserRoundPlus } from "lucide-react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
  const items = [
    {
      title: "Who I am ?",
      description: "Discover who I am and what I do and even more !",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"><IconQuestionMark color="white" size={100} className="m-auto" /></div>,
      icon: <IconUserSearch className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Projects I have made",
      description: "Dive into the world of projects I have made.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-400 to-neutral-700"><FolderGit2 color="white" size={100} className="m-auto" /></div>,
      icon: <IconFolder className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "My interests",
      description: "Explore the world of my interests and passions.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-600"><HeartHandshake color="white" className="m-auto" size={100} /></div>,
      icon: <IconEmpathize className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "My studies",
      description:
        "Understand where I come from and what I have learned. Also, what type of knowledge I have developed.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"><div className="inline-flex gap-3 m-auto"><School size={100} color="white" /><BookCopy size={100} color="white" /></div></div>,
      icon: <IconCertificate className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "What I can bring to you",
      description: "What should you choose me for your projects ?",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-700 to-neutral-900"><UserRoundPlus size={100} color="white" className="m-auto" /></div>,
      icon: <IconBriefcase className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "How to contact me ?",
      description: "Experience my contact form and get in touch with me.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-300 to-neutral-600"><MailPlus size={100} color="white" className="m-auto" /></div>,
      icon: <IconMailFast className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "My portfolio made with labour",
      description: "Explore and travel through my portfolio.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-600 to-neutral-400"><ArrowRightFromLine size={100} color="white" className="m-auto" /></div>,
      icon: <IconStepInto className="h-4 w-4 text-muted-foreground" />,
    },
  ];
  
  return (
    <main>
      <Header />
      <TextHoverEffect text="Clément MOURGUE's Portfolio" size={4} />
      <Hero />
      <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-accent-foreground">
              Welcome on my <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                portfolio !
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`https://www.iutbayonne.univ-pau.fr/sites/default/files/carousel_home/HM_1.jpg`}
          alt="hero"
          height={1920}
          width={1152}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
      <h3 className="text-5xl font-bold text-accent-foreground text-center mb-10">Discover what you can get here !</h3>
      <BentoGrid className="md:max-w-4xl md:mx-auto mx-10">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
      <Spacer size="xl"/>
      <Status />
      <Footer />
      <BackgroundBeams />
    </main>
  );
}
