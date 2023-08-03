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



export default function ProductCard({item}) {

    const {likedList, changeLikedList} = useContext(MyContext)
  return (
    
    <Card sx={{ maxWidth: 445, boxShadow: 'none', border: 0}} >
      <Link to={`/product/${item.id}`}>
      <Box sx={{height: {xs: '300px', md: '500px'}, overflow: 'hidden'}}>
        <img src={item.url} alt="" />
      </Box>
      </Link>
      <CardContent>

        <Box display='flex' justifyContent='space-between'>
        <Link to={`/product/${item.id}`}>
          <Typography gutterBottom  fontSize={16} component="div">
            {item.title}
          </Typography>

          <Typography fontSize={12}>
            {item.price} so'm
          </Typography>
        </Link>

          <IconButton onClick = {() => changeLikedList(item.id)} sx={{color: 'primary.main'}}>
            {
                likedList.includes(item.id)? <FavoriteIcon/> :<FavoriteBorderIcon />
            }
          </IconButton>
          
        </Box>
        
      </CardContent>
    </Card>
    
  );
}