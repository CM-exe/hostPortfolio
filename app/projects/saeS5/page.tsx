import { Header } from "../../_components/Header";
import { Code } from "../../_components/Hero";
import { Section } from "../../_components/Section";
import { Spacer } from "../../_components/Spacer";
import { LaravelIcon } from "../../_components/icons/LaravelIcon";
import { Metadata } from 'next';
import { Logo } from "../_components/Logo";
 
export const metadata: Metadata = {
  title: 'Clément MOURGUE - Projects - SAÉ S5',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Spacer size="xs" />
      <Section>
            <h2 className="font-caption text-4xl text-center">PROJET DE SAÉ S5</h2>
            <h4 className="font-caption text-2xl mb-3">La <Code>SAÉ</Code> est une Situation d&apos;Apprentissage Évalué qui a lieu durant les études de BUT Informatique</h4>
            <p>
                Écrire du <Code><LaravelIcon size={16}></LaravelIcon>code</Code>
            </p>
            <Logo src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png" size="w-20 h-20"  />
            <div className="h-[200vh]"></div> {/* Pour permettre le scroll */}
        </Section>
    </main>
  );
}
