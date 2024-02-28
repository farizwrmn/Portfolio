import { Routes, Route } from "react-router-dom";
import Home from "./index";
import About from "./pages/about";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/img/MFW.png";

function App() {
  let items = ["Home", "About", "Contacts"];
  return (
    <>
      <div>
        <NavBar
          brandName="My Portfolio"
          imageSrcPath={imagePath}
          navItems={items}
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About name="Fariz" />} />
      </Routes>
    </>
  );
}

export default App;
