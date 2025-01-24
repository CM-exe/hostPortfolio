import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { CodeseeIcon } from "./icons/CodeseeIcon";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import { SearchX, House } from 'lucide-react';

export const Header = () => {
    return(
    <header className="sticky top-0 py-4 w-full">
        <section className="inline-flex items-baseline w-full px-40 m-auto">
            <h1 className="text-lg font-bold font-caption text-primary ml-0 mr-auto">Clémo.com</h1>
            <ul className="flex items-center gap-2 mr-0 ml-auto">
                <Link
                href="/"
                className={cn(buttonVariants({ variant: "outline"}), "size-6 w-auto p-2")}>
                    <House size={16} className="text-foreground" />
                    Home
                </Link>
                <Link
                href="/about"
                className={cn(buttonVariants({ variant: "outline"}), "size-6 w-auto p-2")}>
                    <CodeseeIcon size={16} className="text-foreground" />
                    About
                </Link>
                <Link
                href="https://github.com/CM-exe"
                className={cn(buttonVariants({ variant: "outline"}), "size-6 w-auto p-2")}>
                    <GithubIcon size={16} className="text-foreground" />
                    Github
                </Link>
            </ul>
        </section>
    </header>

    );
};