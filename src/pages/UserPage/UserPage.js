import { Close } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'

function UserPage({setIsUserOpen}) {
  return (
    <Box sx={{width: '100%'}} align = 'center'>
        <Box  sx={{width: '100%'}}>
            <Box display='flex'   padding={2} alignItems='center'>
                <Box flex={1} align= 'center'>
                 <Typography>
                   Kirish
                 </Typography>
                </Box>
                <IconButton onClick={() => setIsUserOpen(false)}>
                     <Close/>
                </IconButton>
            </Box>
           

            <Typography variant='h5'>
                Telefon raqamingizni kriting
            </Typography>
            <Typography>
                Tasdiqlash kodi SMS orqali yuboriladi
            </Typography>
        </Box>
    </Box>
  )
}

export default UserPage