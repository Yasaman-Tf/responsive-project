import clsx from "clsx";

const HeadingSub = ({vcHeadingSub, vcLabelOne,vcLabelTwo,LabelTwo, vcP, hchildrenOne,hchildrenTwo, pchildren}) => {
    const BaseClassHeadingSub = "w-full h-[150px] lg:h-[51px] px-[20px] lg:px-[100px] gap-[20px] lg:gap-[40px] flex flex-col items-center justify-center lg:flex-row lg:justify-start"
    const finalCHeadingSub = clsx(
        BaseClassHeadingSub,
        vcHeadingSub
    )

    const baseCLabel = "rounded-[7px] px-[7px] flex justify-center gap-[10px] bg-[#B9FF66]"
    const finalCLabelOne = clsx(
        baseCLabel,
        vcLabelOne
    )
    const finalCLabelTwo = clsx(
        baseCLabel,
        vcLabelTwo
    )

    const BaseCP = "font-[Space Grotesk] font-normal text-[18px] leading-[22.97px] text-[#000000] text-center lg:text-start"
    const finalCP = clsx(
        BaseCP,
        vcP
    )

    
    return(
        <>
        <div className={finalCHeadingSub}>
            <div className={finalCLabelOne}>
                <h2 className="font-[Space Grotesk] font-medium text-[40px] leading-[51.04px] text-[#000000]" children={hchildrenOne}></h2>
            </div>
            {LabelTwo && <div className={finalCLabelTwo}>
                <h2 className="font-[Space Grotesk] font-medium text-[40px] leading-[51.04px] text-[#000000]" children={hchildrenTwo}></h2>
            </div>}
            <p className={finalCP} children={pchildren}></p>
        </div>
        </>
    )
}

export default HeadingSub;