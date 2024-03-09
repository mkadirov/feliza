import { Box, Button, Typography, Grid} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import React, { useContext } from 'react'
import MyContext from '../../components/Context/MyContext'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function UserPage() {

  const {user, setUser} = useContext(MyContext)
  const navigate = useNavigate()
  


  

  const logOut = () => {
    navigate('/')
    setUser(null);
    localStorage.removeItem('userData');
  }



  

  

  return (
    <Box sx={{width: '100%', marginTop: '9vh'}} align = 'center' >
      
        <Box  sx={{width: '100%', marginTop: 10}}>
            <Typography variant='h5'>
               UserID: {user.customerId}
            </Typography>
            <Button variant='outlined' onClick={logOut}>
              Chiqish
            </Button>
        </Box>

    </Box>
  )
}



export default UserPage