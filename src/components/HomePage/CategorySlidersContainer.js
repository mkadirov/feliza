import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getProductListByCategoryID } from '../../api/Product'
import SmallSlider from '../Sliders/SmallSlider'
import { ArrowRightAlt, RampRight } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function CategorySlidersContainer() {
    const [list, setList] = useState([])
    const [list2, setList2] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async() => {
            const res = await getProductListByCategoryID(10)
            if(res.success) {
                if(res.data.length > 10) {
                    setList(res.data.slice(4, 13))
                } else {
                    setList(res.data)
                }
            }
        } 

        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async() => {
            const res = await getProductListByCategoryID(13)
            if(res.success) {
                if(res.data.length > 10) {
                    setList2(res.data.slice(4, 13))
                } else {
                    setList2(res.data)
                }
            }
        } 

        fetchData();
    }, [])

    const handelNavigate = (id) => {
        navigate(`/products/${id}`)
    }

  return (
    <Box  style={{
        paddingTop: '20px',
        paddingBottom: '20px'
      }}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', 
            alignItems: 'center', color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.6)', 
            marginX: 1, paddingX: 1, border: '1px solid black'}}
            onClick = {() => handelNavigate(10)}
        >
            <Typography variant='h5'>
                Ko'ylaklar
            </Typography>

            <ArrowRightAlt/>
        </Box>
        <SmallSlider list={list}/>

        <Box sx={{display: 'flex', justifyContent: 'space-between', 
        alignItems: 'center', color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.6)', 
        marginX: 1, paddingX: 1, border: '1px solid black', marginTop: 2}}
            onClick = {() => handelNavigate(13)}
        >
            <Typography variant='h5'>
                Shimlar
            </Typography>

            <ArrowRightAlt/>
        </Box>
        <SmallSlider list={list2}/>

      </Box>
  )
}

export default CategorySlidersContainer