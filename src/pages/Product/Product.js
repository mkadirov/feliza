import { Box, Button, Drawer, Grid, IconButton, Typography, styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productList } from '../../data/DataList';
import ProductSlider from '../../components/Sliders/ProductSlider';
import { AddShoppingCart } from '@mui/icons-material';
import MyContext from '../../components/Context/MyContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ColorCircle from '../../components/Global/ColorCircle';
import ProductDetailes from '../../components/ProductPage/ProductDetailes';

function Product() {


    const {id} = useParams();
    const list = productList;
    const product = list.find(item => item.id == id);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [buy, setBuy] = useState(false);
    const navigate = useNavigate();
    const {addToBasket, addToLastSeenList, likedList, changeLikedList} = useContext(MyContext);
    
    
    

    useEffect(() => {
      addToLastSeenList(id);
    }, [])


    function addProductToBasket(size) {
      addToBasket(id, size)
      setIsDrawerOpen(false)
    }

    function buyProduct(size) {
      setIsDrawerOpen(false)
    }

    const SliderContainer = styled(Box)({
      width: '100%',
      height: '60vh',
      position: 'relative'
    })

    const FavoriteBox = styled(Box)({
      backgroundColor: 'rgba(255, 255, 255, 0.432)', 
       
      height: '35px', 
      width: '35px', 
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    })

    const colors = list.filter(item => item.barcode == product.barcode)
    

  return (
    <Box sx={{marginTop: '7vh'}} id='page-head'>

        <SliderContainer >
          <ProductSlider list = {product?.url}/>
          <Box sx={{position: 'absolute', right: '10px', bottom: '10px'}}>
            <FavoriteBox sx={{color: 'primary.main',}} onClick = {() => changeLikedList(id)}>
              {
                likedList.includes(id)? <FavoriteIcon/> :<FavoriteBorderIcon />
              }
            </FavoriteBox>
          </Box>
        </SliderContainer>

       <Grid container display='flex' justifyContent='center'>
        <Grid item xs= {11}>
          <Box sx={{mt: 4}} >

            <Box display='flex' justifyContent='space-between'>
              <Typography>
                {
                  product.title
                }
              </Typography>
              <Typography>
                {
                  product.price
                }
                {" So'm"}
              </Typography>
            </Box>

            <Box marginY={1} display='flex' justifyContent='space-between'>
              <Box display='flex' gap={1}>
                {
                  colors.map(item => {
                    return (
                      <Box key={item.color} onClick = {() => navigate(`/product/${item.id}`)}>
                        <ColorCircle color={item.color} key={item.color}/>
                      </Box>
                    )
                  })
                }
              </Box>

              <Typography>
                {product.color}
              </Typography>
            </Box>

            <Button fullWidth variant='contained' sx={{mr: 2}} onClick={() => {
              setBuy(false);
              setIsDrawerOpen(true)
            }}>
              Savatchaga
            </Button>
            <Button fullWidth sx={{mt: 1}} variant='outlined' endIcon= {<AddShoppingCart/>} onClick={() => {
              setBuy(true)
              setIsDrawerOpen(true)
            }}>
              Sotib olish
            </Button>
          </Box>

          <Box  sx={{ mb: 2}}>
            <ProductDetailes/> 
          </Box>
        </Grid>
       </Grid>

       <Drawer
       anchor='bottom'
       open= {isDrawerOpen}
       onClose={()=> setIsDrawerOpen(false)}
       >
        <Box sx={{width: '100%', height: '40vh'}} >

          <Box align= 'center'>
            
          <Typography  variant='h5' marginTop={3}>
            O'lchamni tanlang
          </Typography>

          
          <Box marginTop={3} px={1}>
            {
              product.sizes.map(item => {
                const isActive = item.quantity > 0
                return (
                  <Box key={item.size}
                       py={1} 
                       sx={{borderBottom: '1px solid lightgray'}} 
                       display='flex' 
                       justifyContent='space-between'
                       onClick= {() => (isActive? (buy ?buyProduct(item.size) : addProductToBasket(item.size)  ) : null)}
                       >
                    <Typography color={isActive? 'primary.main': 'secondary'} sx={{ml: 1}}>
                     {item.size}
                    </Typography>
                    {
                      !isActive && <Box>
                            <Typography>
                              Sotuvda mavjud emas
                            </Typography>
                         </Box>
                    }
                  </Box>
                )
              })
            }
          </Box>
          
          </Box>
        </Box>
       </Drawer>
    </Box>
  )
}

export default Product