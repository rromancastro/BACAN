"use client";
import Image from "next/image";
import { useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useInView } from "react-intersection-observer";

export const SecondSection = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const [secondSectionButtonText, setSecondSectionButtonText] = useState(0);
  const [secondSectionImage, setSecondSectionImage] = useState(1);

  const secondSectionArray = ["Recuerda", "Jugar", "Reir", "Ganar", "B A C A N"];

  const handleSumar = () => {
    if (secondSectionButtonText < 4) {
      setSecondSectionButtonText(secondSectionButtonText + 1);
      setTimeout(() => {
        setSecondSectionImage(secondSectionImage + 1);
      }, 200)
    }
  };

  const handleRestar = () => {
    if (secondSectionButtonText > 0) {
      setSecondSectionButtonText(secondSectionButtonText - 1);
      setTimeout(() => {
        setSecondSectionImage(secondSectionImage - 1);
      }, 200)
    }
  };

  return (
    <section id="secondSection">
      <h2 ref={ref} style={{ opacity: inView ? 1 : 0 }} id="secondSectionH2">
        JUGANDO,<br />LA VIDA ES<br />MÁS BACANA.
      </h2>

      <div id="secondSectionImageAndButton">
        <div
          className={`flip-container ${secondSectionButtonText % 2 === 0 ? "" : "flipped"}`}
        >
          <Image
            id="secondSectionImage"
            src={`/secondSection/${secondSectionImage}.png`}
            alt="mazo"
            width={1000}
            height={1000}
          />
        </div>

        <div id="secondSectionButtonContainer">
          <button onClick={handleRestar} className="secondSectionButton">
            <GoArrowLeft
              className="secondSectionButtonIcon"
              style={{ opacity: secondSectionButtonText === 0 ? 0.5 : 1 }}
            />
          </button>
          <p id="secondSectionButtonText">
            {secondSectionArray[secondSectionButtonText]}
          </p>
          <button onClick={handleSumar} className="secondSectionButton">
            <GoArrowRight
              className="secondSectionButtonIcon"
              style={{ opacity: secondSectionButtonText === 4 ? 0.5 : 1 }}
            />
          </button>
        </div>
      </div>

      <p ref={ref} style={{ opacity: inView ? 1 : 0 }} id="secondSectionP">
        Lo más importante de este juego no es ganar, sino, no perder... Es coña,
        lo importante es ganarle a tus amigos, tu pareja e incluso a tus
        sobrinitos!
      </p>
    </section>
  );
};
