"use client";
import { Card } from "@/components/ui/card";
import { Section } from "./Section"
import { GitCompareArrows } from "lucide-react";
import { TransitionLink } from "./TransitionLink";
import { cn } from "@/lib/utils";
import { NextjsIcon } from "./icons/NextjsIcon";
import { FileDownload } from "@/components/ui/file-download";

export const Laravel = (props: {size?: number}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M21.7 6.53c.01.02.01.05.01.08v4.29c0 .1-.06.22-.15.27l-3.61 2.08v4.11c0 .11-.05.21-.15.27l-7.52 4.33c-.02.01-.04.04-.06.04H10s0-.03-.04-.04l-7.52-4.33a.315.315 0 0 1-.15-.27V4.5c0-.05 0-.08.01-.1c0-.01.01-.02.01-.03c0-.02.01-.03.02-.05c0-.01.01-.02.02-.03l.03-.03l.03-.03c.01-.01.02-.02.03-.02L6.2 2.04c.1-.04.22-.04.3 0l3.78 2.17c.01.01.02.01.03.02l.03.03l.03.03c.01.01.02.02.02.03c.01.02.02.03.02.05c0 .01.01.02.01.03c.01.03.01.05.01.1v8l3.14-1.78V6.61c0-.03 0-.06.01-.08l.01-.03s.01-.03.02-.05c0-.01.01-.02.02-.03l.03-.03l.03-.03c.01-.01.02-.02.03-.02l3.78-2.17c.08-.06.2-.06.3 0l3.76 2.17c.01 0 .02.01.03.02l.03.03l.03.03c.01.01.01.02.02.03c.01.02.01.05.02.05s.01 0 .01.03m-.61 4.19V7.15l-3.14 1.8v3.55l3.14-1.78m-3.76 6.46V13.6l-6.9 3.94v3.61l6.9-3.97M2.91 5v12.18l6.9 3.97v-3.61l-3.6-2.04H6.2c-.01 0-.02 0-.03-.03c-.01 0-.02-.01-.03-.02l-.03-.03c-.01-.01-.01-.02-.02-.03c-.01-.02-.01-.03-.02-.04c0-.02-.01-.03-.01-.04c-.01-.01-.01-.03-.01-.04V6.82L2.91 5m3.45-2.32L3.23 4.5l3.13 1.78L9.5 4.5L6.36 2.68m3.45 10.2V5L6.67 6.82v7.87l3.14-1.81m7.83-8.08L14.5 6.61l3.14 1.8l3.13-1.8l-3.13-1.81m-.31 4.15l-3.14-1.8v3.57l3.14 1.78V8.95M10.12 17L17 13.06l-3.12-1.8L7 15.23L10.12 17Z"></path>
    </svg>
);

const PROJECTS = [
    {
        icone: Laravel.bind(null, {size: 24}),
        title: "Project SAÉ S5",
        description: "Description of project SAÉ S5",
        url: "/projects/saeS5",
    },
    {
        icone: GitCompareArrows,
        title: "Project SAÉ S3",
        description: "Description of project SAÉ S3",
        url: "/projects/saeS3",
    },
    {
        icone: NextjsIcon.bind(null, {size: 24}),
        title: "My portfolio in Nextjs, React, Tailwind CSS",
        description: "Description of project portfolioNextjs",
        url: "/projects/portfolioNextjs",
    },
];

type ProjectProps = {
    icone: React.ComponentType<{ size?: number }>, // Adjusted to allow size prop
    title: string,
    description: string,
    url: string,
};

const Project = (props: ProjectProps) => {
    return (
        <TransitionLink href={props.url} className={cn('p-2 inline-flex gap-4 items-center hover:bg-accent/30 rounded-sm')}>
            <span className="bg-accent p-4 rounded-sm">
                <props.icone />
            </span>
            <div>
                <h3 className="test-lg text-accent-foreground">{props.title}</h3>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </TransitionLink>
    );
}; 

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col gap-4 items-start">
            <div className="flex-[3] h-full">
            <Card className="p-4">
                <p className="pb-1">The beginning of the list of my projects</p>
                <div className="flex flex-col gap-2 overflow-y-auto max-h-[50]">
                    <Project {...PROJECTS[0]} />
                    <Project {...PROJECTS[1]} />
                    <Project {...PROJECTS[2]} />
                </div>
            </Card>
            </div>
            <div className="flex-[2] flex flex-col max-md:mx-auto gap-2 h-full">
            <Card className="p-4 flex-1 hover:bg-accent/20">
                <TransitionLink href="/projects">
                    <h3 className="text-lg text-accent-foreground">Projects</h3>
                    <p className="text-sm text-muted-foreground">List of all my projects</p>
                </TransitionLink>
            </Card>
            <Card className="p-4 flex-1 hover:bg-accent/20"><TransitionLink href="/contact">Contact me</TransitionLink></Card>
            {/* <Card className="p-4 flex-1 hover:bg-accent/20"><button onClick={downloadFile}>Download my CV</button></Card> */}
            <Card className="p-4 flex-1 hover:bg-accent/20"><FileDownload /></Card>
            </div>
        </Section>
    );
};