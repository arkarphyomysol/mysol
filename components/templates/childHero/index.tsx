import { NextPage } from "next";
import Image from "next/image";
import { CHeroProps } from "../../../utils/types";
import { Navigation } from "../navigation";

const CHero: NextPage<CHeroProps> = ({ title, subTitle }) => {
  return (
    <>
      <Navigation />
      <div className="relative h-[40rem]">
        <div className="absolute w-full h-full bg-CoolBlack -z-10" />
        <div className="absolute top-0 left-0 w-full h-full -z-10 ">
          <Image
            src="/images/banner.svg"
            alt="banner"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="flex h-full px-4 backdrop-blur-sm text-slate-300">
          <div className="m-auto">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl md:text-6xl text-ruby">{title}</h1>
              <p className="my-8 text-sm font-light leading-loose md:leading-10 md:text-2xl">
                {subTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CHero;
