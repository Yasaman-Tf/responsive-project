import Link from "./Link"
const CaseStudyCard = ({p}) => {
    return(
        <>
        <div className="CaseStudy w-full h-auto lg:h-[186px] p-[50px] lg:p-[0px] rounded-[45px] lg:rounded-none flex flex-col gap-[20px] bg-[#000000] lg:bg-transparent">
            <p className="w-full min-w-[206px] h-[138px] font-normal font-[Space Grotesk] text-[18px] leading-[22.97px] text-[#FFFFFF] text-start">{p}</p>
            <Link iconPosition="right" Icon="ArrowG" href="https://www.google.com" lableColor="green" Children="Learn more" widtha="140" widthTitle="w-[108px]" heightTitle="h-[28px]" ChildrenColor="green" />
        </div>
        </>
    )
}

export default CaseStudyCard;