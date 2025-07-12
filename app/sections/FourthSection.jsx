"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export const FourthSection = () => {

    // porcentaje de scroll
    
    
      const [scrollPercentage, setScrollPercentage] = useState(0);
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY; // Lo que se ha scrolleado
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = (scrollTop / docHeight) * 100;
          setScrollPercentage(scrolled);
        };
    
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      useEffect(() => {
        console.log(scrollPercentage);
      }, [scrollPercentage])
    
    //logica color de fondo inview
    const { ref, inView } = useInView({
        threshold: .7, 
        triggerOnce: true,
    });

    //logica animaciones cards

    const [posicionarCard, setPosicionarCard] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
    if (inView) {
        intervalRef.current = setInterval(() => {
        setPosicionarCard(prev => {
            if (prev >= 9) {
            clearInterval(intervalRef.current);
            return prev;
            }
            return prev + 1;
        });
        }, 500);
    }

    return () => clearInterval(intervalRef.current);
    }, [inView]);
    
    return (
        <section ref={ref} id="fourthSection" style={{backgroundColor: inView ? '#F8CD78' : '#FFFFFF'}}>
            <div id="fourthSectionImagenesContainer">
                <Image style={{top: posicionarCard >= 1 ? '10.5%' : '40%', left: posicionarCard >= 1 ? '23.68%' : '40.5%'}} className="fourthSectionImage" id="fourthSectionImage1" src="/fourthSection/1.png" alt="imagen1" width={258} height={200} />
                <Image style={{top: posicionarCard >= 2 ? '62.5%' : '40%', left: posicionarCard >= 2 ? '67.57%' : '40.5%'}} className="fourthSectionImage" id="fourthSectionImage2" src="/fourthSection/2.png" alt="imagen1" width={258} height={200} />
                <Image style={{top: posicionarCard >= 3 ? '35.13%' : '40%', left: posicionarCard >= 3 ? '70.83%' : '40.5%'}} className="fourthSectionImage" id="fourthSectionImage3" src="/fourthSection/3.png" alt="imagen1" width={258} height={200} />
                <Image style={{top: posicionarCard >= 4 ? '79.38%' : '40%', left: posicionarCard >= 4 ? '46.74%' : '40.5%'}} className="fourthSectionImage" id="fourthSectionImage4" src="/fourthSection/4.png" alt="imagen1" width={258} height={200} />
                <Image style={{top: posicionarCard >= 5 ? '4.25%' : '40%', left: posicionarCard >= 5 ? '55.14%' : '40.5%'}} className="fourthSectionImage" id="fourthSectionImage5" src="/fourthSection/5.png" alt="imagen1" width={258} height={200} />
                <Image style={{top: posicionarCard >= 6 ? '40.25%' : '40%', left: posicionarCard >= 6 ? '10.63%' : '40.5%'}} className="fourthSectionImage" id="fourthSectionImage6" src="/fourthSection/6.png" alt="imagen1" width={258} height={200} />
                <Image style={{top: posicionarCard >= 7 ? '69.13%' : '40%', left: posicionarCard >= 7 ? '19.93%' : '40.5%'}} className="fourthSectionImage" id="fourthSectionImage7" src="/fourthSection/7.png" alt="imagen1" width={258} height={200} />
            </div>
            <div id="fourthSectionTextosContainer">
                <h2 id="fourthSectionH2" style={{opacity: posicionarCard > 8 ? 1 : 0}}>LO QUE<br />DICE LA PEÑA</h2>
                <p id="fourthSectionP" style={{opacity: posicionarCard > 8 ? 1 : 0}}>Esta gente esta relamente loca, mira lo<br />que dicen. No nos hacemos responsables<br />por estos comentarios. Tu veras...</p>
            </div>
        </section>
    )
}