import { Link } from "react-router-dom"

const LayoutPages = (props)=>{
    const{judul,description,children,type} = props
    return(
        <div className='flex  flex-col justify-center items-center  min-h-screen'>
        <div className='w-full max-w-xs'>
        <header className='text-3xl font-bold text-left'>{judul}</header>
        <p className='text-xl'>{description}</p>
        {children}

        {/* <p className="text-sm text-center mt-5">  
        {type==='register'?"Already have an account? ": "Don't have an account? "}
        
        {type=== 'register'&&(
        <Link to="/login" className="font-bold text-blue-600">Login</Link>
        )}
        {type=== 'login'&&(
        <Link to="/register" className="font-bold text-blue-600">Register</Link>
        )}


       </p> */}

       <Navigation type={type}></Navigation>

        </div>
      </div>    

    )
}

const Navigation = ({type})=>{
if(type === "register"){
  return(
    <p className="text-sm text-center mt-5">  
    Already have an account?  {" "}
    {type=== 'register'&&(
    <Link to="/login" className="font-bold text-blue-600">Login</Link>
    )}
   </p>  
  )
}else{
  return(
    <p className="text-sm text-center mt-5">  
    Don't have an account? {" "}
    {type=== 'login'&&(
    <Link to="/register" className="font-bold text-blue-600">Register</Link>
    )}
   </p>  
  )

}


}


export default LayoutPages