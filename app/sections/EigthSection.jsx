"use client"
import Image from "next/image"
import { useEffect, useState } from "react";

export const EigthSection = () => {

    const [width, setWidth] = useState(0);
            
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="eigthSection">
            <div id="eigthSectionContent">
                <div id="eightSectionDiv1">
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
                <div id="eightSectionDiv2">
                    <div>
                        <h3>AYUDA</h3>
                        {width >= 835 ? <p>¿Alguna duda sobre el juego? Ponte en contacto con nosotros a travez de<br />nuestras redes. No dejes que tus colegas hagan trampas, conocemos las<br />reglas y podemos ayudarte.</p> : <p>¿Alguna duda sobre el juego? Ponte en contacto con nosotros a travez de nuestras redes. No dejes que tus colegas hagan trampas, conocemos las reglas y podemos ayudarte.</p>}
                    </div>
                    <p>Para consultas comerciales también pueden contactarnos a<br /><span>ventas@bacan.com</span> o al <span>+34 5527 1948</span></p>
                </div>
                <div id="eightSectionDiv3">
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