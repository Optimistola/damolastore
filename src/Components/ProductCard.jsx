import { useProduct } from "../Context/Store";
import { BiHeart } from "react-icons/bi";
import {useState, useRef, useEffect} from 'react'
const ProductCard=({product, Total})=>{
  const priceRef=useRef()
    const {addToCart, addToWish}=useProduct();
    const [count, setCount]=useState(0)
    const [total, setTotal]=useState(product.price)
    const add=(product)=>{
      const newPrice=priceRef.current.innerHTML;
      setCount(count+1);
      console.log(newPrice*count);
      setTotal(newPrice*count)
    }
    useEffect(()=>{
      const newPrice=priceRef.current.innerHTML;
      setTotal(newPrice*count)

    }, [count])
    const minus=(e)=>{
        if(count < 2){
            return false
        }
        setCount(count-1);
      }
      
    return(
        <div   className='w-[250px] md:w-[30%] lg:w-[20%] border border-gray-100 shadow-sm mb-5 hover:transform transition duration-500 hover:scale-110	'>
        <div key={product.id} className='flex flex-col '>
             <img src={product.img} className='' alt={product.category}/>
             <div className='py-5 ml-3'>
             <p className='text-lg mb-3' id='price'>{product.name}</p>
             <p className='text-lg text-green-500' >$ <span ref={priceRef} id={`price${product.id}`}>{product.price}</span>.00</p>
             <div className='border border-gray-600 mb-3 flex justify-center items-center gap-6 mr-3'>
            <span className='font-bold text-lg cursor-pointer' onClick={add}>+</span>
            <span className='bg-blue-600 text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'>{count}</span>
            <span className='font-bold text-lg cursor-pointer' onClick={minus}>-</span>
            <p id='mytotal'>{total}</p>
          </div>

             <button className='bg-red-600 text-white rounded-md px-2 py-1 ' onClick={()=>addToCart(product)}>Add to cart</button>
             <button className='text-red-600' onClick={()=>addToWish(product)}><BiHeart/></button>
             </div>
             </div>
</div>
    )
}
export default ProductCard

