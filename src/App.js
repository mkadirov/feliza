import './App.css';
import {Box, ThemeProvider, createTheme} from '@mui/material'
import {Route, Routes, BrowserRouter, useNavigate} from 'react-router-dom'
import Homepage from './pages/HomePage/Homepage';
import HomePageHeader from './components/Header';
import Products from './pages/Products/Products';
import { useEffect, useState } from 'react';
import Menu from './pages/Menu/Menu';
import Product from './pages/Product/Product';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import BasketPage from './pages/BasketPage/BasketPage';
import MyContext from './components/Context/MyContext';




function App() {

  const initialLikeList = [];
  const initialBasketList = [];
  const initialLastSeenList = [];

  
  const [likedList, setLikedList] = useState(() => {
    const storedLikedList = localStorage.getItem('likeList');
    return storedLikedList? JSON.parse(storedLikedList) : initialLikeList;
  });

  const [basketList, setBasketList] = useState(() => {
    const storedBasketList = localStorage.getItem('myBasketList');
    return storedBasketList? JSON.parse(storedBasketList) : initialBasketList;
  });

  const [lastSeenList, setLastSeenList] = useState(() => {
    const storedLastSeenList = localStorage.getItem('lastSeen');
    return storedLastSeenList? JSON.parse(storedLastSeenList) : initialLastSeenList;
  })
  
  useEffect(() => {
    localStorage.setItem('likeList', JSON.stringify(likedList))
  }, [likedList]);

  useEffect(() => {
    localStorage.setItem('myBasketList', JSON.stringify(basketList))
  }, [basketList]);

  useEffect(() => {
    localStorage.setItem('lastSeen', JSON.stringify(lastSeenList))
  }, [lastSeenList]);


  function addToLastSeenList(id) {
    const list = [...lastSeenList];
    
    if(list.includes(id)){
      return;
    } else {
      if(list.length >= 10) {
        list.shift();
        
      }
      list.push(id);
      
      setLastSeenList(list)
    }
    
  }

  const  changeLikedList =(id) =>{

    if(likedList.includes(id)) {
      const newList = likedList.filter(item => item != id);
      setLikedList(newList)
    } else {
      setLikedList([...likedList, id]);
    }
  };

  const addToBasket = (id) => {  
    if(basketList.some(item => item.id == id)) {
      setBasketList(prevList => prevList.map(
        item => item.id == id? {...item, quantity: (item.quantity + 1)} : item
      ))
    } else {
      setBasketList([...basketList, {id: id, quantity: 1}])
    }
  }

  const deleteFromBasket = (id) => {
    const newList = basketList.filter(item => item.id !=id);
    setBasketList(newList);
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
    borderRadius: 0,
  }
});

  return (

      <MyContext.Provider 
      value={{
        likedList, 
        changeLikedList,
        basketList,
        addToBasket,
        deleteFromBasket,
        lastSeenList,
        addToLastSeenList
        }}>
        <ThemeProvider theme={theme}>
        <Box>
      <BrowserRouter>
      <HomePageHeader/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/products/:category' element={<Products/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/favorite' element={<FavoritePage/>}/>
          <Route path='/basket' element={<BasketPage/>}/>
          
        </Routes>
      </BrowserRouter>
    </Box>
        </ThemeProvider>
      </MyContext.Provider>
    
  );
}

export default App;
