'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from "../../_components/Header";
import { Section } from "../../_components/Section";
import { Spacer } from "../../_components/Spacer";
import { LaravelIcon } from "../../_components/icons/LaravelIcon";

gsap.registerPlugin(ScrollTrigger);

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

    const maxY = windowHeight/2 - 50; // 50px étant la hauteur du logo

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
            once: true,  // Ne pas répéter l'animation
          },
        });
      }
    };

    // Écouter le premier événement de scroll
    window.addEventListener('scroll', handleScroll, { once: true });

    return () => {
      window.removeEventListener('scroll', handleScroll); // Nettoyer l'écouteur
    };

  }, [windowWidth, windowHeight, hasScrolled]); // Recalcule l'animation quand la largeur de la fenêtre change */

  // Références pour le logo et le texte
  const logoRef = useRef(null);
  const textRef = useRef(null);

  // State pour gérer le premier scroll
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasScrolled) return; // Si déjà scrolé une fois, on ne fait rien
      setHasScrolled(true); // Marque que le premier scroll a eu lieu

      const logo = logoRef.current;
      const text = textRef.current;

      // Animation du logo
      logo.classList.add('animate-logo');

      // Animation du texte
      if (text) {
        text.classList.add('animate-text');
      }

      // Animation du logo qui tourne en continu après le premier scroll
      const rotationInterval = setInterval(() => {
        if (logo) {
          logo.style.transform = `rotate(${parseInt(logo.style.transform.replace('rotate(', '').replace('deg)', ''), 10) + 1}deg)`;
        }
      }, 10);

      // Nettoyer l'intervalle lorsque la page défile plus loin
      return () => {
        clearInterval(rotationInterval);
      };
    };

    window.addEventListener('scroll', handleScroll, { once: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return (
    <main>
      <Header />
      <Spacer size="xs" />
      <Section>
            <h2 className="font-caption text-4xl text-center">PROJET DE SAÉ S5</h2>
            {/* <Logo size={200} />
            <h4 className="font-caption text-2xl mb-3">La <Code>SAÉ</Code> est une Situation d&apos;Apprentissage Évalué qui a lieu durant les études de BUT Informatique</h4>
            <p>
                Écrire du <Code><LaravelIcon size={16}></LaravelIcon>code</Code>
            </p>
            <div className="h-[200vh]"></div> */}
      <div
        ref={logoRef}
        className="absolute top-40 left-1/2 transform -translate-x-1/2 transition-all duration-300"
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
  );
}
