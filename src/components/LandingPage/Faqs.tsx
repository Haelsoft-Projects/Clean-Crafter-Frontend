"use client";
import Image from "next/image";
import icon from "../../assets/landingpage/faqicon.png";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
const Faqs = () => {
  type value = Array<object>;
  const data: value = [
    {
      name: "What is CleanCrafter",
      content:
        "Cleancrafter is an organization dedicated to providing cleaning services while also creating job opportunities for cleaners.",
    },
    {
      name: "How does Cleancrafter operate?",
      content:
        "Cleancrafter facilitates the connection between clients in need of cleaning services and skilled cleaners seeking job opportunities.",
    },
    {
      name: "Do I need to do anything before my cleaner arrives?",
      content:
        "To ensure an efficient cleaning service, we recommend tidying up any personal items or clutter to allow our cleaners to focus on deep cleaning your space. Additionally, if there are any specific areas or items you want our team to pay special attention to, feel free to communicate these details beforehand.",
    },
    {
      name: "Do I need to be home for the booking?",
      content:
        "Yes, you would have to be at home to book our services. This ensures that our team can assess the cleaning requirements accurately and address any specific instructions or concerns you may have.",
    },
    {
      name: "What cleaning supplies do I have to provide?",
      content:
        "You don't have to worry about providing any cleaning supplies. Cleancrafter brings all the necessary equipment and supplies to ensure your space is thoroughly cleaned.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const showAccordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        showAccordionRef.current &&
        !showAccordionRef.current.contains(e.target as Node)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div id="faqs" className="py-5 px-4  sm:px-10 md:px-8 lg:mt-36  mt-20">
        <div className="max-w-[1240px] w-full  mx-auto flex flex-col gap-y-5 lg:px-32">
          <p className="text-black text-[35px] lg:text-[46px] text-center ">
            Frequently Asked Questions
          </p>
          <div className="mt-0">
            {data.map((item: any, index) => (
              <div key={index}>
                <div className="flex flex-col   min-h-[64px] p-4 rounded-lg mt-8 justify-center items-center px-4 lg:px-8 w-full border border-[#F1F5F9] shadow-[0_8px_20px_0_rgba(61,_107,_163,_0.08)]">
                  <div
                    ref={showAccordionRef}
                    className="flex justify-between w-full"
                  >
                    <p className="text-lg">{item.name}</p>
                    {activeIndex === index ? (
                      <HiOutlineMinus
                        onClick={() => setActiveIndex(null)}
                        className="text-4xl  md:text-2xl text-[#0056B3] cursor-pointer"
                      />
                    ) : (
                      <HiOutlinePlus
                        onClick={() => setActiveIndex(index)}
                        className="text-4xl text-[#0056B3] md:text-2xl cursor-pointer"
                      />
                    )}
                  </div>
                  <div
                    className={
                      activeIndex === index
                        ? "text-lg text-justify mt-10 leading-6 "
                        : " "
                    }
                  >
                    {activeIndex === index && item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
