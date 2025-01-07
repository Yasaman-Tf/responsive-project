/* eslint-disable jsx-a11y/heading-has-content */
import NavigationBar from "./NavigationBar";
import Button from "./Button";
import Icons from "./Icon";
const LandingPage = ({HomeIcon="imglandPagehome"}) => {
    const companyName = [
        {
            id:1,
            companyIcon: "compone",
            className: "w-[110px] lg:w-[124.11px] h-[48px] mix-blend-luminosity"
        },
        {
            id:2,
            companyIcon: "comptwo",
            className: "w-[110px] lg:w-[126.37px] h-[48px] mix-blend-luminosity"
        },
        {
            id:3,
            companyIcon: "compthree",
            className: "w-[110px] lg:w-[128.63px] h-[48px] mix-blend-luminosity flex items-center"
        },
        {
            id:4,
            companyIcon: "compfour",
            className: "w-[110px] lg:w-[145.55px] h-[48px] mix-blend-luminosity"
        },
        {
            id:5,
            companyIcon: "compfive",
            className: "w-[110px] lg:w-[125.24px] h-[48px] mix-blend-luminosity"
        },
        {
            id:6,
            companyIcon: "compsix",
            className: "w-[110px] lg:w-[110.57px] h-[48px] mix-blend-luminosity"
        }
    ]
    return(
        <>
        <div className="LandingPage relative h-auto w-full pt-[60px] flex flex-col gap-[20px] lg:gap-[70px]">
            <NavigationBar/>
            <div className="Header w-full h-auto flex flex-row px-[20px] lg:px-[100px] justify-between">
                <div className="Frame13 w-full h-auto min-h-[481px] flex flex-col gap-[25px]">
                <h1 className="w-full h-auto font-[Space Grotesk] font-semibold lg:font-medium text-[45px] lg:text-[60px] text-[#241616] text-start leading:[50px] lg:leading-[76.56px]">
                Navigating the digital landscape for success
                </h1>
                <img className="block lg:hidden w-full h-auto items-center" src={Icons[HomeIcon]} alt={HomeIcon}/>
                <p className="w-full h-auto min-h-[112px] font-[Space Grotesk] font-normal text-[18px] lg:text-[20px] text-[#000000] text-start leading-[28px]">
                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <Button background="black" border="false" textColor="white" children="Book a consultation" className="w-full lg:w-[264px] h-[68px] rounded-[14px] px-[35px] py-[20px] flex justify-center font-[Space Grotesk] font-normal text-[20px] leading-[28px] items-center"/>
                </div>
                <img className="hidden lg:block lg:w-[80%]" src={Icons[HomeIcon]} alt={HomeIcon}/>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(110px,_1fr))] justify-between gap-[10px] w-full h-auto min-h-[48px] px-[20px] lg:px-[100px] bg-[#FFFFFF]">
            {companyName.map((item) => {
                return(
                    <>
                    <img key={item.id} className={item.className} src={Icons[item.companyIcon]} alt={companyName}/>
                    </>
                )
            })}
            </div>
        </div>
        </>
    )
}

export default LandingPage;