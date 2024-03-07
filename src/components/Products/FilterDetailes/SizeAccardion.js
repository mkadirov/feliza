import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, Grid, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SizeAccardion() {

    const list = ['XS', 'S', 'M', 'XL', '2XL', '3Xl', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34']
  return (
    <Accordion >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
        >
        Ölcham
        </AccordionSummary>
        <AccordionDetails>
            <Grid container spacing={2} sx={{paddingX: 2}}>
                {
                    list.map((item, idx) => {
                        return(
                            <Grid item xs = {3}>
                                <Box key={idx + item} display={'flex'} alignItems={'center'} >
                                    <Checkbox/>
                                   <Typography>
                                    {item}
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

export default SizeAccardion