"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export const NavBar = () => {

    const [width, setWidth] = useState(0);
        
        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
    
            handleResize();
            window.addEventListener("resize", handleResize);
    
            return () => window.removeEventListener("resize", handleResize);
        }, []);
    

    const [animLogoStep, setAnimLogoStep] = useState(0)

    const handleClickLogo = () => {
        setAnimLogoStep(1);
        setTimeout(() => {
            setAnimLogoStep(2)
        }, 400);
        setTimeout(() => {
            setAnimLogoStep(3)
        }, 1200);
    }

    return(
        <nav id="nav">
            <div onClick={handleClickLogo} id="navBarLogo">
                <div id="divFormas">
                    <Image style={{transition: '.4s', position: 'absolute', transform: animLogoStep === 1 ? 'rotate(-90deg)': animLogoStep === 3 ? 'rotate(180deg)' : null,top: animLogoStep === 1 ? 10 : 0, left: width > 830 ? '0px' : '6px'}} src="/navbar/cuadrado.png" alt="cuadrado" height={12} width={12} />
                    <Image style={{transition: '.4s', position: 'absolute', transform: animLogoStep === 1 ? 'rotate(180deg)': null,top: 0, left: width > 830 ? '34.78px' : '39px'}} src="/navbar/trianguloVerde.png" alt="trianguloVerde" height={12} width={12} />
                    <Image style={{transition: '.4s', position: 'absolute', transform: animLogoStep === 1 ? 'rotate(-90deg)': null,top: animLogoStep === 1 ? 10 : 0, left: width > 830 ? '68.16px' : '72.5px'}} src="/navbar/circulo.png" alt="circulo" height={12} width={12} />
                    <Image style={{transition: '.4s', position: 'absolute', transform: animLogoStep === 1 ? 'rotate(180deg)': null,top: 0, left: width > 830 ? '102.31px' : '106px'}} src="/navbar/pentagono.png" alt="pentagono" height={12} width={12} />
                    <Image style={{transition: '.4s', position: 'absolute', transform: animLogoStep === 1 ? 'rotate(-90deg)': animLogoStep === 3 ? 'rotate(180deg)' : null,top: animLogoStep === 1 ? 10 : 0, left: width > 830 ? '137.88px' : '140px'}} src="/navbar/diamante.png" alt="diamante" height={12} width={12} />
                </div>
                <div id="divLetras">
                    <Image src="/navbar/b.png" alt="b" height={width > 830 ? 10 : 8} width={width > 830 ? 7 : 6} objectFit="contain" />
                    <Image src="/navbar/a.png" alt="a" height={width > 830 ? 10 : 8} width={width > 830 ? 10 : 9} objectFit="contain" />
                    <Image src="/navbar/c.png" alt="c" height={width > 830 ? 10 : 8} width={width > 830 ? 9 : 8} objectFit="contain" />
                    <Image src="/navbar/a.png" alt="a" height={width > 830 ? 10 : 8} width={width > 830 ? 10 : 9} objectFit="contain" />
                    <Image src="/navbar/n.png" alt="n" height={width > 830 ? 10 : 8} width={width > 830 ? 9 : 8} objectFit="contain" />
                </div>
            </div>
            <div id="navUtilities">
                <a id="navUtilitiesButton" target="_blank" href="https://www.verkami.com/projects/41667-bacan-el-juego-de-cartas-que-convierte-cualquier-mesa-en-pura-risa-y-diversion?utm_source=bacan&utm_medium=web&utm_campaign=verkami">
                    <p id="navUtilitiesButtonText">Quiero mi mazo</p>
                </a>
            </div>
        </nav>
    )
}
