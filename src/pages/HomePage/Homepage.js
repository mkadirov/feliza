import React from 'react'
import {Box, Container, Grid} from '@mui/material'
import HomePageHeader from '../../components/Header'
import Slider from '../../components/Sliders/Slider'
import SliderMain from '../../components/Sliders/Slider'
import CategoryCard from '../../components/HomePage/CategoryCard'
import SaleBox from '../../components/HomePage/SaleBox'
import { CategoryCardList, accessoiresSliderList, categorySliderList, shoesSliderList } from '../../data/DataList'
import MainFooter from '../../components/Footer/MainFooter'
import SmallCards from '../../components/Global/Cards/SmallCards'
import BestSellerBox from '../../components/HomePage/BestSellerBox'
import MainCategoryContainer from '../../components/HomePage/MainCategoryContainer'
import CategorySlidersContainer from '../../components/HomePage/CategorySlidersContainer'
import CategoryIconsBox from '../../components/HomePage/CategoryIconsBox'



function Homepage() {
    const list = CategoryCardList;
    const clothesCategoryList = categorySliderList;
    
  return (
      <Box>
        <Grid container justifyContent='center'>
            <Grid item xs={12}  sx={{marginTop: {xs: '6vh', sm: '60px', lg: '60px'}}}>
              <SliderMain/>
              <SaleBox/>
              <CategoryIconsBox/>
              {/* <BestSellerBox/> */}
              <MainCategoryContainer list={clothesCategoryList} />
              <CategorySlidersContainer categoryId={5}/>
              <CategorySlidersContainer categoryId={6}/>
              <MainCategoryContainer list={accessoiresSliderList} />
              <CategorySlidersContainer categoryId={5}/>
              <CategorySlidersContainer categoryId={6}/>
              <MainCategoryContainer list={shoesSliderList} />
              <CategorySlidersContainer categoryId={5}/>
              <CategorySlidersContainer categoryId={6}/>
              <Grid container spacing={1}>
              {
                list.map((item, idx) => {
                    return(
                        <Grid item xs = {12} md = {4} key={idx + item.title}>
                          <CategoryCard  item={item}/>
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