import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./mainComponents/Header";
import Footer from "./mainComponents/Footer";
import NotFound from "./pages/NotFound";
import Buddies from "./pages/Buddies";
import Agents from "./pages/Agents";
import Profile from "./pages/Profile";
import Sprays from "./pages/Sprays";
import SingleAgent from "./mainComponents/SingleAgent";
import SkinsCollection from "./pages/SkinsCollection";
import SkinsArmory from "./pages/SkinsArmory";
import WeaponSkins from "./mainComponents/WeaponSkins";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skins/collection" element={<SkinsCollection />} />
        <Route path="/skins/armory">
          <Route index element={<SkinsArmory />} />
          <Route path=":weaponName" element={<WeaponSkins />} />
        </Route>
        <Route path="/agents">
          <Route index element={<Agents />} />
          <Route path=":agentId" element={<SingleAgent />} />
        </Route>
        <Route path="/buddies" element={<Buddies />} />
        <Route path="/sprays" element={<Sprays />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
