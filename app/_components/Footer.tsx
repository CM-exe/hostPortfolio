import Link from "next/link";

export const Footer = () => {
    return(
        <footer className="bg-gradient-to-b from-accent to-accent-10 text-accent-foreground py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold font-caption">Portfolio de Clément MOURGUE</h2>
                    <p className="text-accent-foreground">© 2025 Clément MOURGUE</p>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>         
        </footer>
    );
};