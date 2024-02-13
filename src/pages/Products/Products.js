import React from 'react'
import {Box, Grid, Typography} from '@mui/material'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/Global/Cards/ProductCard';
import { productList } from '../../data/DataList';
import { useState } from 'react';
import { useEffect } from 'react';
import { getProductListByCategoryID } from '../../api/Product';


function Products() {

  const [products, setProducts] = useState([])
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
  
    
  return (
    <Box sx={{pt: '70px'}} id='product_page' >
       <Box align='center'> 
       <h4 className="logo" >
           {id} 
        </h4>
       </Box>

       <Grid container py={2} spacing={1}>
        {
          products.map((item, idx) => {
            return(
              <Grid item xs={6} md= {4} xl={3} key={item.product.id}>
                <ProductCard item={item} />
              </Grid>
            )
          })
        }
       </Grid>
    </Box>
  )
}

export default Products