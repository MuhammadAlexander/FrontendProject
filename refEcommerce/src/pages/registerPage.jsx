import FormRegister from "../components/Fragments/FromRegister";
import LayoutPages from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";
const RegisterPage = ()=>{
    return(
        <LayoutPages judul='Register' type='register' description='Welcome, Please enter your details'>
            <FormRegister/>
        </LayoutPages>
    )

}
export default RegisterPage;