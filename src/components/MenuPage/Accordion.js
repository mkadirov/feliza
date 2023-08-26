import React from 'react'
import { Box, Typography, Accordion} from '@mui/material'
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

function AccordionBtn({setIsDrawerOpen, item}) {
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box display='flex' alignItems='center' gap={1}>
            <Box sx={{width: '25px', height: '25px'}}>
              <img src={item.icon} alt="" />
            </Box>
            <Typography>{item.title}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
        {
            item.list.map((i, idx) => {
              return(
                <Link to={`/products/${i.category}`} key={i.title}>
                <Typography marginLeft='30px' onClick={() => setIsDrawerOpen(false)} my={1}>
                  {i.title}
                </Typography>
                </Link>
              )
            })
          }
        </AccordionDetails>
      </Accordion>
  )
}

export default AccordionBtn