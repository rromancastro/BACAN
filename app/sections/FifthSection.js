"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const FifthSection = () => {
    const [mostrarImagen, setMostrarImagen] = useState(1);

    //logica autoplay 
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setInterval(() => {
            setMostrarImagen(prev => (prev >= 5 ? 1 : prev + 1));
        }, 800);
    }, [])

    return (
        <section id="fifthSection">
            <div style={{backgroundColor: 'transparent'}} id="fifthSectionCard">
                {width >= 500 ? <h2 id="fifthSectionH2">¿DONDE<br />CONSIGO MI<br />BACAN?</h2> : <h2 id="fifthSectionH2">¿DONDE CONSIGO<br />MI BACAN?</h2>}
                <a id="fifthSectionA" href="#">Quiero mi mazo</a>
                <Image className="fifthSectionImage" src={`/fifthSection/banner1${width <= 500 ? 'mobile' : ''}.png`} alt="Imagen 1" width={1184} height={526} style={{opacity: '1'}}/>
                <Image className="fifthSectionImage" src={`/fifthSection/banner2${width <= 500 ? 'mobile' : ''}.png`} alt="Imagen 2" width={1184} height={526} style={{opacity: mostrarImagen === 2 ? '1' : '0'}}/>
                <Image className="fifthSectionImage" src={`/fifthSection/banner3${width <= 500 ? 'mobile' : ''}.png`} alt="Imagen 3" width={1184} height={526} style={{opacity: mostrarImagen === 3 ? '1' : '0'}}/>
                <Image className="fifthSectionImage" src={`/fifthSection/banner4${width <= 500 ? 'mobile' : ''}.png`} alt="Imagen 4" width={1184} height={526} style={{opacity: mostrarImagen === 4 ? '1' : '0'}}/>
                <Image className="fifthSectionImage" src={`/fifthSection/banner5${width <= 500 ? 'mobile' : ''}.png`} alt="Imagen 5" width={1184} height={526} style={{opacity: mostrarImagen === 5 ? '1' : '0'}}/>
            </div>
        </section>
    )
}
