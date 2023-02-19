import { useProduct } from "../../Context/Store"
import Empty from '../../Asset/Images/emptycart.gif'
const Wish=({product})=>{
 const {cart, wish}=useProduct();
 const {removeFromWish, moveToCart}=useProduct()
return(
    <div className='ml-5 mr-5 lg:ml-20 lg:mr-20 mt-20 shadow-md py-10 bg-blue-200'>
        <div>
            <h2 className='text-2xlg font-bold ml-5'>Wish items</h2>
        </div>
        {wish.length>0 ?
        wish.map((items)=>(
                <div >
                    <img src={items.img}/>
                    <button className='bg-red-600 text-white rounded-md px-2' onClick={()=>removeFromWish(items.id)}>Remove</button>
                    <button className='bg-red-600 text-white rounded-md px-2' onClick={()=>moveToCart(items, items.id)}>move to cart</button>

                </div>
            )):
            <div className='flex flex-col mt-20 justify-center items-center content-centers'>
            <p>Bro, your wishlist is empty, try adding somethimg</p>
            <img src={Empty}/>

            </div>
            }
    </div>
);
            }
export default Wish