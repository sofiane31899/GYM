import DownloadSection from "./components/DownloadSection";
import Navbar from "./components/Navbar";
import PhoneMenu from "./components/PhoneMenu";
import ShippingMessage from "./components/ShippingMessage";
import Topnav from "./components/Topnav";
import Women from "./components/Women";

function App() {
  return (
    <div className="">
      <Topnav />
      <Navbar />
      <ShippingMessage />
      <DownloadSection />
      <Women />
    </div>
  );
}

export default App;
