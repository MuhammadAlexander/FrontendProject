

const CardProduct = (props) =>{
    const {children} = props
    return(
        <div className="flex w-max justify-center py-5">
        <div className="w-40 h-60 bg-white border border-gray-700 rounded-xl shadow mx-2 overflow-hidden">
        {children}
        </div>
    </div>
    )

}

const Header = (props)=>{
    const {image,title} = props
    return(
        <a href="/product">
        <img src={image} alt="product" className="p-3 rounded-t-lg w-3/4 h-1/2 mx-auto"/>
    </a>
    )
}

const Body = (props)=>{
    const {title,children} = props
    return(
    <div className="px-5 pb-5 text-black border-t-2 border-solid border-black">
                <a href="#">
                    <h5 className="text-lg font-semibold tracking-tight ">{title}</h5>
                    {/* <p className="text-sm ">{children}</p> */}
                </a>
            </div>
)

}

const Footer = (props)=>{
    const {price, handleAddToCart, id} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white">$ {price.toLocaleString('id-ID',{styles: 'currency', currency: 'IDR'})}</span>
        {/* <Button classname='bg-blue-800' onClick={() => handleAddToCart(id)}>Add To Cart</Button> */}
        </div>
    )

}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;