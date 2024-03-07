import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import FooterFilterDetailes from './FooterFilterDetailes';
import ColorAccardion from './ColorAccardion';
import SizeAccardion from './SizeAccardion';
import PriceAccardion from './PriceAccardion';
import BrendAccardion from './BrendAccardion';



function FilterDetailes({setIsFilterOpen}) {
  
  return (
    <Box padding={2}>
        <Box display={'flex'} justifyContent={'start'} marginBottom={2}>
          <IconButton  onClick={() => setIsFilterOpen(false)} >
             X
          </IconButton>
        </Box>

        <Divider sx={{marginBottom: 1}}/>

        <SizeAccardion/> 

        <ColorAccardion/>

        <PriceAccardion/>

        <BrendAccardion/>
        
        <FooterFilterDetailes/>
    </Box>
  )
}

export default FilterDetailes