import { useEffect, useState } from "react"
import CardData from "../Elements/Card/CardData";
import { getProducts } from "../../services/product.service";
import CardProduct from "../Elements/Card/CardProduct";



const Content = ()=>{
    const [image,setimage] = useState(0);
    const [products, setProducts] = useState([]);
    
   
    const prevImage =()=>{
        setimage(image == 0 ? 3: image-1)
    }

    const nextImage = ()=>{
        setimage(image == 3 ? 0: image+1)
    }

    useEffect(()=>{
        getProducts((data)=>{
           setProducts(data)
           console.log(data)
        })
 
     },[])

    return(<>
   
   
    <div className="w-full overflow-x-hidden">
     <div className="w-full">
     <div style={{transform:`translate(-${image * 100}vw)`}} 
        className='w-[400vw] h-full flex transition-transform duration-1000'>
       <CardData card={["3","4","5","6"]}/>

     </div>
     </div>

         <div className='w-full mx-auto justify-center flex gap-8  '>
          <div onClick={prevImage} className='w-10 h-10 border-[1px] border-gray-700 flex items-center justify-center
          hover:cursor-pointer hover:bg-gray-500 hover:text-white active:bg-gray-900 duration-300'> 
           
          </div>
          <div onClick={nextImage} className='w-10 h-10 border-[1px] border-gray-700 flex items-center justify-center
          hover:cursor-pointer hover:bg-gray-500 hover:text-white active:bg-gray-900 duration-300'> 
            
          </div>
        </div>

</div>

    <article className="w-[100vw] overflow-x-scroll">
        <div className="w-max h-full bg-white">
        <h1 className="font-bold font-[roboto] text-2xl absolute">Hot Deals</h1>
        <div className=" w-max h-max flex flex-wrap">
        {products.length >0 && products.map((products)=>{
            return(
                <CardProduct key={products.id}>
              <CardProduct.Header image={products.image}/>
              <CardProduct.Body title={products.title}>
              {products.description}
              </CardProduct.Body>
              {/* <CardProduct.Footer price={products.price} id={products.id} handleAddToCart={handleAddToCart}/> */}
            </CardProduct>
            )
          
    })}


        </div>
        </div>
    </article>
    </>

    )

}
export default Content