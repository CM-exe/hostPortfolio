"use client";
import { Header } from "../_components/Header";
import { Status } from "../_components/Status";
import { Spacer } from "../_components/Spacer";
import Head from 'next/head';
import { Footer } from "../_components/Footer";
import { Section } from "../_components/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AtSign, MessageSquare, Send, UserRound } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
    async function handleSendEmail(e: any) {
        e.preventDefault();
        console.log(e.target.name.value);        
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "26c0c28d-4bab-4891-b8cc-58cef74421cd" /* "b4c064c2-d7c9-4837-87fa-a52fba4fd506" */ /* process.env.WEB3FORMS_ACCESS_KEY */,
                subject: "[PORTFOLIO - CONTACT]" + " " + e.target.subject.value,
                from_name: "Mon portfolio",
                name: e.target.name.value + " " + e.target.firstName.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            e.target.reset();
            document.getElementById("sendButton")?.insertAdjacentHTML("afterend",'<p id="successMsg" class="bg-green-700 inline-flex gap-2 text-black font-mono ml-10 rounded-md px-5 my-auto py-auto text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-check"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m16 19 2 2 4-4"/></svg> Message sent successfully!</p>');
            setTimeout(() => {
                document.getElementById("successMsg")?.remove();
            }, 5000);
        } else {
            document.getElementById("sendButton")?.insertAdjacentHTML("afterend",'<p id="errorMsg" class="bg-red-700 inline-flex gap-2 text-white font-mono ml-10 rounded-md px-5 my-auto py-auto text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-x"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m17 17 4 4"/><path d="m21 17-4 4"/></svg> Error while sending message. Please try again later...</p>');
            setTimeout(() => {
                document.getElementById("errorMsg")?.remove();
            }, 5000);
        }
    }

    return (
    <main>
        <Head>
            <title>Clément MOURGUE - Porftolio - Contact</title>
            <meta name="description" content="The page for contacting me from my portfolio" />
        </Head>
        <Header />
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-accent-foreground text-center md:text-4xl lg:text-7xl font-sans pt-2 pb-1 md:pt-5 md:pb-3 relative z-20 font-bold tracking-tight">
                Form for contacting me
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-lg text-center">
                If you have any questions or if you want to contact me, you can fill out this form.<br/>
                Have a happy day!                
            </p>
            <Spacer />
            <Section className="z-20 mt-0">
                <form onSubmit={handleSendEmail}>
                    <div className="flex gap-5">
                    <UserRound size={24} className="my-auto" />
                    <Card className="flex p-4 flex-1">
                    <label htmlFor="name" className="my-auto mr-5 w-full">Name</label>
                    <input type="text" name="name" placeholder="Your name" className="flex-1 bg-background text-accent-foreground active:bg-background/20 active:text-accent-foreground focus:bg-background/20 focus:text-accent-foreground" required />
                    </Card>
                    <Card className="flex p-4 flex-2">
                    <label htmlFor="firstName" className="my-auto mr-5 w-full">First name</label>
                    <input type="text" name="firstName" placeholder="Your first name" className="flex-1 bg-background text-accent-foreground active:bg-background/20 active:text-accent-foreground focus:bg-background/20 focus:text-accent-foreground" required />
                    </Card>
                    </div>
                    <Spacer size="xs" />
                    <Card className="flex p-4 flex-1">
                    <label htmlFor="subject" className="my-auto mr-5">Subject</label>
                    <input type="text" name="subject" placeholder="Subject" className="flex-1 bg-background text-accent-foreground active:bg-background/20 active:text-accent-foreground focus:bg-background/20 focus:text-accent-foreground" required />
                    </Card>
                    <Spacer size="xs" />
                    <Card className="flex p-4 flex-1">
                    <label htmlFor="email" className="my-auto mr-5 flex"><AtSign size={20} className="mr-3" />Email</label>
                    <input type="email" name="email" placeholder="Your email" className="flex-1 bg-background text-accent-foreground active:bg-background/20 active:text-accent-foreground focus:bg-background/20 focus:text-accent-foreground" required />
                    </Card>
                    <Spacer size="xs" />
                    <Card className="flex p-4 flex-1">
                    <label htmlFor="message" className="my-auto mr-5"><MessageSquare size={20} className="mx-auto" /> Message</label>
                    <textarea name="message" placeholder="Your message" className="flex-1 bg-background text-accent-foreground active:bg-background/20 active:text-accent-foreground focus:bg-background/20 focus:text-accent-foreground" required />
                    </Card>
                    <Spacer size="xs" />
                    <div className="inline-flex">
                    <Button type="submit" id="sendButton"><Send size={24} /> Send</Button>
                    </div>
                </form>
            </Section>
        </BackgroundLines>
        <Footer />
    </main>
    );
};