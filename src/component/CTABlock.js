/* eslint-disable jsx-a11y/heading-has-content */
import Icons from "./Icon";
import Button from "./Button";
const CTABlock = ({Icon="ctafram"}) => {
    return(
        <>
        <div className="w-full h-auto px-[20px] lg:px-[100px] relative">
            <div className="w-full h-auto lg:h-[347px] rounded-[45px] px-[40px] py-[40px] lg:py-0 lg:px-[60px] bg-[#F3F3F3] flex flex-row justify-between items-center">
                <div className="w-full Text & button h-auto min-h-[227px] flex flex-col gap-[20px] items-start">
                    <h3 className="w-full min-h-[38px] font-medium font-[Space Grotesk] text-[30px] leading-[38.28px] text-[#000000] text-start">Let’s make things happen</h3>
                    <p className="w-full h-auto font-normal font-[Space Grotesk] text-[18px] leading-[22.97px] text-[#000000] text-start">Contact us today to learn more about how our digital <br/> marketing services can help your business grow and <br/> succeed online.</p>
                    <Button background="black" border="false" textColor="white" children="Get your free proposal" className="w-[288px] h-[68px] rounded-[14px] py-5 px-[35px] gap-[10px]"/>
                </div>
                <img className="hidden lg:block w-[80%] xl:w-[494px]" src={Icons[Icon]} alt={Icon}/>
            </div>
        </div>
        </>
    )
}

export default CTABlock;