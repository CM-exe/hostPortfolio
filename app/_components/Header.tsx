"use client";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { CodeseeIcon } from "./icons/CodeseeIcon";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import { FolderKanban, House, MailPlus } from 'lucide-react';
import { TransitionLink } from "./TransitionLink";
import { IconBrandGithub, IconEye, IconHome } from "@tabler/icons-react";
import { FloatingDockMobile } from "@/components/ui/floating-dock";

export const Header = () => {
    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="h-full w-full text-accent-foreground" />
          ),
          href: "/",
        },
     
        {
          title: "About",
          icon: (
            <IconEye className="h-full w-full text-accent-foreground" />
          ),
          href: "/about",
        },
        {
          title: "Projects",
          icon: (
            <FolderKanban className="h-full w-full text-accent-foreground" />
          ),
          href: "/projects",
        },
        /* {
          title: "Aceternity UI",
          icon: (
            <img
              src="https://assets.aceternity.com/logo-dark.png"
              width={20}
              height={20}
              alt="Aceternity Logo"
            />
          ),
          href: "#",
        }, */
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-accent-foreground" />
          ),
          href: "https://github.com/CM-exe",
        },
        {
          title: "Contact",
          icon: (
            <MailPlus className="h-full w-full text-accent-foreground" />
          ),
          href: "/contact",
        },
      ];

    return(
        <>
        <header className="sticky top-0 md:py-4 py-2 w-full z-40 invisible md:visible"
        style={{
          backgroundColor: 'transparent',
          backgroundImage:  'linear-gradient(315deg, hsl(var(--background)) 70%, transparent 30%)',
          backgroundSize: '4px 4px', // Adjust the size of the triangles
          backdropFilter: 'blur(3px)',
          maskImage: 'linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)',
        }}>
            <section className="inline-flex items-baseline w-full px-5 md:px-40 m-auto">
                <h1 className="text-lg font-bold font-caption text-primary ml-0 mr-auto">Clémo.com</h1>
                <ul className="flex items-center gap-2 mr-0 ml-auto">
                    <TransitionLink
                        href="/" className={cn(buttonVariants({ variant: "outline" }), 'size-6 w-auto p-2 text-foreground')}>
                        <House size={16} />
                        Home
                    </TransitionLink>
                    <TransitionLink
                        href="/about" className={cn(buttonVariants({ variant: "outline" }), 'size-6 w-auto p-2 text-foreground')}>
                        <CodeseeIcon size={16} />
                        About
                    </TransitionLink>
                    <TransitionLink
                        href="/projects" className={cn(buttonVariants({ variant: "outline" }), 'size-6 w-auto p-2 text-foreground')}>
                        <FolderKanban size={16} />
                        Projects
                    </TransitionLink>
                    <Link
                        href="https://github.com/CM-exe"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 w-auto p-2 cursor-alias")}>
                        <GithubIcon size={16} className="text-foreground" />
                        Github
                    </Link>
                    <TransitionLink
                        href="/contact" className={cn(buttonVariants({ variant: "outline" }), 'size-6 w-auto p-2 text-foreground')}>
                        <MailPlus size={16} />
                    </TransitionLink>
                </ul>
            </section>
        </header>
        <div className="md:invisible w-screen flex items-center fixed z-40 bottom-0 mb-5">
        <FloatingDockMobile
        items={links}
        className="mx-auto"
        /></div>
      </>
    );
};