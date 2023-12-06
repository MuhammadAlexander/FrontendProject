const Label = (props)=>{
    const {htmlFor,children} = props
    return(
        <label 
        htmlFor={htmlFor} 
        className='block font-bold text-xl'>
        {children}
        </label>
    )

}

export default Label;