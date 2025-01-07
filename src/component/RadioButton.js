import clsx from "clsx"
const RadioButton = ({classNameDiv, classNameInput, classNameLabel , id, name}) => {
    const baseClassLabel = "font-[Space Grotesk] font-normal text-[18px] leading-[22.97px] text-[black]"
    const finalClassLabel = clsx(baseClassLabel, classNameLabel)
    return (
        <>
        <div className={classNameDiv}>
        <input type="radio" className={classNameInput} id={id} name={name}/>
        <label htmlFor={id} className={finalClassLabel}>{id}</label>
        </div>
        </>
    )

}

export default RadioButton;