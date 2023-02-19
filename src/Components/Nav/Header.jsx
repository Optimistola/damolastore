import MobileNav from "./MobileNav";
import Nav from './Nav';
import {BiShoppingBag} from 'react-icons/bi';
import Category from "../Category/SingleCategory";
import { useProduct } from "../../Context/Store"
import { Link } from "react-router-dom";
import {BiUser} from 'react-icons/bi';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header =()=>{
    const {category}=useProduct()
    const{cartLength}=useProduct();
return(
    <header>
        <Nav/>
        <MobileNav/>
        <div className='md:flex  justify-between items-center font-secondary text-bold mt-2 capitalize bg-gray-900 text-white py-4'>
        <ul className=" ml-5 flex flex-wrap justify-betwen gap-3 md:gap-3 items-center contents-center">
                {category.map((item)=>
                 <li className='bg-gray-500  w-[30%] lg:w-[90px] md:w-[80px] hover:bg-gray-700 rounded-md lg:text-md text-center text-white'>
                     <Link to={`category/${item.category}`}>{item.category}</Link>
                </li>
                 )}
                 </ul>
            <div className='flex content-center items-center ml-5 md:mr-5 mt-3 md:mt-3 lg:mt-0'>
            </div>
            <div className='gap-3 flex  justify-center md:mr-20'>
            <BiUser size={20}/>
            <Link to='/cart'><AiOutlineShoppingCart size={20}/>
            <span className='relative flex content-center text-sm items-center justify-center text-white -top-5 left-3  w-[15px] h-[15px] bg-red-600 rounded-full'>
                {cartLength}
                </span>
            </Link>
            <Link to='/WishList'>
                <BiShoppingBag/>
            </Link>
        </div>

        </div>

    </header>
);
}
export default Header