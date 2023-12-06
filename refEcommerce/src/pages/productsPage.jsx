import { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Button";
import { getProducts } from "../services/product.service";

// const CardDatas = [
//     {
//         id:1,
//         name:"Dimsum",
//         image:"image/DIMDIMSUM_IG.png",
//         price:1000000,
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolores quod doloribus ducimus numquam corrupti quisquam porro id. Nobis, beatae optio sit quas itaque saepe ipsam consequuntur aut accusamus sed!'
//     },
//     {
//         id:2,
//         name:"Dimdimsum",
//         image:"image/DIMDIMSUM_IG.png",
//         price:500000,
//         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.!'

//     },
//     {
//         id:3,
//         name:"Dimdimsum udang",
//         image:"image/DIMDIMSUM_IG.png",
//         price:30000,
//         description:'dimsum enak rasa udang.!'
//     }
// ]

const email = localStorage.getItem('email')

const ProductsPage = ()=>{
    const [cart, setCart] = useState([])
    const [totalCart, setTotalCart] = useState([])
    const [products, setProduct] = useState([])
    
    const handleLogout = ()=>{
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        {window.location.href = "/login"}
    }

    const handleAddToCart = (id)=>{
        if(cart.find((item)=> item.id === id)){
            setCart(
                cart.map((item) =>
                    item.id ===id ? {...item, qty:item.qty+1} : item
                )
            )
        }else{
            setCart([...cart, {
                id,
                qty:1
            }])
        }
    }

    useEffect(()=>{
       setCart(JSON.parse(localStorage.getItem('cart'))||[])
    },[])

    useEffect(()=>{
       getProducts((data)=>{
          setProduct(data)
          console.log(data)
       })

    },[])



    useEffect(()=>{
        if(products.length>0 && cart.length > 0){
          const sum = cart.reduce((acc,item)=>{
            const product = products.find(
              (product) => product.id === item.id
            )
            return acc + (product.price * item.qty)
          },0)
          setTotalCart(sum);
          localStorage.setItem('cart', JSON.stringify(cart))
        }
    },[cart,products])

  const totalRef = useRef(null);

  useEffect(()=>{
    if(cart.length > 0){
        totalRef.current.style.display = "block";
    }else{
        totalRef.current.style.display = "none";

    }
  },[cart])

 

    return (
        
        <>
        <div className="flex h-20 justify-end text-white items-center px-10 bg-blue-600">
            {email}
            <Button classname="ml-5 bg-slate-800" onClick={()=>handleLogout()}>logout
            </Button>
        </div>
        <div className="flex justify-center py-5">
        <div className=" w-3/4 flex flex-wrap">
        {products.length >0 && products.map((products)=>{
            return(
                <CardProduct key={products.id}>
              <CardProduct.Header image={products.image}/>
              <CardProduct.Body title={products.title}>
              {products.description}
              </CardProduct.Body>
              <CardProduct.Footer price={products.price} id={products.id} handleAddToCart={handleAddToCart}/>
            </CardProduct>
            )
          
    })}


        </div>
        <div className="w-2/6">
        <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
       <ul key={cart}>
       {cart.map((item)=>{
        
               <li key={item}>{item.id}</li>
        
       })}
       </ul>
       <table >
        <thead >
            <tr >
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {products.length >0 && cart.map((item)=>{
                const product = products.find(
                    (product) => product.id === item.id
                )
                return(
                    <tr key={item.id}>
                        <td>{product.title}</td>
                        <td>$ {product.price.toLocaleString('id-ID',{styles: 'currency', currency: 'IDR'})}</td>
                        <td>{item.qty}</td>
                        <td>$ {(item.qty * product.price).toLocaleString('id-ID',{styles: 'currency', currency: 'IDR'})}</td>
                        
                    </tr>
                )
            })}
            
           <tr className="font-bold w-full" ref={totalRef}>
            <td>Total Cart</td>
            <td>$ {totalCart.toLocaleString('id-ID',{styles: 'currency', currency: 'IDR'})}</td>
           </tr>
        </tbody>
       </table>
        </div>
        </div>
            </>
    )
}

export default ProductsPage;