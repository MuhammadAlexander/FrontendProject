import Button from "../Elements/Button/Button";
import Index from "../Elements/Input/Index";
const FormLogin = () => {
    const handleLogin = (e) =>{
        e.preventDefault()
        localStorage.setItem('email', e.target.email.value)
        localStorage.setItem('password', e.target.password.value)
        window.location.href = '/products'
    }
    return(
        <form onSubmit={handleLogin}>
      
        <Index text='text' placeholder='example@gmail.com' htmlFor="email" type="email">Email</Index>
  
        <Index text='password' placeholder='******' htmlFor="password" type="password">Password</Index>
        
         <Button classname='bg-blue-600 w-full' type="submit">Login</Button>
        </form>
    )
}

export default FormLogin;