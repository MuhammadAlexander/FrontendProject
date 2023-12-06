
const Button = (props)=>{
    const {children,size,color} = props;
    return(
          
            <button className={`${color} h-8 rounded-lg font-bold ${size}}`}>{children}</button>

          
            
     
    )

}
export default Button