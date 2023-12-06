

const Button = (props) => {
    const {children,classname ='bg-slate-700',type = 'button',onClick =()=>{}} = props
    return(
      <div className="flex items-center">
      <button  
      className= {`${classname} hover:bg-slate-900 text-white font-bold py-2 px-4 rounded w-full`} 
      type={type}
      onClick={onClick} >
      {children}
      </button>            

      </div>
    )
}

export default Button;