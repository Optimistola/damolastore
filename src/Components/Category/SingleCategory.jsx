import { Link } from "react-router-dom"
import { Categories } from "../../Context/ProductContex"
const Category=()=>{
    return(
        <div className='flex flex-wrap justify-center md:justify-start ml-5 mr-5 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20 border-sm gap-6 '>
            {Categories.map((items)=>(
                <div>
                    <Link to={`category/${items.category}`}><img src={items.img} className='w-[180px] md:w-[150px] lg:w-[200px]'/>
                    <p className='font-bold text-lg capitalize'>{items.category}</p></Link>
                </div>
            ))}
        </div>

    )
}
export default Category