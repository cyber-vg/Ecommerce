import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true, // Show dots
    infinite: true,
    speed: 1000, // Transition speed in milliseconds
    autoplay: true,
    autoplaySpeed: 4000, // Auto-play interval in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true // Pause auto-play on hover
  };

  return (
    <div className=" my-8 bg-green-50  min-w-52  mx-24 rounded-lg overflow-hidden min-h-[440px] bg-slate-100">
    <Slider {...settings} >
     
      <div className="h-[400px] ">
        <img className="w-full h-full object-fill" src="slide1.jpg" alt="Image 1" />
      </div>
      <div className="h-[400px] ">
        <img className="w-full h-full object-fill" src="slide2.jpg" alt="Image 2" />
      </div>
      <div className="h-[400px]">
        <img className="w-full h-full object-fill" src="slide3.jpg" alt="Image 3" />
      </div>
      <div className="h-[400px]">
        <img className="w-full h-full object-fill" src="slide4.jpg" alt="Image 3" />
      </div>
      {/* Add more images as needed */}
    </Slider>
    </div>
  );
};

export default ImageSlider;
