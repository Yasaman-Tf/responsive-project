import Icons from "./Icon";
import RadioButton from "./RadioButton";
import Input from "./Input";
import Button from "./Button";

const ContactBlock = ({Icon}) => {
    return (
        <div className="ContactBlock w-full h-auto lg:h-[773px] px-[20px] lg:px-[100px] relative flex flex-col gap-[25px]">
            <div className="BlockIllustration w-full h-[620px] desk:min-h-[773px] rounded-[45px] px-[20px] desk:px-[100px] pt-[12px] desk:pt-[60px] pb-[16px] lg:pb-[80px] gap-[10px] bg-[#F3F3F3] lg:overflow-hidden">
               <div className="Rectangle w-full h-full desk:h-[702.85px] flex flex-col items-center justify-center desk:items-start relative desk:absolute lg:top-[24.38px] desk:left-[187.28px] desk:w-[1152.83px]">
               <div className="Form w-full lg:w-[80%] desk:max-w-[556px] max-h-[633px] gap-[40px] desk:absolute desk:left-[10px] lg:top-[62.5px] flex flex-col px-[20px] lg:px-0">
                        <div className="flex w-full lg:max-w-[276px] justify-start gap-[35px] relative">
                            <RadioButton classNameDiv="w-[96px] h-[28px] flex items-center justify-start" classNameInput="w-[28px] h-[28px] bg-transparent" classNameLabel="w-[54px] h-[23px] absolute top-[1px] left-[35px] font-[18px]" id="say Hi" name="formHome"/>
                            <RadioButton classNameDiv="w-[145px] h-[28px] rounded-[29px] flex items-center justify-start" classNameInput="w-[28px] h-[28px] bg-transparent" classNameLabel="w-[103px] h-[23px] absolute top-[1px] left-[168px] font-[18px]" id="Get a Quote" name="formHome"/>
                        </div>
                        <div className="Fields w-full h-[457px] gap-[25px] flex flex-col">
                            <div className="Field w-full h-[92px] gap-[5px] flex flex-col items-start">
                                <span>Name</span>
                                <Input backgroundColor="withe" border="black" textColor="black" placeholder="Name" className="w-full h-[59px] py-[18px] px-[30px]"/>
                            </div>
                            <div className="Field w-full h-[92px] gap-[5px] flex flex-col items-start">
                                <span>Email*</span>
                                <Input backgroundColor="withe" border="black" textColor="black" placeholder="Email" className="w-full h-[59px] py-[18px] px-[30px]"/>
                            </div>
                            <div className="Field w-full h-[223px] gap-[5px] flex flex-col items-start">
                                <span>Message*</span>
                                <Input backgroundColor="withe" border="black" textColor="black" placeholder="Message" className="w-full h-[190px] py-[18px] px-[30px]"/>
                            </div>
                            <Button background="black" border="false" textColor="white" children="Send Message" className="hidden desk:block w-full h-[68px] rounded-[14px] py-5 px-[35px] gap-[10px]"/>
                        </div>
                    </div>
                    <img className="Illustration hidden w-[60%] max-w-[691.57px] max-h-[648px] absolute top-[62.5px] left-[784.71px] desk:block" src={Icons[Icon]} alt={Icon}/>
                </div> 
            </div>
            <Button background="black" border="false" textColor="white" children="Send Message" className="block desk:hidden w-full desk:w-[556px] h-[68px] rounded-[14px] py-5 px-[35px] gap-[10px]"/>
        </div>
    )
}

export default ContactBlock;