import Icons from "./Icon"
import clsx from "clsx"
const Logo = ({LogoIconOne,LogoIconTwo, vcLogoBox, vcFirstIcon, vcSecondIcon}) => {
    const baseClassLogoBox = "grid grid-cols-6 items-center"
    const finalClassLogoBox = clsx(
        baseClassLogoBox,
        vcLogoBox
    )



    return(
        <>
        <div className={finalClassLogoBox}>
            <img className={vcFirstIcon} src={Icons[LogoIconOne]} alt={LogoIconOne}/>
            <img className={vcSecondIcon} src={Icons[LogoIconTwo]} alt={LogoIconTwo}/>
        </div>
        </>
    )
}

export default Logo;