import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SliderImage } from "../../data/DataList";

const list = SliderImage;
export default class SliderMain extends Component {

    
  render() {
    const settings = {
      
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      adaptiveHeight: true
    };
    return (
      <div>
        <Slider {...settings}>

          {
            list.map((item, idx)=> {
              return(
                <div className="slide" >
                  <img src={item} alt="" />
                </div>
              )
            })
          }
        </Slider>
      </div>
    );
  }
}