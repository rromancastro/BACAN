"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const FourthSection = () => {
    //mobile
    
const imgs = [
  "/fourthSection/5.png",
  "/fourthSection/1.png",
  "/fourthSection/3.png",
  "/fourthSection/6.png",
  "/fourthSection/7.png",
  "/fourthSection/2.png",
  "/fourthSection/4.png",
];



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

    function interpolar(minimo, maximo, posInicio, posFin) {
      if (scrollPercentage <= minimo) return posInicio;
      if (scrollPercentage >= maximo) return posFin;
      return posInicio + ((scrollPercentage - minimo) * (posFin - posInicio)) / (maximo - minimo);
    }
    
    return (
        <section id="fourthSection">
          <div id="fourthSectionSticky">
              <div id="fourthSectionImagenesContainer">
                  <Image style={{top: `${interpolar(35, 36, 40, 8.5)}%`, left: `${interpolar(35, 36, 40.5, 23.68)}%`}} className="fourthSectionImage" id="fourthSectionImage1" src="/fourthSection/1.png" alt="imagen1" width={258} height={200} />
                  <Image style={{top: `${interpolar(37, 38, 40, 60.5)}%`, left: `${interpolar(37, 38, 40.5, 67.57)}%`}} className="fourthSectionImage" id="fourthSectionImage2" src="/fourthSection/2.png" alt="imagen1" width={258} height={200} />
                  <Image style={{top: `${interpolar(39, 40, 40, 33.13)}%`, left: `${interpolar(39, 40, 40.5, 70.83)}%`}} className="fourthSectionImage" id="fourthSectionImage3" src="/fourthSection/3.png" alt="imagen1" width={258} height={200} />
                  <Image style={{top: `${interpolar(41, 42, 40, 70.38)}%`, left: `${interpolar(41, 42, 40.5, 46.74)}%`}} className="fourthSectionImage" id="fourthSectionImage4" src="/fourthSection/4.png" alt="imagen1" width={258} height={200} />
                  <Image style={{top: `${interpolar(43, 44, 40, 2.25)}%`, left: `${interpolar(43, 44, 40.5, 55.14)}%`}} className="fourthSectionImage" id="fourthSectionImage5" src="/fourthSection/5.png" alt="imagen1" width={258} height={200} />
                  <Image style={{top: `${interpolar(45, 46, 40, 38.25)}%`, left: `${interpolar(45, 46, 40.5, 10.63)}%`}} className="fourthSectionImage" id="fourthSectionImage6" src="/fourthSection/6.png" alt="imagen1" width={258} height={200} />
                  <Image style={{top: `${interpolar(47, 48, 40, 67.13)}%`, left: `${interpolar(47, 48, 40.5, 19.93)}%`}} className="fourthSectionImage" id="fourthSectionImage7" src="/fourthSection/7.png" alt="imagen1" width={258} height={200} />
              </div>
              <div id="fourthSectionTextosContainer">
                  <h2 id="fourthSectionH2" style={{opacity: `${interpolar(50, 51, 0, 100)}%`}}>LO QUE<br />DICE LA PEÑA</h2>
                  <p id="fourthSectionP" style={{opacity: `${interpolar(50, 51, 0, 100)}%`}}>Esta gente esta relamente loca, mira lo<br />que dicen. No nos hacemos responsables<br />por estos comentarios. Tu veras...</p>
              </div>
          </div>
          <div id="fourthSectionMobile">
      <h2 id="fourthSectionH2">
        LO QUE<br />DICE LA PEÑA
      </h2>

      {/* Contenedor marquee */}
      <div className="fourthSectionMarquee">
        <div className="fourthSectionMarqueeTrack">
          {/* 1er set */}
          {imgs.map((src) => (
            <Image
              key={`a-${src}`}
              src={src}
              className="fourthSectionImageMobile"
              alt="testimonio"
              width={258}
              height={200}
              priority={false}
            />
          ))}
          {/* 2do set duplicado para loop */}
          {imgs.map((src) => (
            <Image
              key={`b-${src}`}
              src={src}
              className="fourthSectionImageMobile"
              alt="testimonio duplicado"
              width={258}
              height={200}
              aria-hidden="true" // accesibilidad: duplicado no anunciado
              priority={false}
            />
          ))}
        </div>
      </div>

      <p id="fourthSectionP">
        Esta gente está realmente<br />loca, mira lo que dicen. No nos<br />hacemos responsables por<br />estos comentarios. Tu verás...
      </p>
    </div>
        </section>
    )
}