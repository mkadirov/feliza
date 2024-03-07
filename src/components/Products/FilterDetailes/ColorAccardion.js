import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { getAllColors } from '../../../api/Colors';
import ColorCircle from '../../Global/ColorCircle';
import MyContext from '../../Context/MyContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ColorAccardion() {

  const [colors, setColors] = useState([]);
  const {isUzbek} = useContext(MyContext)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllColors();
      if(res.success) {
        console.log(res.data);
        setColors(res.data)
      }
    }

    fetchData();
  }, [])

  return (
    <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
         aria-controls="panel4-content"
        id="panel4-header"
        >
        Rang
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2} sx={{paddingX: 2}}>
        {
         colors.map(item => {
            return(
            <Grid item xs={6} md = {4}>
                <Box 
                display={'flex'} 
                alignItems={'center'} 
                gap={2} 
                sx={{cursor: 'pointer'}}
                >
                <ColorCircle key={item.colorCode} color={item.colorCode}/>
                <Typography>
                    {
                        isUzbek? item.nameUZB : item.nameRUS
                    }
                </Typography>
                 </Box>
            </Grid>
            )
        })
        }
        </Grid>
        </AccordionDetails>
    </Accordion>
  )
}

export default ColorAccardion