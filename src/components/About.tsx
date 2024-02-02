import Image from "next/image";
import img1 from "../assets/landingpage/sub1.png";
import img2 from "../assets/landingpage/sub2.png";
export default function About() {
  return (
    <div>
      <div className="gap-y-6 flex flex-col container mx-auto relative mb-32">
        <Image src={img2} alt="A man cleaning " className="ab" />
        <Image
          src={img1}
          alt="A woman cleaning "
          className="absolute top-64 left-64"
        />
      </div>
    </div>
  );
}
