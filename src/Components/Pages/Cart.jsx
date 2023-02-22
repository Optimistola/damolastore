import { useProduct } from "../../Context/Store"
import Empty from '../../Asset/Images/emptycart.gif'
import { useState, useRef} from "react";
import { useEffect } from "react";
const Cart=({product})=>{
    const priceRef=useRef(null)
 const {cart}=useProduct();
 const {removeFromCart, moveToWish, amount}=useProduct()
 

return(
    <div className='bg-gray-300 py-5'>
    <div className='ml-5 mr-5 lg:ml-20 lg:mr-20 mt-20 shadow-md py-10 bg-gray-200 '>
        <div>
            <h2 className='text-3xl font-bold text-center mb-10'>Cart items</h2>
        </div>
        <div className='flex flex-col lg:flex-row justify-center'>
        <div className=' w-full flex-auto p-2 lg:w-[65]'>
        {cart.length>0 ?
        cart.map((items)=>(
            <div className='flex flex-col md:flex-row justify-between gap-x-10 gap-y-10 p-3 border border-gray-400 m-5'>
                    <div className=''>
                        <img src={items.img} className='w-full md:w-72 object-cover md:m-5 '/>
                </div>
                <div className='text-center flex flex-col items-center content-center justify-center md:w-[20%]' ref={priceRef}>
                  <h2 className='text-lg font-bold capitalize mb-2 '>{items.name}</h2>
                  <p className=' font-bold'>Price: ${items.price} </p>
                  <p className=' font-bold'>&#215;</p>
                  <p className=' font-bold'>Quantity: {items.count}</p>
                </div>
                <div className='border border-gray-600 flex flex-col items-center justify-center md:w-[40%] m-5'>
                <h2 className='text-lg font-bold text-green-600'>Total price:</h2>
                <p className='text-lg font-bold text-green-600'>${items.total}</p>
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
            <div className='md:w-[30%] h-[500px] border border-gray-600 mr-10'>
                    <h2>Receipt</h2>
                    <p>{amount}</p>
                </div>:''}
                </div>
    </div>
    </div>
);
            }
export default Cart