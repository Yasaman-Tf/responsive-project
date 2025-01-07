import CaseStudyCard from "./CaseStudyCard";

const CaseStudiesBlock = () => {
    const content = [
        {id:1, p:"For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."},
        {id:2, p:"For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."},
        {id:3, p:"For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."},
    ]
    return(
        <>
        <div className="w-full h-auto lg:h-[326px] px-[20px] lg:px-[100px] grid grid-cols-[repeat(auto-fit,_minmax(286px,_1fr))] relative">
            <div className="w-full h-auto rounded-[45px] py-0 lg:py-[70px] px-[0px] lg:px-[60px] flex flex-col items-center lg:flex-row gap-[30px] lg:gap-[10px] secondmob:gap-[20px] desk:gap-[64px] bg-[#FFFFFF] lg:bg-[#191A23]">
                {content.map((item, index) => {
                    return(
                        <>
                        <CaseStudyCard key={item.id} p={item.p}/>
                        {index < content.length - 1 && (
                            <div className="hidden lg:block w-[0px] h-[186px] border border-[#FFFFFF]">
                            </div>
                          )}
                          </> 
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default CaseStudiesBlock;