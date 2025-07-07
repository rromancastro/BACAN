"use client"
import Image from "next/image";
import { useRef, useState } from "react";

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
        if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        }
    };

    

    return (
        <section id="fifthSection">
            <div onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor: mostrarImagen === 1 ? '#F8CD78' : mostrarImagen === 2 ? '#A5D173' : mostrarImagen === 3 ? '#7ABDEC' : mostrarImagen === 4 ? '#EF91CD' : mostrarImagen === 5 ? '#FF8283' : '#FFFFFF'}} id="fifthSectionCard">
                <h2 id="fifthSectionH2">¿DONDE<br />CONSIGO MI<br />BACAN?</h2>
                <a id="fifthSectionA" href="#">Quiero mi mazo</a>
                {
                    mostrarImagen === 1 ? <Image className="fifthSectionImage" src={"/fifthSection/1.png"} alt="Imagen 1" width={1000} height={1000} /> :
                    mostrarImagen === 2 ? <Image className="fifthSectionImage" src={"/fifthSection/2.png"} alt="Imagen 2" width={1000} height={1000} /> :
                    mostrarImagen === 3 ? <Image className="fifthSectionImage" src={"/fifthSection/3.png"} alt="Imagen 3" width={1000} height={1000} /> :
                    mostrarImagen === 4 ? <Image className="fifthSectionImage" src={"/fifthSection/4.png"} alt="Imagen 4" width={1000} height={1000} /> :
                    mostrarImagen === 5 ? <Image className="fifthSectionImage" src={"/fifthSection/5.png"} alt="Imagen 5" width={1000} height={1000} /> : null
                }
            </div>
        </section>
    )
}