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
    
    //anim cards

    const [animCard, setAnimCard] = useState(1);

    const [animCard3Step, setAnimCard3Step] = useState(1);
    const [animCard5Step, setAnimCard5Step] = useState(0);

    const [animatingCard3, setAnimatingCard3] = useState(false);    


    useEffect(() => {
        if (scrollPercentage >= 20 && scrollPercentage < 22) {
            setTimeout(() => {
                setAnimCard(2);  
            }, 800);
        }
        if (scrollPercentage >= 30 && scrollPercentage < 32) {  
            if(!animatingCard3) {
            setTimeout(() => {
                setAnimatingCard3(true);
                setAnimCard(3);  
                setAnimCard3Step(2);
            }, 800);
            setTimeout(() => {
                setAnimCard3Step(1);
            }, 1400);
            setTimeout(() => {
                setAnimCard3Step(2);
            }, 2000);
            setTimeout(() => {
                setAnimCard3Step(1);
                setAnimatingCard3(false);
            }, 2600);
        }
        }
        if (scrollPercentage >= 40 && scrollPercentage < 42) {
            setTimeout(() => {
                setAnimCard(4);  
            }, 800);
        }
        if (scrollPercentage >= 50 && scrollPercentage < 52) {
            setTimeout(() => {
                setAnimCard(5);  
            }, 800);
        }
        if (scrollPercentage >= 60 && scrollPercentage < 62) {
            setTimeout(() => {
                setAnimCard(6);  
                setAnimCard5Step(1);
            }, 800);
            setTimeout(() => {
                setAnimCard5Step(2);
            }, 1200);
            setTimeout(() => {
                setAnimCard5Step(3);
            }, 1600);
            setTimeout(() => {
                setAnimCard5Step(4);
            }, 2000);
        }
    }, [scrollPercentage]);


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
                        <Image src="/thirdSectionImages/card2_2.png" style={{transition: '.5s ease-in-out', position: 'absolute', width: '150px', height: 'auto', objectFit: 'contain', left: '45%', bottom: '50px', transform: `rotate(${animCard >= 2 ? 13 : 3}deg)`}} alt="mazo" width={500} height={500} />
                        <Image src="/thirdSectionImages/card2_1.png" style={{transition: '.5s ease-in-out', position: 'absolute', width: '150px', height: 'auto', objectFit: 'contain', left: '18%', bottom: '50px', transform: `rotate(${animCard >= 2 ? -20 : -30}deg)`}} alt="mazo" width={500} height={500} />
                    </div>
                    <div className="thirdSectionMobileCard" style={{transition: '.5s ease-in-out',backgroundColor: '#7ABDEC', top: scrollPercentage < 30 ?  480 : 0}}>
                        <h3 style={{color: '#225274'}}>MEMORIA</h3>
                        <p style={{color: '#225274'}}>No olvides tu cartas, porque no podras verlas así de fácil.</p>
                        <Image src={`/thirdSectionImages/card3_${animCard3Step}.png`} alt="mazo" style={{width: '100%', height: '100%', objectFit: 'contain',}} width={500} height={500} />
                    </div>
                    <div className="thirdSectionMobileCard" style={{transition: '.5s ease-in-out',backgroundColor: '#EF91CD', top: scrollPercentage < 40 ? 500 : 0}}>
                        <h3 style={{color: '#7F225D'}}>CONCENTRACIÓN</h3>
                        <Image src="/thirdSectionImages/card4.png" style={{position: 'absolute', left: 0, bottom: 0, width: '400px', height: 'auto', objectFit: 'cover', objectPosition: 'center'}} alt="mazo" width={500} height={500} />
                        <Image src="/thirdSectionImages/card4flecha1.png" alt="mazo" width={18} height={18} style={{transition: '.5s', transform: animCard === 4 ? 'rotate(-180deg)' : null,position: 'absolute', width: '18px', height: '18px', objectFit: 'contain', bottom: '118px', left: '105px',borderRadius: '16px', objectPosition: 'top'}}/>
                        <Image src="/thirdSectionImages/card4flecha2.png" alt="mazo" width={18} height={18} style={{transition: '.5s', transform: animCard === 4 ? 'rotate(-180deg)' : null,position: 'absolute', width: '18px', height: '18px', objectFit: 'contain', bottom: '138px', left: '258px',borderRadius: '16px', objectPosition: 'top'}}/>
                    </div>
                    <div className="thirdSectionMobileCard" style={{transition: '.5s ease-in-out',backgroundColor: '#B1D18D', top: scrollPercentage < 50 ? 520 : 0}}>
                        <h3 style={{color: '#2B440E'}}>ESTRATEGIA</h3>
                        <p style={{color: '#2B440E'}}>Arma tu jugada, las cartas te acompañan.</p>
                        <div style={{position: 'absolute', display: 'flex', rotate: '-15deg', left: '30px'}}>
                          <div style={{transition: '.5s', display: 'flex', flexDirection: 'column', transform: animCard >= 5 ? 'translateY(120px)' : 'translateY(250px)' }}>
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card511.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card512.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card513.png" alt="carta" width={300} height={300} />
                          </div>
                          <div style={{transition: '.5s', display: 'flex', flexDirection: 'column', transform: animCard >= 5 ? 'translateY(160px)' : 'translateY(80px)' }}>
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card523.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card521.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card522.png" alt="carta" width={300} height={300} />
                          </div>
                          <div style={{transition: '.5s', display: 'flex', flexDirection: 'column', transform: animCard >= 5 ? 'translateY(90px)' : 'translateY(200px)' }}>
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card531.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card532.png" alt="carta" width={300} height={300} />
                            <Image style={{width: '99px', height: '127px', objectFit: 'contain'}} src="/thirdSectionImages/card533.png" alt="carta" width={300} height={300} />
                          </div>
                        </div>
                    </div>
                    <div className="thirdSectionMobileCard" style={{transition: '.5s ease-in-out',backgroundColor: '#F8CD78', top: scrollPercentage < 60 ?540 : 0}}>
                        <h3 style={{color: '#564421'}}>SUERTE</h3>
                        <p style={{color: '#564421'}}>Las cartas estan hechadas, puede que te toque algo bueno. No lo desperdicies.</p>
                        <div style={{display: 'flex'}}>
                            <Image src={'/thirdSectionImages/card6corona.png'} alt="corona" width={140} height={170} style={{objectFit: 'contain', width: '100%', marginTop: '80px'}}/>
                            <Image src={'/thirdSectionImages/card6estrella.png'} alt="corona" width={50} height={50} style={{transition: '.3s', objectFit: 'contain', position: 'absolute', right: '30%', top: '45%', opacity: animCard5Step === 1 || animCard5Step === 3 ? 1 : 0}}/>
                            <Image src={'/thirdSectionImages/card6estrella.png'} alt="corona" width={50} height={50} style={{transition: '.3s', objectFit: 'contain', position: 'absolute', left: '26%', top: '65%', opacity: animCard5Step === 2 || animCard5Step === 4 ? 1 : 0}}/>
                            <Image src={'/thirdSectionImages/card6estrella.png'} alt="corona" width={34} height={34} style={{transition: '.3s', objectFit: 'contain', position: 'absolute', right: '30%', top: '70%', opacity: animCard5Step === 3 ? 1 : 0}}/>
                        </div>             
                    </div>
                    
                </div>
            </div>
        </section>
    )
}