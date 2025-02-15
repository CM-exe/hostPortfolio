"use client";
import { MotionStyle, motion, useMotionValue, useMotionValueEvent, useTransform } from "motion/react";
import { useState } from "react";


export const FoldableCard = () => {
    const xDrag = useMotionValue(0);
    const [isFolded, setIsFolded] = useState(true);
    const xLeftSection = useTransform(xDrag, [0,300], ["100%","0%"]);
    const xRightSection = useTransform(xDrag, [0,300], ["-100%","0%"]);

    const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
    const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);

    useMotionValueEvent(xDrag, "change", (currentX) => {
        if (currentX > 260) {
            setIsFolded(false);            
        } else {
            setIsFolded(true);
        }
    });

    return (
        <div className="overflow-x-clip">
        <motion.div animate={isFolded ? "folded" : "open"} variants={{open: {scale: 1}, folded: {scale:0.9}}} initial="folded">
        <div className="mx-auto grid aspect-video max-h-[80vh] p-8">
            <div className="aspect-video grid grid-cols-3 h-full w-full [grid-area:1/1]">
                <motion.div style={{x: xLeftSection, skewY: "-1deg"}} className="duruy-bg origin-bottom-right border-r border-[rgba(255,255,255,0.1)] shadow-2xl" />
                <motion.div style={{scaleX: centerScale, "--brightness-center" : centerBrightness} as MotionStyle} className="duruy-bg brightness-[--brightness-center]" />
                <motion.div style={{x: xRightSection, skewY: "1deg"}} className="duruy-bg origin-bottom-left border-l border-[rgba(255,255,255,0.1)] shadow-2xl" />
            </div>
            <motion.div
            drag="x"
            _dragX={xDrag}
            dragConstraints={{left: 0, right: 300}}
            dragTransition={{
                modifyTarget: (target) => {
                    return target > 150 ? 300 : 0;
                },
                timeConstant: 45,
            }}
            className="[grid-area:1/1] relative z-10 cursor-grab active:cursor-grabbing" />
        </div>
        <motion.div
        variants={{
            folded: {
                opacity: 0,
                scale:0.9,
                y:30,
            },
            open: {
                opacity: 1,
                scale:1,
                y:0,
            }
        }}
        className="flex w-full justify-center text-lg font-semibold md:text-2xl mt-1 md:mt-4">
            <p className="text-accent-foreground text-center rounded-xl bg-muted px-5 py-2">Lycée Victor Duruy of Mont-De-Marsan is an old high school!</p>
        </motion.div>
        </motion.div>
        </div>
    );
}

export const FoldableCardCustomisable = ({url, title}:{url : string, title: string}) => {
    const xDrag = useMotionValue(0);
    const [isFolded, setIsFolded] = useState(true);
    const xLeftSection = useTransform(xDrag, [0,300], ["100%","0%"]);
    const xRightSection = useTransform(xDrag, [0,300], ["-100%","0%"]);

    const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
    const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);

    useMotionValueEvent(xDrag, "change", (currentX) => {
        if (currentX > 260) {
            setIsFolded(false);        
        } else {
            setIsFolded(true);
        }
    });

    return (
        <div className="overflow-x-clip">
        <motion.div animate={isFolded ? "folded" : "open"} variants={{open: {scale: 1}, folded: {scale:0.9}}} initial="folded"
        whileHover={{scale: isFolded ? 1.05 : 1, rotate: isFolded ? 2 : 0}}>
        <div className="mx-auto grid aspect-video max-h-[80vh] p-8">
            <div className="aspect-video grid grid-cols-3 h-full w-full [grid-area:1/1]">
                <motion.div style={{x: xLeftSection, skewY: "-1deg", backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 30%), url(${url})`}} className="duruy-bg origin-bottom-right border-r border-[rgba(255,255,255,0.1)] shadow-2xl" />
                <motion.div style={{scaleX: centerScale, backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 30%), url(${url})`, "--brightness-center" : centerBrightness} as MotionStyle} className="duruy-bg brightness-[--brightness-center]" />
                <motion.div style={{x: xRightSection, skewY: "1deg", backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 30%), url(${url})`}} className="duruy-bg origin-bottom-left border-l border-[rgba(255,255,255,0.1)] shadow-2xl" />
            </div>
            <motion.div
            drag="x"
            _dragX={xDrag}
            dragConstraints={{left: 0, right: 300}}
            dragTransition={{
                modifyTarget: (target) => {
                    return target > 150 ? 300 : 0;
                },
                timeConstant: 45,
            }}
            className="[grid-area:1/1] relative z-10 cursor-grab active:cursor-grabbing" />
        </div>
        <motion.div
        variants={{
            folded: {
                opacity: 0,
                scale:0.9,
                y:30,
            },
            open: {
                opacity: 1,
                scale:1,
                y:0,
            }
        }}
        className="flex w-full justify-center text-lg font-semibold md:text-2xl mt-1 md:mt-4">
            <p className="text-accent-foreground text-center rounded-xl bg-muted px-5 py-2">{title}</p>
        </motion.div>
        </motion.div>
        </div>
    );
}