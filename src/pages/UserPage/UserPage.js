import { Box, Button, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import React, { useContext } from 'react'
import MyContext from '../../components/Context/MyContext'

function UserPage() {

  const {user, setUser} = useContext(MyContext)
  const navigate = useNavigate()

  const logOut = () => {
    navigate('/')
    setUser(0);
    localStorage.removeItem('userData');
  }
  return (
    <Box sx={{width: '100%'}} align = 'center' >
        <Box  sx={{width: '100%', marginTop: 10}}>
            <Typography variant='h5'>
               UserID: {user}
            </Typography>
            <Button variant='outlined' onClick={logOut}>
              Chiqish
            </Button>
        </Box>
    </Box>
  )
}



export default UserPage