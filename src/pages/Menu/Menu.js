import { Box, Typography, Accordion} from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import filialIcon from  '../../assets/icons/shops.png'
import orderIcon from  '../../assets/icons/order.png'
import contactIcon from  '../../assets/icons/communicate.png'
import AccordionBtn from '../../components/MenuPage/Accordion';
import { clothCategoryList } from '../../data/CategoryList';
import phoneIcon from  '../../assets/icons/phone.png'


function Menu({setIsDrawerOpen}) {
  const clothesCategory = clothCategoryList;
  return (
    <Box>
      <Box sx={{borderBottom: '1px solid black', py: 2}}>
      {
        clothesCategory.map((item, idx) => {
          return <AccordionBtn setIsDrawerOpen= {setIsDrawerOpen} item = {item} key={idx}/>
        })
      }
      </Box>
        <Box py={2}>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box display='flex' alignItems='center' gap={1}>
            <Box sx={{width: '25px', height: '25px'}}>
              <img src={contactIcon} alt="" />
            </Box>
            <Typography>Biz bilan bog'lanish</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box marginLeft='30px' display='flex' gap={1} alignItems='center'>
            <Box sx={{width: '25px', height: '25px'}}>
              <img src={phoneIcon} alt="" />
            </Box>
            <a href="tel: +4917663149800">+4917663149800 </a>
          </Box>
        </AccordionDetails>
      </Accordion>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box display='flex' alignItems='center' gap={1}>
            <Box sx={{width: '25px', height: '25px'}}>
              <img src={filialIcon} alt="" />
            </Box>
            <Typography>Filiallarimiz</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>


        <Box sx={{marginLeft: '17px'}} marginTop={1} display='flex' gap={1}>
          <Box sx={{width: '25px', height: '25px'}}>
            <img src={orderIcon} alt="" />
          </Box>
          <Typography>
            Shaxsiy kabinet
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Menu