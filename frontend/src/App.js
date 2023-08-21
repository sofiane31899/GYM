import DownloadSection from "./components/DownloadSection";
import Navbar from "./components/Navbar";
import PhoneMenu from "./components/PhoneMenu";
import ShippingMessage from "./components/ShippingMessage";
import Topnav from "./components/Topnav";

function App() {
  return (
    <div>
      <Topnav />
      <Navbar />
      <ShippingMessage />
      <DownloadSection />
    </div>
  );
}

export default App;
