import React from 'react'
import {Box, Typography, Grid} from '@mui/material'
import {useParams} from 'react-router-dom'
import { getOrdersById } from '../../api/Order';
import { useState } from 'react';
import { useEffect } from 'react';

function Order() {

  const [order, setOrder] = useState('');
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getOrdersById(id);
      if (res?.success) {
        console.log(res.data);
        setOrder(res.data);
      }
    };
    fetchData();
  }, []);
  return (
    <Box sx={{marginTop: 9, paddingX: 2}}>
        <Grid container>
            <Grid item xs = {6}>
                <Typography fontSize={14} fontWeight={'bold'}>
                    Yetkazish manzili:
                </Typography>
                <Typography fontSize={12} sx={{color: '#616161'}}>
                    {
                        order?.receiverName
                    }
                </Typography>
                <Typography fontSize={12} sx={{color: '#616161'}}>
                    {
                        order?.address?.region?.name
                    }
                </Typography>
                <Typography fontSize={12} sx={{color: '#616161'}}>
                    {
                        order?.address?.subRegion?.name
                    }
                </Typography>

                <Box display={'flex'} gap={1}>
                <Typography fontSize={12} sx={{color: '#616161'}}>
                    {
                        order?.address?.street
                    },
                </Typography>
                <Typography fontSize={12} sx={{color: '#616161'}}>
                    {
                        order?.address?.houseNumber
                    }
                </Typography>
                </Box>
            </Grid>
            <Grid item xs = {6}>

            </Grid>
        </Grid>
    </Box>
  )
}

export default Order