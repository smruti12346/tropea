import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { url } from "@/Auth";
import Image from "next/image";
const CumSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Set a breakpoint for mobile screens (adjust as needed)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Set a breakpoint for tablets (adjust as needed)
        settings: {
          slidesToShow: 2, // Show 2 slides at a time on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // Set a breakpoint for larger screens (adjust as needed)
        settings: {
          slidesToShow: 4, // Show 4 slides at a time on larger screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <div className="card-menu">
          <div className="card  ">
            <Image
              src={`/img/carousel1.webp`}
              alt="Image 1"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="card-menu">
          <div className="card  ">
            <Image
              src={`/img/carousel2.webp`}
              alt="Image 2"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="card-menu">
          <div className="card  ">
            <Image
              src={`/img/carousel3.webp`}
              alt="Image 3"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="card-menu">
          <div className="card  ">
            <Image
              src={`/img/carousel4.webp`}
              alt="Image 4"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="card-menu">
          <div className="card ">
            <Image
              src={`/img/carousel5.webp`}
              alt="Image 5"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="card-menu">
          <div className="card">
            <Image
              src={`/img/carousel6.webp`}
              alt="Image 6"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Add more cards here */}
      </Slider>
    </div>
  );
};

export default CumSlider;
