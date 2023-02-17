import ProductCard from "../ProductCard";
import { Products } from "../../Context/ProductContex";
import { Banner } from "../Utils/Banner";
const Clothes=()=>{
    return(
        <section>
          <Banner name={'clothes'}/>
      <div  className='lg:flex flex flex-wrap mt-20 justify-center ml-10 mr-10 gap-6'> 
         {Products.filter((item)=>(item.category==='cloth')).map((product)=>(
             <ProductCard product={product}/>
         ))}
        </div>
        </section>

    )
  }
  export default Clothes