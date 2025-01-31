'use client';

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

/* import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; */
import { Header } from "../../_components/Header";
import { Section } from "../../_components/Section";
import { Spacer } from "../../_components/Spacer";
import { LaravelIcon } from "../../_components/icons/LaravelIcon";
import { Spotlight } from "@/components/ui/spotlight";
import { Code } from "@/app/_components/Hero";
import { WorldMap } from "@/components/ui/world-map";
import { Footer } from "@/app/_components/Footer";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

/* gsap.registerPlugin(ScrollTrigger); */

export default function Home() {

  /* // Références pour le logo et le texte
  const logoRef = useRef(null);
  const textRef = useRef(null);

  // State pour la largeur de la fenêtre
  const [windowWidth, setWindowWidth] = useState(0);
  // State pour la hauteur de la fenêtre
  const [windowHeight, setWindowHeight] = useState(0);

  // State pour savoir si le scroll a été effectué
  const [hasScrolled, setHasScrolled] = useState(false);

  // Mettre à jour la largeur de la fenêtre à chaque redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    handleResize();  // Initialiser la largeur de la fenêtre
    window.addEventListener('resize', handleResize);  // Réécouter les changements de taille

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // On attend que la largeur de la fenêtre soit chargée
    if (windowWidth === 0) return;
    if (windowHeight === 0) return;

    const marginRight = 20; // Marge entre le logo et le bord droit
    const maxX = windowWidth/2 - marginRight - 100; // 100px étant la largeur du logo

    const maxY = windowHeight/2 - 200; // 50px étant la hauteur du logo

    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);  // Marque que le premier scroll a eu lieu
        // Animation du logo au scroll
        gsap.to(logoRef.current, {
          x: maxX,  // Déplace le logo jusqu'au côté droit mais en gardant une marge
          y: maxY,  // Déplace le logo jusqu'en bas mais en gardant une marge
          duration: 1,  // Durée de l'animation
          scrollTrigger: {
            trigger: logoRef.current,  // L'élément à surveiller
            start: "top 80%",  // Quand le haut du logo atteint 80% de la fenêtre
            end: "top 30%",    // Quand le haut du logo atteint 30% de la fenêtre
            scrub: true,  // Animation liée au scroll
            markers: false,  // Afficher les marqueurs (optionnel)
            once: true,  // Ne pas répéter l'animation
          },
        });

        // Animation du texte au scroll
        gsap.to(textRef.current, {
          y: -30,  // Déplace le texte vers le haut de 30px
          duration: 1,
          scrollTrigger: {
            trigger: textRef.current,  // L'élément à surveiller
            start: "top 80%",  // Quand le haut du texte atteint 80% de la fenêtre
            end: "top 30%",    // Quand le haut du texte atteint 30% de la fenêtre
            scrub: true,  // Animation liée au scroll
            markers: false,  // Afficher les marqueurs (optionnel)
            once: true,  // Ne pas répéter l'animation
          },
        });
      } else {
        // À partir du deuxième scroll, commencer la rotation sans changer la position
        gsap.to(logoRef.current, {
          rotation: 360,  // Rotation continue
          duration: 2,  // Durée de la rotation
          repeat: -1,  // La rotation se répète indéfiniment
          ease: "none",  // Pas d'accélération ou de ralentissement
          scrollTrigger: {
            trigger: logoRef.current,  // L'élément à surveiller
            start: "top 30%",  // Quand le haut du logo atteint 80% de la fenêtre
            end: "top 30%",    // Quand le haut du logo atteint 30% de la fenêtre
            scrub: false,  // Animation liée au scroll
            markers: false,  // Afficher les marqueurs (optionnel)
          },
        });
      }
    };

    // Écouter le premier événement de scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Nettoyer l'écouteur
    };

  }, [windowWidth, windowHeight, hasScrolled]); // Recalcule l'animation quand la largeur de la fenêtre change

  return (
    <main>
      <Header />
      <Spacer size="xs" />
      <Section>
            <h2 className="font-caption text-4xl text-center">PROJET DE SAÉ S5</h2>
            <Logo size={200} />
            <h4 className="font-caption text-2xl mb-3">La <Code>SAÉ</Code> est une Situation d&apos;Apprentissage Évalué qui a lieu durant les études de BUT Informatique</h4>
            <p>
                Écrire du <Code><LaravelIcon size={16}></LaravelIcon>code</Code>
            </p>
            <div className="h-[200vh]"></div>
      <div
        ref={logoRef}
        className="fixed top-40 left-1/2 transform -translate-x-1/2 transition-all duration-300"
      >
        <LaravelIcon size={100} />
      </div>
      <Spacer size="xs" />
      <div ref={textRef}>
        <h1>Bienvenue sur ma page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        </p>
      </div>
        </Section>
        <div className="h-[200vh]"></div>
    </main>
  ); */

  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
          <img
            src="https://blog.pwskills.com/wp-content/uploads/2024/02/C-Plus-Plus-Tutorial-01.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center">
          <img
            src="https://blog.pwskills.com/wp-content/uploads/2024/02/C-Plus-Plus-Tutorial-01.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="https://blog.pwskills.com/wp-content/uploads/2024/02/C-Plus-Plus-Tutorial-01.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="https://blog.pwskills.com/wp-content/uploads/2024/02/C-Plus-Plus-Tutorial-01.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "",
      description:
        "",
      content: (
        <div className="h-full w-full flex items-center justify-center">
          
        </div>
      ),
    },
  ];

  const offset = -10;

  const dotsMap = [
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: {
        lat: offset + 45.5031824,
        lng: -73.5698065,
      }, // Montréal
    },
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: { lat: 69.6516345 - offset, lng: 18.9558585 }, // Tromso
    },
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: { lat: offset +3 +  53.2744122, lng: -9.0490601 }, // Galway
    },
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: { lat: offset -2 +  33.7735976, lng: 10.8861888 }, // Djerba
    },
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: { lat: offset*1.5 +  34.0346534, lng: -5.0161926 }, // Fes
    },
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: { lat: offset*1.4 +  39.613432, lng: 2.8829185 }, // Majorque
    },
    {
      start: {
        lat: offset +  43.4813927,
        lng: -1.5149935,
      }, // Anglet
      end: { lat: offset*1.4 +  39.9492572, lng: 4.0499642 }, // Minorque
    },
  ];

  return (
    <main>
      <Header />
      <Spacer size="xs" />
      <Section>
        <Spotlight
          className="-top-[20vh] left-1/4"
          fill="white"
        />
            <h2 className="font-caption text-4xl font-bold mt-[20vh] text-center">PROJET DE SAÉ S5</h2>
            <h4 className="font-caption text-2xl mb-3">La <Code>SAÉ</Code> est une Situation d&apos;Apprentissage Évalué qui a lieu durant les études de BUT Informatique</h4>
            <p>
                Écrire du <Code><LaravelIcon size={16}></LaravelIcon>code</Code>
            </p>
        </Section>
      <Spacer />
      <StickyScroll content={content} />
      <Spacer />
      <WorldMap
        dots={dotsMap}
      />
      <Spacer />
      <Section>
      <DirectionAwareHover imageUrl={"https://www.flightgift.com/media/wp/FG/2024/02/tromso-1024x768.jpeg"}>
        <p className="font-bold text-xl">Tromso, Norway</p>
        <p className="font-normal text-sm">lat: 69.6516345, lng: 18.9558585</p>
      </DirectionAwareHover>
      </Section>
      <Spacer size="xs" />
      <Footer />
    </main>
  );
}
