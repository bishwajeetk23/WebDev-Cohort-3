type variantSize = "sm" | "md" | "lg";
type variants = "primary" | "secondary";

interface ButtonProps {
    disabled: boolean;
    size: variantSize;
    text: string;
    onClick: () => void;
    variant: variants;
}

const variantStyle = {
    "primary": "bg-green-700 text-black-500",
    "secondary": "bg-gray-600 text-white-500"
};

const sizeStyle = {
    "sm": "w-48",
    "md": "w-64",
    "lg": "w-80"
};

const defaultStyle = "rounded-md py-2 text-xl cursor-pointer outline-none";

export function Button(props: ButtonProps) {
    const { disabled, size, text, onClick, variant } = props;

    const buttonClass = `${defaultStyle} ${variantStyle[variant]} ${sizeStyle[size]}`;

    return (
        <span>
            <button
                className={buttonClass}
                onClick={disabled ? undefined : onClick}
                disabled={disabled} 
            >
                {text}
            </button>
        </span>
    );
}
