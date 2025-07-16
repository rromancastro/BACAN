"use client";
import Image from "next/image"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const SixthSection = () => {

    const [animCards, setAnimCards] = useState(false);

    //logica se abren solas en scroll
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { ref, inView } = useInView({
        threshold: .7, 
    });

    useEffect(() => {
        if (inView && width <= 835) {
            setAnimCards(true);
        } else {
            setAnimCards(false);
        }
    }, [inView])

    return (
        <section ref={ref} id="sixthSection">
            <h2 id="sixthSectionH2">LAS REGLAS</h2>
            <div onMouseOver={() => setAnimCards(true)} onMouseLeave={() => setAnimCards(false)} id="sixthSectionImagesContainer">
                <Image style={{zIndex: 7}} className="sixthSectionImageFirst" src="/sixthSection/1.png" alt="Sixth Section Image" width={500} height={500} />
                <Image style={{transition: '1s', zIndex: 1, top: animCards ? '20px' : '10px', transform: !animCards ? '' : 'translateX(-140px) rotate(-15deg)'}} className="sixthSectionImage" src="/sixthSection/2.png" alt="Sixth Section Image" width={500} height={500} />
                <Image style={{transition: '1s', zIndex: 2, top: animCards ? '20px' : '10px', transform: !animCards ? '' : 'translateX(140px) rotate(15deg)'}} className="sixthSectionImage" src="/sixthSection/3.png" alt="Sixth Section Image" width={500} height={500} />
                <Image style={{transition: '1s', zIndex: 3, top: animCards ? '40px' : '10px', transform: !animCards ? '' : 'translateX(-200px) rotate(-30deg)'}} className="sixthSectionImage" src="/sixthSection/4.png" alt="Sixth Section Image" width={500} height={500} />
                <Image style={{transition: '1s', zIndex: 4, top: animCards ? '40px' : '10px', transform: !animCards ? '' : 'translateX(200px) rotate(30deg)'}} className="sixthSectionImage" src="/sixthSection/5.png" alt="Sixth Section Image" width={500} height={500} />
                <Image style={{transition: '1s', zIndex: 5, top: animCards ? '60px' : '10px', transform: !animCards ? '' : 'translateX(-250px) rotate(-45deg)'}} className="sixthSectionImage" src="/sixthSection/6.png" alt="Sixth Section Image" width={500} height={500} />
                <Image style={{transition: '1s', zIndex: 6, top: animCards ? '60px' : '10px', transform: !animCards ? '' : 'translateX(250px) rotate(45deg)'}} className="sixthSectionImage" src="/sixthSection/7.png" alt="Sixth Section Image" width={500} height={500} />
            </div>
            <p id="sixthSectionP">Este documento fue realizado para quitar<br />dudas y terminar de clarificar los términos<br />de juego. Básicamente para que tus<br />amigos no hagan trampas.</p>
            <a id="navUtilitiesButton" href="#">
                  <p id="navUtilitiesButtonText">Descargar</p>
            </a>
        </section>
    )
}