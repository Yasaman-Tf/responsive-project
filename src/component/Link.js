/* eslint-disable no-lone-blocks */
import Icons from "./Icon";
import clsx from "clsx";

const Link = ({ href, Icon, Children, ChildrenColor, widtha, widthTitle, heightTitle, iconPosition ="left"}) => {
    
    const baseClassA = "inline-flex items-center gap-[15px]" ;
    const clsxClassA = clsx(
        baseClassA,
       {
        "h-[41px]" : iconPosition === "left",
         "h-[28px]" : iconPosition === "right"
       },
    )
    // const finalClassA = `${baseClassA} ${clsxClassA || ""}`    
    const title = clsx(
        widthTitle,
        heightTitle,
        {
        "text-[#000000] text-[20px] font-normal font-[Space Grotesk] leading-[28px]" : ChildrenColor === "black",
        "text-[#FFFFFF] text-[20px] font-normal font-[Space Grotesk] leading-[28px]" : ChildrenColor === "withe",
        "text-[#B9FF66] text-[20px] font-normal font-[Space Grotesk] leading-[28px]" : ChildrenColor === "green"
       }
    )
    const iconClass = clsx(
        {
            "w-[41px] h-[41px]" : iconPosition === "left",
            "w-[23.32px] h-[16px]" : iconPosition === "right"
        }
    )
    return (
        <>
        <a href={href} style={{ width: `${widtha}px` }} className={clsxClassA}>
            <img
            style={{ order: iconPosition === "left" ? 1 : 2 }} 
            src={Icons[Icon]}
            alt={Icon}
            className={iconClass}/>
            <div className={title} style={{ order: iconPosition === "left" ? 2 : 1 }}>{Children}</div>
        </a>
        </>
    )

}

export default Link; 

 {/* <Link iconPosition="right" Icon="ArrowG" href="https://www.google.com" lableColor="black" Children="Google link" width="150" ChildrenColor="black" /> */}
 