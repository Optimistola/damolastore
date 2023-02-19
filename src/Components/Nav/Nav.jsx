import {BiUser} from 'react-icons/bi';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useProduct } from '../../Context/Store';
import { Link } from 'react-router-dom';
const Nav= ()=>{
    const{cartLength}=useProduct();
return(
    <nav className='hidden md:flex justify-between mt-5 text-sm semi-bold'>
        <h1 className='ml-5 capitalize font-bold'>damolas <span className='text-red-600'>store</span></h1> 
        <ul className='md:flex md:gap-6 lg:gap-10 md:ml-20'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='gap-6 flex md:mr-20'>
            <button className=' rounded outline-none px-3 hover:bg-gray-600 hover:text-white border'><a href='/login'>Login</a></button>
            <button className=' rounded outline-none px-3 hover:bg-gray-600 hover:text-white border'><a href='/sign_up'>Sign up</a></button>
        </div>
  </nav>
)
}
export default Nav;