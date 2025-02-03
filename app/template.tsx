"use client"

import { useEffect } from "react";
import { animatePageIn } from "./utils/animations";

export default function Template({children}: {children: React.ReactNode}) {
    useEffect(() => {
        animatePageIn();
    }, []);

  return (
    <div>
        <div id="banner-1" className="min-h-full bg-slate-300 z-50 fixed top0 left-0 md:w-1/5 w-[20vw]" />
        <div id="banner-2" className="min-h-full bg-slate-300 z-50 fixed top0 left-[20vw] md:left-[20%] md:w-1/5 w-[20vw]" />
        <div id="banner-3" className="min-h-full bg-slate-300 z-50 fixed top0 left-[40vw] md:left-[40%] md:w-1/5 w-[20vw]" />
        <div id="banner-4" className="min-h-full bg-slate-300 z-50 fixed top0 left-[60vw] md:left-[60%] md:w-1/5 w-[20vw]" />
        <div id="banner-5" className="min-h-full bg-slate-300 z-50 fixed top0 left-[80vw] md:left-[80%] md:w-1/5 w-[20vw]" />
        {children}
    </div>
  );
}