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
  return (
    <div className="">
      <Topnav />
      <Navbar />
      <PhoneMenu />
      <DownloadSection />
      <ShippingMessage />
      <Women
        imagePhone={legacyP}
        imageLarge={legacyL}
        data={womenLegacy}
        color="white"
      />

      <Women
        imagePhone={womenP}
        imageLarge={womenL}
        data={womenData}
        color="black"
      />

      <Women
        imagePhone={soloP}
        imageLarge={solol}
        data={womenElevate}
        color="black"
      />
    </div>
  );
}

export default App;
