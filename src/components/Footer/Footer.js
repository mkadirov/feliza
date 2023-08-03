import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';




export default function Footer({sum}) {
  return (
    <Box >
        <React.Fragment>
      <AppBar position="fixed" className='footer'  sx={{ top: 'auto', bottom: 0, borderTop: '1px solid rgba(49, 47, 47, 0.603)', backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar >
          <Box display='flex' sx={{justifyContent: {xs: 'space-between', md: 'center'}}} flex={1} alignItems='center'>
            <Button variant='contained' sx={{backgroundColor: 'primary.main'}}>
               Sotib olish
            </Button>

          <Typography sx={{color: 'black', ml:2}}>
            Jami: {sum} so'm
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
    </Box>
  );
}