import clsx from "clsx";
import Icons from "./Icon";
const SocialLogo = ({LogoIconOne,LogoIconTwo, LogoIconThird, vcLogoBox, vcFirstIcon, vcSecondIcon, vcThirdIcon}) => {
    const baseClassLogoBox = "grid grid-cols-3 items-center justify-between"
    const finalClassLogoBox = clsx(
        baseClassLogoBox,
        vcLogoBox
    )
    return (
        <div className={finalClassLogoBox}>
            <span className="w-full max-w-[29.52px] min-w-[14.5px] h-auto">
                <img className={vcFirstIcon} src={Icons[LogoIconOne]} alt={LogoIconOne}/>
            </span>

            <span className="w-full max-w-[29.52px] min-w-[14.5px] h-auto">
                <img className={vcSecondIcon} src={Icons[LogoIconTwo]} alt={LogoIconTwo}/>             
            </span>

            <span className="w-full max-w-[29.52px] min-w-[14.5px] h-auto">
                <img className={vcThirdIcon} src={Icons[LogoIconThird]} alt={LogoIconThird}/> 
            </span>
        </div>
    )

}

export default SocialLogo;