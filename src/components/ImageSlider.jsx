import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          decoding="async"
          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
          alt="Image 1"
          data-lazy-src="image1.jpg"
        />
        <noscript>
          <img decoding="async" src="image1.jpg" alt="Image 1" />
        </noscript>
      </div>
      <div>
        <img
          decoding="async"
          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
          alt="Image 2"
          data-lazy-src="image2.jpg"
        />
        <noscript>
          <img decoding="async" src="image2.jpg" alt="Image 2" />
        </noscript>
      </div>
      <div>
        <img
          decoding="async"
          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
          alt="Image 3"
          data-lazy-src="image3.jpg"
        />
        <noscript>
          <img decoding="async" src="image3.jpg" alt="Image 3" />
        </noscript>
      </div>
    </Slider>
  );
};
