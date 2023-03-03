import Slider from "../../Asset/Slider/slider"
import { useProduct } from "../../Context/Store"
import AllProducts from "../Products"
import Category from "../Category/SingleCategory"
import { AuctionProduct, newProducts } from "../../Context/ProductContex"
import ProductCard from "../ProductCard";
import img2 from '../../Asset/Images/slide2.jpeg'
import img3 from '../../Asset/Images/slide13.jpeg'
import img4 from '../../Asset/Images/slide3.jpeg'
import img5 from '../../Asset/Images/slide11.jpeg'
import { Swipers } from "../../Asset/swiper"

const Home=()=>{
    const {addToWish, addToCart}=useProduct()
    return(
        <section className="overflow-x-hidden">
        <div className="relative h-[65vh] md:h-[65vh] lg:h-[90vh]">
              <Slider/>
            </div>
           <div className='border border-gray-300 shadow-md mb-20 mt-20 py-10 md:mt-20 ml-5 mr-5 md:ml-20 md:mr-20'>
           <h2 className="mb-6 ml-5 text-3xl font-bold">Catalogue</h2>
               <Category/>
           </div>
           <div>
           <h2 className="mb-6 ml-5 text-3xl font-bold">New Product</h2>
           </div>
           <div className='lg:flex flex flex-wrap mt-10 justify-center ml-10 mr-10 gap-6'> 
           {newProducts.map((product)=>(
             <ProductCard product={product}/>

           ))}
           </div>
           <div>
           <h2 className="mb-6 ml-5 text-3xl font-bold">Auction</h2>
           </div>

           <div className='lg:flex flex flex-wrap mt-10 justify-center ml-10 mr-10 gap-6'> 
           {AuctionProduct.map((product)=>(
             <ProductCard product={product}/>

           ))}
           </div>
 <div>
 <h2 className="mb-6 ml-5 text-3xl font-bold">Happy customers</h2>
  <div className="md:flex p-10 gap-10">
  <div className="relative h-72  mb-10 md:mb-20">
            <img src={img2} alt="" />
            <div className="bg-white/2 absolute bottom-0 h-32 px-6 backdrop-blur-md">
              <h4 className="py-4 text-xl font-semibold ">Market</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                accusamus.
              </p>
            </div>
          </div>
          <div className="relative h-72 mb-10 ">
            <img src={img3} alt="" />
            <div className="bg-white/2 absolute bottom-0 h-32 px-6 backdrop-blur-md">
              <h4 className="py-4 text-xl font-semibold ">Jeans</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                accusamus.
              </p>
            </div>
          </div>
          <div className="relative h-72 mb-10 ">
            <img src={img4} alt="" />
            <div className="bg-white/2 absolute bottom-0 h-32 px-6 backdrop-blur-md">
              <h4 className="py-4 text-xl font-semibold ">Payment</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                accusamus.
              </p>
            </div>
          </div>
          <div className="relative h-72  ">
            <img src={img5} alt="" />
            <div className="bg-white/2 absolute bottom-0 h-32 px-6 backdrop-blur-md">
              <h4 className="py-4 text-xl font-semibold ">Happy Customer</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
                accusamus.
              </p>
            </div>
          </div>
 </div>
   
 </div>
 <div className="bg-black p-10 md:flex gap-10 mt-20 ">
  <div className="md:w-[50%]">
  <Swipers/>
  </div>
  <div className="text-white" >
  <h2 className="lg:text-7xl md:text-2xl text-xl lg:text-gray-400">
  Wanna Shop Online With Us? Join Now
  </h2>
  <p>join the community of active shoppers on our website to see whats new as they drop</p>
  <button className="bg-yellow-500 px-2 py-2 text-lg rounded-md mt-4">Join Now</button>

  </div>

 </div>
        </section>
    )
}
export default Home