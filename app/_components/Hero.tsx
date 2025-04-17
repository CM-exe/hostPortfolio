"use client";
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconBrandNextjs, IconBrandReact, IconBrandTailwind } from "@tabler/icons-react";

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span className={cn("font-mono bg-accent/30 text-lg hover:bg-accent/50 border transition-colors text-primary border-accent px-1 py-0.5 rounded-sm inline-flex items-center gap-1 w-auto", className)} {...props} />
    );
};
        

export const Hero = () => {
    return (
        <Section className="mt-[0vh]">
            <h2 className="font-caption font-bold text-accent-foreground text-4xl">Clément MOURGUE</h2>
            {/* <LampContainer> */}
                <motion.h4
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                    repeat: 0,
                    once: true,
                    }}
                    className="font-caption font-semibold text-2xl mb-3 min-w-screen"
                >
                    Student at IUT de Bayonne et du Pays Basque
                </motion.h4>
            <p className="text-lg max-w-4xl text-justify">
                Here you can see my portfolio made on my own using technologies <Code><IconBrandNextjs size={16} />Nextjs code</Code>, <Code><IconBrandReact size={16} />React code</Code> and <Code><IconBrandTailwind size={16} />Tailwind CSS code</Code>.
                <br/>I used all that technologies to make my portfolio and to show you my projects while growing up in competences.
                So, I can tell ...
            </p>
        </Section>
    );
};