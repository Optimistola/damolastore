import { useProduct } from "../Context/Store";
import { BiHeart } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineMinus, AiFillShopping } from "react-icons/ai";
import {useState, useRef, useEffect} from 'react'
const ProductCard=({product, Total})=>{
  const priceRef=useRef()
    const {addToCart, addToWish}=useProduct();
    const [count, setCount]=useState(1);
    const [qnty, SetQnty]=useState(1)
    const [total, setTotal]=useState(product.price)
    const add=(product)=>{
      const newPrice=priceRef.current.innerHTML;
      setCount(count+1);
      console.log(newPrice*count);
      setTotal(newPrice*count)
    }
    useEffect(()=>{
      const newPrice=priceRef.current.innerHTML;
      //setTotal(newPrice*count)

    }, [count])
   /* const minus=(e)=>{
        if(count < 2){
            return false
        }
        setCount(count-1);
      }*/
  //decrease the quantity
      const decrease=()=>{
        if(count < 2){
          return false
      }
      setCount(count-1);
    }
//increase the quantity
      const increase=()=>{
        setCount(count+1);
      }
     const addItemToCart=(product)=>{
      let total=count*product.price;
    const newproduct={...product, count, total}
    addToCart(newproduct);
     } 

     const addItemToWish=(product)=>{
      let total=count*product.price;
    const newproduct={...product, count, total}
    addToWish(newproduct);
     } 

    return(
        <div   className='sm:w-[250px] md:w-[30%] lg:w-[20%] border border-gray-100 shadow-sm mb-5 hover:transform transition duration-500 hover:scale-110	'>
        <div key={product.id} className='flex flex-col '>
             <img src={product.img} className='md:h-[200px]' alt={product.category}/>
             <div className='py-5 ml-3'>
             <p className='text-lg mb-3' id='price'>{product.name}</p>
             <p className='text-lg text-green-500' >$ <span ref={priceRef} id={`price${product.id}`}>{product.price}</span>.00</p>
             <div className='border border-gray-600 py-2 mb-3 flex justify-center items-center gap-6 mr-3'>
            <span className='font-bold text-lg cursor-pointer' onClick={increase}><AiOutlinePlus size={15}/></span>
            <span className='bg-blue-600 text-white w-[25px] h-[25px] rounded-full flex items-center justify-center'>{count}</span>
            <span className='font-bold text-lg cursor-pointer' onClick={decrease}><AiOutlineMinus size={15}/></span>
          </div>

             <button className='bg-red-600 text-white rounded-md px-2 py-1 ' onClick={()=>addItemToCart(product)}>Add to cart</button>
             <button className='text-red-600' onClick={()=>addItemToWish(product)}><BiHeart/></button>
             </div>
             </div>
</div>
    )
}
export default ProductCard

