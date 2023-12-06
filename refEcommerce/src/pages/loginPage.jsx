import LayoutPages from "../components/Layouts/AuthLayouts"
import FormLogin from "../components/Fragments/FromLogin"

const LoginPage = () => {
    return(
       <LayoutPages judul='Login' type='login' description='Welcome, Please enter your details'>
       <FormLogin/>
       </LayoutPages>
    )
    
}

export default LoginPage
