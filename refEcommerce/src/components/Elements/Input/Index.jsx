import Input from "./Input";
import Label from "./label";

const InputDiv = (props) => {
    const {text,placeholder,htmlFor,children,type} = props
    return(
        <>
        <div>
      <Label htmlFor={htmlFor}>{children}</Label>
      <Input text={text} placeholder={placeholder} type={type}></Input>
      </div>
        </>
    )
}

export default InputDiv;