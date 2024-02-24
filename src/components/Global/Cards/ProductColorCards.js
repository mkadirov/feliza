import React from 'react'
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductColorCards({products, id}) {
    
  return (
    <Box>
        <Grid container spacing={2}>
            {
                products.map(item => {
                    return (
                        <Grid item xs={2} md= {1} key={item.product?.id}>
                            <Link to={`/product/${item.product?.id}`}>
                                <Box sx={{height: {xs:'80px'},  overflow: 'hidden'}} >
                                    <img src={item.productImagesList[0]?.url} alt="" />
                                </Box>
                            </Link>
                        </Grid>
                    )
                })
            }
        </Grid>
    </Box>
  )
}

export default ProductColorCards