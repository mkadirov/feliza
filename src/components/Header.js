import React, {useEffect, useState} from 'react';
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




export default function HomePageHeader() {
  const[isDrawerOpen, setIsDrawerOpen] = useState(false);
  const[isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginPageOpen, setIsLoginPageOpen] = useState(false);

  const IconText = styled(Typography)({
    color: 'black',
    fontWeight: '400',
    fontSize: '12px'
    
  })

  useEffect(() => {
    // Function to handle the "popstate" event
    const handlePopstate = () => {
      // Check if the drawer is open and close it if necessary
      if (isSearchOpen) {
        setIsSearchOpen(false)
      }
    };

    window.addEventListener('popstate', handlePopstate);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [isSearchOpen]);
  return (
    <>
      <AppBar position="fixed" sx={{backgroundColor: 'white', boxShadow: 'none', height: {xs: '8vh', sm: '70px', lg: '80px'}, borderBottom: ' 1px solid rgb(234, 87, 116)'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', px: {md: '20px', lg: '50px', xl: '200px'}}}>
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
            <Box className= 'searchBox' sx={{ display: 'flex', alignItems: 'center', gap: 1}} onClick={() => setIsSearchOpen(true)}>
                <SearchIcon sx={{color: 'primary.main'}}/>
                
                <IconText sx={{display: {xs: 'none', lg: 'inline'}}}>
                    Qidiruv
                </IconText>
            </Box>
            <Box sx={{color: 'coral', display: 'flex', alignItems: 'center', gap: 1}} onClick= {() => setIsLoginPageOpen(true)}>
                <PermIdentityIcon sx={{color: 'primary.main'}}/>
                <IconText sx={{display: {xs: 'none', lg: 'inline'}}}>
                    Kirish
                </IconText>
            </Box>

            <Link to='/favorite/#favorite_page'>
            <Box sx={{color: 'coral', display: 'flex', alignItems: 'center', gap: 1}}>
                <FavoriteBorderIcon sx={{color: 'primary.main'}}/>
                <IconText sx={{display: {xs: 'none', lg: 'inline'}}}>
                    Saralangan
                </IconText>
            </Box>
            </Link>

            <Link to='/basket'>
            <Box sx={{color: 'coral', display: 'flex', alignItems: 'center', gap: 1}}>
                <ShoppingCartOutlinedIcon sx={{color: 'primary.main'}}/>
                <IconText sx={{display: {xs: 'none', lg: 'inline'}}}>
                    Savatcha
                </IconText>
            </Box>
            </Link>
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

            <Typography >
              Kirish / Röyhatdan ötish
            </Typography>
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
          <LoginPage setIsLoginPageOpen= {setIsLoginPageOpen}/>
        </Box>
      </Drawer>
      
    </>
  );
}