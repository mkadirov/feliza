import { Box, Button, Drawer, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productList } from '../../data/DataList';
import ProductSlider from '../../components/ProductPage/ProductSlider';
import { AddShoppingCart } from '@mui/icons-material';
import MyContext from '../../components/Context/MyContext';

function Product() {


    const {id} = useParams();
    const list = productList;
    const product = list.find(item => item.id == id);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const navigate = useNavigate();
    const {addToBasket, addToLastSeenList} = useContext(MyContext);
    

    useEffect(() => {
      addToLastSeenList(id);
    }, [])


  return (
    <Box sx={{marginTop: '7vh'}}>
        <ProductSlider list = {product?.url}/>

       <Box sx={{mt: 4}} align='center'>
        <Button variant='outlined' sx={{mr: 2}}>
            Sotib olish
        </Button>
        <Button variant='outlined' endIcon= {<AddShoppingCart/>} onClick={() => {
          addToBasket(id)
          setIsDrawerOpen(true)
        }}>
            Savatchaga
        </Button>
       </Box>

       <Drawer
       anchor='bottom'
       open= {isDrawerOpen}
       onClose={()=> setIsDrawerOpen(false)}
       >
        <Box sx={{width: '100%', height: '40vh'}} >

          <Box align= 'center'>
            
          <Typography  variant='h5' marginTop={3}>
            Maxsulot savatchaga qo'shildi
          </Typography>

          
          <Box marginTop={3}>

            <Button variant='outlined' sx={{mr: 2}} onClick={() =>setIsDrawerOpen(false)}>
              Yopish
            </Button>

            <Button variant='outlined' onClick={()=> {
              setIsDrawerOpen(false)
              navigate('/basket')
            }}>
              Savatchani ko'rish
            </Button>
          </Box>
          
          </Box>
        </Box>
       </Drawer>
    </Box>
  )
}

export default Product