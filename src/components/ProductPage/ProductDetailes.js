import { Box } from '@mui/material'
import React, { useContext } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SmallSlider from '../Sliders/SmallSlider';
import MyContext from '../Context/MyContext';
import { productList } from '../../data/DataList';

function ProductDetailes({descriptionUZB, descriptionRUS}) {


    const {likedList, lastSeenList} = useContext(MyContext)
    const list = productList;
    const lastSeenProducts = list.filter(item => lastSeenList.includes(('' + item.id)))
    const likedProducts = list.filter(item => likedList.includes(item.id))

    
    
  return (

    <Box marginTop={3}>
        <Box sx={{borderBottom: '1px solid lightgray'}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Mahsulot haqida to'liqroq</Typography>

                </AccordionSummary>
                <AccordionDetails>

                    <Typography>
                        {descriptionUZB}
                    </Typography>

                </AccordionDetails>
            </Accordion>
        </Box>

        <Box marginTop={3}>
            <Typography variant='h5' paddingY={1}>
                Oxirgi ko'rilgan mahsulotlar
            </Typography>
            <SmallSlider list= {lastSeenProducts}/>
        </Box>

        {
            likedList.length !=0 && <Box marginTop={3}>
                <Typography variant='h5' paddingY={1}>
                    Tanlangan mahsulotlar
                </Typography>
                <SmallSlider list= {likedProducts}/>
            </Box>
        }
    </Box>
  )
}

export default ProductDetailes