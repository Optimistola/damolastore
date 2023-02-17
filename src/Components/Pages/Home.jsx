import Slider from "../../Asset/Slider/slider"
import { useProduct } from "../../Context/Store"
import AllProducts from "../Products"
import Category from "../Category/SingleCategory"
const Home=()=>{
    const {products}=useProduct()
    return(
        <section className=''>
      <div className="relative h-[80vh]">
            <Slider/>
            </div>
           <div className='border border-gray-100  shadow-md mb-10 mt-10 py-10 ml-10 mr-10 md:ml-20 md:mr-20'>
           <h2 className='ml-5 font-bold text-2xl'>Catalogue</h2>
               <Category/>
           </div>
        </section>
    )
}
export default Home