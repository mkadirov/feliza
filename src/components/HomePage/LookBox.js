import { Box, Card, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { categorySliderList, productList } from '../../data/DataList'
import { Link } from 'react-router-dom'
import MyContext from '../Context/MyContext'

function LookBox() {

    const {isUzbek} = useContext(MyContext)

    const list = categorySliderList
    
       const box = {
          height: '400px',
          overflowX: 'hidden',
          overflowY: 'hidden',
          
        }
        const content = {
          overflowX: 'scrollY'
        }
     
  return (
    <Box>
        <Typography variant='h4' sx={{marginLeft: 2}}>
            #Kategoriyalar
        </Typography>
        <Box sx={{marginY: 2}} className="main-box">
      
      <div id="slider" className='look-slider'>
         
         {
          list.map(item => {
              return(     
                  <Box className ='scrollable-content'>
                      <Link to={`/products/${item.id}`}>
                      <img src={item.url} alt="" />
                      <Box sx={{position: 'relative', left: '30px', 
                          bottom: '50px', backgroundColor: 'white', 
                          color: 'black' , paddingLeft: 2}}>
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
      {/* Add more content as needed */}
    
      </Box>
    </Box>
  )
}

export default LookBox