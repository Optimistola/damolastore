 import React, {useState} from "react";
import {useUser} from "../Context/Store"
const Login = ()=>{
    const [input, setInput]=useState({
        name:'',
    });
    const {setUser}=useUser();
    const { handleLoggedUser}=useUser();

    const HandleLogin = ()=>{
        localStorage.setItem(('user'), JSON.stringify(input));
        setUser(input);
        handleLoggedUser()
        }
  return(
      <div>
          <input type="text"
           placeholder='login' 
           onChange={(event)=>setInput({name:event.target.value})}
            className='mb-3 mt-10 border rounded-md outline-none '
           />
           <button onClick={HandleLogin} className="bg-red-600 text-white outline-none">
               login
           </button>
      </div>
  )
};
export default Login;