import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'ease-in-out',
    arrows: false,
  };

  const slides = [
   
    "https://images.pexels.com/photos/8638305/pexels-photo-8638305.jpeg",
     "https://images.pexels.com/photos/8386641/pexels-photo-8386641.jpeg",
    "https://images.pexels.com/photos/8386654/pexels-photo-8386654.jpeg",
    "https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg",
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[250px] md:h-[500px] object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

