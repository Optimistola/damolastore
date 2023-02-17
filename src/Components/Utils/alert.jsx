import { useProduct } from "../../Context/Store"
export const Alert=()=>{
    const{modal}=useProduct()
    return(
        <div className='sticky top-0 bg-green-600 px-2 text-white z-50 py-0'>
            <h2>{modal.text}</h2>
        </div>
    )
}