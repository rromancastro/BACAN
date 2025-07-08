"use client";
import Image from "next/image";
import { useState } from "react";

export const SeventhSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section id="seventhSection">
            <div id="seventhSectionContent">
                {
                    isPlaying ? <iframe id="seventhSectionIframe" src="https://www.youtube.com/embed/TC3xpdEKrPk?si=nzRMsSMRX_hG3LPV&autoplay=1&controls=1&rel=0&modestbranding=1" title="Cómo jugar Bacan" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe> :
                    <div id="seventhSectionPlaceholder">
                        <h2 id="seventhSectionPlaceholderH2">¿CÓMO JUGAR BACAN?</h2>
                        <p id="seventhSectionPlaceholderP">Si estas triste porque nadie te enseño a jugar, no lo estes.<br />Ponle fin a tu tristeza y aprende a jugar con este video. ¡El<br />placer del autodidacta al alcance de un boton! </p>
                        <Image onClick={() => setIsPlaying(true)} src="/seventhSection/Youtube_logo.png" alt="youtube logo" width={100} height={100} id="seventhSectionPlaceholderIcon" />
                    </div>
                }
            </div>
        </section>
    )
}