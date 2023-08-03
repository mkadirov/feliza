import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import MyContext from '../../components/Context/MyContext'
import { productList } from '../../data/DataList'
import SmallCards from '../../components/Global/Cards/SmallCards'


function FavoritePage() {

    const {likedList, changeLikedList} = useContext(MyContext)
    const list = productList;

    const getCurrentTime = () => {
      return new Date().getTime();
    };

  return (
    <Box sx={{marginTop: '12vh'}} id='favorite_page'>
        {
            likedList.map((productId, idx) => {
                const item = list.find(product => product.id == productId)
                return <SmallCards key={`${item.id}_${getCurrentTime()}`} item={item}/> 
            })
        }
    </Box>
  )
}

export default FavoritePage