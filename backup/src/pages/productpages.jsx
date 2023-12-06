import CardProduct from "../components/Elements/Card/CardProduct";
import Header from "../components/Fragments/Header";

const ProductPages = (props)=>{
    const {image} = props
    return(
       <>
        <Header></Header>
        <div>
            <CardProduct.Header/>
            <img src={image} alt=""/>
        </div>
       </>
    )

}
export default ProductPages;