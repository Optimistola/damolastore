import { useProduct } from "../../Context/Store"
import Empty from '../../Asset/Images/emptycart.gif'
const Cart=({product})=>{
 const {cart}=useProduct();
 const {removeFromCart}=useProduct()
return(
    <div className='ml-5 mr-5 lg:ml-20 lg:mr-20 mt-20 shadow-md py-10 bg-blue-200'>
        <div>
            <h2 className='text-2xlg font-bold ml-5'>Cart items</h2>
        </div>
        {cart.length>0 ?
        cart.map((items)=>(
                <div >
                    <img src={items.img}/>
                    <button className='bg-red-600 text-white rounded-md px-2' onClick={()=>removeFromCart(items.id)}>Remove</button>
                </div>
            )):
            <div className='flex flex-col mt-20 justify-center items-center content-centers'>
            <p>Sapa don sup? go hustle bro for your your Cart is empty</p>
            <img src={Empty}/>

            </div>
            }
    </div>
);
            }
export default Cart