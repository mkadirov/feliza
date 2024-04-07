import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../../components/Context/MyContext'
import BasketCard from '../../components/Global/Cards/BasketCard'
import { productList } from '../../data/DataList';
import Footer from '../../components/Footer/Footer';
import { getCartItemsByCustomerId } from '../../api/Basket';

function BasketPage() {

  const {cardItems} = useContext(MyContext);
  // const [productList, setProductList] = useState([])
  // const [listSize, setListSize] = useState(0)

  

  // useEffect(() => {
    
  //   const fetchData = async () => {
      
  //     const res = await getCartItemsByCustomerId(user.customerId);
  //     if(res.success) {
  //       setProductList(res.data)
  //       setListSize(res.data.length)
  //     }
  //   }
  //   fetchData();
  // }, [listSize])

  let sum = 0;

  return (
    <Box sx={{marginTop: '12vh', minHeight: '75vh', paddingBottom: '5vh'}}>
        <Box aligen= 'center'>
            {
              cardItems.map(item => {
                sum = sum + (item.sellPrice * item.quantity);
                return(
                  <BasketCard key={item.cartItemId} item= {item}/>
                )
              })
            }
        </Box>
        <Footer sum = {sum}/>
    </Box>
  )
}

export default BasketPage