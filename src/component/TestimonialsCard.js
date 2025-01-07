import Icons from "./Icon";
const TestimonialsCard = ({pOne, pTwo,hText, IconBubM="bubMsg"}) => {
    return(
        <>
            <div className="Card w-full lg:w-[606px] min-w-[350px] h-auto min-h-[335px] flex flex-col justify-between gap-[25px] relative">
                <div className="Bubble relative w-full h-auto flex flex-col justify-center">
                    <div className="w-full h-auto relative bg-no-repeat bg-center bg-cover p-[35px] pb-[60px]" style={{ backgroundImage: `url(${Icons[IconBubM]})`,backgroundPosition: '20px 20px',backgroundSize: 'calc(100% - 40px) calc(100% - 40px)'}}>     
                        <p className="w-full p-[20px] text-justify text-[#FFFFFF] text-[16px] lg:text-[18px] font-normal leading-[22.97px] font-[Space Grotesk] text-start">{pOne}</p>
                    </div>
                </div>
                <div className="TitleBox w-full h-auto flex justify-end">
                    <span className="Title w-[84%] lg:max-w-[526px] h-[49px] flex flex-col">
                        <h4 className="Text text-[20px] font-medium leading-[25.52px] font-[Space Grotesk] text-[#B9FF66] text-start">{hText}</h4>
                        <p className="text-[18px] font-normal leading-[22.97px] font-[Space Grotesk] text-[#FFFFFF] text-start">{pTwo}</p>
                    </span>
                </div> 
            </div>
        </>
    )
}

export default TestimonialsCard;