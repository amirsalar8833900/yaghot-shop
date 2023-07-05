import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Accessories from "./pages/Accessories";
import Beauty from "./pages/Beauty";
import Jewerly from "./pages/Jewerly";
import Parfum from "./pages/Parfum";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Detail1 from "./pages/Detail1";
import Detail2 from "./pages/Detail2";
import Detail3 from "./pages/Detail3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accessiroes" element={<Accessories />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/jewrely" element={<Jewerly />} />
          <Route path="/parfum" element={<Parfum />} />

          <Route path="/beauty/detail/:id" element={<Detail />} />
          <Route path="/accessiroes/detail1/:id" element={<Detail1 />} />
          <Route path="/jewrely/detail2/:id" element={<Detail2 />} />
          <Route path="/parfum/detail3/:id" element={<Detail3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
