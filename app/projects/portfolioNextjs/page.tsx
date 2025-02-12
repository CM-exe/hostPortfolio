"use client";
import { Header } from "../../_components/Header";
import { Status } from "../../_components/Status";
import { Spacer } from "../../_components/Spacer";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Footer } from "@/app/_components/Footer";


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

  return (
    <main>
      <Header />
      <Spacer size="xs" />
      <HeroParallax products={products} />
      <Spacer size="xs"/>
      <Status />
      <Footer />
    </main>
  );
}