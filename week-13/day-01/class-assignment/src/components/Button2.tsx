type variants = "primary" | "secondary";
type sizeVariant = "sm" | "md" | "lg";

interface Buttonprops{
    isdisabled: boolean,
    varaint: variants,
    size: sizeVariant,
    text: string,
    onClick: () => void;
}

const defaultStyle = "rounded-md py-2 text-xl cursor-pointer outline-none" ;
const sizeStyle = {
    "sm":"w-48",
    "md":"w-64",
    "lg": "w-80"
}
const varaintStyle = {
    "primary":"bg-green-700 text-black",
    "secondary":"bg-gray-600 text-white-500"
}
export function Button(props:Buttonprops){
    const isdisabled = props.isdisabled;
    const buttonClass = `${defaultStyle} ${varaintStyle[props.varaint]} ${sizeStyle[props.size]}`;
    return (
    <button 
        onClick={isdisabled?undefined:props.onClick}
        className={buttonClass}
        disabled={isdisabled}
    >
        {props.text}
    </button>
)
}