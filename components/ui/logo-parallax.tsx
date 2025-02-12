"use client";
import { IconBrandLaravel, IconBrandNextjs } from "@tabler/icons-react";
import {motion,useScroll,useTransform} from "framer-motion";
import React, {useRef} from "react";

export const LaravelParallax = ({title} : {title : string}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
    return (
        <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center">
            <motion.h1 style={{y: textY}} className="font-bold text-accent-foreground text-2xl md:text-5xl relative z-0">
                {title}
            </motion.h1>
            <motion.div
            style={{y: backgroundY}}
            className="absolute z-10 inset-0 grid place-items-center">
                <IconBrandLaravel size={500} color="hsl(var(--accent-foreground))" fill="hsl(var(--background))" />
            </motion.div>
        </div>
    );
};

export const NextParallax = ({title} : {title : string}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
    return (
        <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center">
            <motion.h1 style={{y: textY}} className="font-bold text-accent-foreground text-2xl md:text-5xl relative z-10">
                {title}
            </motion.h1>
            <motion.div
            style={{y: backgroundY}}
            className="absolute z-0 inset-0 grid place-items-center">
                <IconBrandNextjs size={500} className="text-accent-foreground" fill="bg-muted" />
            </motion.div>
        </div>
    );
};