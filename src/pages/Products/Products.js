import React from 'react'
import {Box, Grid, Typography} from '@mui/material'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/Global/Cards/ProductCard';
import { productList } from '../../data/DataList';
import { grey } from '@mui/material/colors';


function Products() {
    const {category} = useParams();
    const list = productList;

    
  return (
    <Box sx={{pt: '70px'}} id='product_page' >
       <Box align='center'> 
       <h4 className="logo" >
            {category}
        </h4>
       </Box>

       <Grid container py={2} spacing={1}>
        {
          list.filter(item => {
            if(category=== 'all_products') return true
            else return item.categoryList.includes(category)
          }).map((item, idx) => {
            return(
              <Grid item xs={6} md= {4} xl={3} key={item.id}>
                <ProductCard item={item}/>
              </Grid>
            )
          })
        }
       </Grid>
    </Box>
  )
}

export default Products