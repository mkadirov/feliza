import { Close } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'
import MyContext from '../../components/Context/MyContext'

function UserPage() {

  const {user} = useContext(MyContext)
  return (
    <Box sx={{width: '100%'}} align = 'center' >
        <Box  sx={{width: '100%', marginTop: 10}}>
           

            <Typography variant='h5'>
               UserID: {user}
            </Typography>
        </Box>
    </Box>
  )
}



export default UserPage