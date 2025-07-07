import Image from "next/image"

export const NavBar = () => {
    return(
        <nav id="nav">
            <Image src="/logo.png" alt="logo" id="navLogo" width={200} height={200} />
            <div id="navUtilities">
            <div id="navUtilitiesAboutContainer">
                <Image src="/aboutIcon.png" alt="about icon" id="navUtilitiesAboutIcon" width={20} height={20} />
                <p id="navUtilitiesAboutText">i</p>
            </div>
            <a id="navUtilitiesButton" href="#">
                <p id="navUtilitiesButtonText">Quiero mi mazo</p>
            </a>
            </div>
        </nav>
    )
}