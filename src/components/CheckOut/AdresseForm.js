import React, {useState} from 'react'
import { useForm, Controller } from 'react-hook-form';
import {Box, TextField, Button, Typography, Grid} from '@mui/material'
import MainDropdown from './MainDropdown';
import SubRegionDropDown from './SubRegionDropDown';
import PostFilialDropDown from './PostFilialDropDown';
import { addAddress } from '../../api/Adress';


function AdresseForm({adresseList, setHasAdress, setAddressId}) {
    const [region, setRegion] = useState('')
    const [district, setDistrict] = useState('')
    const [postFilial, setPostFilial] = useState('')
    const [street, setStreet] = useState('')
    const [houseNumber, setHouseNumber] = useState('')

    const addNewAdress = async() => {
        const adress = {
            customerId : 1,
            regionId : region.id,
            subRegionId : district.id,
            street : street,
            houseNumber : houseNumber,
            postFilialId : postFilial.id
        }
        console.log(adress);
        const res = await addAddress(adress);

        if(res.success) {
            console.log('manzil yaratildi');
            setAddressId(res.data.object.id)
            setHasAdress(true)
            
        }
    }

    const addressCounter = adresseList.length;

 return (
    <Box sx={{marginTop: 2, width: '100%' }}>

        {
            addressCounter && <Box sx={{marginY: 1, display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <Typography sx={{color: 'grey'}}>
                        Sizda mavjud manzillar soni: {addressCounter} ta
                    </Typography>
                </Box>
                <Button size='small' variant='contained' onClick={() => setHasAdress(true)} color='success'>
                    Tanlash
                </Button>
            </Box>
        }
        <Box   display={'flex'} sx={{border: '1px solid grey'}}>
            <Box flex={1} display={'flex'} alignItems={'center'} sx={{paddingLeft: 1}}>
                <input style={{backgroundColor: 'inherit'}}  type='text' placeholder='Viloyat' readOnly value={region?.name}/>
            </Box>
            <MainDropdown setRegion = {setRegion} setDistrict = {setDistrict} region={region} setPostFilial = {setPostFilial}/>
        </Box>
        <Box  display={'flex'} sx={{border: '1px solid grey', marginY: 2}}>
            <Box  flex={1} display={'flex'} alignItems={'center'} sx={{paddingLeft: 1}} >
                <input style={{backgroundColor: 'inherit'}} type='text' placeholder='Tuman' readOnly value={district == ''? '' : district.name}/>
            </Box>
            <SubRegionDropDown setDistrict = {setDistrict}  region={region} setPostFilial = {setPostFilial}/>
        </Box>
        <Box  display={region.name !== 'Toshkent sh'? 'flex': 'none'} sx={{border: '1px solid grey', marginY: 2}}>
            <Box  flex={1} display={'flex'} alignItems={'center'} sx={{paddingLeft: 1}} >
                <input style={{backgroundColor: 'inherit'}} type='text' placeholder='Pochta filiali' readOnly value={postFilial ==''? '' : postFilial.postName + " - " +  postFilial.postFilialName}/>
            </Box>
            <PostFilialDropDown district={district} setPostFilial = {setPostFilial}/>
        </Box>

        <Box display={region.name !== 'Toshkent sh'? 'none': 'block'}>
            <Grid container spacing={1}>
                <Grid item xs = {8}>
                    <Box  display={'flex'} sx={{border: '1px solid grey'}}>
                        <Box  flex={1} display={'flex'} alignItems={'center'} sx={{paddingLeft: 1}} >
                            <input  type='text' placeholder='Köcha nomi'  value={street} onChange={(e) => setStreet(e.target.value)}/>
                        </Box>
                        <Button  size='small' sx={{color: 'white'}}>
                            Street
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs = {4}>
                    <Box  display={'flex'} sx={{border: '1px solid grey' , overflow: 'hidden'}}>
                        <Box  flex={1} display={'flex'} alignItems={'center'} sx={{paddingLeft: 1}} >
                            <input type='number' placeholder='Uy raqami'  value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)}/>
                        </Box>
                        <Button   size='small' sx={{color: 'white'}}>
                            S
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>

        <Box  sx={{display: 'flex', justifyContent: 'center', marginTop: 2}}>
            <Button variant='contained' size='small' onClick={addNewAdress}>
                Manzilni saqlash
            </Button>
        </Box>
    </Box>
  )
}

export default AdresseForm