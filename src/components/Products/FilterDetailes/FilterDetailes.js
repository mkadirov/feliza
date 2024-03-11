import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import FooterFilterDetailes from './FooterFilterDetailes';
import ColorAccardion from './ColorAccardion';
import SizeAccardion from './SizeAccardion';
import PriceAccardion from './PriceAccardion';
import BrendAccardion from './BrendAccardion';
import { getFilteredProducts } from '../../../api/Product';



function FilterDetailes({setIsFilterOpen, setProducts}) {

  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [minMaxPrice, setMinMaxPrice] = useState([])
  const [list, setList] = useState([])



  useEffect(() => {

    const filterRequset = {

      colors: colors,
      minPrice: minMaxPrice[0]? minMaxPrice[0] : null,
      maxPrice: minMaxPrice[1]? minMaxPrice[1] : null,
      brands: brands,
      sizes: sizes
    }
    // const fetchData = async() => {
    //   const res = await getFilteredProducts(filterRequset, 1);

    //   if(res?.success) {
    //     setList(res.data)
    //   }
    // }

    // fetchData();

    console.log(filterRequset);
  }, [minMaxPrice, sizes, colors, brands])

  
  
  return (
    <Box padding={2}>
        <Box display={'flex'} justifyContent={'start'} marginBottom={2}>
          <IconButton  onClick={() => setIsFilterOpen(false)} >
             X
          </IconButton>
        </Box>

        <Divider sx={{marginBottom: 1}}/>

        <SizeAccardion setSizes = {setSizes} sizes = {sizes}/> 

        <ColorAccardion setColors = {setColors} colors={colors}/>

        <PriceAccardion setMinMaxPrice = {setMinMaxPrice}/>

        <BrendAccardion setBrands = {setBrands} brands = {brands}/>
        
        <FooterFilterDetailes list= {list} setProducts = {setProducts}/>
    </Box>
  )
}

export default FilterDetailes