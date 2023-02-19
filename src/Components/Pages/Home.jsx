import Slider from "../../Asset/Slider/slider"
import { useProduct } from "../../Context/Store"
import AllProducts from "../Products"
import Category from "../Category/SingleCategory"
import { newProducts } from "../../Context/ProductContex"
import ProductCard from "../ProductCard"
const Home=()=>{
    const {addToWish, addToCart}=useProduct()
    return(
        <section className="overflow-x-hidden">
        <div className="relative h-[65vh] md:h-85vh] lg:h-[90vh]">
              <Slider/>
            </div>
           <div className='border border-gray-300 shadow-md mb-10 mt-20 py-10 md:mt-20 ml-5 mr-5 md:ml-20 md:mr-20'>
           <h2 className='ml-5 font-bold text-2xl '>Catalogue</h2>
               <Category/>
           </div>
           <div className='lg:flex flex flex-wrap mt-20 justify-center ml-10 mr-10 gap-6'> 
           {newProducts.map((product)=>(
             <ProductCard product={product}/>

           ))}
           </div>
        </section>
    )
}
export default Home