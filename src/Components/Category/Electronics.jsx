import ProductCard from "../ProductCard";
import { Products } from "../../Context/ProductContex";
import { Banner } from "../Utils/Banner";
import { Search } from '../Utils/search'
import { useRef } from "react";
import { Filter} from '../Utils/filter';
const Electronics=()=>{
    const nameRef=useRef();
    const handleSearch=(e)=>{
    
        const Name= nameRef.current.children;
        const searched=e.target.value.toUpperCase();
        for (let i=0; i<Name.length; i++){
            const textVAlue=Name[i].querySelector('#price').textContent.toUpperCase();
                if(textVAlue.indexOf(searched)>=0){
            Name[i].style.display='block'
        }else{
            Name[i].style.display='none'
        }
        console.log(Name[i])

    }

    }
    const HandleFilter=(e)=>{
        const Name= nameRef.current.children;
        const filtered=e.target.value;
        for (let i=0; i<Name.length; i++){
            const range=Name[i].querySelector('#myprice').textContent;

                if(range<+filtered){
            Name[i].style.display='block'
        }else{
            Name[i].style.display='none'
        }
        }

    }

    return(
        <section>
          <Banner name={'Electronics'}/>
          <Search cat={'electronics'} action2={handleSearch}/>
          <Filter action1={HandleFilter} min={30} max={70}/>
          <div ref={nameRef} className='lg:flex flex flex-wrap mt-20 justify-center ml-10 mr-10 gap-6'> 
         {Products.filter((item)=>(item.category==='Electronics')).map((product)=>(
             <ProductCard product={product}/>
         ))}
        </div>
        </section>
    )
  }
  export default Electronics