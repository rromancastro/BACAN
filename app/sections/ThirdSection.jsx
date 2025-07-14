"use client"
import Image from "next/image";
import { useState } from "react";

export const ThirdSection = () => {
  //logica animaciones cards

//card 1
    const [card1Zoom, setCard1Zoom] = useState(1);

//card 2
    const [animarCard2, setAnimarCard2] = useState(false);

//card 3
    const [animarCard3, setAnimarCard3] = useState(false);

//card 5 
    const [animarCard5, setAnimarCard5] = useState(false);

//card 6 
    const [mostrarEstrellaNumero, setMostrarEstrellaNumero] = useState(0);
    const [animEnCurso, setAnimEnCurso] = useState(false);
    
    let intervalCard6;

    const handleAnimCard6 = () => {
      if (!animEnCurso) {
        setAnimEnCurso(true);
        for (let i = 0; i < 7; i++) {
          intervalCard6 = setTimeout(() => {
            setMostrarEstrellaNumero(i + 1);
          }, 300 * i);
        }
      } else {
        setAnimEnCurso(false);
        clearInterval(intervalCard6);
      }
};

    // Limpiar el intervalo después de que se complete la animación
    const handleClearCard6 = () => {
  clearInterval(intervalCard6);
};
    

    return (
        <section id="thirdSection">
        <h2 id="thirdSectionH2">APTO PARA<br />COMPETIDORES<br />NATOS</h2>
        <div id="thirdSectionCardsContainer">
          <div onMouseOver={() => setCard1Zoom(1.5)} onMouseLeave={() => {setCard1Zoom(1)}} style={{gap: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gridArea: 'area1', backgroundColor: '#F8CD78', borderRadius: '16px', padding: '24px'}}>
            <h3 style={{fontWeight: '600',fontSize: '16px', color: '#564421'}}>VELOCIDAD</h3>
            <p style={{fontWeight: '400', fontSize: '12px', color: '#564421'}}>Si eres un tortuga, despierta! Aquí no te esperan para cruzar la calle.</p>
            <div style={{position: 'absolute', top: 90, right: 25,height: '213px', width: '268px', objectFit: 'contain', overflow: 'hidden', borderRadius: '16px', transform: 'rotate(-8deg)'}}>
                <Image className="card1Image" src="/thirdSectionImages/card1.png" alt="mazo" width={500} height={500} style={{transition: `.5s`,position: 'absolute', height: '213px', width: '268px', objectFit: 'cover', transform: `scale(${card1Zoom})`}}/>
            </div>
          </div>

          <div onMouseOver={() => setAnimarCard2(true)} onMouseOut={() => setAnimarCard2(false)} style={{gap: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gridArea: 'area2', backgroundColor: '#FF8283', borderRadius: '16px', padding: '24px'}}>
            <h3 style={{fontWeight: '600', fontSize: '16px', color: '#5A2020'}}>AGILIDAD</h3>
            <p style={{fontWeight: '400', fontSize: '12px', color: '#5A2020'}}>Las cartas especiales te pueden dar una gran ventaja sobre tus competidores, dales caña robando sus cartas!</p>
            <Image className="card2" src="/thirdSectionImages/card2_2.png" alt="carta" width={500} height={500} style={{transition: 1, objectFit: 'contain', position: 'absolute', width: '157px', height: '179px', left: '55%', top: '-40px', transform: animarCard2 ? 'rotate(8deg)' : null}} />
            <Image className="card2" src="/thirdSectionImages/card2_1.png" alt="carta" width={500} height={500} style={{transition: 1, objectFit: 'contain', position: 'absolute', width: '157px', height: '179px', left: '40%', top: '-40px', transform: animarCard2 ? 'rotate(8deg)' : null}} />
          </div>

          <div onMouseOver={() => setAnimarCard3(true)} onMouseOut={() => setAnimarCard3(false)} style={{gap: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gridArea: 'area3', backgroundColor: '#7ABDEC', borderRadius: '16px', padding: '24px'}}>
            <div>
                {animarCard3 ? <Image src="/thirdSectionImages/card3_2.png" alt="mazo" width={200} height={100} style={{objectFit: 'contain'}}/>
                : <Image src="/thirdSectionImages/card3_1.png" alt="mazo" width={200} height={100} style={{objectFit: 'contain'}}/>}        </div>
            <h3 style={{fontWeight: '600', fontSize: '16px', color: '#225274'}}>MEMORIA</h3>
            <p style={{fontWeight: '400', fontSize: '12px', color: '#225274'}}>No olvides tu cartas, porque no podras verlas así de fácil.</p>
          </div>

          <div style={{gap: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gridArea: 'area4', backgroundColor: '#EF91CD', borderRadius: '16px'}}>
            <h3 style={{fontWeight: '600', fontSize: '16px', color: '#7F225D', padding: '24px'}}>CONCENTRACIÓN</h3>
            <Image style={{position: 'absolute', width: '100%', height: '80%',objectFit: 'cover', bottom: 0, borderRadius: '16px', objectPosition: 'top'}} src="/thirdSectionImages/card4.png" alt="mazo" width={200} height={200}/>
          </div>

          <div onMouseOver={() => setAnimarCard5(true)} onMouseLeave={()=>setAnimarCard5(false)} style={{gap: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gridArea: 'area5', overflow: 'hidden',backgroundColor: '#B1D18D', borderRadius: '16px', padding: '24px'}}>
            <h3 style={{fontWeight: '600', fontSize: '16px', color: '#2B440E'}}>ESTRATEGIA</h3>
            <p style={{fontWeight: '400', fontSize: '12px', color: '#2B440E'}}>Arma tu jugada,<br />las cartas te<br />acompañan.</p>
            <div style={{position: 'absolute', display: 'flex', rotate: '-15deg', right: '60px'}}>
              <div style={{transition: '.5s', display: 'flex', flexDirection: 'column', transform: animarCard5 ? 'translateY(80px)' : 'translateY(0px)'}}>
                <Image style={{width: '79px', height: '107px', objectFit: 'contain'}} src="/thirdSectionImages/card511.png" alt="carta" width={300} height={300} />
                <Image style={{width: '79px', height: '107px', objectFit: 'contain'}} src="/thirdSectionImages/card512.png" alt="carta" width={300} height={300} />
                <Image style={{width: '79px', height: '107px', objectFit: 'contain'}} src="/thirdSectionImages/card513.png" alt="carta" width={300} height={300} />
              </div>
              <div style={{transition: '.5s', display: 'flex', flexDirection: 'column', transform: animarCard5 ? 'translateY(135px)' : 'translateY(145px)'}}>
                <Image style={{width: '79px', height: '107px', objectFit: 'contain'}} src="/thirdSectionImages/card521.png" alt="carta" width={300} height={300} />
                <Image style={{width: '79px', height: '107px', objectFit: 'contain'}} src="/thirdSectionImages/card522.png" alt="carta" width={300} height={300} />
              </div>
              <div style={{transition: '.5s', display: 'flex', flexDirection: 'column', transform: animarCard5 ? 'translateY(80px)' : 'translateY(200px)'}}>
                <Image style={{width: '79px', height: '107px', objectFit: 'contain'}} src="/thirdSectionImages/card531.png" alt="carta" width={300} height={300} />
                <Image style={{width: '79px', height: '107px', objectFit: 'contain'}} src="/thirdSectionImages/card532.png" alt="carta" width={300} height={300} />
                <Image style={{width: '79px', height: '107px', objectFit: 'contain'}} src="/thirdSectionImages/card533.png" alt="carta" width={300} height={300} />
              </div>
            </div>
          </div>

          <div onMouseOver={handleAnimCard6} onMouseLeave={handleClearCard6} style={{gap: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gridArea: 'area6', backgroundColor: '#F8CD78', borderRadius: '16px', padding: '24px'}}>
            <div style={{display: 'flex'}}>
              <Image src={'/thirdSectionImages/card6corona.png'} alt="corona" width={100} height={80} style={{objectFit: 'contain', width: '100%'}}/>
              <Image src={'/thirdSectionImages/card6estrella.png'} alt="corona" width={20} height={20} style={{transition: '.3s', objectFit: 'contain', position: 'absolute', right: '37%', opacity: mostrarEstrellaNumero == 1 || mostrarEstrellaNumero == 4 ? 1 : 0}}/>
              <Image src={'/thirdSectionImages/card6estrella.png'} alt="corona" width={20} height={20} style={{transition: '.3s', objectFit: 'contain', position: 'absolute', left: '32%', top: '45%', opacity: mostrarEstrellaNumero == 2 || mostrarEstrellaNumero == 5 || mostrarEstrellaNumero == 6 ? 1 : 0}}/>
              <Image src={'/thirdSectionImages/card6estrella.png'} alt="corona" width={14} height={14} style={{transition: '.3s', objectFit: 'contain', position: 'absolute', right: '35%', top: '70%', opacity: mostrarEstrellaNumero == 3 || mostrarEstrellaNumero == 5 ? 1 : 0}}/>

            </div>
            <h3 style={{fontWeight: '600', fontSize: '16px', color: '#564421'}}>SUERTE</h3>
            <p style={{fontWeight: '400', fontSize: '12px', color: '#564421'}}>Las cartas estan hechadas, puede que te toque algo bueno. No lo desperdicies.</p>
          </div>
        </div>
      </section>
    )
}