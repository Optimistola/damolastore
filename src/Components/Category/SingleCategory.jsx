import { Link } from "react-router-dom"
import { Categories } from "../../Context/ProductContex"
const Category=()=>{
    return(
        <div className='p-5 lg:p-10 flex flex-wrap justify-center md:justify-center border-sm gap-3'>
            {Categories.map((items)=>(
                <div className='flex '>
                    <Link to={`category/${items.category}`}><img src={items.img} className='sm:w-[250px] lg:w-[200px] md:w-[180px]'/>
                    <p className='font-bold text-lg capitalize'>{items.category}</p></Link>
                </div>
            ))}
        </div>

    )
}
export default Category