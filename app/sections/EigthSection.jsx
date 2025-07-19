"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const EigthSection = () => {

    const [width, setWidth] = useState(0);
            
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //animacion mobile
    const [opacityCard1, setOpacityCard1] = useState(0);
    const [opacityCard2, setOpacityCard2] = useState(0);
    const [opacityCard3, setOpacityCard3] = useState(0);

    const { ref, inView } = useInView({
        threshold: .7, 
    });
    
    useEffect(() => {
        if(inView) {
            setTimeout(() =>{
                setOpacityCard1(1)
            }, 1300)
            setTimeout(() =>{
                setOpacityCard2(1)
            }, 1600)
            setTimeout(() =>{
                setOpacityCard3(1)
            }, 1900)
        } else {
            setOpacityCard1(0)
            setOpacityCard2(0) 
            setOpacityCard3(0)  
        }
    }, [inView])


    return (
        <section style={{transition: '1s', backgroundColor: width >= 835 ? '#7ABDEC' : inView ? '#7ABDEC' : '#FFFFFF'}} ref={ref} id="eigthSection">
            <div id="eigthSectionContent">
                <div style={{opacity: width >= 835 ? 1 : opacityCard3, transition: '1s'}} id="eightSectionDiv1">
                    {width >= 835 ? <h3>
                        CADA <br />
                        JUGADA <br />
                        CUENTA,  <br />
                        CADA <br />
                        MOMENTO <br />
                        RIENDO <br />
                        TAMBIÉN.
                    </h3>
                    
                    : <h3>
                        CADA
                        JUGADA
                        CUENTA, 
                        CADA
                        MOMENTO
                        RIENDO
                        TAMBIÉN.
                    </h3>
                }
                    <div>
                        <Image src="/eightSection/bacanLogo.png" alt="Bacan Logo" width={80} height={22} />
                        <p>
                            2025 Todos los derechos reservados,<br />Bacan Inc.
                        </p>
                    </div>
                </div>
                <div style={{opacity: width >= 835 ? 1 : opacityCard1, transition: '1s'}} id="eightSectionDiv2">
                    <div>
                        <h3>AYUDA</h3>
                        {width >= 835 ? <p>¿Alguna duda sobre el juego? Ponte en contacto con nosotros a travez de<br />nuestras redes. No dejes que tus colegas hagan trampas, conocemos las<br />reglas y podemos ayudarte.</p> : <p>¿Alguna duda sobre el juego? Ponte en contacto con nosotros a travez de nuestras redes. No dejes que tus colegas hagan trampas, conocemos las reglas y podemos ayudarte.</p>}
                    </div>
                    <p>Para consultas comerciales también pueden contactarnos a<br /><span>ventas@bacan.com</span> o al <span>+34 5527 1948</span></p>
                </div>
                <div style={{opacity: width >= 835 ? 1 : opacityCard2, transition: '1s'}} id="eightSectionDiv3">
                    <h3>REDES SOCIALES</h3>
                    <div>
                        <a href="#" className="eightSectionDiv3Icons">
                            <Image src="/eightSection/instagram.png" alt="Instagram" width={48} height={48} />
                        </a>
                        <a href="#" className="eightSectionDiv3Icons">
                            <Image src="/eightSection/facebook.png" alt="Facebook" width={48} height={48} />
                        </a>
                        <a href="#" className="eightSectionDiv3Icons">
                            <Image src="/eightSection/x.png" alt="X" width={48} height={48} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}