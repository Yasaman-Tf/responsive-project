import Icons from "./Icon";
import clsx from "clsx";
import Link from "./Link";
import Heading from "./Heading";
const ServicesCard = ({vcHeadLinkBox, vcimg, Icon, IconBlack, bgCard, bgLabel,vcHeading,vcLabelOne, vcLabelTwo, vcLabelThree, vcHText, hOne, hTwo}) => {
    
    const baseClassSerCard = "w-full h-[310px] rounded-[45px] border border-[#191A23] flex justify-between items-center p-[40px] lg:p-[50px] shadow-[0px_5px_0px_0px_#191A23] relative"
    const finalClassSerCard = clsx(
        baseClassSerCard,
        {
            "bg-[#F3F3F3]" : bgCard === "grey",
            "bg-[#B9FF66]" : bgCard === "green",
            "bg-[#191A23]" : bgCard === "black",
        }
    )

    const baseClassHeadLinkBox = "gap-[93px] flex flex-col items-start"
    const finalClassHeadLinkBox = clsx(
        baseClassHeadLinkBox,
        vcHeadLinkBox
    )
    const linkProps = IconBlack ? {iconPosition: "left",
        Icon: "ArrowGB",
        href: "https://www.google.com",
        Children: "Learn more",
        width: "108",
        ChildrenColor: "black",
        heightTitle:"hidden lg:block"}
        : {
            iconPosition: "left",
      Icon: "ArrowBW",
      href: "https://www.google.com",
      Children: "Learn more",
      width: "108",
      ChildrenColor: "white",
      heightTitle:"hidden lg:block"}
        
    return(
        <>
        <div className={finalClassSerCard}>            
        <div className={finalClassHeadLinkBox}>
            <Heading vcHeading={vcHeading} vcLabelOne={vcLabelOne} vcLabelTwo={vcLabelTwo} vcLabelThree={vcLabelThree} vcHText={vcHText} hOne={hOne} hTwo={hTwo} bgLabel={bgLabel}/>
            <Link {...linkProps} />
            </div>
            <img src={Icons[Icon]} className={vcimg} alt={Icon}/>
        </div>
        </>
    )
}

export default ServicesCard;