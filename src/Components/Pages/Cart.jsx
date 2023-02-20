import { useProduct } from "../../Context/Store"
import Empty from '../../Asset/Images/emptycart.gif'
import { useState, useRef} from "react";
import { useEffect } from "react";
const Cart=({product})=>{
    const priceRef=useRef(null)
 const {cart}=useProduct();
 const {removeFromCart, moveToWish, amount}=useProduct()
 

return(
    <div className='ml-5 mr-5 lg:ml-20 lg:mr-20 mt-20 shadow-md py-10 bg-blue-200 '>
        <div>
            <h2 className='text-lg font-bold text-center mb-10'>Cart items</h2>
        </div>
        <div className='md:flex justify-center'>
        <div className=''>
        {cart.length>0 ?
        cart.map((items)=>(
            <div className='md:flex md:w-[90%] border border-black m-10'>
                    <div className='flex'>
                        <img src={items.img} className=' w-[full] md:w-[80%] block  md:m-5'/>
                </div>
                <div className='text-center flex flex-col items-center justify-center' ref={priceRef}>
                  <h2 className='text-lg font-bold '>{items.name}</h2>
                  <p className='text-green-500'>price: $</p>
                  <p  id='price'>{items.price}</p>
                </div>
                <div className='border border-gray-600 flex flex-col items-center m-5 justify-center md:w-[80%]'>
                <h2 className='text-lg font-bold '>{items.total}</h2>
                  <p>${items.price}</p>
                  <button className='bg-red-600 text-white rounded-md btn-sm text-sm px-2 py-1 mb-3' onClick={()=>removeFromCart(items.id)}>Delete</button>
                  <button className='bg-blue-600 text-white rounded-md btn-sm text-sm px-2 py-1 mb-3' onClick={()=>moveToWish(items, items.id)}>Move to wish</button>

                </div>
                </div>
            )):
            <div className='flex flex-col mt-20 justify-center items-center content-centers'>
            <p>Sapa don sup? go hustle bro for your your Cart is empty</p>
            <img src={Empty}/>

            </div>
            }
            </div>
            {cart.length>0 ?
            <div className='w-[50%]   h-[500px] border border-gray-600 mr-10'>
                    <h2>Receipt</h2>
                    <p>{amount}</p>
                </div>:''}
                </div>
    </div>
);
            }
export default Cart