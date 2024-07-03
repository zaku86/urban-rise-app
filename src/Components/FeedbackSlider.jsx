import React from "react";
import women from "../assets/women.avif";
import Slider from "react-slick";

const data = [
  {
    img: women,
    text: "“I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn't be happier with the results. The entire process.”",
    name: "-Mary Johnson",
    description: "Homeowner",
  },
  {
    img: women,
    text: "“I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn't be happier with the results. The entire process.”",
    name: "-David Lee",
    description: "Property Developer",
  },
  {
    img: women,
    text: "“I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn't be happier with the results. The entire process.”",
    name: "-Sarah Miller",
    description: "Hotel Owner",
  },
];

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="feedback-container">
        {data.map((el, index) => {
          return (
            <div key={index} className="feedback-cart">
              <div className="image-container4">
                <img src={el.img} />
              </div>
              <div>
                <p className="body-text feedback-text">{el.text}</p>
              </div>
              <div className="homeowner">
                <p className="name">{el.name}</p>
                <p className="name-description">{el.description}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default MultipleItems;
