import {IoSearch} from 'react-icons/io5';
import { useState } from 'react';
 export const Search=({cat, action, action2})=>{ 
     return(
         <div className=' p-5 flex '>
             <input type='text' placeholder={`search ${cat}...`}
             onChange={action2}
             className=' outline-none w-[200px] border rounded-md border-gray-600 z-50'/>
             <button ><IoSearch size={20}/></button>
         </div>
     )
 }