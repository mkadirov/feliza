import './App.css';
import {Box, ThemeProvider, createTheme} from '@mui/material'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Homepage from './pages/HomePage/Homepage';
import HomePageHeader from './components/Header';
import Products from './pages/Products/Products';
import { useEffect, useState } from 'react';
import Menu from './pages/Menu/Menu';
import Product from './pages/Product/Product';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import BasketPage from './pages/BasketPage/BasketPage';
import MyContext from './components/Context/MyContext';
import { addProductToBasket } from './api/Basket';
import UserPage from './pages/UserPage/UserPage';
import { addLikedItem, deleteLikedItem, getLikedItems } from './api/LikedList';
import CheckOut from './pages/CheckOut/CheckOut';
import MainFooter from './components/Footer/MainFooter';


function App() {

  const initialLastSeenList = [];
  const [isLoginPageOpen, setIsLoginPageOpen] = useState(false);
  const [isUserActive, setIsUserActive] = useState(false)
  const [likedList, setLikedList] = useState([]);
  const [isUzbek, setIsUzbek] = useState(true)
  const [orderItems, setOrderItems] = useState([])

  const [user, setUser] = useState(() => {
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      if (userData.expirationTime > new Date().getTime()) {
        return userData.user
      } else {
        localStorage.removeItem('userData');
        return null
      }
    } else {
      return null
    }
  })
  
  useEffect(() => {
    refreshLikedList()
  }, [user]);

  const [lastSeenList, setLastSeenList] = useState(() => {
    const storedLastSeenList = localStorage.getItem('lastSeen');
    return storedLastSeenList? JSON.parse(storedLastSeenList) : initialLastSeenList;
  })


  const refreshLikedList = async() => {
    if(user) {
      const res = await getLikedItems(user.customerId);
      if(res.success) {
        setLikedList(res.data)
      }
    } else {
      setLikedList([])
    }
  }

  useEffect(() => {
    localStorage.setItem('lastSeen', JSON.stringify(lastSeenList))
  }, [lastSeenList]);


  function addToLastSeenList(id) {
    const list = [...lastSeenList];
    
    if(list.includes(id)){
      list.filter(item => item !== id)
      list.unshift(id)
    } else {
      if(list.length >= 10) {
        list.pop();
      }
      list.unshift(id)
      setLastSeenList(list)
    }
  }

  const changeLikedList =(id) => {
    console.log(id);
    //const idex = getIndexById(id)
   
    if(checkIfIdExists(id)) {
      console.log('Öchirish');
      const likedItem = getObjectById(id)
      deleteLikedItemFromList(likedItem.id)
    } else {
      addLikedItemToList(id)
    }
  };

  const checkIfIdExists = (targetId) => {
    console.log(likedList[0]?.product?.id);
    return likedList.some(obj => obj.product.id == targetId);
  };

  const getObjectById = (targetId) => {
    return likedList.find(obj => obj.product.id == targetId);
  };

  const deleteLikedItemFromList = async(id) => {
    const res = await deleteLikedItem(id);
    if(res.success) {
      refreshLikedList()
    }
  }

  const addLikedItemToList = async(id) => {
    const jsonBody = {
      customerId: user.customerId,
      productId: id
    }
    const res = await addLikedItem(jsonBody)
    if(res.success) {
      setLikedList([...likedList, jsonBody])
      refreshLikedList()
    }
  }

  const addToBasket = async(productSizeVariantId) => {  
    const cartItem = {
      customerId: user.customerId,
      productSizeVariantId: productSizeVariantId,
      quantity: 1
    }

    const res = await addProductToBasket(cartItem);
    if(res.success) {
      alert("Maxsulot savatchaga qo'shildi")
    } else {
      console.log('Xatolik');
    }
  }

  
 const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(234, 87, 116)',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  shape: {
    borderRadius: 5,
  }
});

  return (
      <MyContext.Provider 
      value={{
        likedList, 
        changeLikedList,
        addToBasket,
        lastSeenList,
        addToLastSeenList,
        isUserActive,
        setIsUserActive,
        user,
        setUser,
        isLoginPageOpen,
        setIsLoginPageOpen,
        isUzbek, 
        setIsUzbek,
        orderItems,
        setOrderItems
        }}>
        <ThemeProvider theme={theme}>
        <Box>
          <BrowserRouter>
            <HomePageHeader/>
            <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/products/:id' element={<Products/>}/>
              <Route path='/menu' element={<Menu/>}/>
              <Route path='/product/:id' element={<Product/>}/>
              <Route path='/favorite' element={<FavoritePage/>}/>
              <Route path='/basket' element={<BasketPage/>}/>
              <Route path='/user_page' element = {<UserPage/>}/>
              <Route path='/checkout' element = {<CheckOut/>}/>
            </Routes>
            <MainFooter/>
          </BrowserRouter>
    </Box>
        </ThemeProvider>
      </MyContext.Provider>
    
  );
}

export default App;
