import React from 'react'
import { Box , Typography, Button} from '@mui/material'
import UnderlineButton from '../Global/Buttons/UnderlineButton'
import { Link } from 'react-router-dom'


function SaleBox() {
  return (
    <Link to='/products/sale'>
    <Box sx={{width: '100%', height: '20vh', color: 'white', backgroundColor: 'rgb(151, 20, 20)', my: 1, alignItems: 'center', justifyContent: 'center', display: 'flex'}}  >
        <Box align= 'center'>
        <Typography variant='h5'>
            Chegirmalar 50% gacha
        </Typography>

        <UnderlineButton text={"Ko'rish"}/>
        </Box>
    </Box>
    </Link>
  )
}

export default SaleBox