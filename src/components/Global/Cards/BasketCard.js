import { Box, Fab, Grid, IconButton, Typography } from '@mui/material'
import {AddShoppingCart, Close, Brightness1, DeleteOutline } from '@mui/icons-material'
import React, { useContext } from 'react'
import MyContext from '../../Context/MyContext'
import { grey } from '@mui/material/colors'
import { Link } from 'react-router-dom'
import ColorCircle from '../ColorCircle'
import { deleteCartItem } from '../../../api/Basket'

function BasketCard({item, setListSize}) {


    const deleteCartItemById = async() => {
        const res = await deleteCartItem(item.cartItemId)
        if(res.success) {
            setListSize(prevSize => prevSize -1)
        }
    }
    
  return (
    <Box sx={{height: {xs: '180px', md: '600px'}, marginBottom: 2, overflow: 'hidden', pr: 2,pb:2,   borderBottom: '1px solid grey'}}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Link to={`/product/${item.productId}`}>
                    <Box sx={{height: {xs: '180px', md: '600px'}, overflow: 'hidden'}}>
                        <img src={item.productImages[0].url} alt="" />
                    </Box>
                </Link>
            </Grid>
            <Grid item xs={8}>
                <Box display='flex' flexDirection='column' justifyContent='space-between' sx={{height: {xs: '180px', md: '600px'}}}>

                    <Box display='flex' justifyContent='space-between' >
                        <Box>
                            <Typography sx={{marginBottom: 3}}>
                               {item.nameUZB}
                            </Typography>
                            <Typography >
                                Soni: {item.quantity}
                            </Typography>
                            <Typography>
                                O'lchami: {item.productSizeVariant.size}
                            </Typography>

                            <Box display= 'flex'>
                                <ColorCircle color = {item.colorCode}/>
                                <Typography sx={{marginLeft: 2}}>
                                    {item.colorNameUZB}
                                </Typography>
                            </Box>
                            <Typography>
                                Art.NR: {item.productSizeVariant.barCode}
                            </Typography>
                        </Box>

                        <Typography>
                            {item.sellPrice * item.quantity} so'm
                        </Typography>
                    </Box>

                    <Box display='flex' justifyContent='end'>
                        
                        <Box>
                            <IconButton sx={{marginRight: 1, color: 'primary.main'}} onClick={deleteCartItemById}>
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