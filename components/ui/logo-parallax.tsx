"use client"

import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"
import { useRef } from "react"

/* "use client";
import {motion,useScroll,useTransform} from "framer-motion";
import React, {useRef} from "react"; */
import { IconBrandLaravel, IconBrandNextjs } from "@tabler/icons-react";

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
                <IconBrandLaravel size={500} color="hsl(var(--accent-foreground))" />
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



function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ id }: { id: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    return (
        <section className="img-container">
            <div ref={ref}>
                <img
                    src={`/photos/cityscape/${id}.jpg`}
                    alt="A London skyscraper"
                />
            </div>
            <motion.h2
                // Hide until scroll progress is measured
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >{`#00${id}`}</motion.h2>
        </section>
    )
}

export default function Parallax() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div id="example">
            {[1, 2, 3, 4, 5].map((image) => (
                <Image key={image} id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`
         html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #4ff0b7;
            margin: 0;
            font-family: JetBrains Mono, monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #4ff0b7;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
    )
}
