/* eslint-disable array-callback-return */
import ServicesCard from "./ServicesCard";
const ServicesBlock = () => {
    const informationCard =[
        {
            id:1,
            vcHeadLinkBox: "w-[221px] h-[210px]",
            vcimg:"w-[150px] xl:w-[210px] h-[120px] xl:h-[170px] absolute right-[50px] top-[135px] xl:top-[50px]",
            Icon:"scone",
            IconBlack: "true",
            bgCard: "grey",
            vcHeading: "w-[221px] h-[76px] flex flex-col items-start justify-start",
            vcLabelOne: "w-[221px] h-[38px]",
            vcLabelTwo: "w-[197px] h-[38px]",
            bgLabel: "green",
            vcLabelThree: "",
            vcHText: " text-[30px] leading-[38.28px] text-start" ,
            hOne : "Search engine",
            hTwo: "optimization" ,
            
        },
        {
            id:2,
            vcHeadLinkBox: "w-[221px] h-[210px]",
            vcimg:"w-[150px] xl:w-[210px] h-[120px] xl:h-[170px] absolute right-[50px] top-[135px] xl:top-[50px]",
            Icon:"sctwo",
            IconBlack: "true",
            bgCard: "green",
            vcHeading: "w-[209px] h-[76px] flex flex-col items-start",
            vcLabelOne: "w-[195px] h-[38px] flex flex-row items-start",
            vcLabelTwo: "w-[178px] h-[38px] flex flex-row items-start",
            bgLabel: "white",
            vcLabelThree: "",
            vcHText: "text-[30px] leading-[38.28px]" ,
            hOne : "Pay-per-click",
            hTwo: "advertising" ,
            
        },
        {
            id:3,
            vcHeadLinkBox: "w-[197px] h-[210px]",
            vcimg:"w-[150px] xl:w-[210px] h-[120px] xl:h-[210px] absolute right-[50px] top-[135px] xl:top-[50px]",
            Icon:"scthree",
            bgCard: "black",
            vcHeading: "w-[197px] h-[76px] flex flex-col items-start",
            vcLabelOne: "w-[197px] h-[38px] flex flex-row items-start",
            vcLabelTwo: "w-[161px] h-[38px] flex flex-row items-start",
            bgLabel: "white",
            vcLabelThree: "",
            vcHText: "text-[30px] leading-[38.28px]" ,
            hOne : "Social Media",
            hTwo: "Marketing" ,
            
        },
        {
            id:4,
            vcHeadLinkBox: "w-[1644px] h-[210px]",
            vcimg:"w-[150px] xl:w-[210px] h-[120px] xl:h-[192.68px] -rotate-180 absolute right-[50px] top-[135px] xl:top-[50px]",
            Icon:"scfour",
            IconBlack: "true",
            bgCard: "grey",
            vcHeading: "w-[161px] h-[76px] flex flex-col items-start",
            vcLabelOne: "w-[90px] h-[38px] flex flex-row items-start",
            vcLabelTwo: "w-[161px] h-[38px] flex flex-row items-start",
            bgLabel: "green",
            vcLabelThree: "",
            vcHText: "text-[30px] leading-[38.28px]" ,
            hOne : "Email",
            hTwo: "Marketing" ,
            
        },
        {
            id:5,
            vcHeadLinkBox: "w-[164px] h-[210px]",
            vcimg:"w-[150px] xl:w-[210px] h-[120px] xl:h-[195.91px] absolute right-[50px] top-[135px] xl:top-[50px]",
            Icon:"scfive",
            IconBlack: "true",
            bgCard: "green",
            vcHeading: "w-[137px] h-[76px] flex flex-col items-start",
            vcLabelOne: "w-[133px] h-[38px] flex flex-row items-start",
            vcLabelTwo: "w-[137px] h-[38px] flex flex-row items-start",
            bgLabel: "white",
            vcLabelThree: "",
            vcHText: "text-[30px] leading-[38.28px]" ,
            hOne : "Content",
            hTwo: "Creation" ,
            
        },
        {
            id:6,
            vcHeadLinkBox: "w-[213px] h-[210px]",
            vcimg:"w-[150px] xl:w-[210px] h-[120px] xl:h-[170px] absolute right-[50px] top-[135px] xl:top-[50px]",
            Icon:"scsix",
            bgCard: "black",
            vcHeading: "w-[213px] h-[76px] flex flex-col items-start",
            vcLabelOne: "w-[213px] h-[38px] flex flex-row items-start",
            vcLabelTwo: "w-[138px] h-[38px] flex flex-row items-start",
            bgLabel: "green",
            vcLabelThree: "",
            vcHText: "text-[30px] leading-[38.28px]" ,
            hOne : "Analytics and ",
            hTwo: "Tracking" ,
            
        },
    ]
    return(
        <>
        <div className="w-full h-auto grid grid-cols-[repeat(auto-fit,_minmax(390px,_1fr))] gap-[20px] lg:gap-[40px] px-[20px] lg:px-[100px] relative">
            {informationCard.map((item) => {
                return(
                    <ServicesCard key={item.id} vcHeadLinkBox={item.vcHeadLinkBox}
                                    vcimg={item.vcimg} 
                                    Icon={item.Icon} 
                                    IconBlack={item.IconBlack}
                                    bgCard={item.bgCard}
                                    vcHeading={item.vcHeading}
                                    vcLabelOne={item.vcLabelOne}
                                    vcLabelTwo={item.vcLabelTwo}
                                    bgLabel={item.bgLabel}
                                    vcLabelThree={item.vcLabelThree}
                                    vcHText={item.vcHText}
                                    hOne={item.hOne}
                                    hTwo={item.hTwo}
                                    hThree={item.hThree}
                 />
                )
            })}
        </div>
        </>
    )
}

export default ServicesBlock;