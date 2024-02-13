import { Box, Fab, Grid, IconButton, Typography } from '@mui/material'
import {AddShoppingCart, Close, Brightness1, DeleteOutline } from '@mui/icons-material'
import React, { useContext } from 'react'
import MyContext from '../../Context/MyContext'
import { grey } from '@mui/material/colors'
import { Link } from 'react-router-dom'

function SmallCards({item}) {

    const {likedList, changeLikedList, addToBasket} = useContext(MyContext)

  return (
    <Box sx={{height: {xs: '180px', md: '600px'}, marginBottom: 2, overflow: 'hidden', pr: 2,pb:2,   borderBottom: '1px solid rgb(234, 87, 116)'}}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Link to={`/product/${item?.product?.id}`}>
                    
                        <Box sx={{height: {xs: '180px', md: '600px'}, overflow: 'hidden'}}>
                           <img src={item?.productImagesList[0]?.url} alt="" />
                        </Box>
                    
                </Link>
            </Grid>
            <Grid item xs={8}>
                <Box display='flex' flexDirection='column' justifyContent='space-between' sx={{height: {xs: '180px', md: '600px'}}}>

                    <Box display='flex' justifyContent='space-between' >
                        <Box>
                        <Typography>
                           {item?.product?.nameUZB}
                        </Typography>
                        <Typography color={grey[400]}>
                          Ref:  {item?.product?.referenceNumber}
                        </Typography>
                        
                        </Box>

                        <Typography>
                            {item?.product?.sellPrice} so'm
                        </Typography>    
                    </Box>

                    <Box display='flex' justifyContent='end'>
                        
                        <Box>
                            <IconButton onClick={()=> {
                                addToBasket(item.product.id)
                                changeLikedList(item.product.id)
                            }} sx={{color:'primary.main'}}>
                                <AddShoppingCart/>
                            </IconButton>
                            <IconButton sx={{marginRight: 1, color: 'primary.main'}} onClick={() => changeLikedList(item?.product?.id)}>
                                <DeleteOutline/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default SmallCards