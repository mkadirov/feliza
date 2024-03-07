import React from 'react'
import {Box, Button, Drawer, Grid, Typography} from '@mui/material'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/Global/Cards/ProductCard';
import { productList } from '../../data/DataList';
import { useState } from 'react';
import { useEffect } from 'react';
import { getProductListByCategoryID } from '../../api/Product';
import TuneIcon from '@mui/icons-material/Tune';
import SortMenuButton from '../../components/Products/SortMenuButton';
import FilterDetailes from '../../components/Products/FilterDetailes/FilterDetailes';


function Products() {

  const [products, setProducts] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async() => {
      const res = await getProductListByCategoryID(id);
      if(res.success) {
        setProducts(res.data)
      }
    }

    fetchData();
  }, [id])

  useEffect(() => {
    const fetchData = async() => {
      const res = await getProductListByCategoryID(id);
      if(res.success) {
        setProducts(res.data)
      }
    }

    fetchData();
  }, [id])
  
    
  return (
    <Box sx={{pt: '50px'}} id='product_page' >
       <Box align='center'> 
       <h4 className="logo" >
           {id} 
        </h4>
       </Box>

       <Box sx={{display: 'flex', justifyContent: 'space-between', paddingX: 1}}>
        
        <SortMenuButton/>
        <Button 
          startIcon = {<TuneIcon/>}  
          variant='outlined' 
          size='small'
          onClick={() => setIsFilterOpen(true)}
        >
          Filter
        </Button>
       </Box>

       <Grid container py={2} spacing={1} >
        {
          products.map((item, idx) => {
            const bigSize = (idx +1)%3==0
            return(
              <Grid item xs={bigSize? 12 : 6} md= {4} xl={3} key={item.product.id}>
                <ProductCard item={item} bigSize = {bigSize}/>
              </Grid>
            )
          })
        }
      </Grid>

      <Drawer
        anchor='right'
        open = {isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      >
        <Box sx={{height: '100vh', width: '100vw'}}>
          <FilterDetailes setIsFilterOpen = {setIsFilterOpen}/>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Products