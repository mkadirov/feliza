import React, {useContext} from 'react';
import {Box, TextField} from '@mui/material'
import MyContext from '../Context/MyContext'


const ContactForm = ({setFullName, setPhoneNumber, fullName, phoneNumber}) => {
    

    
    return (
      <Box marginTop={2}>
        {/* <form onSubmit={handleSubmit(onSubmit)} >
        <div>
            <Box  display={'flex'} sx={{border: '1px solid grey' , overflow: 'hidden', marginTop: 2}}>
                <Box  flex={1} display={'flex'} alignItems={'center'} sx={{paddingLeft: 1}} >
                <Controller
                    name="fullName"
                    control={control}
                    defaultValue={user?.firstName || ''}
                    rules={{ required: 'Iltimos ismingizni kriting' }}
                    render={({ field, fieldState }) => (
                      <div>
                        <input type="text" {...field} placeholder='Ism va Familiyangiz'/>
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
                      <input type="text" {...field} placeholder='Telefon raqamingiz'/>
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
              
        </form> */}
        <TextField 
          variant='outlined' 
          size='small' 
          label = 'Ism va familiyangiz' 
          fullWidth
          // defaultValue={user? user.name: ''}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField 
          sx={{marginTop: 2}}
          variant='outlined' 
          size='small' 
          label = 'Telefon raqamingiz' 
          fullWidth
          //defaultValue={user? user.name: ''}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      
      </Box>
    );
};

export default ContactForm;
