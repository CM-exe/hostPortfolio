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
import { SectionLogo } from "@/components/ui/custom-component";
import { IconBrandLaravel, IconBrandNextjs } from "@tabler/icons-react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { cn } from "@/lib/utils";


export default function Home() {

  const images = [
    "https://www.curotec.com/wp-content/uploads/2023/02/laravel-development-services.jpg",
    "https://www.justinmind.com/wp-content/uploads/2018/10/user-testing-questions-better-products.png",
    "https://miro.medium.com/v2/resize:fit:1120/1*roU5Mu9zKRoOj_1ckIDpGA.png",
    "https://www.thechemicalengineer.com/media/13876/cleaver-brainstorming.png?&maxwidth=980&center=0.5,0.5&mode=crop&scale=both",
    "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg",
    "https://www.leankor.com/wp-content/uploads/2015/11/BusinessAgility.jpg",
    "https://www.opteam.fr/DepartmentFileHandler/0/0/agilite-business-550.jpg",
    "https://www.curotec.com/wp-content/uploads/2023/02/laravel-development-services.jpg",
    "https://www.justinmind.com/wp-content/uploads/2018/10/user-testing-questions-better-products.png",
    "https://miro.medium.com/v2/resize:fit:1120/1*roU5Mu9zKRoOj_1ckIDpGA.png",
    "https://www.thechemicalengineer.com/media/13876/cleaver-brainstorming.png?&maxwidth=980&center=0.5,0.5&mode=crop&scale=both",
    "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg",
    "https://www.leankor.com/wp-content/uploads/2015/11/BusinessAgility.jpg",
    "https://www.opteam.fr/DepartmentFileHandler/0/0/agilite-business-550.jpg",
    "https://www.curotec.com/wp-content/uploads/2023/02/laravel-development-services.jpg",
    "https://www.justinmind.com/wp-content/uploads/2018/10/user-testing-questions-better-products.png",
    "https://miro.medium.com/v2/resize:fit:1120/1*roU5Mu9zKRoOj_1ckIDpGA.png",
    "https://www.thechemicalengineer.com/media/13876/cleaver-brainstorming.png?&maxwidth=980&center=0.5,0.5&mode=crop&scale=both",
    "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg",
    "https://www.leankor.com/wp-content/uploads/2015/11/BusinessAgility.jpg",
    "https://www.opteam.fr/DepartmentFileHandler/0/0/agilite-business-550.jpg",
    "https://www.curotec.com/wp-content/uploads/2023/02/laravel-development-services.jpg",
    "https://www.justinmind.com/wp-content/uploads/2018/10/user-testing-questions-better-products.png",
    "https://miro.medium.com/v2/resize:fit:1120/1*roU5Mu9zKRoOj_1ckIDpGA.png",
    "https://www.thechemicalengineer.com/media/13876/cleaver-brainstorming.png?&maxwidth=980&center=0.5,0.5&mode=crop&scale=both",
    "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg",
    "https://www.leankor.com/wp-content/uploads/2015/11/BusinessAgility.jpg",
    "https://www.opteam.fr/DepartmentFileHandler/0/0/agilite-business-550.jpg",
    "https://www.curotec.com/wp-content/uploads/2023/02/laravel-development-services.jpg",
    "https://www.justinmind.com/wp-content/uploads/2018/10/user-testing-questions-better-products.png",
    "https://miro.medium.com/v2/resize:fit:1120/1*roU5Mu9zKRoOj_1ckIDpGA.png",
    "https://www.thechemicalengineer.com/media/13876/cleaver-brainstorming.png?&maxwidth=980&center=0.5,0.5&mode=crop&scale=both",
    "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg",
    "https://www.leankor.com/wp-content/uploads/2015/11/BusinessAgility.jpg",
    "https://www.opteam.fr/DepartmentFileHandler/0/0/agilite-business-550.jpg",
    "https://www.curotec.com/wp-content/uploads/2023/02/laravel-development-services.jpg",
    "https://www.justinmind.com/wp-content/uploads/2018/10/user-testing-questions-better-products.png",
    "https://miro.medium.com/v2/resize:fit:1120/1*roU5Mu9zKRoOj_1ckIDpGA.png",
    "https://www.thechemicalengineer.com/media/13876/cleaver-brainstorming.png?&maxwidth=980&center=0.5,0.5&mode=crop&scale=both",
    "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg",
    "https://www.leankor.com/wp-content/uploads/2015/11/BusinessAgility.jpg",
    "https://www.opteam.fr/DepartmentFileHandler/0/0/agilite-business-550.jpg",
  ];

  return (
    <main>
      <Header />
      <Spacer size="xs" />
      <div className="relative flex h-[30rem] w-full items-center justify-center bg-background">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:20px_20px]",
              "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_15%,hsl(var(--background)))] bg-background"></div>
          <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
            SAÉ S5 Project
          </p>
        </div>
        <Spacer />
      <Section>
            <h4 className="font-caption text-2xl mb-3 text-justify"><Code>SAÉ</Code> or Situation d&apos;Apprentissage Évalué in french is a project in autonomy in group of 5 students durint the BUT studies that&apos;s takes place all long a year and has to make us use the skills we&apos;ve learned.</h4>
        </Section>
      {/* <Spacer />
       <LaravelParallax title="Laravel" /> 
      <Section>
        <h2 className="font-caption text-4xl font-bold mt-[20vh] text-center">Additional Section</h2>
        <p>This is some additional content for the page.</p>
      </Section> */}
      <Spacer size="xl" />
      <SectionLogo logo={<IconBrandLaravel size={70} className="text-accent-foreground" />} valAdjust={435}>
        <Section className="text-justify">
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
      </SectionLogo>
      <Spacer />
      <Section>
      <h1 className="text-2xl font-bold font-caption text-accent-foreground">Passing through multiple steps to acieve this project like :</h1>
      <ul className="list-disc list-inside text-lg text-accent-foreground">
        <div className="grid ml-10 grid-cols-2 gap-4 mt-5">
          <li>Brainstorming</li>
          <li>Wireframing</li>
          <li>Prototyping</li>
          <li>Testing</li>
          <li>Development</li>
          <li>Deployment</li>
          <li>Maintenance</li>
          <li>Documentation</li>
          <li>Presentation</li>
        </div>
      </ul>
      </Section>
      <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-teal-500/10 ">
        <ThreeDMarquee images={images} />
      </div>
      <Spacer size="xl" />
      <Section className="text-justify">
      <h1 className="text-2xl font-bold font-caption text-center text-accent-foreground">Conclusion</h1>
      <p className="text-lg text-accent-foreground">
        The project was a success. We were able to create a web application that allows the management of the student&apos;s academic path. The project was a great experience and allowed us to learn a lot about web development.
        We were able to work in a team and learn how to manage a project. The project was a great experience and allowed us to learn a lot about web development.
      </p>
      </Section>
      <Spacer />
      <Footer />
    </main>
  );
}
