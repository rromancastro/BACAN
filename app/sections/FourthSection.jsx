"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export const FourthSection = () => {

    // porcentaje de scroll
    
    
      const [scrollPercentage, setScrollPercentage] = useState(0);
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = (scrollTop / docHeight) * 100;
          setScrollPercentage(scrolled);
        };
    
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll).toFixed(1);
      }, []);
    
      useEffect(() => {
        console.log(scrollPercentage);
      }, [scrollPercentage])
    
    //logica color de fondo inview
    const { ref, inView } = useInView({
        threshold: .2, 
        triggerOnce: true,
    });

    function interpolar(minimo, maximo, posInicio, posFin) {
  if (scrollPercentage <= minimo) return posInicio;
  if (scrollPercentage >= maximo) return posFin;
  return posInicio + ((scrollPercentage - minimo) * (posFin - posInicio)) / (maximo - minimo);
}
    
    return (
        <section ref={ref} id="fourthSection" style={{backgroundColor: inView ? '#F8CD78' : '#FFFFFF'}}>
          <div id="fourthSectionSticky">
              <div id="fourthSectionImagenesContainer">
                  <Image style={{top: `${interpolar(35, 36, 40, 10.5)}%`, left: `${interpolar(35, 36, 40.5, 23.68)}%`}} className="fourthSectionImage" id="fourthSectionImage1" src="/fourthSection/1.png" alt="imagen1" width={258} height={200} />
                  <Image style={{top: `${interpolar(37, 38, 40, 62.5)}%`, left: `${interpolar(37, 38, 40.5, 67.57)}%`}} className="fourthSectionImage" id="fourthSectionImage2" src="/fourthSection/2.png" alt="imagen1" width={258} height={200} />
                  <Image style={{top: `${interpolar(39, 40, 40, 35.13)}%`, left: `${interpolar(39, 40, 40.5, 70.83)}%`}} className="fourthSectionImage" id="fourthSectionImage3" src="/fourthSection/3.png" alt="imagen1" width={258} height={200} />
                  <Image style={{top: `${interpolar(41, 42, 40, 72.38)}%`, left: `${interpolar(41, 42, 40.5, 46.74)}%`}} className="fourthSectionImage" id="fourthSectionImage4" src="/fourthSection/4.png" alt="imagen1" width={258} height={200} />
                  <Image style={{top: `${interpolar(43, 44, 40, 4.25)}%`, left: `${interpolar(43, 44, 40.5, 55.14)}%`}} className="fourthSectionImage" id="fourthSectionImage5" src="/fourthSection/5.png" alt="imagen1" width={258} height={200} />
                  <Image style={{top: `${interpolar(45, 46, 40, 40.25)}%`, left: `${interpolar(45, 46, 40.5, 10.63)}%`}} className="fourthSectionImage" id="fourthSectionImage6" src="/fourthSection/6.png" alt="imagen1" width={258} height={200} />
                  <Image style={{top: `${interpolar(47, 48, 40, 69.13)}%`, left: `${interpolar(47, 48, 40.5, 19.93)}%`}} className="fourthSectionImage" id="fourthSectionImage7" src="/fourthSection/7.png" alt="imagen1" width={258} height={200} />
              </div>
              <div id="fourthSectionTextosContainer">
                  <h2 id="fourthSectionH2" style={{opacity: `${interpolar(50, 51, 0, 100)}%`}}>LO QUE<br />DICE LA PEÑA</h2>
                  <p id="fourthSectionP" style={{opacity: `${interpolar(50, 51, 0, 100)}%`}}>Esta gente esta relamente loca, mira lo<br />que dicen. No nos hacemos responsables<br />por estos comentarios. Tu veras...</p>
              </div>
          </div>
        </section>
    )
}