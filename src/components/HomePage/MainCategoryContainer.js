import { Box, Button, Card, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { categorySliderList, productList } from '../../data/DataList'
import { Link } from 'react-router-dom'
import MyContext from '../Context/MyContext'

function MainCategoryContainer({image, list, mainImage}) {

    const {isUzbek} = useContext(MyContext)

    
    
    
     
  return (
    <Box className = 'clothes-container' style={{
      width: '100%',
      minHeight: '90vh',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingBottom: '30px'
    }}>

      <Box display={'flex'} justifyContent={'center'}>
        <Box sx={{width: {xs: '60vw' , md: '40vw', lg: '30vw'}, marginTop: 5}}>
           <Box >
              <img src={mainImage} alt="" />
           </Box>

           <Box sx={{backgroundColor: 'rgba(255, 255, 255, 0.6)', color: 'black', textAlign: 'center'}}>
             <Typography variant='h5'>
              Kiyimlar
             </Typography>
           </Box>
        </Box>
      </Box>
      <Box sx={{marginY: 3}} className="main-box">
      
          <div id="slider" className='look-slider'>
         
            {
             list.map(item => {
                 return(     
                     <Box className ='scrollable-content' key = {item.nameUZ}>
                         <Link to={`/products/${item.id}`}>
                         <img src={item.url} alt="" />
                         <Box sx={{position: 'absolute', right: 0, 
                             bottom: '50px', backgroundColor: 'white', 
                             color: 'black' , paddingX: 3, width: '60%'}}>
                             <Typography>
                                 {isUzbek? item.nameUZ : item.nameRU}
                             </Typography>
                         </Box>
                         </Link>
                     </Box>
                 )
             })
            }
        </div>
      </Box>
    </Box>
  )
}

export default MainCategoryContainer