import { useProduct } from "../Context/Store"
import { Products } from "../Context/ProductContex";
import ProductCard from "./ProductCard";
const AllProducts=()=>{
    return(
        <div className=''>
         {Products.map((product)=>(
             <ProductCard product={product}/>
         ))}
   

        </div>
    )
  }
  export default AllProducts