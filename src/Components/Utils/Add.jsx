
export const CartAdd=({image, price})=>{
    return(
        <div className='absolute top-10 center py-5 px-5 rounded-md hidden'>
            <img src={image}/>
            <p>{price}</p>
        </div>
    )
}