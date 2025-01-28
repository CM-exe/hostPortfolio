"use client";
import { Header } from "../_components/Header";
import { Status } from "../_components/Status";
import { Spacer } from "../_components/Spacer";
import Head from 'next/head';
import { Footer } from "../_components/Footer";
import { Section } from "../_components/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
    async function handleSendEmail(e: any) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "b4c064c2-d7c9-4837-87fa-a52fba4fd506" /* process.env.WEB3FORMS_ACCESS_KEY */,
                subject: "New submission from portfolio",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            e.target.reset();
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message. Please try again later.");
        }
    }

    return (
    <main>
        <Head>
            <title>Clément MOURGUE - Porftolio - Contact</title>
            <meta name="description" content="The page for contacting me from my portfolio" />
        </Head>
        <Header />
        <Spacer size="xs" />
        <Section>
            <form onSubmit={handleSendEmail}>
                <Card className="p-4 flex-1">
                <label htmlFor="name" className="my-auto mr-5">Name</label>
                <input type="text" name="name" placeholder="Your name" className="bg-background text-accent-foreground active:bg-background/20 active:text-accent-foreground focus:bg-background/20 focus:text-accent-foreground" required />
                </Card>
                <Spacer size="xs" />
                <Card className="p-4 flex-1">
                <label htmlFor="email" className="my-auto mr-5">Email</label>
                <input type="email" name="email" placeholder="Your email" className="bg-background text-accent-foreground active:bg-background/20 active:text-accent-foreground focus:bg-background/20 focus:text-accent-foreground" required />
                </Card>
                <Spacer size="xs" />
                <Card className="p-4 flex-1">
                <label htmlFor="message" className="my-auto mr-5">Message</label>
                <textarea name="message" placeholder="Your message" className="bg-background text-accent-foreground active:bg-background/20 active:text-accent-foreground focus:bg-background/20 focus:text-accent-foreground" required />
                </Card>
                <Spacer size="xs" />
                <Button type="submit">Send</Button>
            </form>
        </Section>
        <Spacer/>
        <Status />
        <Spacer size="xs" />
        <Footer />
    </main>
    );
};