import { Box} from '@mui/material'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import MyContext from '../../components/Context/MyContext'
import SmallCards from '../../components/Global/Cards/SmallCards'
import { getAllProduct } from '../../api/Product';


function FavoritePage() {

    const {likedList, changeLikedList} = useContext(MyContext)
    const [list, setList] = useState([])

    useEffect(() => {
      const fetchData = async() => {
        const res = await getAllProduct();
        if(res.success) {
          const arr = likedList.map(item => item.product.id)
          const newArray = res.data.filter(obj => arr.includes(obj.product.id));
          setList(newArray)
        }
      }
      fetchData();
    }, [likedList])
    

  return (
    <Box sx={{marginTop: '12vh'}} id='favorite_page'>
        {
            list.map((item, idx) => 
                 <SmallCards key={item.product.id} item={item}/> 
            )
        }
    </Box>
  )
}

export default FavoritePage