import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./mainComponents/Header";
import Footer from "./mainComponents/Footer";
import NotFound from "./pages/NotFound";
import Skins from "./pages/Skins";
import Buddies from "./pages/Buddies";
import Agents from "./pages/Agents";
import Profile from "./pages/Profile";
import Sprays from "./pages/Sprays";
import SingleAgent from "./mainComponents/SingleAgent";
import Background from "./mainComponents/Background";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skins">
          <Route index element={<Skins />} />
          <Route
            path=":weaponName"
            element={<h1 style={{ color: "white" }}>Done</h1>}
          />
          <Route path="*" element={<NotFound />} />
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
