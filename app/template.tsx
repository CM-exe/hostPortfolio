"use client"

import { useEffect } from "react";
import { animatePageIn } from "./utils/animations";

export default function Template({children}: {children: React.ReactNode}) {
    useEffect(() => {
        animatePageIn();
    }, []);

  return (
    <div>
        <div id="banner-1" className="min-h-full bg-slate-300 z-50 fixed top0 left-0 w-1/5" />
        <div id="banner-2" className="min-h-full bg-slate-300 z-50 fixed top0 left-[20%] w-1/5" />
        <div id="banner-3" className="min-h-full bg-slate-300 z-50 fixed top0 left-[40%] w-1/5" />
        <div id="banner-4" className="min-h-full bg-slate-300 z-50 fixed top0 left-[60%] w-1/5" />
        <div id="banner-5" className="min-h-full bg-slate-300 z-50 fixed top0 left-[80%] w-1/5" />
        {children}
    </div>
  );
}