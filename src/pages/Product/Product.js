import { Box, Button, Drawer, Grid, IconButton, Typography, styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductSlider from '../../components/Sliders/ProductSlider';
import { AddShoppingCart, TurnedIn } from '@mui/icons-material';
import MyContext from '../../components/Context/MyContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductDetailes from '../../components/ProductPage/ProductDetailes';
import { getProductByID, getProductsByRefNumber } from '../../api/Product';
import ProductColorCards from '../../components/Global/Cards/ProductColorCards';

function Product() {


    const {id} = useParams();
    const [item, setItem] = useState('')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [buy, setBuy] = useState(false);
    const {addToBasket, addToLastSeenList, likedList, changeLikedList} = useContext(MyContext);
    const [products, setProducts] = useState([])
    const [isLiked, setIsLiked] = useState(false)
    

    
    useEffect(() => {
      const index = getIndexById(id)
      console.log(index);
      if( index >= 0){
        setIsLiked(true)
        console.log('effect ishladi');
      }
    }, [likedList, id])

    const getIndexById = (targetId) => {
      return likedList.findIndex(obj => obj?.product?.id == targetId);
    };

    

    useEffect(() => {
      const fetchData = async()=> {
        const res = await getProductByID(id);
        if(res.success) {
          setItem(res.data)
          console.log(res.data);
          window.scrollTo({  
            top: 0,
            behavior: "smooth" // Optional: adds smooth scrolling effect
        });
        }
      }
      fetchData();
    }, [id])

    useEffect(() => {
      const fetchData = async() => {
          const res = await getProductsByRefNumber(item.product?.referenceNumber);
          if(res.success) {
              setProducts(res.data)
          }
      }
      fetchData();
  }, [item])


    function addProductToBasket(sizeId) {
      addToBasket(sizeId)
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
    

  return (
    <Box sx={{marginTop: '7vh'}} id='page-head'>

        <SliderContainer >
          <ProductSlider list = {item.productImagesList}/>
          <Box sx={{position: 'absolute', right: '10px', bottom: '10px'}}>
            <FavoriteBox sx={{color: 'primary.main',}} onClick = {() => {

                changeLikedList(id)
                setIsLiked(!isLiked)
              }}>
              {
                isLiked? <FavoriteIcon/> :<FavoriteBorderIcon />
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
                  item.product?.nameUZB
                }
              </Typography>
              <Typography>
                {
                  item.product?.sellPrice
                }
                {" So'm"}
              </Typography>
            </Box>

            <Box marginY={1} display='flex' justifyContent='space-between'>
              <Box flex={1}>
                <ProductColorCards products={products} id= {id}/>
              </Box>

              <Typography>
                {item.product?.color.nameUZB}
              </Typography>
              
            </Box>

            <Button fullWidth variant='contained' sx={{mr: 2}} onClick={() => {
              setBuy(false);
              setIsDrawerOpen(true)
            }}>
              Savatchaga
            </Button>
            {/* <Button fullWidth sx={{mt: 1}} variant='outlined' endIcon= {<AddShoppingCart/>} onClick={() => {
              
              setIsDrawerOpen(true)
            }}>
              Sotib olish
            </Button> */}
          </Box>
          <Box  sx={{ mb: 2}}>
            <ProductDetailes descriptionUZB = {item.product?.descriptionUZB} descriptionRUS = {item.product?.descriptionRUS}/> 
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
              item.productSizeVariantList?.map(item => {
                const isActive = item.quantity > 0
                return (
                  <Box key={item.size}
                       py={1} 
                       sx={{borderBottom: '1px solid lightgray'}} 
                       display='flex' 
                       justifyContent='space-between'
                       onClick= {() => (isActive? (buy ?buyProduct(item.id) : addProductToBasket(item.id)  ) : null)}
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