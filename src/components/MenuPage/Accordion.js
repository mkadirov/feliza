import React,{ useState, useEffect } from 'react'
import { Box, Typography, Accordion} from '@mui/material'
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { getSubCategoriesByParent } from '../../api/Category';


function AccordionBtn({setIsDrawerOpen, item}) {
  const [list, setList] = useState([]);
  

  useEffect(() => {

    const fetchData = async() => {
      const res = await getSubCategoriesByParent(item.nameUZB);
      if(res.success) {
        setList(res.data);
      }
    }
    fetchData();
  }, [])



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
            <Typography>{item.nameUZB}</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
        {
            list.map((i, idx) => {
              return(
                <Box key={i.id} sx={{borderBottom: '1px solid lightgray', py: 1}}>
                  <Link to={`/products/${i.id}`} >
                    <Typography marginLeft='30px' onClick={() => setIsDrawerOpen(false)} my={1}>
                     {i.nameUZB}
                    </Typography>
                  </Link>
                </Box>
              )
            })
          }
        </AccordionDetails>
      </Accordion>
  )
}

export default AccordionBtn