
import PersonalCard from "./PersonalCard";
const GroupCards = () => {
    const InformationPersonal =[
        {
            id:1,
            picIcon: "john",
            h4:"John Smith",
            p: "CEO and Founder",
            caption: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
            SocialIcon: "linkdin",
            heightContent: "h-[227.82px]",
            
        },
        {
            id:2,
            picIcon: "jane",
            h4:"Jane Doe",
            p: "Director of Operations",
            caption: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
            SocialIcon: "linkdin",
            heightContent: "h-[250.82px]",
            
        },
        {
            id:3,
            picIcon: "michael",
            h4:"Jane Doe",
            p: "Director of Operations",
            caption: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
            SocialIcon: "linkdin",
            heightContent: "h-[250.82px]",
            
        },
        {
            id:4,
            picIcon: "emilly",
            h4:"Jane Doe",
            p: "Director of Operations",
            caption: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
            SocialIcon: "linkdin",
            heightContent: "h-[250.82px]",
            

        },
        {
            id:5,
            picIcon: "brian",
            h4:"Jane Doe",
            p: "Director of Operations",
            caption: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
            SocialIcon: "linkdin",
            heightContent: "h-[273.82px]",
            

        },
        {
            id:6,
            picIcon: "sarah",
            h4:"Jane Doe",
            p: "Director of Operations",
            caption: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
            SocialIcon: "linkdin",
            heightContent: "h-[273.82px]",
            
        }
     ]
return(
    <>
    <div className="Group of cards w-full h-auto px-[20px] gap-[15px] grid grid-cols-[repeat(auto-fit,_minmax(386px,_1fr))] lg:px-[100px] lg:gap-[40px]" >
        {InformationPersonal.map((item) => {
            return <PersonalCard key={item.id} picIcon={item.picIcon} h4={item.h4} p={item.p} caption={item.caption} SocialIcon={item.SocialIcon} heightContent={item.heightContent}/>
        })}
    </div>
    </>
)
}

export default GroupCards;