import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import TestimonialsCard from "./TestimonialsCard"
import { useState,  useEffect } from "react";
import Icons from "./Icon";
const TestimonialsBlock = ({IconStarG, IconStarW}) => {
    const informationmsgCard = [
        {
            id:1,
            isActive: true,
            pOne:  "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            hText: "John Smith",
            pTwo: "Marketing Director at XYZ Corp"
        },
        {
            id:2,
            isActive: true,
            pOne:  "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            hText: "John Smith",
            pTwo: "Marketing Director at XYZ Corp"
        },
        {
            id:3,
            isActive: true,
            pOne:  "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            hText: "John Smith",
            pTwo: "Marketing Director at XYZ Corp"
        },
        {
            id:4,
            isActive: true,
            pOne:  "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            hText: "John Smith",
            pTwo: "Marketing Director at XYZ Corp"
        },
        {
            id:5,
            isActive: true,
            pOne:  "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            hText: "John Smith",
            pTwo: "Marketing Director at XYZ Corp"
        },
        
    ]
    // const slideWidth = 606; // عرض هر اسلاید
    // const [currentIndex, setCurrentIndex] = useState(0);
  
    // const previousSlide = () => {
    //   setCurrentIndex((prev) =>
    //     prev === 0 ? informationmsgCard.length - 1 : prev - 1
    //   );
    // };
  
    // const nextSlide = () => {
    //   setCurrentIndex((prev) =>
    //     prev === informationmsgCard.length - 1 ? 0 : prev + 1
    //   );
    // };

    const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(606); // مقدار پیش‌فرض عرض اسلاید

  // تابع برای تغییر عرض اسلاید بر اساس سایز صفحه
  const updateSlideWidth = () => {
    if (window.innerWidth <= 1024) {
      setSlideWidth(383.6); // عرض برای صفحات کوچکتر
    } else {
      setSlideWidth(606); // عرض برای صفحات بزرگتر
    }
  };

  // استفاده از useEffect برای گوش دادن به تغییرات سایز صفحه
  useEffect(() => {
    updateSlideWidth(); // تنظیم اولیه عرض اسلاید
    window.addEventListener("resize", updateSlideWidth); // تنظیم هنگام تغییر سایز
    return () => window.removeEventListener("resize", updateSlideWidth); // پاکسازی
  }, []);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? informationmsgCard.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === informationmsgCard.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
    return(
        <div className="w-full px-[20px] lg:px-[100px]">
            <div className="TestimonialsBlock w-full h-auto lg:h-[625px] rounded-[45px] bg-[#191A23] overflow-hidden flex flex-col gap-[124px] items-start relative">
                
                <div className="Testimonials w-auto min-w-[1918px] h-auto  mt-[35px] lg:mt-[84px] flex flex-col items-center">
                    <div className={`Cards w-full h-auto flex justify-between transition ease-out duration-500`} 
                    style={{
                        transform: `translateX(-${currentIndex * slideWidth}px)`
                    }}>
                    {informationmsgCard.map((item) => {
                        return(
                            <TestimonialsCard key={item.id} isActive={item.isActive} pOne={item.pOne} pTwo={item.pTwo} hText={item.hText} />
                        )
                    })}
                    </div>

                
                </div>
                <div className="Navigation w-[45.4%] min-w-[268px] max-w-[564px] h-[14px] flex justify-between mx-auto mb-[30px] lg:mb-[85px]">
                        <button className="text-white" onClick={previousSlide}>
                            <FaArrowLeft />
                        </button>
                        <div className="NavigationStars w-[146px] h-[14px] flex justify-between">
  {informationmsgCard.map((item, index) => {
    return (
      <div key={item.id} onClick={() => setCurrentIndex(index)}>
        {index === currentIndex ? (
          <img className="w-[14px] h-[14px] cursor-pointer" src={Icons[IconStarG]} alt="IconStarG" />
        ) : (
          <img className="w-[14px] h-[14px] cursor-pointer" src={Icons[IconStarW]} alt="IconStarW" />
        )}
      </div>
    );
  })}
</div>

                        <button className="text-white" onClick={nextSlide}>
                            <FaArrowRight />
                        </button>
                </div>
            </div>
            
        </div>
    )
}
 
export default TestimonialsBlock;