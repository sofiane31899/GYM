import DownloadSection from "./components/DownloadSection";
import Navbar from "./components/Navbar";
import PhoneMenu from "./components/PhoneMenu";
import ShippingMessage from "./components/ShippingMessage";
import Topnav from "./components/Topnav";
import Women from "./components/Women";
import womenP from "./assets/women.jpg";
import womenL from "./assets/womenLarge.jpg";
import legacyL from "./assets/legacyL.jpg";
import legacyP from "./assets/legacyP.jpg";
import solol from "./assets/SoloL.jpg";
import soloP from "./assets/soloP.jpg";
import deuux from "./assets/deux.webp";
import deuuxP from "./assets/deuxP.webp";
import twoL from "./assets/twoL.webp";
import twoP from "./assets/twoP.webp";
import sportL from "./assets/sportL.webp";
import sportP from "./assets/sportP.webp";
import { useState } from "react";

function App() {
  const womenData = {
    title: "GYMSHARK SEAMLESS",
    paragraphe: " There’s a Seamless for everyone. Wanna find yours?",
    button: "FIND YOUR FIT",
  };
  const womenLegacy = {
    title: "LEGACY",
    paragraphe:
      " The lifting collection that combines old school fits with new school features.",
    button: "SHOP LEGACY",
  };
  const womenElevate = {
    title: "ELEVATE YOUR EVERYDAY",
    paragraphe:
      " From brunch to barre, Elevate's comfortable, versatile staples are with you every step of the way.",
    button: "SHOP THE COLLECTION",
  };
  const womenOne = {
    title: "FIND THE ONE",
    paragraphe:
      "Sports bras more trustworthy, supportive and reliable than your ex",
    button: "SHOP",
  };
  const womenTwo = {
    title: "GET YOU A ‘FIT THAT CAN DO BOTH",
    paragraphe:
      "These athleisure staples are your new go-to for literally anything",
    button: "SHOP NOW",
  };
  const womenSport = {
    title: "NOTHING BUT THE BEST",
    paragraphe: "They’re called bestsellers for a reason.",
    button: "SHOP NOW",
  };
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="">
      <Topnav />
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className={`${!openMenu ? "block " : "hidden md:block"}`}>
        <ShippingMessage />
        <DownloadSection />
        <Women
          imagePhone={legacyP}
          imageLarge={legacyL}
          data={womenLegacy}
          style={{
            title: "md:text-white",
            ptag: "md:text-white ",
            button: "md:bg-white md:text-black",
          }}
        />

        <Women
          imagePhone={womenP}
          imageLarge={womenL}
          data={womenData}
          style={{
            title: "md:text-black",
            ptag: "md:text-neutral-700 ",
            button: "md:bg-black md:text-white",
          }}
        />

        <Women
          imagePhone={soloP}
          imageLarge={solol}
          data={womenElevate}
          style={{
            title: "md:text-black",
            ptag: "md:text-neutral-700 ",
            button: "md:bg-black md:text-white",
          }}
        />
        <Women
          imagePhone={deuuxP}
          imageLarge={deuux}
          data={womenOne}
          style={{
            title: "md:text-black",
            ptag: "md:text-neutral-700 ",
            button: "md:bg-black md:text-white",
            one: true,
          }}
        />
        <Women
          imagePhone={twoP}
          imageLarge={twoL}
          data={womenTwo}
          style={{
            title: "md:text-white",
            ptag: "md:text-white ",
            button: "md:bg-white md:text-black",
          }}
        />
        <Women
          imagePhone={sportP}
          imageLarge={sportL}
          data={womenSport}
          style={{
            title: "md:text-black",
            ptag: "md:text-neutral-700 ",
            button: "md:bg-black md:text-white",
          }}
        />
      </div>
    </div>
  );
}

export default App;
