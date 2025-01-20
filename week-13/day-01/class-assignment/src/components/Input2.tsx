type variants = "primary" | "secondary";
type sizeVariant = "sm" | "md" | "lg";
interface Inputprops{
    variant: variants,
    size: sizeVariant,
    placeholder: string,
    value: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const defaultSytle = "text-lg px-2 py-2 border-gray-300 text-white-500 cursor-text outline-none rounded-md";
const variantStyle = {
    "primary": "bg-blue-300 text-white-500",
    "secondary": "bg-gray-600 text-white-500"
};
const sizeStyle = {
    "sm": "w-48",
    "md": "w-64",
    "lg": "w-80"
};

export function Input(props:Inputprops){
    const InputStyle = `${defaultSytle} ${variantStyle[props.variant]} ${sizeStyle[props.size]}`
    return (
        <input 
            type={props.type} 
            className={InputStyle} 
            onChange={props.onChange} 
            value={props.value}
            placeholder={props.placeholder}
        />
    );
}