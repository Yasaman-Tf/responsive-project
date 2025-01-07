
import Logo from "./Logo";
import Button from "./Button"
import Icons from "./Icon";
const NavigationBar = () => {
    const InformationSpan = [
        {
            id:1,
            Children: "About us"
        },
        {
            id:2,
            Children: "Services"
        },
        {
            id:3,
            Children: "Use Cases"
        },
        {
            id:4,
            Children: "Pricing"
        },
        {
            id:5,
            Children: "Blog"
        }
    ]

    // const NavClassLogo = "w-[140px] lg:w-[219.54px]h-[56px] py-[10px] flex flex-row gap-[10px] relative items-center"
    return(
        <>
        <div className="NavigationBar w-full h-[38px] lg:h-[68px] flex flex-row justify-between items-center px-[20px] lg:px-[100px] relative">
            <Logo LogoIconOne="iconLogob" LogoIconTwo="textLogob" vcLogoBox="w-[15.2%] min-w-[140px] max-w-[219.54px] gap-[7px] min-h-[56px]" vcFirstIcon="w-full max-w-[36px] min-w-[15px] h-auto max-h-[36px] min-h-[15px] col-span-1" vcSecondIcon="w-full max-w-[170.62px] min-w-[69.5px] h-auto max-h-[28.56px] col-span-5"/>
            <img className="w-[18px] h-[18px] firstmob:w-[30px] firstmob:h-[30px] block lg:hidden" src={Icons.hambmenu} alt="hamburgermenu"/>
            <div className="Frame10 hidden lg:flex flex-row w-[56.3%] min-w-[655px] max-w-[811px] max-h-[68px] items-center justify-between">
                {InformationSpan.map((item) => {
                    return(
                        <span key={item.id} className="h-[28px] font-[Space Grotesk] font-normal text-[20px] leading-[28px] text-[#000000]" children={item.Children}></span>
                    )
                } )}
                <Button background="transparent" border="1px" textColor="black" children="Request a quote" className="w-[28.4%] min-w-[231px] h-[68px] rounded-[14px] border-[1px] px-[35px] py-[20px] flex gap-[10px] font-[Space Grotesk] font-normal text-[20px] leading-[28px] items-center"/>
            </div>
        </div>
        </>
    )
}

export default NavigationBar;