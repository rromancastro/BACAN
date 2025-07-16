"use client"

import { useInView } from "react-intersection-observer";
import { NavBar } from "./components";
import { FifthSection, FirstSection, SecondSection, ThirdSection, SixthSection, SeventhSection, EigthSection, ThirdSectionMobile} from "./sections";
import { FourthSection } from "./sections/FourthSection";


export default function Home() {

  //logica color de fondo fourth section inview
    const { ref, inView } = useInView({
        threshold: .25, 
    });

  return (<div style={{transition: '1.5s', backgroundColor: inView ? '#F8CD78' : '#FFFFFF'}}>
      <section id="header">
        <NavBar />
        <FirstSection />
      </section>

      <SecondSection />

      <ThirdSection />
      <ThirdSectionMobile />

      <div ref={ref}>
        <FourthSection />
      </div>

      <FifthSection />

      <SixthSection />

      <SeventhSection />

      <EigthSection />

  </div>);
}
