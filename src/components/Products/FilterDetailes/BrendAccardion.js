import React, {useState, useEffect} from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Box, Typography, Checkbox } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getAllBrands } from '../../../api/Brands';

function BrendAccardion({brands, setBrands}) {

  const [list , setList] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const res = await getAllBrands();

      if(res?.success) {
        setList(res.data)
      }
    }
    fetchData();
  }, [])

  const handelClick = (id) => {
    if(brands.includes(id)) {
      setBrands(brands.filter(item => item != id))
    } else {
      setBrands(prev => [...prev, id])
    }
  }
  return (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
        >
            Brend
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} sx={{paddingX: 2}}>
                {
                    list.map((item, idx) => {
                        const isSelected = brands.includes(item.id)
                        return(
                            <Grid item xs = {3} key={item}>
                                <Box key={idx + item} display={'flex'} alignItems={'center'} >
                                    <Checkbox
                                      checked = {isSelected}
                                      onChange={() => handelClick(item)}
                                    />
                                   <Typography>
                                    {item.name}
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

export default BrendAccardion