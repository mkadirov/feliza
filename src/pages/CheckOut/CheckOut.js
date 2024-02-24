import React, {useState, useEffect} from 'react'
import {Box, Typography, Grid, Button} from '@mui/material'
import MediumIcon from '../../components/Global/Icons/MediumIcon'
import homeIcon from  '../../assets/icons/home.png'
import contactIcon from  '../../assets/icons/contact.png'
import AdresseForm from '../../components/CheckOut/AdresseForm';
import ContactForm from '../../components/CheckOut/ContactForm'
import PaymentMethod from '../../components/CheckOut/PaymentMethod'
import { getAdressByCustomer } from '../../api/Adress'
import { useContext } from 'react'
import MyContext from '../../components/Context/MyContext'
import AddressList from '../../components/CheckOut/AddressList'
import SelectedAddress from '../../components/CheckOut/SelectedAddress'


function CheckOut() {

  const [adresseList, setAdresseList] = useState([]);
  const [hasAdress, setHasAdress] = useState(false);
  const [payment, setPayment] = useState('payme');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {user} = useContext(MyContext)
  const [addressId, setAddressId] = useState('')
  const [newAddress, setNewAddress] = useState('')

  
  
  useEffect(() => {
    const fetchData = async () => {
      console.log(user);
      const res = await getAdressByCustomer(user)
      if(res.success) {
        setAdresseList(res.data)
      }
    }
    fetchData();
  }, [newAddress])

  useEffect(() => {
    if(adresseList.length >= 1) {
      setHasAdress(true)
    }
  }, [adresseList])

  
  const createOrder = () => {
    console.log('Order');
  }


  return (
    <Box sx={{marginY: '14vh'}}>
        <Grid container display={'flex'} justifyContent={'center'}>
          <Grid item xs= {11} md= {7} lg = {5} xl = {3}>
            <Box sx={{border: '1px solid grey', width: '100%', padding: {xs: '3px', md: '10px'}}}>

              <Box display={'flex'} alignItems={'center'}>
                <MediumIcon icon = {homeIcon}/>
                <Typography sx={{marginLeft: 1}}>
                  Manzilingiz
                </Typography>
              </Box>
              {
                !hasAdress ? <AdresseForm adresseList = {adresseList} setHasAdress = {setHasAdress} setAddressId={setAddressId}/> : addressId == '' ? <AddressList 
                adresseList = {adresseList} setHasAdress = {setHasAdress} 
                setAddressId = {setAddressId}/> : <SelectedAddress addressId = {addressId} adresseList = {adresseList} 
                setAddressId = {setAddressId}/>
              } 

              <Box display={'flex'} alignItems={'center'} sx={{marginTop: 2}}>
                <MediumIcon icon = {contactIcon}/>
                <Typography sx={{marginLeft: 1}}>
                  Kontakt ma'lumotlari
                </Typography>
              </Box>
              <ContactForm setFirstName={setFirstName} setLastName={setLastName} 
                  setPayment={setPayment} setPhoneNumber={setPhoneNumber} 
                  createOrder = {createOrder} payment = {payment}/>
            </Box>
          </Grid>
        </Grid>
    </Box>
  )
}

export default CheckOut