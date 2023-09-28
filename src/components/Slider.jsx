import React from "react";
import Slider from "react-slick";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="px-4 py-8 mt-4 bg-white rounded-lg shadow-lg">
      <Slider {...settings}>
        <div>
          <div className="slider-point active"></div>
          <div className="slider-text text-center font-bold text-4xl">
            Slider one
          </div>
        </div>
        <div>
          <div className="slider-point"></div>
          <div className="slider-text text-center font-bold text-4xl">
            Slider two
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
