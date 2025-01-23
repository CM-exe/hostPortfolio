import { Card } from "@/components/ui/card";
import { Section } from "./Section"
import { Code, Disc3, GitCompareArrows, LucideIcon } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        logo: Disc3,
        title: "Project 1",
        description: "Description of project 1",
        url: "https://example.com",
    },
    {
        logo: Code,
        title: "Project 2",
        description: "Description of project 2",
        url: "https://example.com",
    },
    {
        logo: GitCompareArrows,
        title: "Project 3",
        description: "Description of project 3",
        url: "https://example.com",
    },
];

type ProjectProps = {
    logo: LucideIcon,
    title: string,
    description: string,
    url: string,
};

const Project = (props: ProjectProps) => {
    return (
        <Link href={props.url} className="p-2 inline-flex gap-4 items-center hover:bg-accent/10 rounded-sm">
            <span className="bg-accent p-4 rounded-sm">
                <props.logo />
            </span>
            <div>
                <h3 className="test-lg text-accent-foreground">{props.title}</h3>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
}; 

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col gap-4 items-start">
            <div className="flex-[3] h-full">
            <Card className="p-4">
                <p className="pb-1">Project structure</p>
                <div className="flex flex-col gap-2">
                    <Project {...PROJECTS[0]} />
                    <Project {...PROJECTS[1]} />
                    <Project {...PROJECTS[2]} />
                </div>
            </Card>
            </div>
            <div className="flex-[2] flex flex-col gap-2 h-full">
            <Card className="p-4 flex-1">Something</Card>
            <Card className="p-4 flex-1">Contact me</Card>
            </div>
        </Section>
    );
};