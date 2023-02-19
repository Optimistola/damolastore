import { useProduct } from "../Context/Store";
import { BiHeart } from "react-icons/bi";
const ProductCard=({product})=>{
    const {addToCart, addToWish}=useProduct();
        
    return(
        <div   className='w-[250px] md:w-[30%] lg:w-[20%] border border-gray-100 shadow-sm mb-5 hover:transform transition duration-500 hover:scale-110	'>
        <div key={product.id} className='flex flex-col '>
             <img src={product.img} className='' alt={product.category}/>
             <div className='py-5 ml-3'>
             <p className='text-lg mb-3' id='price'>{product.name}</p>
             <p className='text-lg text-green-500'>${product.price}.00</p>
             <button className='bg-red-600 text-white rounded-md px-2 py-1 ' onClick={()=>addToCart(product)}>Add to cart</button>
             <button className='text-red-600' onClick={()=>addToWish(product)}><BiHeart/></button>
             </div>
             </div>
</div>
    )
}
export default ProductCard