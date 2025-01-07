import clsx from "clsx";

const Button = ({background, border, textColor, children, className}) => {
    const baseClasses = className;

    const finalClass = clsx(
        baseClasses,
        {
        "bg-[#B9FF66]": background === "green",
        "bg-[#191A23]": background === "black",
        "bg-transparent": background === "transparent",
        "bg-[#FFFFFF]": background === "white"
        },
        {
            "border-none": border === "false",
            "border border-solid border-[1px] border-[#191A23]": border === "true",
        },
        {
            "text-[#000000]": textColor === "black",
            "text-[#FFFFFF]": textColor === "white"
        }
    );

    return (
        <button className={finalClass}>{children}</button>
    )
}

export default Button;