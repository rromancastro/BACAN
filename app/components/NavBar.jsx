"use client"
import Image from "next/image"
import { useState } from "react"

export const NavBar = () => {

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
                    <Image style={{transition: '.4s', position: 'absolute', transform: animLogoStep === 1 ? 'rotate(-90deg)': animLogoStep === 3 ? 'rotate(180deg)' : null,top: animLogoStep === 1 ? 10 : 0, left: '0px'}} src="/navbar/cuadrado.png" alt="cuadrado" height={22} width={22} />
                    <Image style={{transition: '.4s', position: 'absolute', transform: animLogoStep === 1 ? 'rotate(180deg)': null,top: 0, left: '34.78px'}} src="/navbar/trianguloVerde.png" alt="trianguloVerde" height={22} width={22} />
                    <Image style={{transition: '.4s', position: 'absolute', transform: animLogoStep === 1 ? 'rotate(-90deg)': null,top: animLogoStep === 1 ? 10 : 0, left: '68.16px'}} src="/navbar/circulo.png" alt="circulo" height={22} width={22} />
                    <Image style={{transition: '.4s', position: 'absolute', transform: animLogoStep === 1 ? 'rotate(180deg)': null,top: 0, left: '102.31px'}} src="/navbar/pentagono.png" alt="pentagono" height={22} width={22} />
                    <Image style={{transition: '.4s', position: 'absolute', transform: animLogoStep === 1 ? 'rotate(-90deg)': animLogoStep === 3 ? 'rotate(180deg)' : null,top: animLogoStep === 1 ? 10 : 0, left: '137.88px'}} src="/navbar/diamante.png" alt="diamante" height={22} width={22} />
                </div>
                <div id="divLetras">
                    <Image src="/navbar/b.png" alt="b" height={10} width={7} objectFit="contain" />
                    <Image src="/navbar/a.png" alt="a" height={10} width={10} objectFit="contain" />
                    <Image src="/navbar/c.png" alt="c" height={10} width={9} objectFit="contain" />
                    <Image src="/navbar/a.png" alt="a" height={10} width={10} objectFit="contain" />
                    <Image src="/navbar/n.png" alt="n" height={10} width={9} objectFit="contain" />
                </div>
            </div>
            <div id="navUtilities">
                <a id="navUtilitiesButton" href="#">
                    <p id="navUtilitiesButtonText">Quiero mi mazo</p>
                </a>
            </div>
        </nav>
    )
}