import React from 'react'
import {Box, Container, Grid} from '@mui/material'
import HomePageHeader from '../../components/Header'
import Slider from '../../components/HomePage/Slider'
import SliderMain from '../../components/HomePage/Slider'
import CategoryCard from '../../components/HomePage/CategoryCard'
import SaleBox from '../../components/HomePage/SaleBox'
import { CategoryCardList } from '../../data/DataList'


function Homepage() {
    const list = CategoryCardList;
  return (
    
    <Box>
        <Grid container justifyContent='center'>
            <Grid item xs={12} md= {10} lg={8} sx={{marginTop: {xs: '8vh'}}}>
              <SliderMain/>
              <SaleBox/>
              {
                list.map((item, idx) => {
                    return(
                        <CategoryCard key={idx + item.title} item={item}/>
                    )
                })
              }
            </Grid>
        </Grid>
    </Box>
    
  )
}

export default Homepage