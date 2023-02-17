import MobileNav from "./MobileNav";
import Nav from './Nav';
import {IoSearch} from 'react-icons/io5';
import Category from "../Category/SingleCategory";
import { useProduct } from "../../Context/Store"
import { Link } from "react-router-dom";
const Header =()=>{
    const {category}=useProduct()
    const{CartLength}=useProduct();
return(
    <header>
        <Nav/>
        <MobileNav/>
        <div className='md:flex  justify-between items-center font-secondary text-bold mt-2 capitalize bg-gray-900 text-white py-4'>
        <ul className=" ml-5 flex flex-wrap justify-betwen gap-3 md:gap-3 items-center contents-center">
                {category.map((item)=>
                 <li className='bg-gray-500  w-[30%] text-sm lg:w-[90px] md:w-[80px] hover:bg-gray-700 rounded-md lg:text-md text-center text-white'>
                     <Link to={`category/${item.category}`}>{item.category}</Link>
                </li>
                 )}
                 </ul>
            <div className='flex content-center items-center ml-5 md:mr-5 mt-3 md:mt-3 lg:mt-0'>
                <input type='search' placeholder='Search...' className='rounded-md outline-none px-2'/>
                <button><IoSearch size={20}/></button>
            </div>
        </div>
    </header>
);
}
export default Header