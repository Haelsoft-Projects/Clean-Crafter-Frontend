import Image from "next/image";
import img1 from "../assets/landingpage/img1.png";
import img2 from "../assets/landingpage/img2.png";
import img3 from "../assets/landingpage/img3.png";
export default function Reasons() {
  return (
    <div>
      <div className="bg-[#F3F2F2] w-full  py-20 min-h-[590px] mb-32">
        <div className="container mx-auto flex flex-col gap-x-5">
          <p className="text-black text-[46px] text-center ">
            Reasons To Book CleanCrafter
          </p>
          <div className="flex">
            <div className="h-[346px] w-[376px] flex flex-col items-center bg-white p-5 rounded-lg ">
              <Image src={img1} alt="paper" />
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
