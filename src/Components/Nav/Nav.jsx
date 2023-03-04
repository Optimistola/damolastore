import {BiUser} from 'react-icons/bi';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useProduct } from '../../Context/Store';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState} from 'react';
const Nav= ()=>{
    const myRef=useRef(null);
    const [color, showColor]=useState()
    useEffect(() => {

    for(let i=0; i< myRef.current.children.length; i++){
        if(color){

        myRef.current.children[i].style.color='red'
     }else{
        myRef.current.children[i].style.color='';
        }
    }
    }, [color])
    const{cartLength}=useProduct();
return(
    <nav className='hidden  text-white md:flex justify-around p-5 semi-bold'>
        <h1 className='ml-5 capitalize font-bold text-lg'>damolas <span className='text-red-600'>store</span></h1> 
        <ul className='md:flex md:gap-6 lg:gap-10 md:ml-20' ref={myRef} onClick={() => showColor(!color)}>
            <li >
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/contact'>Contact</Link>
            </li>
        </ul>
  </nav>
)
}
export default Nav;