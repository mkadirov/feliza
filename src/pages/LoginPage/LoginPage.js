import { Close } from '@mui/icons-material'
import { Box, IconButton, Typography, Button, TextField, Alert } from '@mui/material'
import React, {useContext, useState} from 'react'
import { createNewUser, isRegistretedUser, loginUserWithPassword } from '../../api/Login';
import MyContext from '../../components/Context/MyContext';
import CheckIcon from '@mui/icons-material/Check';



function LoginPage() {
    const [isRegistreted, setIsRegistreted] = useState(0);
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('')
    const [fullName, setFullname] = useState('');
    const [registerPassword, setRegisterPassword] = useState('')
    const [birthDate, setBirthDate] = useState('');
    const [verifyCode, setVerifyCode] = useState('');
    const {setUser, setIsLoginPageOpen} = useContext(MyContext)
    

    const checkPhoneNumber = () => {
        if(isValidPhoneNumber(tel)) {
            checkUser();
        } else {
            alert("Notög'ri telefon raqam")
        }
    }

    function isValidPhoneNumber(phoneNumber) {
        if (phoneNumber.startsWith('+998') && phoneNumber.length === 13) {
          for (let i = 4; i < 13; i++) {
            if (isNaN(phoneNumber[i])) {
              return false;
            }
          }
          return true; 
        }
        return false; 
      }

    const checkUser = async() => {
        const phone = {
            phoneNumber: tel
        }
        const res = await isRegistretedUser(phone);
        if(res?.success) {
            res.data? setIsRegistreted(1) : setIsRegistreted(2)
        }
    }

    const loginUser = async() => {
        const userDetailes = {
            phoneNumber: tel,
            password: password
        } 

        const res = await loginUserWithPassword(userDetailes);
        if(res.success) {

            const currentTime = new Date().getTime();
            const expirationTime = currentTime + 24 * 60 * 60 * 1000;

            const userData = {
              user: res.data,
              expirationTime: expirationTime,
            };

            localStorage.setItem('userData', JSON.stringify(userData));
            setUser(res.data);
            setIsLoginPageOpen(false)
        } else {
            console.log(res.message);
        }
    }

    const checkUserData = () => {

        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(fullName.trim())) {
            alert('Iltimos ism uchun faqat harflardan foydalaning');
            return;
        }

        if (fullName.trim().length <= 3) {
            alert('Iltimos ism va familiyangizni töliq kriting');
            return;
        }
        if (registerPassword.trim().length <= 5) {
            alert("Parolda kamida 6 ta belgi bo'lishi kerak");
            return;
        }
        if (verifyCode.trim().length !== 4) {
            alert("Iltimos tasdiqlash kodini kiriting");
            return;
        }

        const dob = new Date(birthDate);
        if (isNaN(dob.getTime())) {
            alert("Iltimos to'g'ri sanani kiriting");
            return;
        }

        const currentDate = new Date();
        if (dob > currentDate) {
            alert("Kelajakdagi tug'ilgan sanani kiritish mumkin emas");
            return;
        }    
        createUser();
    };


    const createUser = async() => {
        const user = {
            fullName: fullName,
            password: registerPassword,
            birthDate: birthDate,
            phoneNumber: tel,
            verifyCode: verifyCode
        }

        const res = await createNewUser(user);
        if(res.success) {
            console.log("Foydalanuvchi qoshildi");
            setBirthDate('');
            setFullname('')
            setTel('')
            setVerifyCode('');
            setRegisterPassword('')
        } else {
            console.log('xatolik!!!!!');
        }
    }

  return (
    <Box sx={{width: '100%'}} align='center'>  
        <Box  sx={{width: '100%'}}>
            <Box display='flex'   padding={2} alignItems='center'>
                <Box flex={1} align= 'center'>
                    <Typography variant='h5'>
                        Tizimga Kirish
                    </Typography>
                </Box>
                <IconButton onClick={() => setIsLoginPageOpen(false)}>
                     <Close/>
                </IconButton>
            </Box>

            <Box sx={{display: isRegistreted == 0? 'block' : 'none'}}>
                <Box width='300px' marginY={3}>
                    <TextField 
                    variant='outlined' 
                    label='Telefon raqamingiz' 
                    size='small' 
                    fullWidth
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}/>
                </Box>
            
                <Button 
                    variant= 'contained' 
                    onClick={checkPhoneNumber}
                >
                        Yuborish
                </Button>
            </Box>


            <Box sx={{display: isRegistreted == 1? 'block' : 'none'}}>
                <Box width='300px' marginY={3}>

                    <TextField 
                    variant='outlined' 
                    label='Parol' 
                    size='small' 
                    fullWidth
                    value={password}
                    sx={{marginY: 2}}
                    onChange={(e) => setPassword(e.target.value)}/>
                </Box>
            
                <Button variant= 'contained' onClick={loginUser}>
                    Yuborish
                </Button>
            </Box>

            <Box marginTop={2} width={'300px'} sx={{display: isRegistreted == 2? 'block' : 'none'}}>
                <Box>
                    <Typography>
                        Tasdiqlash kodi sizga SMS orqali yuboriladi
                    </Typography>
                <TextField variant='outlined' disabled value={tel} size='small' fullWidth/>
                <TextField 
                    variant='outlined' 
                    size='small' 
                    label='Tasdiqlash kodi' 
                    fullWidth 
                    sx={{marginTop: 2}}
                    value={verifyCode}
                    onChange={(e) => setVerifyCode(e.target.value)}
                    />
                <TextField 
                    variant='outlined' 
                    size='small' 
                    label='Ism va familiyangiz' 
                    fullWidth 
                    sx={{marginTop: 2}}
                    value={fullName}
                    onChange={(e) => setFullname(e.target.value)}
                    />
                
                <TextField 
                    variant='outlined' 
                    type='date' 
                    size='small' 
                    label='' 
                    fullWidth 
                    helperText = "Tug'ilgan sanangizni kriting"
                    sx={{marginTop: 2}}
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    />
                <TextField variant='outlined' 
                    size='small' 
                    label='Parol'  
                    fullWidth 
                    sx={{marginY: 2}}
                    helperText = 'Kamida 6ta belgidan iborat parol'
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                </Box>

                <Button variant='outlined' onClick={checkUserData}>
                    Yuborish
                </Button>
            </Box>
        </Box>

        
    </Box>
  )
}

export default LoginPage