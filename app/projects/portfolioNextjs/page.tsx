"use client";
import { Header } from "../../_components/Header";
import { Status } from "../../_components/Status";
import { Spacer } from "../../_components/Spacer";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Footer } from "@/app/_components/Footer";
import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "motion/react";
import { IconBrandNextjs, IconBrandReact, IconBrandTailwind } from "@tabler/icons-react";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function Home() {

    const products = [
        {
          title: "Next.js",
          link: "https://nextjs.org/",
          thumbnail:
            "https://assets-global.website-files.com/64ef65e1e3180ded19ec7878/6526970c6f3e0e18a4e0f5bb_import-svgs-next-js-app.webp",
        },
        {
          title: "React",
          link: "https://react.dev/",
          thumbnail:
            "https://th.bing.com/th/id/OIP.BAwJnB3maWaRiZsXTXTmcwHaEK?rs=1&pid=ImgDetMain",
        },
        {
          title: "Tailwind css",
          link: "https://tailwindcss.com/",
          thumbnail:
            "https://th.bing.com/th/id/OIP.B9sXYF-aegyoGBlVpmyOFgHaEK?rs=1&pid=ImgDetMain",
        },
       
        {
          title: "Framer Motion",
          link: "https://motion.dev/",
          thumbnail:
            "https://images.ctfassets.net/m67spjpkfcu8/22n4lPtkTn7J3x5Y1pkuhI/3d66e01266e07266cde202c764f64bf6/motion.png",
        },
        {
          title: "Aceternity UI",
          link: "https://ui.aceternity.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
        {
          title: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
        },
      ];

      const ref = useRef(null);
      const isInView = useInView(ref,
        {margin: "-150px"}
      );

      const { scrollYProgress } = useScroll();

      const widthProgressBar = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  return (
    <main>
      <Header />
      <Spacer size="xs" />
      <HeroParallax products={products} />
      <Spacer size="xl" />
      <div ref={ref} className="px-[15vw] mb-[15vh]">
        <h1 className="text-4xl font-bold font-caption text-center text-accent-foreground mb-[15px] ">Project Portfolio Next.js</h1>
        <motion.div className="bg-blue-500 h-0.5 w-full"
          style={{ scaleX: widthProgressBar }}
          
        /* style={{ scaleX: isInView ? scrollYProgress : 0.5, opacity: isInView ? 1 : 0.2 }} */
         />
      </div>
      <TechnologiesUsed />
      <Spacer size="xl"/>
      <Status />
      <Spacer size="xl"/><Spacer size="xl"/>
      <ScrollArea />
      <Spacer size="xl"/>
      <Footer />
    </main>
  );
}

const TechnologiesUsed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,
    {margin: "-250px"}
  );

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <div ref={ref} className=" relative mx-auto w-96 grid h-32">
      <motion.div className="w-1/3 bg-muted rounded-l-lg top-0 bottom-0 left-0 right-0 absolute z-10"
      animate={{
        y: isInView ? "-60%" : "0%",
        borderRadius: isInView ? "var(--radius)" : "var(--radius) 0 0 var(--radius)",
      }}
      ><IconBrandNextjs size={100} className="m-auto mt-[10%]" /></motion.div>
      <motion.div className="w-1/3 top-0 bottom-0 left-0 right-0 absolute z-0"
      animate={{
        y: isInView ? "60%" : "0%",
        opacity: isInView ? 1 : 0,
        marginRight: isInView ? "5px" : "0",
      }}
      >
        <h1 className="z-0 font-semibold text-3xl m-auto text-accent-foreground text-center">Nextjs</h1>
        <p className="z-0 text-muted-foreground text-center">The React Framework for Production</p>
      </motion.div>
      <motion.div className="w-1/3 bg-muted top-0 bottom-0 left-1/3 right-0 absolute z-10"
      animate={{
        y: isInView ? "60%" : "0%",
        borderRadius: isInView ? "var(--radius)" : "0%",
      }}
      ><IconBrandReact size={100} className="m-auto mt-[10%]" /></motion.div>
      <motion.div className="w-1/3 top-0 bottom-0 left-1/3 right-0 absolute z-0"
      animate={{
        y: isInView ? "-60%" : "0%",
        opacity: isInView ? 1 : 0,
      }}
      >
        <h1 className="z-0 font-semibold text-3xl m-auto text-accent-foreground text-center">React</h1>
        <p className="z-0 text-muted-foreground text-center">A JavaScript library for building user interfaces</p>
      </motion.div>
      <motion.div className="w-1/3 bg-muted top-0 bottom-0 rounded-r-lg left-2/3 right-0 absolute z-10"
      animate={{
        y: isInView ? "-60%" : "0%",
        borderRadius: isInView ? "var(--radius)" : "0 var(--radius) var(--radius) 0",
      }}
      ><IconBrandTailwind size={100} className="m-auto mt-[10%]" /></motion.div>
      <motion.div className="w-1/3 top-0 bottom-0 left-2/3 right-0 absolute z-0"
      animate={{
        y: isInView ? "60%" : "0%",
        opacity: isInView ? 1 : 0,
        marginLeft: isInView ? "5px" : "0",
      }}
      >
        <h1 className="z-0 font-semibold text-3xl m-auto text-accent-foreground text-center">Tailwind CSS</h1>
        <p className="z-0 text-muted-foreground text-center">A utility-first CSS framework for rapid UI development</p>
      </motion.div>
      </div>
  );
}