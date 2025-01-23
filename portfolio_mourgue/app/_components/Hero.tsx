import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { LaravelIcon } from "./icons/LaravelIcon";
import { cn } from "@/lib/utils";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span className={cn("font-mono bg-accent/30 hover:bg-accent/50 border transition-colors text-primary border-accent px-1 py-0.5 rounded-sm inline-flex items-center gap-1 w-auto", className)} {...props} />
    );
};
        

export const Hero = () => {
    return (
        <Section>
            <h2 className="font-caption text-4xl">Clément MOURGUE</h2>
            <h4 className="font-caption text-2xl mb-3">Student at IUT de Bayonne et du Pays Basque</h4>
            <p>
                Écrire du <Code><LaravelIcon size={16}></LaravelIcon>code</Code>
            </p>
        </Section>
    );
};