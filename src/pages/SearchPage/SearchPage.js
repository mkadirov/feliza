import { Close, Search } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { productList } from '../../data/DataList'
import ProductCard from '../../components/Global/Cards/ProductCard';
import MyContext from '../../components/Context/MyContext';
import SmallSlider from '../../components/Sliders/SmallSlider';
import { getAllProduct } from '../../api/Product';


function SearchPage({setIsSearchOpen}) {
    const [searchState, setSearchState] = useState('');
    const [searchResult, setSearchResult] = useState([])
    const [lastSeenProducts, setLastSeenProducts] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    const {likedList, lastSeenList} = useContext(MyContext)
    const [list, setList]  = useState([]);
    
    
    useEffect(() => {
        const fetchData = async() => {
            const res = await getAllProduct();
            if(res.success) {
                const list = [...res.data]
                setList(list)
                const newArray = list.filter(item => lastSeenList && lastSeenList.includes(item.product.id));
                console.log(newArray);
                setLastSeenProducts(newArray);
            }
        }
        fetchData();
    }, [lastSeenList])

    const removeApostrophes = (word) => word.replace(/'/g, '');
    
    function searchProduct(value){

        const filtredList = list.filter(item => {
            const title = removeApostrophes(item.product.nameUZB);
            const wordToFind = removeApostrophes(value);
            return(
                title.toLocaleLowerCase().includes(wordToFind.toLocaleLowerCase())
            )
        });
        
        setSearchResult(filtredList);
        setSearchState('')
    }

  return (
    <Box sx={{p:2}}>

        <Box sx={{borderBottom: '1px solid black'}}>
        <IconButton size='large' onClick={()=> setIsSearchOpen(false)}>
            <Close/>
        </IconButton>
        </Box>

       <Grid container justifyContent='center'>
        <Grid item xs={10}>
        <Box display='flex' marginTop={4}>

       <TextField 
       fullWidth   
       id="outlined-basic" 
       label="Mahsulot nomini kriting" 
       variant="outlined" 
       size='small' 
       value={searchState}
       onChange={(e) => setSearchState(e.target.value)}
       />

        <Button navigate={'/search_result'} onClick={() => searchProduct(searchState)} variant='outlined' sx={{height: '40px'}}>
            <Search/>
        </Button>
       </Box>
        </Grid>
       </Grid>

       
        <Grid container spacing={2} sx={{mt: 4}}>
        {
         searchResult.map((item) => {
             return(
                 <Grid key={item.id} item xs={6} md={4} lg={3}>
                     <ProductCard item={item}/>
                 </Grid>
             )
         })
        }
        </Grid>

        <Box sx={{marginTop: 8}}>
        

        <Box marginTop={3}>
            <Typography variant='h5' paddingY={1}>
                Oxirgi ko'rilgan mahsulotlar
            </Typography>
            <SmallSlider list= {lastSeenProducts}/>
        </Box>
        </Box>
       
    </Box>
  )
}

export default SearchPage