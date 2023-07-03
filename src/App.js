import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Accessories from "./pages/Accessories";
import Beauty from "./pages/Beauty";
import Jewerly from "./pages/Jewerly";
import Parfum from "./pages/Parfum";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/jewerly" element={<Jewerly />} />
          <Route path="/parfum" element={<Parfum />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
