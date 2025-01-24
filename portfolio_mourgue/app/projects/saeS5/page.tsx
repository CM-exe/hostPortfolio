import Image from "next/image";
import { Header } from "../../_components/Header";
import { Hero } from "../../_components/Hero";
import { Status } from "../../_components/Status";
import { Spacer } from "../../_components/Spacer";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Clément MOURGUE - Projects - SAÉ S5',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Spacer size="xs" />
      <Hero />
      <Spacer/>
      <Status />
    </main>
  );
}
