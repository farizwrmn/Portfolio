import { Routes, Route } from "react-router-dom";
import Home from "./index";
import About from "./pages/about";
import NavBar from "./components/NavBar";
import imagePath from "./assets/img/MFW.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  return (
    <>
      <NavBar brandName="" imageSrcPath={imagePath} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
