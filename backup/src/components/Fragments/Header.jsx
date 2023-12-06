import { FaShoppingCart,FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion"
import Button from "../Elements/Button/Button";
import PopupMenus from "./PopupMenus";


const Header = () =>{
    const [navbarIsOpen,setNavbarIsOpen] = useState(false)
    console.log(navbarIsOpen)
    return(
        <>

      <header className="bg-black h-max pb-2 w-screen">
      <div className="flex justify-between px-5 items-center">
        
        <GiHamburgerMenu   className="text-4xl text-white" onClick={()=>setNavbarIsOpen(!navbarIsOpen)}/>
    
        <div className="flex flex-col mx-auto items-center gap-2">
        <img className="w-20 h-16" src="/img/logo1.png" alt=""/>
        <div className="text-center">
       <input className="w-auto h-max rounded-lg px-3" type="text" placeholder="Search" />
       </div>
        </div>
        <div className="my-auto flex gap-3 items-center">
        <FaShoppingCart className="text-4xl text-white" />
        </div>
        
      </div>
      </header>
  


     {navbarIsOpen && <div className="absolute w-screen h-screen bg-slate-500 bg-opacity-90 top-0">
      <button className="text-white absolute right-0 top-0 pr-3" onClick={()=>setNavbarIsOpen(!navbarIsOpen)}>
      <MdClose className="text-4xl h-14"/>
      </button>
      <div className="text-center my-10 font-bold text-3xl text-white">
        <h3>Menu</h3>
      </div>
      <div className="w-full h-14 flex items-center justify-center gap-4">
        <Button size="w-32 h-24" color="bg-black text-white">Register</Button>
        <Button size="w-32 h-24" color="bg-white">Login</Button>
      </div>
      
      <div className="my-5 mx-5 flex gap-4 flex-col">
      <PopupMenus>Trending</PopupMenus>
      <PopupMenus>Q&A</PopupMenus>
      </div>
    

    
</div>} 

     
        </>
    )
}
export default Header;