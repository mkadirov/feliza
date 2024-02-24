import { Box, Typography } from '@mui/material';
import React, { Component } from 'react'
import ProductCard from '../Global/Cards/ProductCard';
import Slider from "react-slick";
import SmallSliderCards from '../Global/Cards/SmallSliderCards';


function SmallSlider({list}) {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };
  return (
    <div>
        
        <Slider {...settings}>
          {
            list.map(item => {
                return(
                    <Box className='smallSliderBox' sx={{width: '100px', pr: 1}} key={item?.product.referenceNumber}>
                        <SmallSliderCards item = {item}/>
                    </Box>
                )
            })
          }
        </Slider >
      </div>
  )
}

export default SmallSlider