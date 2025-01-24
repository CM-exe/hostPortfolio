'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export const Logo = (props: { src ?: string, size ?: string }) => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;

    gsap.to(logo, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      x: window.innerWidth / 2 - 50, // Déplacer sur le côté
      rotation: 360 // Tourner sur lui-même
    });

    gsap.to(logo, {
      scrollTrigger: {
        trigger: document.body,
        start: "bottom top",
        end: "bottom bottom",
        scrub: true
      },
      x: 0, // Revenir au centre
      rotation: 0 // Arrêter de tourner
    });
  }, []);

  return (
    <Image
      ref={logoRef}
      src={props.src || "/logo.svg"}
      alt={props.src || "/logo.svg"}
      className='fixed top-5 left-1/2 transform -translate-x-1/2 ${props.size || "w-16" }'
    />
  );
};

export default Logo;