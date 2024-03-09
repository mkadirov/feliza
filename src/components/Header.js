import React, {useContext, useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer, styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link,  useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Menu from '../pages/Menu/Menu';
import logo from '../assets/icons/Feliza-logo.png'
import SearchPage from '../pages/SearchPage/SearchPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import MyContext from './Context/MyContext';
import Switch from '@mui/material/Switch';




export default function HomePageHeader() {
  const[isDrawerOpen, setIsDrawerOpen] = useState(false);
  const[isSearchOpen, setIsSearchOpen] = useState(false);
  const {user, isLoginPageOpen, setIsLoginPageOpen, isUzbek, setIsUzbek} = useContext(MyContext)
  const navigate = useNavigate();

  const IconText = styled(Typography)({
    color: 'black',
    fontWeight: '400',
    fontSize: '12px'
    
  })

  const navigateUser = () => {
    if(!user) {
      setIsLoginPageOpen(true)
    } else {
      navigate('/user_page')
    }
  }

  const navigateUserToBasket = () => {
    if(!user) {
      setIsLoginPageOpen(true)
    } else {
      navigate('/basket')
    }
  }

  const navigateUserToFovoritePage = () => {
    if(!user) {
      setIsLoginPageOpen(true)
    } else {
      navigate('/favorite')
    }
  }

  useEffect(() => {
    // Function to handle the "popstate" event
    const handlePopstate = () => {
      // Check if the drawer is open and close it if necessary
      if (isSearchOpen) {
        setIsSearchOpen(false)
      }
    };

    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [isSearchOpen]);
  return (
    <>
      <AppBar position="fixed" sx={{backgroundColor: 'white', boxShadow: 'none', height: {xs: '8vh', sm: '70px', lg: '80px'}, borderBottom: ' 1px solid rgb(234, 87, 116)'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%'}}>
         <Box display='flex' alignItems='center' >
         <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, 
                color: 'black' , 
                '&:hover': { backgroundColor: 'white'}, 
                height: '4vh',
                width: '4vh',
                marginLeft: 1
            }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon sx={{color: 'primary.main'}}/>
          </IconButton>
          
          <Link to='/'>
            <Box width={80}>
              <img src={logo} alt="" />
            </Box>
          </Link>
         </Box>
        <Box sx={{display: 'flex', gap: 3}}>
            <Box className= 'cursorPointer' sx={{ display: 'flex', alignItems: 'center', gap: 1}} onClick={() => setIsSearchOpen(true)}>
                <SearchIcon sx={{color: 'primary.main'}}/>
                
                <IconText sx={{display: {xs: 'none', lg: 'inline'}, color: 'primary.main'}}>
                    {isUzbek? 'Qidiruv' : 'Поиск'}
                </IconText>
            </Box>
            <Box className= 'cursorPointer' sx={{display: 'flex', alignItems: 'center', gap: 1}} 
                onClick= {() => navigateUser()}>
                <PermIdentityIcon sx={{color: 'primary.main'}}/>
                <IconText sx={{display: {xs: 'none', lg: 'inline'}, color: 'primary.main'}}>
                    {isUzbek? 'Kirish' : 'Войти'}
                </IconText>
            </Box>

            
            <Box className= 'cursorPointer' sx={{ display: 'flex', alignItems: 'center', gap: 1}} onClick = {() => navigateUserToFovoritePage()}>
                <FavoriteBorderIcon sx={{color: 'primary.main'}}/>
                <IconText sx={{display: {xs: 'none', lg: 'inline'}, color: 'primary.main'}}>
                    {isUzbek? 'Saralangan' : 'Избранные'}
                </IconText>
            </Box>
            
            <Box className= 'cursorPointer' sx={{color: 'coral', display: 'flex', alignItems: 'center', gap: 1}} onClick = {() => navigateUserToBasket()}>
                <ShoppingCartOutlinedIcon sx={{color: 'primary.main'}}/>
                <IconText sx={{display: {xs: 'none', lg: 'inline'}, color: 'primary.main'}}>
                   {isUzbek? 'Savatcha' : 'Корзина'}
                </IconText>
            </Box>
            
        </Box>
        </Toolbar>
      </AppBar>
      
      <Drawer
      anchor='left'
      open = {isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{width: {xs: '80vw', lg: '20vw', display: 'flex', justifyContent: 'center'}}} role='presentation'>
          
          <Box sx={{width: '90%', py: 2}}>
          <Box justifyContent='space-between' display='flex' alignItems='center' sx={{borderBottom: '1px solid black', pb: 1}}>
            <Button onClick={() => setIsDrawerOpen(false)} >
              <ArrowBackIosIcon sx={{color: 'black'}}/>
            </Button>

          <Switch  defaultChecked  onChange={() => setIsUzbek(prev => !prev)}/>
          </Box>
            <Menu setIsDrawerOpen= {setIsDrawerOpen}/>
          </Box>
        </Box>
      </Drawer>

      {/* Drawer for Searchpage */}

      <Drawer
      anchor='top'
      open= {isSearchOpen}
      onClose={() => setIsSearchOpen(false)}
      >
        <Box  sx={{width: '100vw', minHeight: {xs: '100vh', md: '60vh'}}} role='presentation'>
          <SearchPage setIsSearchOpen={setIsSearchOpen}/>
        </Box>
      </Drawer>

      {/* Drawer for UserPage */}

      <Drawer
      anchor='bottom'
      open = {isLoginPageOpen}
      onClose={() => setIsLoginPageOpen(false)}
      >
        <Box sx={{height: '60vh', width: '95vw'}}>
          <LoginPage />
        </Box>
      </Drawer>
      
    </>
  );
}