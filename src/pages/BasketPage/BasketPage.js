import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import MyContext from '../../components/Context/MyContext'
import BasketCard from '../../components/Global/Cards/BasketCard'
import { productList } from '../../data/DataList';
import Footer from '../../components/Footer/Footer';

function BasketPage() {

  const {basketList} = useContext(MyContext);
  const list = productList;

  let sum = 0;

  return (
    <Box sx={{marginTop: '12vh', minHeight: '75vh', paddingBottom: '5vh'}}>
        <Box aligen= 'center'>
            {
              basketList.map(item => {
                const product = list.find(p => p.id == item.id)
                sum = sum + (product.price * item.quantity);
                return(
                  <BasketCard key={item.id} item= {product}/>
                )
              })
            }
        </Box>

        <Footer sum = {sum}/>
    </Box>
  )
}

export default BasketPage