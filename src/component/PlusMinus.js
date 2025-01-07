
import Icons from "./Icon.js"

const PlusMinus = ({Icon="Icon"}) => {
    const baseClassPlus = "w-[30px] lg:w-[58px] h-[30px] lg:h-[58px] bg-[#F3F3F3] border border-[#000000] rounded-full right-[10px] lg:right-[23px] relative" 
    return (
        
            <button className={baseClassPlus}>
            <img src={Icons[Icon]} alt={Icon} className="w-[12px] lg:w-[25.08px] h-[12px] lg:h-[25.08px] absolute top-[8px] lg:top-[16px] left-[8px] lg:left-[16px]"/>
            </button> 
      
      
)
}

export default PlusMinus;

