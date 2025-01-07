import clsx from "clsx"
const Input = ({backgroundColor, border, textColor, placeholder, className}) => {


const finalClass = clsx(
    className,
    {
        "bg-transparent" : backgroundColor === "transparent",
        "bg-[#FFFFFF]" : backgroundColor === "white",
        "bg-[#000000]" : backgroundColor === "black",
    },
    {
        "rounded-[14px] border-[1px] border-[#FFFFFF]" : border === "white",
        "rounded-[14px] border-[1px] border-[#000000]" : border === "black",
    },
    {
        "text-[#FFFFFF]" : textColor === "white",
        "text-[#000000]" : textColor ==="black",
    }
)

return (
    <input type="text" className={finalClass} placeholder={placeholder}/> 
)
}

export default Input;