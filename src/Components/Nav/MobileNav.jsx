import React, {useState} from 'react'
import {BiUser} from 'react-icons/bi';
import {IoClose, IoMenu} from 'react-icons/io5'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useProduct } from '../../Context/Store';
import { Link } from 'react-router-dom';
const MobileNav= ()=>{
    const{cartLength}=useProduct();
    const [navOpen, setnavOpen]=useState(false);

return(
<div className='flex justify-between ml-5 mr-5 mt-3 md:hidden'>
    <div className='flex'>
        <button className='cursor-pointer' onClick={()=>setnavOpen(true)}><IoMenu size={25}/></button>
        <h1 className='ml-3 capitalize font-bold'>damolas <span className='text-red-600'>store</span></h1> 
    </div>
    <nav className={`${navOpen ? '-right-0' : '-right-full '} fixed top-0 bg-black text-white z-50 w-full bottom-0 transition-all ease-in duration-500 `}>
        <button onClick={()=>setnavOpen(false)} className="absolute right-10 top-5 cursor-pointer"><IoClose size={25} /></button>
        <ul className='flex flex-col justify-center content-center items-center space-y-8 h-full capitalize font-secondary' >
            <li onClick={()=>setnavOpen(false)}>
            <Link to='/'>Home
            </Link>
                </li>
            <li onClick={()=>setnavOpen(false)}>
                <Link to='/about'>About</Link>
            </li>
            <li onClick={()=>setnavOpen(false)}>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        </nav>
        <div className='gap-3 flex md:mr-20'>
            <button className=' rounded outline-none px-2 hover:bg-gray-600 hover:text-white border'><a href='/login'>Login</a></button>
            <button className=' rounded outline-none px-2 hover:bg-gray-600 hover:text-white border'><a href='/sign_up'>Sign up</a></button>
            <BiUser size={20}/>
            <Link to='/cart'><AiOutlineShoppingCart size={20}/>
            <span className='absolute flex content-center text-sm items-center justify-center text-white top-1 left  w-[15px] h-[15px] bg-red-600 rounded-full'>
                {cartLength}
                </span>
            </Link>
        </div>
</div>

)
}
export default MobileNav;