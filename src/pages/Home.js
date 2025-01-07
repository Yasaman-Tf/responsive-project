
import FooterBlock from "../component/FooterBlock";
import ContactBlock from "../component/ContactBlock";
import TestimonialsBlock from "../component/TestimonialsBlock";
import GroupCards from "../component/GroupCards";
import ProcessBlock from "../component/ProcessBlock"
import CaseStudiesBlock from "../component/CaseStudiesBlock";
import CTABlock from "../component/CTABlock";
import ServicesBlock from "../component/ServicesBlock";
import LandingPage from "../component/Landingpage";
// import Button from "../../components/Button";
import HeadingSub from "../component/HeadingSub";

const Home = () => {
   
   return (
   <div className="Home w-full max-w-[630px] min-w-[430px] lg:max-w-[1440px] h-auto flex flex-col relative box-border gap-[50px] desk:gap-[100px] mx-auto p-0 items-center">
    <LandingPage/>
    {/* <HeadingSub vcLabelOne="min-w-[178px] h-[51px]" vcP="w-full lg:w-[580px] h-[70px] lg:h-[46px]" hchildrenOne="Services" pchildren="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/> */}
    <ServicesBlock/>
    <CTABlock/>
    {/* <HeadingSub  vcLabelOne="min-w-[265px] h-[51px]" vcP="w-full lg:w-[580px] h-[46px]" hchildrenOne="Case Studies" pchildren="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"/> */}
    <CaseStudiesBlock/>
    <HeadingSub vcHeadingSub="h-auto" vcLabelOne="w-[250px] firstlg:w-auto lg:w-[412px] h-auto lg:h-[51px]" vcP="w-full lg:w-[292px] h-[46px]" hchildrenOne="Our Working Process" pchildren="Step-by-Step Guide to Achieving Your Business Goals"/>
    <ProcessBlock/>
    {/* <HeadingSub  vcLabelOne="min-w-[115px] h-[51px]" vcP="w-full lg:w-[473px] h-[46px]" hchildrenOne="Team" pchildren="Meet the skilled and experienced team behind our successful digital marketing strategies"/> */}
    <GroupCards/>
    {/* <Button background="black" border="false" textColor="white" children="See all team" className="w-[390px] lg:w-[269px] h-[68px] rounded-[14px] px-[35px] py-[20px] flex gap-[10px] font-[Space Grotesk] font-normal text-[20px] leading-[28px] items-center justify-center lg:left-[1071px]"/> */}
    {/* <HeadingSub  vcLabelOne="min-w-[255px] h-[51px]" vcP="w-full lg:w-[473px] h-[70px] lg:h-[46px]" hchildrenOne="Testimonials" pchildren="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"/> */}
    <TestimonialsBlock IconMsg="bubbleMsg" IconStarG="startG" IconStarW="startW" IconArrowRight="ArrowR" IconArrowLeft="ArrowL"/>
    {/* <HeadingSub vcLabelOne="min-w-[230px] h-[51px]" vcP="w-full lg:w-[323px] h-[46px]" hchildrenOne="Contact Us" pchildren="Connect with Us: Let's Discuss Your Digital Marketing Needs"/> */}
    <ContactBlock Icon="Illustration"/>
    <FooterBlock/>
   </div>
   )
}


export default Home;
