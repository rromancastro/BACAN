import Image from "next/image"
import { Formas } from "../components/Formas"

export const FirstSection = () => {
    return (
            <div id="headerContent">
              <div id="headerContentCenter">
                <Formas />
                <Image src="/corona.png" id="headerCorona" alt="corona" width={25} height={25} />
                <h1 id="headerH1">JUGAR <br />REIR<br />BACAN</h1>
                <a id="navUtilitiesButton" target="_blank" href="https://www.verkami.com/projects/41667-bacan-el-juego-de-cartas-que-convierte-cualquier-mesa-en-pura-risa-y-diversion?utm_source=bacan&utm_medium=web&utm_campaign=verkami">
                  <p id="navUtilitiesButtonText">Quiero mi mazo</p>
                </a>
              </div>
            </div>
    )
}
