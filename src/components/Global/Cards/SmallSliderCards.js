import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MyContext from '../../Context/MyContext';
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function SmallSliderCards({item}) {

    const {likedList, changeLikedList} = useContext(MyContext)
  return (
    
    <Card sx={{ maxWidth: 445, border: 0, minHeight: 330}} >
      <Link to={`/product/${item.id}`}>
      <Box sx={{height: {xs: '220px', md: '350px'}, overflow: 'hidden'}} >
        <img src={item.productImages[0]?.url} alt="" />
      </Box>
      </Link>
      <CardContent>

        <Box display='flex' justifyContent='space-between'>
          <Link to={`/product/${item.id}`}>
            <Typography gutterBottom  fontSize={14} component="div">
              {item.nameUZB}
            </Typography>
          </Link>
        </Box>

        <Typography fontSize={12}>
          {item.sellPrice} so'm
        </Typography>
        
      </CardContent>
    </Card>
    
  );
}