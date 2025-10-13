"use client"
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
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

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const sources = [
      "/secondSection/1.png",
      "/secondSection/2.png",
      "/secondSection/3.png",
      "/secondSection/4.png",
      "/secondSection/5.png",
    ];

    let loaded = 0;
    sources.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === sources.length) setImagesLoaded(true);
      };
    });
  }, []);


  const { ref, inView } = useInView({
    threshold: width >= 835 ? 0.7 : 0.4,
    triggerOnce: true,
  });

  const secondSectionArray = ["Recuerda", "Jugar", "Reir", "Ganar", "B A C A N"];
  const MAX = 5, MIN = 1;

  const [index, setIndex] = useState(1);
  const indexRef = useRef(1);

  const [currentFront, setCurrentFront] = useState(1);
  const [currentBack, setCurrentBack] = useState(2);

  const [isFlipped, setIsFlipped] = useState(false);
  const [estaAnimando, setEstaAnimando] = useState(false);
  const [secondSectionButtonText, setSecondSectionButtonText] = useState(0);

  const handleSumar = () => {
    if (indexRef.current >= MAX || estaAnimando) return;
    setEstaAnimando(true);

    const next = indexRef.current + 1;

    if (isFlipped) {
      setCurrentFront(next);
    } else {
      setCurrentBack(next);
    }

    setIndex(next);
    indexRef.current = next;
    setSecondSectionButtonText(next - 1);

    setIsFlipped(prev => !prev);

    setTimeout(() => {
      setEstaAnimando(false);
    }, 700);
  };

  const handleRestar = () => {
    if (indexRef.current <= MIN || estaAnimando) return;
    setEstaAnimando(true);

    const prev = indexRef.current - 1;

    if (isFlipped) {
      setCurrentFront(prev);
    } else {
      setCurrentBack(prev);
    }

    setIndex(prev);
    indexRef.current = prev;
    setSecondSectionButtonText(prev - 1);

    setIsFlipped(prev => !prev);

    setTimeout(() => {
      setEstaAnimando(false);
    }, 600);
  };

  return (
    <section ref={ref} id="secondSection">
      <h2 style={{opacity: inView ? 1 : 0}} id="secondSectionH2">JUGANDO,<br />LA VIDA ES<br />MÁS BACANA.</h2>
      <h2 style={{ opacity: inView ? 1 : 0 }} id="secondSectionH2Mobile">
        JUGANDO,<br />LA VIDA ES MÁS<br />BACANA.
      </h2>

      <div id="secondSectionImageAndButton">
        {imagesLoaded && (
          <div style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}>
            {[1,2,3,4,5].map(n => (
              <Image key={n} src={`/secondSection/${n}.png`} alt="" width={274} height={379} />
            ))}
          </div>
        )}
        {imagesLoaded && (<ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} flipSpeedBackToFront={0.6} flipSpeedFrontToBack={0.6}>
          <Image priority id="secondSectionImage" src={`/secondSection/${currentFront}.png`} alt="mazo" width={274} height={379} />
          <Image priority id="secondSectionImage" src={`/secondSection/${currentBack}.png`} alt="mazo" width={274} height={379} />
        </ReactCardFlip>)}

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

      <p style={{opacity: inView ? 1 : 0}} id="secondSectionP">
        Lo más importante de este juego no es ganar, sino no perder... Es coña, lo importante es ganarle a tus amigos, tu pareja e incluso a tus sobrinitos.
      </p>
    </section>
  );
};
