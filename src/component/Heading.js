/* eslint-disable jsx-a11y/heading-has-content */
import clsx from "clsx"
const Heading = ({vcHeading, vcLabelOne,vcLabelTwo,vcLabelThree, vcHText,bgLabel, hOne, hTwo, hThree}) => {
    const basicTextClass = "font-[Space Grotesk] font-medium text-start"
    const finalTextClass = clsx(
        basicTextClass,
        vcHText,
    )
    const basicLabelOneClass = "px-[7px] rounded-[7px] gap-[10px]" 
    const finalLabelOneClass = clsx(
        basicLabelOneClass,
        vcLabelOne,
        {
            "bg-[#B9FF66]": bgLabel === "green",
            "bg-[#FFFFFF]": bgLabel === "white",

        }
    )

    const basicLabelTwoClass = "px-[7px] rounded-[7px] gap-[10px]" 
    const finalLabelTwoClass = clsx(
        basicLabelTwoClass,
        vcLabelTwo,
        {
            "bg-[#B9FF66]": bgLabel === "green",
            "bg-[#FFFFFF]": bgLabel === "white",

        }
    )

    const basicLabelThreeClass = "px-[7px] rounded-[7px] gap-[10px]" 
    const finalLabelThreeClass = clsx(
        basicLabelThreeClass,
        vcLabelThree,
        {
            "bg-[#B9FF66]": bgLabel === "green",
            "bg-[#FFFFFF]": bgLabel === "white",

        }
    )

    return(
        <>
        <div className={vcHeading}>
            <div className={finalLabelOneClass}>
              <span className={finalTextClass}>{hOne}</span>  
            </div>
            <div className={finalLabelTwoClass}>
                <span className={finalTextClass}>{hTwo}</span>
            </div>
            { hThree && <div className={finalLabelThreeClass}>
                <span className={finalTextClass}>{hTwo}</span>
            </div>}
        </div>
        </>
    )
}

export default Heading;