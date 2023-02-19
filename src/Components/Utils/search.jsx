import {IoSearch} from 'react-icons/io5';
import { useState } from 'react';
 export const Search=({cat, action, action2})=>{ 
     return(
         <div className='flex it ems-center text-green-600 rounded-md ml-10'>
             <input type='search' placeholder={`search ${cat}...`}
             onChange={action2}
             className=' outline-none border border-gray-200 px-2'/>
             <button class='bg-red-600 px-2 py-1 text-white'><IoSearch size={20} onClick={action}/></button>
         </div>
     )
 }