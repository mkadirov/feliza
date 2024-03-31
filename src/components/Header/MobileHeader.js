import React from 'react'
import {Box, IconButton, Toolbar} from '@mui/material'
import {Link} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiBoxList } from "react-icons/ci";
import logo from '../../assets/icons/Feliza-logo.png'

function MobileHeader({setIsDrawerOpen, setIsSearchOpen, navigateUserToFovoritePage, navigateUserToBasket}) {
  return (
    <Box>
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
    </Box>
  )
}

export default MobileHeader