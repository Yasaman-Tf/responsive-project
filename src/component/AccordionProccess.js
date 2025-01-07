import Icons from "./Icon"
import PlusMinus from "./PlusMinus"
import { useState } from "react"

const AccordionProccess = ({IconNumber, h3, p,IconPlus="Plus", IconMinus="minus"}) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
    const accordionClass = `card w-full h-auto rounded-[50px] lg:rounded-[45px] border border-[#191A23] py-[20px] lg:py-[41px] px-[30px] lg:px-[60px] flex flex-col gap-[30px] shadow-[0px_5px_0px_0px_#191A23] ${accordionOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"}`
    // const finalClass = clsx(
    //     baseClass,
    //     bgCard,
    //     hieght
    // )

    return(
        <div className={accordionClass}>
            <div className="w-full flex flex-row justify-between items-center">
                <div className="w-full max-w-[702px] h-auto flex flex-row items-center gap-[15px] lg:gap-[25px]">
                    <img className="w-[9.2%] h-[65px] max-h-[77px] bg-transparent" src={Icons[IconNumber]} alt={IconNumber}/>
                    <h3 className="w-[87.1%] h-[38px] font-[Space Grotesk] font-medium text-[20px] lg:text-[30px] leading-[25px] lg:leading-[38.28px] text-[#000000] text-start">{h3}</h3>
                </div>
                <span onClick={() => setAccordionOpen(!accordionOpen)}>
                {accordionOpen ? <PlusMinus Icon={IconPlus}/> : <PlusMinus Icon={IconMinus}/>}
                </span>
            </div>
            <div className={`overflow-hidden Line25 w-full border-t-2 border-[#000000] flex flex-col items-center ${
                    accordionOpen ? "block" : "hidden"
                }`}></div>
            <div className="overflow-hidden">
                    <p className={`w-full font-normal font-[Space Grotesk] text-[18px] leading-[22.97px] text-start ${
                        accordionOpen ? "block" : "hidden"
                    }`}>{p}</p>
                </div>
        </div>
    )
}

export default AccordionProccess;