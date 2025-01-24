import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const animatePageIn = () => {
    const bannerUne = document.getElementById('banner-1');
    const bannerDeux = document.getElementById('banner-2');
    const bannerTrois = document.getElementById('banner-3');
    const bannerQuatre = document.getElementById('banner-4');
    const bannerCinq = document.getElementById('banner-5');

    if (bannerUne && bannerDeux && bannerTrois && bannerQuatre && bannerCinq){
        const tl = gsap.timeline();

        tl.set([bannerUne, bannerDeux, bannerTrois, bannerQuatre, bannerCinq], {
            yPercent:0
        }).to([bannerUne, bannerDeux, bannerTrois, bannerQuatre, bannerCinq], {
            yPercent: 100,
            stagger: 0.2,
            duration: 0.2,
        });
    }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
    const bannerUne = document.getElementById('banner-1');
    const bannerDeux = document.getElementById('banner-2');
    const bannerTrois = document.getElementById('banner-3');
    const bannerQuatre = document.getElementById('banner-4');
    const bannerCinq = document.getElementById('banner-5');

    if (bannerUne && bannerDeux && bannerTrois && bannerQuatre && bannerCinq){
        const tl = gsap.timeline();

        tl.set([bannerUne, bannerDeux, bannerTrois, bannerQuatre, bannerCinq], {
            yPercent:-100
        }).to([bannerUne, bannerDeux, bannerTrois, bannerQuatre, bannerCinq], {
            yPercent: 0,
            stagger: 0.2,
            duration: 0.2,
            onComplete: () => {
                router.push(href);
            },
        });
    }
}