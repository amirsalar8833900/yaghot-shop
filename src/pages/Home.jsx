import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import "./Home.css"

export default function Home() {
  return (
    <div>
      <ImageSlider slides={SliderData} />
    </div>
  )
}
