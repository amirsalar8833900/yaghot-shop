import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import "./Home.css";
import About from "./About"
export default function Home() {
  return (
    <div>
      <div className="home-title">
        <h1>محصولات پر طرفدار</h1>
      </div>
      <ImageSlider slides={SliderData} />
      <About/>
    </div>
    
  );
}
