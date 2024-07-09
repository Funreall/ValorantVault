import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./mainComponents/Header";
import Footer from "./mainComponents/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
