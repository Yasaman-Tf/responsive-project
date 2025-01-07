import Icons from "./Icon"
import clsx from "clsx"
const PersonalCard = ({picIcon, h4, p, caption, SocialIcon, heightContent, heightCard}) => {
    const baseClassContent = "Content w-full flex flex-col justify-between gap-[28px]"
    const finalClassContent = clsx(
        baseClassContent,
        heightContent
    )
    const baseClassCard = "card w-full h-auto rounded-[45px] border border-[#191A23] py-[40px] px-[35px] gap-[10px] shadow-[0px_5px_0px_0px_#191A23] bg-[#FFFFFF]"
    const finalClassCard = clsx(
        baseClassCard,
        heightCard
    )

    return(
        <div className={finalClassCard}>
            <div className={finalClassContent}>
                <div className="person w-full h-[102.82px] pr-[76px] flex flex-row gap-[20px] relative">
                <img className="w-[97.82px] h-[97.82px] absolute left-0 top-0" src={Icons[picIcon]} alt={picIcon}/>
                <span className="w-[194.18px] h-[49.18px] absolute right-0 bottom-0 flex flex-col items-start">
                    <h4>
                    {h4}
                    </h4>
                    <p>
                    {p}
                    </p>
                </span>
                <img className="w-[34px] h-[34px] absolute right-0 top-0" src={Icons[SocialIcon]} alt={SocialIcon}/> 
                </div>
                <div className="Line3 w-full h-0 border border-[#000000] flex flex-col items-center"></div>
                <div className="caption w-full h-[92px] font-[Space Grotesk] font-normal text-[18px] leading-[22.97px] text-[#000000] text-start">
                    {caption}
                </div>
            </div>
        </div>
    )

}

export default PersonalCard;