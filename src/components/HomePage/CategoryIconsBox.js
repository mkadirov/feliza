import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { categoryIconList } from '../../data/DataList'
import MyContext from '../Context/MyContext'

function CategoryIconsBox() {
    const {isUzbek} = useContext(MyContext)

  return (
    <Box paddingX={1}>
        <Grid container spacing={2}>
            {
                categoryIconList.map((item, idx) => {
                    return(
                        <Grid item xs={3} key={item.nameRU + item.nameUZ}>
                            <Box sx={{ height: '22vw', width: '100%', backgroundColor: 'green'}}>
                                <img src={item.url} alt="" />
                            </Box>
                            <Box sx={{border: '1px solid black', marginTop: 1, textAlign: 'center'}}>
                                <Typography fontSize={12}>
                                    {isUzbek? item.nameUZ: item.nameRU}
                                </Typography>
                            </Box>
                        </Grid>
                    )
                })
            }
        </Grid>
    </Box>
  )
}

export default CategoryIconsBox
