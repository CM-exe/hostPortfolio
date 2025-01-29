import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TransitionLink } from "./TransitionLink";
import { Spacer } from "./Spacer";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { House } from "lucide-react";

export const Footer = () => {
    const me = [
        {
          id: 1,
          name: "Clément MOURGUE",
          designation: "Student at IUT de Bayonne et du Pays Basque",
          image:
            "https://media.licdn.com/dms/image/v2/D4E03AQH1ArIG4OXIpA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1716294577534?e=2147483647&v=beta&t=fJgMDg3JRZtnfAA5YaNTPNcCSFHwhXILlGj3QpIvqok",
        }
      ];
    return(
        <>
        <Spacer size="xs" />
        <footer className="bg-gradient-to-b from-accent to-accent-10 my-14 text-accent-foreground py-4 px-40">
            <Spacer size="xs" />  
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold font-caption">Portfolio de Clément MOURGUE</h2>
                    <p className="text-accent-foreground">© 2025 Clément MOURGUE</p>
                </div>
                <AnimatedTooltip items={me} />
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                        <HoverBorderGradient
                        className="bg-background text-accent-foreground flex items-center" /* hover:bg-accent */
                        >
                            <TransitionLink href="/">
                                Home
                            </TransitionLink>
                        </HoverBorderGradient>
                        </li>
                        <li>
                        <HoverBorderGradient
                        className="bg-background text-accent-foreground flex items-center"
                        >
                            <TransitionLink href="/about">
                                About
                            </TransitionLink>
                        </HoverBorderGradient>
                        </li>
                        <li>
                        <HoverBorderGradient
                        className="bg-background text-accent-foreground flex items-center"
                        >
                            <TransitionLink href="/projects">
                                Projects
                            </TransitionLink>
                        </HoverBorderGradient>
                        </li>
                        <li>
                        <HoverBorderGradient
                        className="bg-background text-accent-foreground flex items-center"
                        >
                            <TransitionLink href="/contact">
                                Contact
                            </TransitionLink>
                        </HoverBorderGradient>
                        </li>
                    </ul>
                </nav>
            </div>
            <Spacer size="xs" />  
        </footer>
        </>
    );
};