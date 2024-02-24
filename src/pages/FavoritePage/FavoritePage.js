import { Box, Typography, Grid} from '@mui/material'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import MyContext from '../../components/Context/MyContext'
import SmallCards from '../../components/Global/Cards/SmallCards'
import { getAllProduct } from '../../api/Product';
import boxIcon from '../../assets/icons/empty.png'


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
    <Box>
      <Box sx={{marginTop: '12vh'}} id='favorite_page'>
        {
            list.map((item, idx) => 
                 <SmallCards key={item.product.id} item={item}/> 
            )
        }
      </Box>

      {
        likedList.length == 0 && <Box marginTop={12}>
        <Grid container spacing={2} display={'flex'} textAlign={'center'} justifyContent={'center'}>
          <Grid item xs= {4}>
            <Box sx={{width: '50%', margin: 'auto'}}>
              <img src={boxIcon} alt="" />
            </Box>
            <Typography>
              Sizda hozircha saralangan mahsulotlar röyxati mavjud emas
            </Typography>
          </Grid>
        </Grid>
      </Box>
      }
    </Box>
  )
}

export default FavoritePage