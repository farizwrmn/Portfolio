import { Routes, Route } from "react-router-dom";
import Home from "./index";
import About from "./pages/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About name="Fariz" />} />
      </Routes>
    </>
  );
}

export default App;
