import { Close } from '@mui/icons-material'
import { Box, IconButton, Typography, Button, TextField } from '@mui/material'
import React, {useState} from 'react'
import { userList } from '../../data/UserList'


function LoginPage({setIsLoginPageOpen}) {
    const [isRegistreted, setIsRegistreted] = useState(true);
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('')

    const list = userList;
    
    

  return (
    <Box sx={{width: '100%'}} align='center'>  
        <Box  sx={{width: '100%'}}>
            <Box display='flex'   padding={2} alignItems='center'>
                <Box flex={1} align= 'center'>
                <Button onClick={() => setIsRegistreted(true)} sx={{marginRight: 2}}>
                    Kirish
                </Button>
                <Button onClick={() => setIsRegistreted(false)}>
                    Ro'yxatdan o'tish
                </Button>
                </Box>
                <IconButton onClick={() => setIsLoginPageOpen(false)}>
                     <Close/>
                </IconButton>
            </Box>

           
            {
                (isRegistreted)? (<Box >
                    <Box width='300px' marginY={3}>
                       <TextField 
                       variant='outlined' 
                       label='Telefon raqamingiz' 
                       size='small' 
                       fullWidth
                       value={tel}
                       onChange={(e) => setTel(e.target.value)}/>

                       <TextField 
                       variant='outlined' 
                       label='Parol' 
                       size='small' 
                       fullWidth
                       value={password}
                       sx={{marginY: 2}}
                       onChange={(e) => setPassword(e.target.value)}/>
                    </Box>
            
                    <Button variant= 'contained' >
                        Yuborish
                    </Button>
                </Box>) : (<Box marginTop={2} width={'300px'}>
                        <Box>
                            <Typography>
                                Tasdiqlash kodi sizga SMS orqali yuboriladi
                            </Typography>
                        <TextField variant='outlined' disabled value={'+4917663149800'} size='small' fullWidth/>
                        <TextField variant='outlined' size='small' label='Tasdiqlash kodi' fullWidth sx={{marginTop: 2}}/>
                        <TextField variant='outlined' size='small' label='Ismingiz' fullWidth sx={{marginTop: 2}}/>
                        <TextField variant='outlined' size='small' label='Familiyangiz' fullWidth sx={{marginTop: 2}}/>
                        <TextField variant='outlined' 
                        size='small' 
                        label='Parol'  
                        fullWidth 
                        sx={{marginY: 2}}
                        helperText = 'Kamida 6ta belgidan iborat parol'
                        />
                        </Box>

                        <Button variant='outlined'>
                            Yuborish
                        </Button>
                    </Box>)
            }
        </Box>

        
    </Box>
  )
}

export default LoginPage