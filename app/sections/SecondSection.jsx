"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import ReactCardFlip from "react-card-flip";


export const SecondSection = () => {

  const [width, setWidth] = useState(0);
        
        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
    
            handleResize();
            window.addEventListener("resize", handleResize);
    
            return () => window.removeEventListener("resize", handleResize);
        }, []);

  //preload imagenes
    useEffect(() => {
        const sources = [
          "/secondSection/1.png",
          "/secondSection/2.png",
          "/secondSection/3.png",
          "/secondSection/4.png",
          "/secondSection/5.png",
        ];
  
        if (typeof window !== "undefined") {
          sources.forEach((src) => {
            const img = new window.Image();
            img.src = src;
          });
        }
      }, []);

      

  //logica animacion entrada textos
  const { ref, inView } = useInView({
    threshold: width >= 835 ? 1 : 0.1,
    triggerOnce: true,
  });

      //logica botones e imagenes
      const [secondSectionButtonText, setSecondSectionButtonText] = useState(0);

      const[currentImageFront, setCurrentImageFront] = useState(1);
      const[currentImageBack, setCurrentImageBack] = useState(2);
      const[currentImage, setCurrentImage] = useState(1);

      const [showingFront, setShowingFront] = useState(true);

      const [estaAnimando, setEstaAnimando] = useState(false);
    
      const secondSectionArray = [
        "Recuerda",
        "Jugar",
        "Reir",
        "Ganar",
        "B A C A N"
      ]
    
      const handleSumar = () => {
        if (secondSectionButtonText < 4 && !estaAnimando) {
          setEstaAnimando(true);
          setSecondSectionButtonText(secondSectionButtonText + 1);
          setIsFlipped(!isFlipped);
          setCurrentImage(currentImage + 1);
          setShowingFront(!showingFront);
          setTimeout(() => {
            setEstaAnimando(false);
            setCurrentImageFront(currentImage === 1 ? 3 : currentImage === 2 ? 3 : currentImage === 3 ? 5 : 5);
            setCurrentImageBack(currentImage === 1 ? 2 : currentImage === 3 ? 4 : 4);
          }, 600)
        }
      }
    
      const handleRestar = () => {
        if (secondSectionButtonText > 0 && !estaAnimando) {
          setEstaAnimando(true);
          setSecondSectionButtonText(secondSectionButtonText - 1);
          setIsFlipped(!isFlipped);
          setCurrentImage(currentImage - 1);
          setShowingFront(!showingFront);
          setTimeout(() => {
            setEstaAnimando(false);
            setCurrentImageFront(currentImage === 5 ? 3 : currentImage === 4 ? 3 : 1);
            setCurrentImageBack(currentImage === 3 ? 2 : currentImage === 5 ? 4 : currentImage === 2 ? 2 : 2);
          }, 600)
        }
      }

      const [isFlipped, setIsFlipped] = useState(false);

    

    return (
        <section id="secondSection">
            <h2 ref={ref} style={{opacity: inView ? 1 : 0}} id="secondSectionH2">JUGANDO,<br />LA VIDA ES<br />MÁS BACANA.</h2>
            

            <h2 ref={ref} style={{ opacity: inView ? 1 : 0 }} id="secondSectionH2Mobile">
              JUGANDO,<br />LA VIDA ES MÁS<br />BACANA.
            </h2>

            <div id="secondSectionImageAndButton">
              <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} flipSpeedBackToFront={0.6} flipSpeedFrontToBack={0.6}>
                <Image id="secondSectionImage" src={`/secondSection/${currentImageFront}.png`} alt="mazo" width={1000} height={1000} />
                
                <Image id="secondSectionImage" src={`/secondSection/${currentImageBack}.png`} alt="mazo" width={1000} height={1000} />

              </ReactCardFlip>

                <div id="secondSectionButtonContainer">
                  <button onClick={handleRestar} className="secondSectionButton" >
                      <GoArrowLeft className="secondSectionButtonIcon" style={{opacity: secondSectionButtonText == 0 ? .5 : 1}}/>
                  </button>
                  <p id="secondSectionButtonText">{secondSectionArray[secondSectionButtonText]}</p>
                  <button onClick={handleSumar} className="secondSectionButton" >
                      <GoArrowRight className="secondSectionButtonIcon" style={{opacity: secondSectionButtonText == 4 ? .5 : 1}}/>
                  </button>
                </div>

                <div id="secondSectionButtonContainerMobile">
                  <button onClick={handleRestar} className="secondSectionButtonMobile" >
                      <GoArrowLeft className="secondSectionButtonIconMobile" style={{opacity: secondSectionButtonText == 0 ? .5 : 1}}/>
                  </button>
                  <button onClick={handleSumar} className="secondSectionButtonMobile" >
                      <GoArrowRight className="secondSectionButtonIconMobile" style={{opacity: secondSectionButtonText == 4 ? .5 : 1}}/>
                  </button>
                </div>

            </div>
            <p ref={ref} style={{opacity: inView ? 1 : 0}} id="secondSectionP">Lo más importante de este juego no es ganar, sino, no perder... Es coña, lo importante es ganarle a tus amigos, tu pareja e incluso a tus sobrinitos!</p>
        </section>
    )
}