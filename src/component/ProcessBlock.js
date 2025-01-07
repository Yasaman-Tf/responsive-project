import AccordionProccess from "./AccordionProccess";
const ProcessBlock = () => {
    const ProcessDetail = [
        {
            id:1,
            IconNumber:"numone",
            h3:"Consultation",
            
            p:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            id:2,
            IconNumber:"num02",
            h3:"Research and Strategy Development",
            p:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            id:3,
            IconNumber:"num03",
            h3:"Implementation",
            p:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            id:4,
            IconNumber:"num04",
            h3:"Monitoring and Optimization",
            p:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            id:5,
            IconNumber:"num05",
            h3:"Reporting and Communication",
            p:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            id:6,
            IconNumber:"num06",
            h3:"Continual Improvement",
            p:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
    ]

return(
    <div className="ProcessBlock w-full px-[20px] lg:px-[100px] flex flex-col gap-[30px] relative">
    {ProcessDetail.map((item)=> {
        return(
            <AccordionProccess key={item.id} IconNumber={item.IconNumber} h3={item.h3} p={item.p}/>
        )
    })}
    </div>
    
)

}

export default ProcessBlock;