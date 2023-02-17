import { useProduct } from "../Context/Store";
import { CartAdd } from "./Utils/Add";
import { useState } from "react";
import { Alert } from "./Utils/alert";
import About from "./Pages/About";
const ProductCard=({product})=>{
    const {addToCart}=useProduct();

    return(
        <div  className='border border-gray-100 shadow-sm mb-5 hover:transform transition duration-500 hover:scale-110	' onClick={()=>addToCart(product)}>

        <div key={product.id} className='flex flex-col items-center'>
             <img src={product.img} className='lg:w-[250px]' alt={product.category}/>
             <div className='py-5'>
             <p className='text-lg mb-3'>{product.name}</p>
             <p className='text-lg text-green-500'>${product.price}.00</p>
             <button className='bg-red-600 text-white rounded-md px-2 py-1 ' onClick={()=>addToCart(product)}>Add to cart</button>
             </div>
             </div>

    </div>
    )
}
export default ProductCard