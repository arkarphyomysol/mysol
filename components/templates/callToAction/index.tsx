import { NextPage } from "next";
import Image from "next/image";

interface CallToActionProps {
  children?: JSX.Element | JSX.Element[];
  title: string | undefined;
  subTitle: string | undefined;
}
const CallToAction: NextPage<CallToActionProps> = ({
  children,
  title,
  subTitle,
}) => {
  return (
    <div className="relative h-[20rem]">
      <div className="absolute w-full h-full bg-CoolBlack -z-10" />
      <div className="absolute top-0 w-full h-full opacity-25 -left-60 -z-10">
        <Image
          src="/images/uuundulate.svg"
          alt="banner"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="flex h-full px-4 backdrop-blur-sm text-slate-300">
        <div className="m-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-6xl">{title}</h1>
            <p className="my-8 text-sm font-light leading-loose md:leading-10 md:text-2xl">
              {subTitle}
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
