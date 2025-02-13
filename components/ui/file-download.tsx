import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconDownload } from "@tabler/icons-react";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileDownload = () => {

  const downloadFile = () => {
    const fileUrl = "/CV_MOURGUE.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "CV_MOURGUE.pdf";
    link.click();
  };

  return (
    <div className="w-full">
      <motion.div
        whileHover="animate"
        className="group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
      >
        <button
          onClick={downloadFile}
          className="w-full h-full"
        >
        <div className="flex flex-col items-center justify-center ">
          <p className="relative z-20 font-sans font-bold text-accent-foreground text-base w-full text-center">
            Download my CV !
          </p>
          <div className="relative w-full  max-w-xl mx-auto">
            <motion.div
                layoutId="file-download"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  "relative group-hover/file:shadow-2xl z-[35] bg-accent/30 flex items-center justify-center h-16 mt-4 w-[90%] mx-auto rounded-md",
                  "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                )}
              >
                  <IconDownload className="h-8 w-8 text-accent-foreground" />
              </motion.div>

              <motion.div
                variants={secondaryVariant}
                className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-16 mt-4 w-[90%] mx-auto rounded-md"
              ></motion.div>
          </div>
        </div>
        </button>
      </motion.div>
    </div>
  );
};

export function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
    <div className="flex bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-neutral-950"
                  : "bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}
