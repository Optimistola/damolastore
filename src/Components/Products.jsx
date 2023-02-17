import { useProduct } from "../Context/Store"
import { Products } from "../Context/ProductContex";
import ProductCard from "./ProductCard";
import { Alert } from "./Utils/alert";
const AllProducts=()=>{
    const {isaddedtocart, add}=useProduct();
    return(
        <div>
         {Products.map((product)=>(
             <ProductCard product={product}/>
         ))}
   

        </div>
    )
  }
  export default AllProducts