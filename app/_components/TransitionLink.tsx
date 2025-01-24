"use client"

import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../utils/animations"
import Link from "next/link"
import { PropsWithChildren } from "react";

type PropsTransitionLink = {
    href: string;
    className?: string;
}

export const TransitionLink = (props : PropsWithChildren<PropsTransitionLink>) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if(pathname !== props.href) {
            animatePageOut(props.href, router);
        }
    }

    return (
        <Link href="#" onClick={handleClick} className={props.className}>
            {props.children}
        </Link>
    );
}