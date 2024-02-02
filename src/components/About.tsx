import Image from "next/image";
import img1 from "../assets/landingpage/sub1.png";
import img2 from "../assets/landingpage/sub2.png";
export default function About() {
  return (
    <div>
      <div className=" flex items-center  container justify-between mx-auto mt-10 mb-32">
        <div className=" w-1/2 ">
          <Image
            src={img2}
            alt="A man cleaning "
            className="object-contain w-[40rem] "
          />
          <Image
            src={img1}
            alt="A woman cleaning  "
            className="-mt-32 ml-[18rem]  object-contain w-[26rem]"
          />
        </div>
        <div className="flex h-full w-[30%] ">
          <div className="flex items-center">
            <span className=" h-2 w-12 bg-[#4A9EED] self-start"></span>
            <span>About CleanCrafters</span>
          </div>
        </div>
      </div>
    </div>
  );
}
