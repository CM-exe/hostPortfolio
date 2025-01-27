import { Header } from "../_components/Header";
import { Hero } from "../_components/Hero";
import { Status } from "../_components/Status";
import { Spacer } from "../_components/Spacer";
import { Metadata } from 'next';
import { Footer } from "../_components/Footer";
 
export const metadata: Metadata = {
  title: 'Clément MOURGUE - Porftolio - Projects',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Spacer size="xs" />
      <Hero />
      <Spacer/>
      <Status />
      <Footer />
    </main>
  );
}
