import { Spacer } from "@/app/_components/Spacer";
import { motion, useScroll, useTransform } from "motion/react";
import { PropsWithChildren, useRef } from "react";

export const SectionLogo = (props: PropsWithChildren<{logo:React.ReactNode, valAdjust?:number, margin ?: string}>) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const variants = {
        initial: {
        y: 0, 
        x: 0,
        },
        rightRotating: {
        rotate: 360,
        x: typeof window !== 'undefined' ? window.innerWidth /3 : 0,
        //y: scrollYProgress,
        transition: {
            rotate: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 1, // Adjust duration to control speed of rotation
            ease: 'linear',
            },
        },
        },
    };

    const scrollY = useTransform(scrollYProgress, [0, 1], [props.valAdjust ? props.valAdjust : 500, 0]); // Adjust values as needed to control movement

    return (
        <>
        <div ref={ref} className="h-fit">
        <motion.div
        variants={variants}
        style={{ y: scrollY }}
        initial="intial"
        whileInView={"rightRotating"}
        className="w-fit mx-auto"
        viewport={{ margin: props.margin ? props.margin : "-250px" }}>
            {props.logo}
        </motion.div>
        {props.children}
        </div>
        <Spacer size="xl"/>
        </>
    );
}