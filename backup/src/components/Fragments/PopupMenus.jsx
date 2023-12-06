import Menu from "../Elements/Menu/Menu";

const PopupMenus= (props)=>{
    const {children} = props
    return(
        <div className="bg-blue-600 h-max">
            <h3>{children}</h3>
           <div>
            <Menu>Smartphone</Menu>
           </div>
        </div>
    )

}
export default PopupMenus;