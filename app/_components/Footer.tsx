import { TransitionLink } from "./TransitionLink";

export const Footer = () => {
    return(
        <footer className="bg-gradient-to-b from-accent to-accent-10 my-14 text-accent-foreground py-4 px-40">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold font-caption">Portfolio de Clément MOURGUE</h2>
                    <p className="text-accent-foreground">© 2025 Clément MOURGUE</p>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <TransitionLink href="/">
                                Home
                            </TransitionLink>
                        </li>
                        <li>
                            <TransitionLink href="/about">
                                About
                            </TransitionLink>
                        </li>
                        <li>
                            <TransitionLink href="/contact">
                                Contact
                            </TransitionLink>
                        </li>
                    </ul>
                </nav>
            </div>         
        </footer>
    );
};