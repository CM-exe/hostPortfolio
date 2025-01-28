import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { CodeseeIcon } from "./icons/CodeseeIcon";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import { House } from 'lucide-react';
import { TransitionLink } from "./TransitionLink";

export const Header = () => {
    return(
    <header className="sticky top-0 md:py-4 w-full z-40">
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
                    <Link
                        href="https://github.com/CM-exe"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 w-auto p-2")}>
                        <GithubIcon size={16} className="text-foreground" />
                        Github
                    </Link>
                </ul>
            </section>
        </header>
    );
};