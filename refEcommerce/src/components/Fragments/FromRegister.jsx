import Button from "../Elements/Button/Button";
import Index from "../Elements/Input/Index";

const FormRegister = ()=>{
    return(
        <form action="">
      
        <Index text='text' placeholder='minimum 6 characters' htmlFor="username" type="username">Username</Index>
        <Index text='text' placeholder='example@gmail.com' htmlFor="email" type='email'>Email</Index>
        <Index text='password' placeholder='******' htmlFor="password" type='password'>Password</Index>
        <Index text='password' placeholder='******' htmlFor="confirm Password" type='confirm Password'>Confirm Password</Index>
        
         <Button classname="bg-blue-600">Register</Button>
        </form>
    )
}

export default FormRegister;