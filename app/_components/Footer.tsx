import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TransitionLink } from "./TransitionLink";
import { Spacer } from "./Spacer";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import pp from "../../public/pp.jpg";

export const Footer = () => {
    const me = [
        {
          id: 1,
          name: "Clément MOURGUE",
          designation: "Student at IUT de Bayonne et du Pays Basque",
          image:
            pp,
        }
      ];
    return(
        <>
        <Spacer size="xs" />
        <footer className="bg-gradient-to-b from-accent to-accent-10 my-14 text-accent-foreground py-4 px-4 md:px-40">
            <Spacer size="xs" />  
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h2 className="md:text-xl text-sm font-bold font-caption">Portfolio of Clément MOURGUE</h2>
                    <p className="md:text-base text-xs text-accent-foreground">© 2025 Clément MOURGUE</p>
                </div>
                <AnimatedTooltip items={me} />
                <nav className="invisible md:visible">
                    <ul className="flex space-x-4">
                        <li>
                        <HoverBorderGradient
                        className="bg-accent text-accent-foreground flex items-center" /* hover:bg-accent */
                        >
                            <TransitionLink href="/">
                                Home
                            </TransitionLink>
                        </HoverBorderGradient>
                        </li>
                        <li>
                        <HoverBorderGradient
                        className="bg-accent text-accent-foreground flex items-center"
                        >
                            <TransitionLink href="/about">
                                About
                            </TransitionLink>
                        </HoverBorderGradient>
                        </li>
                        <li>
                        <HoverBorderGradient
                        className="bg-accent text-accent-foreground flex items-center"
                        >
                            <TransitionLink href="/projects">
                                Projects
                            </TransitionLink>
                        </HoverBorderGradient>
                        </li>
                        <li>
                        <HoverBorderGradient
                        className="bg-accent text-accent-foreground flex items-center"
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