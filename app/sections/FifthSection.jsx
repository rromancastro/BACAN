"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const FifthSection = () => {
    const [mostrarImagen, setMostrarImagen] = useState(1);
    const intervalRef = useRef(null);

    const handleMouseEnter = () => {
        if (!intervalRef.current) {
         intervalRef.current = setInterval(() => {
            setMostrarImagen(prev => (prev >= 5 ? 1 : prev + 1));
        }, 800);
        }
    };

    const handleMouseLeave = () => {
        if (width > 835) {
            if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            }
        }
    };

    //logica autoplay 
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (width <= 835) {
            handleMouseEnter();
        }
    }, [width])

    return (
        <section id="fifthSection">
            <div onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor: 'transparent'}} id="fifthSectionCard">
                <h2 id="fifthSectionH2">¿DONDE<br />CONSIGO MI<br />BACAN?</h2>
                <a id="fifthSectionA" href="#">Quiero mi mazo</a>
                {
                    mostrarImagen === 1 ? <Image className="fifthSectionImage" src={"/fifthSection/banner1.png"} alt="Imagen 1" width={1184} height={526} /> :
                    mostrarImagen === 2 ? <Image className="fifthSectionImage" src={"/fifthSection/banner2.png"} alt="Imagen 2" width={1184} height={526} /> :
                    mostrarImagen === 3 ? <Image className="fifthSectionImage" src={"/fifthSection/banner3.png"} alt="Imagen 3" width={1184} height={526} /> :
                    mostrarImagen === 4 ? <Image className="fifthSectionImage" src={"/fifthSection/banner4.png"} alt="Imagen 4" width={1184} height={526} /> :
                    mostrarImagen === 5 ? <Image className="fifthSectionImage" src={"/fifthSection/banner5.png"} alt="Imagen 5" width={1184} height={526} /> : null
                }
            </div>
        </section>
    )
}