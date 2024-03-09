import React from 'react'
import {Box, Container, Grid} from '@mui/material'
import HomePageHeader from '../../components/Header'
import Slider from '../../components/Sliders/Slider'
import SliderMain from '../../components/Sliders/Slider'
import CategoryCard from '../../components/HomePage/CategoryCard'
import SaleBox from '../../components/HomePage/SaleBox'
import { CategoryCardList } from '../../data/DataList'
import MainFooter from '../../components/Footer/MainFooter'
import SmallCards from '../../components/Global/Cards/SmallCards'


function Homepage() {
    const list = CategoryCardList;
  return (
    
    
      <Box>
        <Grid container justifyContent='center'>
            <Grid item xs={12}  sx={{marginTop: {xs: '8vh', sm: '70px', lg: '80px'}}}>
              <SliderMain/>
              <SaleBox/>
              
              <Grid container spacing={1}>
              {
                list.map((item, idx) => {
                    return(
                        <Grid item xs = {12} md = {4}>
                          <CategoryCard key={idx + item.title} item={item}/>
                        </Grid>
                    )
                })
              }
              </Grid>
            </Grid>
        </Grid>
        
    </Box>
    
    
  )
}

export default Homepage