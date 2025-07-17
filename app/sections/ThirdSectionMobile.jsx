"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ThirdSectionMobile = () => {

    // porcentaje de scroll
    
    
      const [scrollPercentage, setScrollPercentage] = useState(0);
    
      useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrolled = (scrollTop / docHeight) * 100;
                setScrollPercentage(prev => {
                    const next = parseFloat(scrolled.toFixed(1));
                    return prev !== next ? next : prev;
                });
                ticking = false;
            });
            ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    function interpolar(minimo, maximo, posInicio, posFin) {
      if (scrollPercentage <= minimo) return posInicio;
      if (scrollPercentage >= maximo) return posFin;
      return posInicio + ((scrollPercentage - minimo) * (posFin - posInicio)) / (maximo - minimo);
    }

    return (
        <section id="thirdSectionMobile">
            <div id="thirdSectionMobileSticky">
                <h2 id="thirdSectionH2">APTO PARA<br />COMPETIDORES<br />NATOS</h2>
                <div id="thirdSectionMobileCarsContainer">
                    <div className="thirdSectionMobileCard" style={{backgroundColor: '#F8CD78', top: '0px'}}>
                        <h3 style={{color: '#564421'}}>VELOCIDAD</h3>
                        <p style={{color: '#564421'}}>Si eres un tortuga, despierta! Aquí no te esperan para cruzar la calle.</p>
                        <Image src="/thirdSectionImages/card1.png" alt="mazo" style={{borderRadius: '16px', width: '80%', height: '60%', transform: 'rotate(-8deg)', alignSelf: 'center', marginTop: '46px'}} width={500} height={500} />
                    </div>
                    <div className="thirdSectionMobileCard" style={{backgroundColor: '#FF8283', top: scrollPercentage < 16 ? interpolar(16, 16, 460, 460) : interpolar(16, 26, 460, 0) }}>
                        <h3 style={{color: '#5A2020'}}>AGILIDAD</h3>
                        <p style={{color: '#5A2020'}}>Las cartas especiales te pueden dar una gran ventaja sobre tus competidores, dales caña robando sus cartas!</p>
                        <Image src="/thirdSectionImages/card2_2.png" style={{position: 'absolute', width: '204px', height: 'auto', objectFit: 'contain', left: '150px', bottom: '50px', transform: `rotate(${interpolar(16, 26, -40, 8)}deg)`}} alt="mazo" width={500} height={500} />
                        <Image src="/thirdSectionImages/card2_1.png" style={{position: 'absolute', width: '204px', height: 'auto', objectFit: 'contain', left: '50px', bottom: '55px', transform: `rotate(${interpolar(16, 26, -40, 8)}deg)`}} alt="mazo" width={500} height={500} />
                    </div>
                    <div className="thirdSectionMobileCard" style={{backgroundColor: '#7ABDEC', top: scrollPercentage < 26 ? interpolar(16, 26, 490, 460) : interpolar(26, 36, 460, 0)}}>
                        <h3 style={{color: '#225274'}}>MEMORIA</h3>
                        <p style={{color: '#225274'}}>No olvides tu cartas, porque no podras verlas así de fácil.</p>
                        <Image src={`/thirdSectionImages/card3_${scrollPercentage < 30 ? 2 : scrollPercentage < 32 ? 1 : scrollPercentage < 35 ? 2 : scrollPercentage < 36 ? 1 : 1 }.png`} alt="mazo" style={{width: '100%', height: '100%', objectFit: 'contain',}} width={500} height={500} />
                    </div>
                    <div className="thirdSectionMobileCard" style={{backgroundColor: '#EF91CD', top: scrollPercentage < 36 ? interpolar(16, 36, 520, 460) : interpolar(36, 46, 460, 0)}}>
                        <h3 style={{color: '#7F225D'}}>CONCENTRACIÓN</h3>
                        <Image src="/thirdSectionImages/card4.png" style={{position: 'absolute', left: 0, bottom: 0, width: '100%', height: '83%', objectFit: 'cover'}} alt="mazo" width={500} height={500} />
                    </div>
                    <div className="thirdSectionMobileCard" style={{backgroundColor: '#B1D18D', top: scrollPercentage < 46 ? interpolar(16, 45, 550, 460) : interpolar(46, 56, 460, 0)}}>
                        <h3 style={{color: '#2B440E'}}>ESTRATEGIA</h3>
                        <p style={{color: '#2B440E'}}>Arma tu jugada, las cartas te acompañan.</p>
                        <div style={{position: 'absolute', display: 'flex', rotate: '-15deg', left: '30px'}}>
                          <div style={{transition: '.5s', display: 'flex', flexDirection: 'column', transform: `translateY(${interpolar(46, 56, 190, 130)}px)` }}>
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card511.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card512.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card513.png" alt="carta" width={300} height={300} />
                          </div>
                          <div style={{transition: '.5s', display: 'flex', flexDirection: 'column', transform: `translateY(${interpolar(46, 56, 40, 165)}px)`}}>
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card523.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card521.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card522.png" alt="carta" width={300} height={300} />
                          </div>
                          <div style={{transition: '.5s', display: 'flex', flexDirection: 'column', transform: `translateY(${interpolar(46, 56, 390, 90)}px)` }}>
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card531.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card532.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card533.png" alt="carta" width={300} height={300} />
                          </div>
                        </div>
                    </div>
                    <div className="thirdSectionMobileCard" style={{transition: '.5s', backgroundColor: '#F8CD78', top: scrollPercentage < 56 ? interpolar(16, 56, 580, 460) : interpolar(56, 66, 460, 0)}}>
                        <h3 style={{color: '#564421'}}>SUERTE</h3>
                        <p style={{color: '#564421'}}>Las cartas estan hechadas, puede que te toque algo bueno. No lo desperdicies.</p>
                        <Image src={'/thirdSectionImages/card6corona.png'} alt="corona" width={140} height={170} style={{objectFit: 'contain', width: '100%', marginTop: '80px'}}/>            
                    </div>
                </div>
            </div>
        </section>
    )
}