import React from 'react'
import {Box, styled, Typography} from '@mui/material'
import UnderlineButton from '../Global/Buttons/UnderlineButton'
import {Link} from 'react-router-dom'


function CategoryCard({item}) {


  return (
    <Link to={`/products/${item.link}`}>
    <Box sx={{width: '100%', height: {xs: '60vh', md: '70vh'}, position: 'relative', overflow: 'hidden', mb: 2}}>
        <img src={item.url} alt="" />
        <Box sx={{
            position: 'absolute',
            top: 20,
            left: 10,
            color: 'white' 
            }}>
            <Typography variant='h4' >
                {item.title}
            </Typography>
            <UnderlineButton text= {"Ko'rish"}/>
        </Box>
    </Box>
    </Link>
  )
}

export default CategoryCard