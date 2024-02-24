import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MyContext from '../../Context/MyContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { useEffect } from 'react';


export default function ProductCard({item}) {

  const {likedList, changeLikedList} = useContext(MyContext)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const index = getIndexById(item.product.id)
    if( index >= 0){
      setIsLiked(true)
    }
  }, [likedList])

  const getIndexById = (targetId) => {
    return likedList.findIndex(obj => obj?.product?.id == targetId);
  };
  
  return (
    
    <Card sx={{ maxWidth: 445, border: 0}} >
      <Link to={`/product/${item.product?.id}`}>
      <Box sx={{height: {xs: '300px', md: '500px'}, overflow: 'hidden'}}>
        <img src={item.productImagesList[0]?.url} alt="" /> 
      </Box>
      </Link>
      <CardContent>

        <Box display='flex' justifyContent='space-between'>
          <Link to={`/product/${item.product.id}`}>
            <Typography gutterBottom  fontSize={16} component="div">
              {item.product.nameUZB}
            </Typography>
          </Link>

          <Box sx={{color: 'primary.main'}} onClick = {() => {
              changeLikedList(item.product.id)
              setIsLiked(!isLiked)
            }
          }>
              {
                isLiked? <FavoriteIcon/> :<FavoriteBorderIcon />
              }
          </Box>
        </Box>

        <Typography fontSize={12}>
            {item.product.sellPrice} so'm
        </Typography>
        
      </CardContent>
    </Card>
    
  );
}