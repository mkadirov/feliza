import { Box, Fab, Grid, IconButton, Typography } from '@mui/material'
import {AddShoppingCart, Close, Brightness1, DeleteOutline } from '@mui/icons-material'
import React, { useContext } from 'react'
import MyContext from '../../Context/MyContext'
import { grey } from '@mui/material/colors'
import { Link } from 'react-router-dom'

function BasketCard({item}) {

    const {basketList, deleteFromBasket} = useContext(MyContext)
    const product = basketList.find(b => b.id == item.id)
  return (
    <Box sx={{height: {xs: '180px', md: '600px'}, marginBottom: 2, overflow: 'hidden', pr: 2,pb:2,   borderBottom: '1px solid grey'}}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Link to={`/product/${item.id}`}>
                <Box sx={{height: {xs: '180px', md: '600px'}, overflow: 'hidden'}}>
                    <img src={item.url} alt="" />
                </Box>
                </Link>
            </Grid>
            <Grid item xs={8}>
                <Box display='flex' flexDirection='column' justifyContent='space-between' sx={{height: {xs: '180px', md: '600px'}}}>

                    <Box display='flex' justifyContent='space-between' >
                        <Box>
                        <Typography>
                           {item.title}
                        </Typography>
                        <Typography color={grey[400]}>
                          Ref:  {item.barcode}
                        </Typography>
                        <Typography>
                            Soni: {product.quantity}
                        </Typography>
                        <Typography>
                            O'lchami: {product.size}
                        </Typography>
                        </Box>

                        <Typography>
                            {item.price * product.quantity} so'm
                        </Typography>

                        
                        
                    </Box>

                    <Box display='flex' justifyContent='end'>
                        
                        <Box>
                            <IconButton sx={{marginRight: 1, color: 'primary.main'}} onClick={() => deleteFromBasket(item.id)}>
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

export default BasketCard