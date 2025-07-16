"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react";

export const Formas = () => {

    const [animacionState, setAnimacionState] = useState(false);
    const [animar, setAnimar] = useState(false);

    const intervalRef = useRef(null);

  useEffect(() => {
    if (animacionState) {
      intervalRef.current = setInterval(() => {
        setAnimar(prev => !prev);
      }, 400);
    } else {
      clearInterval(intervalRef.current);
      setAnimar(false);
    }

    // limpieza en desmontaje o cambio de animacionState
    return () => clearInterval(intervalRef.current);
  }, [animacionState]);


  //mobile


    const [animacionMobileState, setAnimacionMobileState] = useState(true);
    const [animarMobile, setAnimarMobile] = useState(false);

    const intervalMobileRef = useRef(null);

  useEffect(() => {
    if (animacionMobileState) {
      intervalMobileRef.current = setInterval(() => {
        setAnimarMobile(prev => !prev);
      }, 1000);
    } else {
      clearInterval(intervalMobileRef.current);
      setAnimarMobile(false);
    }
      // limpieza en desmontaje o cambio de animacionState
    return () => clearInterval(intervalMobileRef.current);
  }, [animacionMobileState]);

  //random
  const numRandom =(min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
    return (<>
        <div onMouseOver={() => setAnimacionState(true)} onMouseOut={() => setAnimacionState(false)} id="formasComponent">
            <Image className="forma" style={{transform: `translateY(${animar ? -10 : 0}px) translateX(${animar ? 15 : 0}px)`}} id="forma1" src="/formasGeometricas/triangulo.png" alt="trianguloVerde" width={34} height={34} />
            <Image className="forma" style={{transform: `translateY(${animar ? 10 : 0}px) translateX(${animar ? 5 : 0}px)`}} id="forma2" src="/formasGeometricas/cuadrado.png" alt="cuadrado" width={30} height={30} />
            <Image className="forma" style={{transform: `translateY(${animar ? -10 : 0}px) translateX(${animar ? -15 : 0}px)`}} id="forma3" src="/formasGeometricas/circulo.png" alt="circulo" width={33} height={33} />
            <Image className="forma" style={{transform: `translateY(${animar ? 10 : 0}px) translateX(${animar ? -15 : 0}px)`}} id="forma4" src="/formasGeometricas/pentagono.png" alt="pentagono" width={35} height={34} />
            <Image className="forma" style={{transform: `translateY(${animar ? -10 : 0}px) translateX(${animar ? 10 : 0}px)`}} id="forma5" src="/formasGeometricas/diamante.png" alt="diamante" width={34} height={34} />
            <Image className="forma" style={{transform: `translateY(${animar ? -15 : 0}px) translateX(${animar ? -3 : 0}px)`}} id="forma6" src="/formasGeometricas/trianguloVerde.png" alt="trianguloVerde" width={34} height={34} />
            <Image className="forma" style={{transform: `translateY(${animar ? 10 : 0}px) translateX(${animar ? -15 : 0}px)`}} id="forma7" src="/formasGeometricas/trianguloVerde.png" alt="trianguloVerde" width={34} height={34} />
            <Image className="forma" style={{transform: `translateY(${animar ? 10 : 0}px) translateX(${animar ? 15 : 0}px)`}} id="forma8" src="/formasGeometricas/pentagono.png" alt="pentagono" width={35} height={34} />
            <Image className="forma" style={{transform: `translateY(${animar ? -10 : 0}px) translateX(${animar ? -15 : 0}px)`}} id="forma9" src="/formasGeometricas/diamante.png" alt="diamante" width={34} height={34} />
            <Image className="forma" style={{transform: `translateY(${animar ? -15 : 0}px) translateX(${animar ? 5 : 0}px)`}} id="forma10" src="/formasGeometricas/cuadrado.png" alt="cuadrado" width={30} height={30} />
            <Image className="forma" style={{transform: `translateY(${animar ? 15 : 0}px) translateX(${animar ? 0 : 0}px)`}} id="forma11" src="/formasGeometricas/circulo.png" alt="circulo" width={33} height={33} />
            <Image className="forma" style={{transform: `translateY(${animar ? 0 : 0}px) translateX(${animar ? 15 : 0}px)`}} id="forma12" src="/formasGeometricas/diamante.png" alt="diamante" width={34} height={34} />
            <Image className="forma" style={{transform: `translateY(${animar ? 10 : 0}px) translateX(${animar ? 15 : 0}px)`}} id="forma13" src="/formasGeometricas/trianguloVerde.png" alt="trianguloVerde" width={34} height={34} />
        </div>

        <div id="formasMobileComponent">
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ? numRandom(-25, 25) : 0}px) translateX(${animarMobile ? numRandom(-25, 25) : 0}px)`}} id="forma1" src="/formasGeometricas/triangulo.png" alt="trianguloVerde" width={34} height={34} />
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ?numRandom(-25, 25) : 0}px) translateX(${animarMobile ?numRandom(-25, 25) : 0}px)`}} id="forma2" src="/formasGeometricas/cuadrado.png" alt="cuadrado" width={30} height={30} />
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ? numRandom(-25, 25) : 0}px) translateX(${animarMobile ? -numRandom(-25, 25) : 0}px)`}} id="forma3" src="/formasGeometricas/circulo.png" alt="circulo" width={33} height={33} />
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ?numRandom(-25, 25) : 0}px) translateX(${animarMobile ? -numRandom(-25, 25) : 0}px)`}} id="forma4" src="/formasGeometricas/pentagono.png" alt="pentagono" width={35} height={34} />
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ? numRandom(-25, 25) : 0}px) translateX(${animarMobile ? numRandom(-25, 25) : 0}px)`}} id="forma5" src="/formasGeometricas/diamante.png" alt="diamante" width={34} height={34} />
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ? numRandom(-25, 25) : 0}px) translateX(${animarMobile ? numRandom(-25, 25) : 0}px)`}} id="forma6" src="/formasGeometricas/trianguloVerde.png" alt="trianguloVerde" width={34} height={34} />
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ?numRandom(-25, 25) : 0}px) translateX(${animarMobile ? -numRandom(-25, 25) : 0}px)`}} id="forma7" src="/formasGeometricas/trianguloVerde.png" alt="trianguloVerde" width={34} height={34} />
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ?numRandom(-25, 25) : 0}px) translateX(${animarMobile ? numRandom(-25, 25) : 0}px)`}} id="forma8" src="/formasGeometricas/pentagono.png" alt="pentagono" width={35} height={34} />
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ? numRandom(-25, 25) : 0}px) translateX(${animarMobile ? -numRandom(-25, 25) : 0}px)`}} id="forma9" src="/formasGeometricas/diamante.png" alt="diamante" width={34} height={34} />
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ? numRandom(-25, 25) : 0}px) translateX(${animarMobile ?numRandom(-25, 25) : 0}px)`}} id="forma10" src="/formasGeometricas/cuadrado.png" alt="cuadrado" width={30} height={30} />
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ?numRandom(-25, 25) : 0}px) translateX(${animarMobile ?numRandom(-25, 25) : 0}px)`}} id="forma11" src="/formasGeometricas/circulo.png" alt="circulo" width={33} height={33} />
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ? numRandom(-25, 25) : 0}px) translateX(${animarMobile ? numRandom(-25, 25) : 0}px)`}} id="forma12" src="/formasGeometricas/diamante.png" alt="diamante" width={34} height={34} />
            <Image className="formaMobile" style={{transform: `translateY(${animarMobile ?numRandom(-25, 25) : 0}px) translateX(${animarMobile ? numRandom(-25, 25) : 0}px)`}} id="forma13" src="/formasGeometricas/trianguloVerde.png" alt="trianguloVerde" width={34} height={34} />
        </div>
    </>)
}