import React from 'react'
import {Box, Container, Grid} from '@mui/material'
import HomePageHeader from '../../components/Header'
import Slider from '../../components/Sliders/Slider'
import SliderMain from '../../components/Sliders/Slider'
import CategoryCard from '../../components/HomePage/CategoryCard'
import SaleBox from '../../components/HomePage/SaleBox'
import { CategoryCardList, categorySliderList } from '../../data/DataList'
import MainFooter from '../../components/Footer/MainFooter'
import SmallCards from '../../components/Global/Cards/SmallCards'
import BestSellerBox from '../../components/HomePage/BestSellerBox'
import MainCategoryContainer from '../../components/HomePage/MainCategoryContainer'
import CategorySlidersContainer from '../../components/HomePage/CategorySlidersContainer'



function Homepage() {
    const list = CategoryCardList;
    const imageUrl = 'https://images.unsplash.com/photo-1606885118474-c8baf907e998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RofGVufDB8fDB8fHww'
    const clothesCategoryList = categorySliderList;
    const mainImage = 'https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1501005_alternate10?$rl_df_pdp_5_7_a10$'

    const imageUrl2 = 'https://images.unsplash.com/photo-1537204319452-fdbd29e2ccc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGNhcnBldHxlbnwwfHwwfHx8MA%3D%3D'
    const mainImage2 = 'https://st.mngbcn.com/rcs/pics/static/T6/fotos/outfit/S20/67080451_OR-99999999_01.jpg?ts=1699005776448&imwidth=630&imdensity=2'
  return (
    
    
      <Box>
        <Grid container justifyContent='center'>
            <Grid item xs={12}  sx={{marginTop: {xs: '8vh', sm: '60px', lg: '60px'}}}>
              <SliderMain/>
              <SaleBox/>
              {/* <BestSellerBox/> */}
              <MainCategoryContainer list={clothesCategoryList} image={imageUrl} mainImage={mainImage}/>
              <CategorySlidersContainer/>
              <MainCategoryContainer list={clothesCategoryList} image={imageUrl2} mainImage={mainImage2}/>
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