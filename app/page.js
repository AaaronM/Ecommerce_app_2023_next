import BlackLabel from "./components/BlackLabel";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Host from "./components/Host";
import Info from "./components/Info";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import Press from "./components/Press";
import ShoptheLook from "./components/ShoptheLook";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Main />
      <Collection />
      <NewArrivals />
      <Host />
      {/* <Press /> */}
      <Info />
      {/* <ShoptheLook /> */}
      <BlackLabel />
    </div>
  );
}
