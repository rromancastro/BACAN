"use client"

import { NavBar } from "./components";
import { FifthSection, FirstSection, SecondSection, ThirdSection, SixthSection} from "./sections";
import { FourthSection } from "./sections/FourthSection";


export default function Home() {

  return (<div>
      <section id="header">
        <NavBar />
        <FirstSection />
      </section>

      <SecondSection />

      <ThirdSection />

      <FourthSection />

      <FifthSection />

      <SixthSection />

  </div>);
}
