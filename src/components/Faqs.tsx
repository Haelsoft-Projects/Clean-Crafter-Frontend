import Image from "next/image";
import icon from "../assets/landingpage/faqicon.png";
const Faqs = () => {
  type value = Array<string>;
  const data: value = [
    "What is CleanCrafter",
    "How does pricing work?",
    "Do I need to do anything before my cleaner arrives?",
    "Do I need to be home for the booking?",
    "What cleaning supplies do I have to provide?",
  ];
  return (
    <div>
      <div className="py-5 px-4  sm:px-10 md:px-8 mt-20 mb-32">
        <div className="container mx-auto flex flex-col gap-y-5 lg:px-32">
          <p className="text-black text-[35px] lg:text-[46px] text-center ">
            Frequently Asked Questions
          </p>
          <div className="mt-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex h-[64px] rounded-lg mt-8 justify-between items-center px-4 lg:px-8 w-full border border-[#F1F5F9] shadow-[0_8px_20px_0_rgba(61,_107,_163,_0.08)]"
              >
                <p className="text-sm">{item}</p>
                <Image src={icon} alt="icons" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
