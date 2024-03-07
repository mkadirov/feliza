import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';





export default function Footer({sum}) {
  const navigate = useNavigate();

  const navigateUser = () => {
    navigate('/checkout');
  }
  return (
    <Box >
      <React.Fragment>
      <AppBar position="fixed" className='footer'  sx={{ top: 'auto', bottom: 0, borderTop: '1px solid rgba(49, 47, 47, 0.603)', backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar >
          <Box display='flex' sx={{justifyContent: {xs: 'space-between', md: 'center'}}} flex={1} alignItems='center'>
            <Button 
              disabled = {sum <= 0} 
              variant='contained' 
              sx={{backgroundColor: 'primary.main'}}
              onClick={navigateUser}
            >
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