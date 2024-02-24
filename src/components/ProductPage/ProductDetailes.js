import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SmallSlider from '../Sliders/SmallSlider';
import MyContext from '../Context/MyContext';
import { getAllProduct } from '../../api/Product';

function ProductDetailes({descriptionUZB, descriptionRUS}) {

    const [lastSeenProducts, setLastSeenProducts] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    const {likedList, lastSeenList} = useContext(MyContext)

    
    
    useEffect(() => {
        const fetchData = async() => {
            const res = await getAllProduct();
            if(res.success) {
                const list = [...res.data]
                const newArray = list.filter(item => lastSeenList && lastSeenList.includes(item?.product?.id));
                console.log(newArray);
                console.log(lastSeenList);
                setLastSeenProducts(newArray);
            }
        }

        fetchData();
    }, [lastSeenList])

    

    useEffect(() => {
        const fetchData = async() => {
          const res = await getAllProduct();
          if(res.success) {
            const arr = likedList.map(item => item?.product?.id)
            const newArray = res.data.filter(obj => arr.includes(obj.product.id));
            setLikedProducts(newArray)
          }
        }
        fetchData();
      }, [likedList])

    
    
    
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