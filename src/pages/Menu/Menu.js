import { Box, Typography } from '@mui/material'
import React from 'react'
import { catalogList } from '../../data/DataList'
import { Link } from 'react-router-dom';

function Menu({setIsDrawerOpen}) {
  const list = catalogList;
  return (
    <Box>
        

        <Box sx={{borderBottom: '1px solid black', py: 2}}>
          {
            list.map((item, idx) => {
              return(
                <Link to={`/products/${item.category}`} key={idx + item.title}>
                <Typography onClick={() => setIsDrawerOpen(false)} my={1}>
                  {item.title}
                </Typography>
                </Link>
              )
            })
          }
        </Box>

        <Box py={2}>
          <Typography >
            Biz haqimizda
          </Typography>
          <Typography py={2}>
            Filiallar
          </Typography>
          <Typography>
            Kontaktlar
          </Typography>
        </Box>
    </Box>
  )
}

export default Menu