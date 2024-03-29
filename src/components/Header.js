import React, {useContext, useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer, styled} from '@mui/material'
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
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiBoxList } from "react-icons/ci";




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
      <AppBar position="fixed" sx={{backgroundColor: 'white', }}>
        {/* <Box sx={{width: '100%', height: '4vh', backgroundColor: 'white', display: {xs: 'block', sm: 'none'}}}>
          <HeaderSlider/>
        </Box> */}
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <Box>

          <IconButton onClick={() => setIsDrawerOpen(true)} >
             <CiBoxList style={{color: 'black'}}/>
          </IconButton>

          <IconButton onClick={() => setIsSearchOpen(true)}>
            <CiSearch style={{color: 'black'}}/>
          </IconButton>
          
         </Box>
         <Box>
         <Link to='/'>
            <Box width={60}>
              <img src={logo} alt="" />
            </Box>
          </Link>
         </Box>
        <Box>
            <IconButton onClick = {() => navigateUserToFovoritePage()}>
              <CiHeart style={{color: 'black'}}/>
            </IconButton>

            <IconButton onClick = {() => navigateUserToBasket()}>
               <PiShoppingCartThin style={{color: 'black'}}/>
            </IconButton>
            
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
        <Box sx={{height: '60vh', width: '100vw'}}>
          <LoginPage />
        </Box>
      </Drawer>
      
    </>
  );
}