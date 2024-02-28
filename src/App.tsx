import { Routes, Route } from "react-router-dom";
import Home from "./index";
import About from "./pages/about";
import NavBar from "./components/NavBar";
import imagePath from "./assets/img/MFW.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  let items = ["About", "Contacts", "Projects", "Educations"];
  return (
    <>
      <div>
        <NavBar brandName="." imageSrcPath={imagePath} navItems={items} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About name="Fariz" />} />
      </Routes>
    </>
  );
}

export default App;
