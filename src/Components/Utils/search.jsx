import {IoSearch} from 'react-icons/io5';
import { useState } from 'react';
 export const Search=({cat, action, action2})=>{ 
     return(
         <div className='flex justify-center text-green-600 rounded-md ml-5 md:ml-10 border border-gray-400 w-[230px] '>
             <input type='search' placeholder={`search ${cat}...`}
             onChange={action2}
             className=' outline-none w-[200px]'/>
             <button class='bg-red-600 px-2 py-1 text-white w-[30px]'><IoSearch size={20} onClick={action}/></button>
         </div>
     )
 }