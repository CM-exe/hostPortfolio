import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Status } from "./_components/Status";
import { Spacer } from "./_components/Spacer";

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
