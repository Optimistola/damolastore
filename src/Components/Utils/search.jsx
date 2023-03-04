import {IoSearch} from 'react-icons/io5';
import { useState } from 'react';
 export const Search=({cat, action, action2})=>{ 
     return(
         <div className=' p-5 flex '>
             <input type='text' placeholder={`search ${cat}...`}
             onChange={action2}
             className=' outline-none w-[200px] border border-purple-900 rounded-md  focus:outline'/>
             <button ><IoSearch size={20}/></button>
         </div>
     )
 }