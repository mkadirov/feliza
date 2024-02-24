import React, {useContext} from 'react';
import {Box, Button} from '@mui/material'
import { useForm, Controller } from 'react-hook-form';
import PaymentMethod from './PaymentMethod';
import MyContext from '../Context/MyContext'
const ContactForm = ({setFirstName, setLastName, setPhoneNumber, setPayment, createOrder, payment}) => {
    const { control, handleSubmit } = useForm();
    const {user} = useContext(MyContext)

    const onSubmit = (data) => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setPhoneNumber(data.phoneNumber);
        createOrder();
      };
  
    return (
      <Box>
        <form onSubmit={handleSubmit(onSubmit)} >
        <div>
            <Box  display={'flex'} sx={{border: '1px solid grey' , overflow: 'hidden', marginTop: 2}}>
                <Box  flex={1} display={'flex'} alignItems={'center'} sx={{paddingLeft: 1}} >
                <Controller
                    name="firstName"
                    control={control}
                    defaultValue={user?.firstName || ''}
                    rules={{ required: 'Iltimos ismingizni kriting' }}
                    render={({ field, fieldState }) => (
                      <div>
                        <input type="text" {...field} placeholder='Ismingiz...'/>
                        {fieldState?.error && <p style={{color: 'red'}}>{fieldState?.error?.message}</p>}
                      </div>
                    )}
                />
                </Box>
                <Button   size='small' sx={{color: 'white'}}>
                    S
                </Button>
            </Box>  
        </div>
        <div>
            <Box  display={'flex'} sx={{border: '1px solid grey' , overflow: 'hidden', marginTop: 2}}>
                <Box  flex={1} display={'flex'} alignItems={'center'} sx={{paddingLeft: 1}} >
                <Controller
                    name="lastName"
                    control={control}
                    defaultValue={user?.firstName || ''}
                    rules={{ required: 'Iltimos familiyangizni kriting' }}
                    render={({ field, fieldState }) => (
                      <div>
                        <input type="text" {...field} placeholder='Familiyangiz...'/>
                        {fieldState?.error && <p style={{color: 'red'}}>{fieldState?.error?.message}</p>}
                      </div>
                    )}
                />
                </Box>
                <Button   size='small' sx={{color: 'white'}}>
                    S
                </Button>
            </Box>  
          
        </div>
        <div>
            <Box  display={'flex'} sx={{border: '1px solid grey' , overflow: 'hidden', marginTop: 2}}>
                <Box  flex={1} display={'flex'} alignItems={'center'} sx={{paddingLeft: 1}} >
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue={user?.phoneNumber || ''}
                  rules={{ required: 'Iltimos telefon raqamingizni kriting' }}
                  render={({ field, fieldState }) => (
                    <div>
                      <input type="text" {...field} placeholder='Telefon raqamingiz...'/>
                      {fieldState?.error && <p style={{color: 'red'}}>{fieldState?.error?.message}</p>}
                    </div>
                  )}
                />
                </Box>
                <Button   size='small' sx={{color: 'white'}}>
                    S
                </Button>
             </Box>  
          
           </div> 
             <PaymentMethod setPayment = {setPayment} payment={payment}/>
            <Box sx={{display: 'flex', justifyContent: 'end'}}>
                <Button type='submit' size='small'  variant='contained'   sx={{marginTop: 2, marginBottom: 1}}>
                  Tölovni amalga oshirish
                </Button>
              </Box>
      </form>
      
      
      </Box>
    );
};

export default ContactForm;
