
import ProductCard from "../ProductCard";
import { Products } from "../../Context/ProductContex";
import { Banner } from "../Utils/Banner";
import { Search } from '../Utils/search';
import { useState } from "react";
import { useRef } from "react";
import { useProduct } from "../../Context/Store";
const Clothes=()=>{
    const nameRef=useRef();
    const {addToCart}=useProduct();
  
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

    return(
        <section>
          <Banner name={'Clothes'}/>
          <Search cat={'clothes'} action2={handleSearch}/>
          <div ref={nameRef} className='lg:flex flex flex-wrap mt-20 justify-center ml-10 mr-10 gap-6'> 
         {Products.filter((item)=>(item.category==='cloth')).map((product)=>(
             <ProductCard product={product}/>
         ))}
        </div>
        </section>
    )
  }
  export default Clothes