import {IoSearch} from 'react-icons/io5';
import { useState } from 'react';
 export const Filter=({cat, action1, action2})=>{ 
     return(
         <div className=' p-5 flex '>
            <p>filter by price</p>
             <input type='range' placeholder={`search ${cat}...`}
             onChange={action1} max='60' min='10'
             className=' outline-none w-[200px] border rounded-md border-gray-600 z-50'/>
         </div>
     )
 }