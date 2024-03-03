import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import youtubeIcon from '../../assets/icons/youtube.png'
import instagramIcon from '../../assets/icons/instagram.png'
import telegramIcon from '../../assets/icons/telegram.png'
import { grey } from '@mui/material/colors'

function MainFooter() {

    const box2Style = {
        width: '10px',
        height: '10px',
        backgroundColor: 'rgb(234, 87, 116',
        position: 'absolute',
        left: '50%', // Center horizontally
        transform: 'translateX(-50%)', // Adjust for the box width
        bottom: '-5px', // Align with the bottom of the first box
        borderRadius: '50%',
      };

  return (
    <Box marginTop={5} >
        

        <Grid container justifyContent={'center'}>
            <Grid item xs= {5} sm= {6} md = {5} lg = {3} xl = {2}>
                <Box sx={{paddingY: 2, display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgb(234, 87, 116)', position: 'relative'}}>
                    <Box sx={{width: {xs: '30px', md: '40px'}, height: {xs: '30px', md: '40px'},}}>
                        <img src={instagramIcon} alt="" />
                    </Box>
                    <Box sx={{width: {xs: '30px', md: '40px'}, height: {xs: '30px', md: '40px'},}}>
                        <img src={youtubeIcon} alt="" />
                    </Box>
                    <Box sx={{width: {xs: '30px', md: '40px'}, height: {xs: '30px', md: '40px'},}}>
                        <img src={telegramIcon} alt="" />
                    </Box>

                    <Box style = {box2Style}></Box>
                </Box>

                
            </Grid>

        </Grid>

        <Box textAlign={'center'} sx={{color: grey[500], position: 'relative', paddingBottom: 1, borderBottom: '1px solid rgb(234, 87, 116)' }}>
            <Typography variant='h6' marginY={2}>
                        +998 97 777 77 77
            </Typography>
            <Typography variant='h6' marginY={2}>
                        feliza-shop@gmail.com
            </Typography>

            <Box style = {box2Style}></Box>
        </Box>


        <Box sx={{display: 'flex', justifyContent: 'center', gap: 3, marginY: 4}}>
            <Typography variant='h6'>
                Biz haqimizda
            </Typography>
            <Typography variant='h6'>
                Kontakt
            </Typography>
            <Typography variant='h6'>
                Blog
            </Typography>
        </Box>

        <Box sx={{backgroundColor: grey[200], textAlign: 'center', paddingY: 2, color: grey[500]}}>
            <Typography>
                Feliza 2024, Mualliflik huquqi himoyalangan
            </Typography>
        </Box>
    </Box>
  )
}

export default MainFooter