import { NextPage } from "next";
import Image from "next/image";
import { HeroProps } from "../../../utils/types";
import HeroImage from "../../../public/images/heroImage.jpeg";
import Link from "next/link";

const Hero: NextPage<HeroProps> = () => {
  return (
    <div className="relative w-full h-screen ">
      <div className="absolute top-0 left-0 w-full h-screen -z-10 ">
        <Image src={HeroImage} objectFit="cover" layout="fill" alt={`Mysol`} />
      </div>

      <div className="flex flex-col h-screen  bg-CoolBlack/70">
        <div className="px-4 pb-16 mx-auto my-auto capitalize max-w-9xl sm:px-6 text-slate-100 font-DMSans">
          <h4 className="text-2xl font-medium font-DMSans ">
            One-Stop Solution For All Your Business Needs
          </h4>
          <h1 className="mt-6 text-3xl font-medium lg:leading-relaxed lg:text-8xl">
            Creating <span className="font-bold text-ruby">Softwares </span>
            &#38; Digital Excellence
          </h1>
          <Link href={`/contact`}>
            <a>
              <div className="px-5 py-2 mt-8 text-xl font-medium transition duration-700 ease-in-out bg-yellow-400 rounded-full hover:bg-ruby hover:text-slate-800 lg:px-10 lg:py-6 text-slate-700 w-fit">
                Get In Touch
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
