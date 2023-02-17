import ProductCard from "../ProductCard";
import { Products } from "../../Context/ProductContex";
import { Banner } from "../Utils/Banner";
const Shoe=()=>{
    return(
        <section>
          <Banner name={'Shoe'}/>
      <div  className='lg:flex flex-wrap mt-20 justify-center ml-10 mr-10 gap-6'> 
         {Products.filter((item)=>(item.category==='Shoe')).map((product)=>(
             <ProductCard product={product}/>
         ))}
        </div>
        </section>

    )
  }
  export default Shoe