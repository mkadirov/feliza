import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import {Box, Typography} from '@mui/material'
import MyContext from '../../Context/MyContext';
import { getAllProduct } from '../../../api/Product';
import SmallSlider from '../../Sliders/SmallSlider';

function LastSeenSLider() {
    const [lastSeenProducts, setLastSeenProducts] = useState([]);
    const {lastSeenList} = useContext(MyContext)

    useEffect(() => {
        const fetchData = async() => {
            const res = await getAllProduct();
            if(res.success) {
                const list = [...res.data]
                const newArray = list.filter(item => lastSeenList && lastSeenList.includes(item?.product?.id));
                setLastSeenProducts(newArray);
            }
        }
        fetchData();
    }, [lastSeenList])

  return (
    <Box marginTop={3}>
        <Typography variant='h5' paddingY={1}>
            Oxirgi ko'rilgan mahsulotlar
        </Typography>
        <SmallSlider list= {lastSeenProducts}/>
    </Box>
  )
}

export default LastSeenSLider