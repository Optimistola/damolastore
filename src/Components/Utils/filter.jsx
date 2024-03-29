import {IoSearch} from 'react-icons/io5';
import { useState } from 'react';
 export const Filter=({cat, action1, action2, max, min, value})=>{ 
     return(
         <div className=' p-5 flex gap-2'>
            <p>filter by price:</p>
             <input type='range' placeholder={`search ${cat}...`}
             onChange={action1} max={max} min={min} value={value}
             className=' outline-none w-[200px] border rounded-md '/>
         </div>
     )
 }