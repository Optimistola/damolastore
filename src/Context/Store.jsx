import React, {useState, useEffect} from 'react';
import {Categories} from './ProductContex';
import { Alert } from '../Components/Utils/alert';

export const UserContext=React.createContext({});
//user
export const UserProvider=(props)=>{
    const [user, setUser]=useState({
        name:"",
    });
    const [logUser, setLoguser]=useState(0);
useEffect(()=>{
const userStorage=localStorage.getItem('user');
setUser(JSON.parse(userStorage));
}, []);

return(
   <UserContext.Provider value={{user, setUser, logUser}}>
       {props.children}
   </UserContext.Provider> 
);
}
 export const ProductContext=React.createContext({});
 export const ProductProvider=(props)=>{
    const [cart, setCart]=useState([]);
    const [wish, setWish]=useState([]);
    const[modal, setModal]=useState({text:''})
    const [category, setCategory]=useState([]);
    const [cartLength, setCartLength]=useState(0)
    const [wishLength, setWishLength]=useState(0)
    const [amount, setAmount]=useState(0)

    useEffect(()=>{
      const storedCart=localStorage.getItem('cart');
      console.log(JSON.parse(storedCart))
      if(storedCart){
          setCart(JSON.parse(storedCart))
      }
    }, [])
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));

    }, [cart])
    useEffect(()=>{
        const storedWish=localStorage.getItem('wish');
        console.log(JSON.parse(storedWish))
        if(storedWish){
            setWish(JSON.parse(storedWish))
        }
      }, [])
      useEffect(()=>{
          localStorage.setItem('wish', JSON.stringify(wish));
  
      }, [wish])
  
    //add item to cart
    const addToCart=(product )=>{
        if(cart.find((item)=>item.id===product.id)){
            setModal({text:'Item already added in cart'});
            setTimeout(()=>setModal({text:''}), 1000);
            window.navigator.vibrate(700);
        }
        if(!cart.find((item)=>item.id===product.id)){
           setModal({text:'Item added in cart'});
           setTimeout(()=>setModal({text:''}), 1000);
            setCart([...cart, product]);
            window.navigator.vibrate(700);
            setAmount(cart.map((item)=>item.price * item.quantity).reduce((acc, price)=>acc+price))
        }
    }
    // add item to wish
    const addToWish=(products )=>{
        if(wish.find((item)=>item.id===products.id)){
            setModal({text:'Item already added in wish'});
            setTimeout(()=>setModal({text:''}), 1000);
            window.navigator.vibrate(700);
        }
        if(!wish.find((item)=>item.id===products.id)){
           setModal({text:'Item added in wish'});
           setTimeout(()=>setModal({text:''}), 1000);

           setWish([...wish, products]);
            window.navigator.vibrate(700);
        }
    }

    useEffect(()=>{
        setCategory(Categories);
        setCartLength(cart.length);

    }, [cart.length]);
    useEffect(()=>{
        setWishLength(wish.length);

    }, [wish.length])
    // remove item from cart
    const removeFromCart=(productId)=>{
        setCart(cart.filter((product)=>(product.id!==productId)))
    }
    const removeFromWish=(productID)=>{
        setWish(wish.filter((products)=>(products.id!==productID)))
    }
    //function to handle item moving from wish to cart
const moveToCart=(product, productID)=>{
    setWish(wish.filter((products)=>(products.id!==productID)))
    if(cart.find((item)=>item.id===product.id)){
        setModal({text:'Item already in cart'});
        setTimeout(()=>setModal({text:''}), 1000);
        window.navigator.vibrate(700);
    }
    if(!cart.find((item)=>item.id===product.id)){
       setModal({text:'Item moved to cart'});
       setTimeout(()=>setModal({text:''}), 1000);

        setCart([...cart, product]);
        window.navigator.vibrate(700);
    }
}

// function to handle item moving from cart to wish
const moveToWish=(product, productID)=>{
    setCart(cart.filter((products)=>(products.id!==productID)))
    if(wish.find((item)=>item.id===product.id)){
        setModal({text:'Item already in wish'});
        setTimeout(()=>setModal({text:''}), 1000);
        window.navigator.vibrate(700);
    }
    if(!wish.find((item)=>item.id===product.id)){
       setModal({text:'Item moved to wish'});
       setTimeout(()=>setModal({text:''}), 1000);

        setWish([...wish, product]);
        window.navigator.vibrate(700);
    }
}

return(
        <ProductContext.Provider value={{cart, wish, amount, addToWish, addToCart, moveToCart, moveToWish, removeFromCart, removeFromWish, modal, category, cartLength, wishLength}}>
       {props.children}
   </ProductContext.Provider> 
);
}
export const useProduct=()=>React.useContext(ProductContext)
export const useUser=()=>React.useContext(UserContext);
