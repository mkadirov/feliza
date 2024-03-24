import { Box, Button, Typography, Grid} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import React, { useContext } from 'react'
import MyContext from '../../components/Context/MyContext'
import { userNavList } from '../../data/UserPageList'
import { CiHeart } from "react-icons/ci";
import customerIcon from '../../assets/icons/customer.png'
import { useEffect } from 'react'

function UserPage() {

  const {user, setUser} = useContext(MyContext)
  const navigate = useNavigate()
  
  console.log(user);
  const logOut = () => {
    navigate('/')
    setUser(null);
    localStorage.removeItem('userData');
  }

  useEffect(() => {
    
    window.scrollTo({  
      top: 0,
      behavior: "smooth" 
    })
  }, [])


  return (
    <Box sx={{width: '100%', marginTop: '9vh'}}>
      
        <Box  sx={{width: '100%', marginTop: 10}}>
            <Typography variant='h5' sx={{marginBottom: 2, textAlign: 'center'}}>
               Meing profilim
            </Typography>
            <Box sx={{backgroundColor: 'beige', paddingY: 3}} align={'center'}>

              <Box sx={{width: {xs: '80px'}, height: {xs: '80px'}, borderRadius: '50%', }}>
                <img src={customerIcon} alt="" />
              </Box>

              <Box marginTop={2}>
                <Typography>
                  Eshonov Bahodir
                </Typography>
              </Box>

              <Box>
                <Typography fontSize={12} color={'grey'}>
                  +998971234567
                </Typography>
              </Box>

            </Box>
            <Box paddingX={1} paddingY={2}>
              <Box>
                {
                  userNavList.map(item => {
                    return(
                      <Box key={item.nameUZ} marginBottom={1}>
                        <Grid container >
                          <Grid item xs={1} sx = {{fontSize: '22px'}}>
                            {item.icon}
                          </Grid>
                          <Grid item xs = {10}>
                            <Typography >
                               {item.nameUZ}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    )
                  })
                }

                <Box marginBottom={1}>
                  <Grid container >
                    <Grid item xs={1} sx = {{fontSize: '22px'}}>
                      <CiHeart/>
                    </Grid>
                    <Grid item xs = {10} >
                      <Typography>
                        Tanlanganlar
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Button variant='contained' onClick={logOut} fullWidth>
                Chiqish
              </Button>
            </Box>
        </Box>

    </Box>
  )
}



export default UserPage