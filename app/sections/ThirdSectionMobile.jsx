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
        <section  onScrollCapture={()=>console.log('hola')} id="thirdSectionMobile">
            <div id="thirdSectionMobileSticky">
                <h2 id="thirdSectionH2">APTO PARA<br />COMPETIDORES<br />NATOS</h2>
                <div id="thirdSectionMobileCarsContainer">
                    <div className="thirdSectionMobileCard" style={{backgroundColor: '#F8CD78', top: '0px'}}>
                        <h3 style={{color: '#564421'}}>VELOCIDAD</h3>
                        <p style={{color: '#564421'}}>Si eres un tortuga, despierta! Aquí no te esperan para cruzar la calle.</p>
                        <Image src="/thirdSectionImages/card1.png" alt="mazo" style={{borderRadius: '16px', width: '80%', height: '60%', transform: 'rotate(-8deg)', alignSelf: 'center', marginTop: '46px'}} width={500} height={500} />
                    </div>
                    <div className="thirdSectionMobileCard" style={{transition: '.5s ease-in-out', backgroundColor: '#FF8283', top: scrollPercentage < 20 ? 460 : 0 }}>
                        <h3 style={{color: '#5A2020'}}>AGILIDAD</h3>
                        <p style={{color: '#5A2020'}}>Las cartas especiales te pueden dar una gran ventaja sobre tus competidores, dales caña robando sus cartas!</p>
                        <Image src="/thirdSectionImages/card2_2.png" style={{position: 'absolute', width: '204px', height: 'auto', objectFit: 'contain', left: '35%', bottom: '50px', transform: `rotate(${scrollPercentage < 17 ? -40 : 8}deg)`}} alt="mazo" width={500} height={500} />
                        <Image src="/thirdSectionImages/card2_1.png" style={{position: 'absolute', width: '204px', height: 'auto', objectFit: 'contain', left: '10%', bottom: '55px', transform: `rotate(${scrollPercentage < 17 ? -40 : 8}deg)`}} alt="mazo" width={500} height={500} />
                    </div>
                    <div className="thirdSectionMobileCard" style={{transition: '.5s ease-in-out',backgroundColor: '#7ABDEC', top: scrollPercentage < 30 ? 460 : 0}}>
                        <h3 style={{color: '#225274'}}>MEMORIA</h3>
                        <p style={{color: '#225274'}}>No olvides tu cartas, porque no podras verlas así de fácil.</p>
                        <Image src={`/thirdSectionImages/card3_${scrollPercentage < 30 ? 2 : scrollPercentage < 32 ? 1 : scrollPercentage < 35 ? 2 : scrollPercentage < 36 ? 1 : 1 }.png`} alt="mazo" style={{width: '100%', height: '100%', objectFit: 'contain',}} width={500} height={500} />
                    </div>
                    <div className="thirdSectionMobileCard" style={{transition: '.5s ease-in-out',backgroundColor: '#EF91CD', top: scrollPercentage < 40 ? 460 : 0}}>
                        <h3 style={{color: '#7F225D'}}>CONCENTRACIÓN</h3>
                        <Image src="/thirdSectionImages/card4.png" style={{position: 'absolute', left: 0, bottom: 0, width: '100%', height: '83%', objectFit: 'cover'}} alt="mazo" width={500} height={500} />
                    </div>
                    <div className="thirdSectionMobileCard" style={{transition: '.5s ease-in-out',backgroundColor: '#B1D18D', top: scrollPercentage < 50 ? 460 : 0}}>
                        <h3 style={{color: '#2B440E'}}>ESTRATEGIA</h3>
                        <p style={{color: '#2B440E'}}>Arma tu jugada, las cartas te acompañan.</p>
                        <div style={{position: 'absolute', display: 'flex', rotate: '-15deg', left: '30px'}}>
                          <div style={{transition: '.5s', display: 'flex', flexDirection: 'column', transform: scrollPercentage <= 55 ? 'translateY(250px)' : 'translateY(120px)' }}>
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card511.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card512.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card513.png" alt="carta" width={300} height={300} />
                          </div>
                          <div style={{transition: '.5s', display: 'flex', flexDirection: 'column', transform: scrollPercentage <= 55 ? 'translateY(80px)' : 'translateY(160px)' }}>
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card523.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card521.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card522.png" alt="carta" width={300} height={300} />
                          </div>
                          <div style={{transition: '.5s', display: 'flex', flexDirection: 'column', transform: scrollPercentage <= 55 ? 'translateY(200px)' : 'translateY(90px)' }}>
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card531.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card532.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card533.png" alt="carta" width={300} height={300} />
                          </div>
                        </div>
                    </div>
                    <div className="thirdSectionMobileCard" style={{transition: '.5s ease-in-out',backgroundColor: '#F8CD78', top: scrollPercentage < 60 ? 460 : 0}}>
                        <h3 style={{color: '#564421'}}>SUERTE</h3>
                        <p style={{color: '#564421'}}>Las cartas estan hechadas, puede que te toque algo bueno. No lo desperdicies.</p>
                        <div style={{display: 'flex'}}>
                            <Image src={'/thirdSectionImages/card6corona.png'} alt="corona" width={140} height={170} style={{objectFit: 'contain', width: '100%', marginTop: '80px'}}/>
                            <Image src={'/thirdSectionImages/card6estrella.png'} alt="corona" width={50} height={50} style={{transition: '.3s', objectFit: 'contain', position: 'absolute', right: '30%', top: '45%', opacity: scrollPercentage >= 62 && scrollPercentage <= 65 ? 1 : 0}}/>
                            <Image src={'/thirdSectionImages/card6estrella.png'} alt="corona" width={50} height={50} style={{transition: '.3s', objectFit: 'contain', position: 'absolute', left: '26%', top: '65%', opacity: scrollPercentage >= 64 && scrollPercentage <= 66 ? 1 : 0}}/>
                            <Image src={'/thirdSectionImages/card6estrella.png'} alt="corona" width={34} height={34} style={{transition: '.3s', objectFit: 'contain', position: 'absolute', right: '30%', top: '70%', opacity: scrollPercentage >= 60 && scrollPercentage <= 64 ? 1 : 0}}/>
                        </div>             
                    </div>
                    
                </div>
            </div>
        </section>
    )
}