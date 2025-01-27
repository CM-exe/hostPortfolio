import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Status } from "./_components/Status";
import { Spacer } from "./_components/Spacer";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacer size="xs" />
      <Hero />
      <Spacer/>
      <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-accent-foreground">
              Bienvenue sur mon <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                portfolio
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`https://static.vecteezy.com/system/resources/previews/006/852/804/original/abstract-blue-background-simple-design-for-your-website-free-vector.jpg`}
          alt="hero"
          height={1920}
          width={1152}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
      <Spacer/>
      <Status />
    </main>
  );
}
