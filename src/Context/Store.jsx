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
    const[modal, setModal]=useState({text:''})
    const [category, setCategory]=useState([]);
    const [cartLength, setCartLength]=useState(0)
    const addToCart=(product, )=>{
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
        }
    }
    useEffect(()=>{
        setCategory(Categories);
        setCartLength(cart.length);
    }, [cart.length]);
    const removeFromCart=(productId)=>{
        setCart(cart.filter((product)=>(product.id!==productId)))
    }
return(
        <ProductContext.Provider value={{cart, addToCart, removeFromCart, modal, category, cartLength}}>
       {props.children}
   </ProductContext.Provider> 
);
}
export const useProduct=()=>React.useContext(ProductContext)
export const useUser=()=>React.useContext(UserContext);
