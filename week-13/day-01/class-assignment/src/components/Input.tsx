type variantType = "primary" | "secondary";
type sizeType = "sm" | "md" | "lg";

interface InputProps {
    placeholder: string;
    type: string;
    size: sizeType;
    variant: variantType;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultStyle = "text-lg px-2 py-2 border-gray-300 text-white-500 cursor-text outline-none rounded-md";
const variantStyle = {
    "primary": "bg-blue-300 text-white-500",
    "secondary": "bg-gray-600 text-white-500"
};
const sizeStyle = {
    "sm": "w-48",
    "md": "w-64",
    "lg": "w-80"
};

export function Input(props: InputProps) {
    const { size, variant, value, onChange, placeholder, type } = props;

    const inputClass = `${defaultStyle} ${sizeStyle[size]} ${variantStyle[variant]}`;

    return (
        <input
            className={inputClass}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}
