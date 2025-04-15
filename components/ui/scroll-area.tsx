import { useEffect } from "react";

export const ScrollArea = () => {

    useEffect(() => {
        rotateCards();
        const stackArea = document.getElementById("stackArea");
        const cards = document.querySelectorAll(".card-to-move");        
        window.addEventListener("scroll", () => {
            const distance = window.innerHeight /2;
            const topVal = stackArea?.getBoundingClientRect().top;
            let index = topVal ? -1 * (topVal/distance + 1) : 0;
            index = Math.floor(index);
            cards.forEach((card, i) => {
                if(i <= index) {
                    (card as HTMLElement).classList.add("away");
                }
                else {
                    (card as HTMLElement).classList.remove("away");
                }
            });
            rotateCards();
        });
    }, []);
    return (
        <div className="w-full h-[300vh] bg-muted">
       <div id="stackArea" className="w-full h-screen flex bg-background sticky top-0">
            <div className="basis-1/2 h-screen">
                <div className="w-full h-full text-center pt-[45%]">
                    <h1 className="text-4xl font-bold">Here at the steps <br/> for making my Portfolio</h1>
                </div>
            </div>
            <div className="basis-1/2 h-screen relative">
                <div className="card-to-move h-[350px] w-[350px] transition-[0.7s_ease-in-out] absolute top-[calc(50%-175px)] left-[calc(50%-175px)] bg-blue-600 rounded-3xl p-10">
                    <div className="m-auto w-fit h-fit text-justify text-accent-foreground">
                        <h3 className="text-2xl font-bold mb-4">Laravel</h3>
                        <p>Laravel is a popular PHP framework known for its elegant syntax and powerful features. It provides a robust set of tools and libraries for building web applications.</p>
                        <a href="https://laravel.com" className="text-blue-300 hover:text-blue-200">Learn more</a>
                    </div>
                </div>
                <div className="card-to-move h-[350px] w-[350px] transition-[0.7s_ease-in-out] absolute top-[calc(50%-175px)] left-[calc(50%-175px)] bg-red-600 rounded-3xl p-10">
                    <div className="m-auto w-fit h-fit text-justify text-accent-foreground">
                        <h3 className="text-2xl font-bold mb-4">React</h3>
                        <p>React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update and render them based on changes in data.</p>
                        <a href="https://reactjs.org" className="text-red-300 hover:text-red-200">Learn more</a>
                    </div>
                </div>
                <div className="card-to-move h-[350px] w-[350px] transition-[0.7s_ease-in-out] absolute top-[calc(50%-175px)] left-[calc(50%-175px)] bg-yellow-600 rounded-3xl p-10">
                    <div className="m-auto w-fit h-fit text-justify text-accent-foreground">
                        <h3 className="text-2xl font-bold mb-4">Tailwind CSS</h3>
                        <p>Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. It provides a wide range of pre-built classes that you can use to style your components.</p>
                        <a href="https://tailwindcss.com" className="text-yellow-300 hover:text-yellow-200">Learn more</a>
                    </div>
                </div>
                <div className="card-to-move h-[350px] w-[350px] transition-[0.7s_ease-in-out] absolute top-[calc(50%-175px)] left-[calc(50%-175px)] bg-purple-600 rounded-3xl p-10">
                    <div className="m-auto w-fit h-fit text-justify text-accent-foreground">
                        <h3 className="text-2xl font-bold mb-4">Funny things</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, nesciunt sint laudantium perspiciatis aspernatur ea voluptas delectus harum eveniet nisi veritatis quisquam repudiandae! Nihil, libero? At, maxime dolorem. Accusamus, ad!</p>
                        <a href="https://laravel.com" className="text-purple-300 hover:text-purple-200">Learn more</a>
                    </div>
                </div>
            </div>
       </div>
       </div>
    );
};

function rotateCards() {
    let angle = 0;
    const cards = document.querySelectorAll(".card-to-move");    
    cards.forEach((card, index) => {
        if((card as HTMLElement).classList.contains("away")) {
            (card as HTMLElement).style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
        (card as HTMLElement).style.transform = `rotate(${angle}deg)`;
        angle = angle - 10;
        (card as HTMLElement).style.zIndex = String(cards.length - index);
        }
    });
    
}