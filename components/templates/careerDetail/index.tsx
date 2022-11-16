import { NextPage } from "next";
import Image from "next/image";
import { CDetailProps } from "../../../utils/types";
import { Navigation } from "../navigation";

const CareerDetailTmp: NextPage<CDetailProps> = ({ title, subTitle }) => {
  return (
    <>
      <Navigation />
      <div className="relative h-[40rem]">
        <div className="absolute w-full h-full bg-CoolBlack -z-10">
          <div className="absolute top-0 left-0 w-full h-full -z-10 ">
            <Image
              src="/images/together.svg"
              alt="together"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="flex flex-col h-screen h-[40rem] bg-CoolBlack/30">
            <div className="px-4 pb-16 mx-20 my-auto capitalize max-w-9xl sm:px-6 text-slate-100 font-DMSans">
              <h4 className="text-2xl font-medium font-DMSans ">{title}</h4>
              <h1 className="mt-6 text-3xl font-medium lg:leading-relaxed lg:text-5xl">
                {subTitle}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CareerDetailTmp;
