import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const ComingSoon: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="relative flex flex-col items-center justify-center h-screen lg:flex-row">
        <div className="flex flex-col justify-center w-full px-4 lg:px-16 lg:w-1/2">
          <h2 className="text-2xl text-slate-600">{`We're Coming Soon..`}</h2>
          <h1 className="mt-8 text-3xl font-semibold leading-relaxed lg:text-6xl text-CoolBlack">
            {`This Page Is Under Construction... stay tuned!`}
          </h1>
          <div className="inline-flex w-full pt-8 md:w-fit">
            <Link href={"/"}>
              <a className="flex px-4 py-2 bg-CoolBlack text-slate-300">
                Go To Home Page
              </a>
            </Link>
          </div>
        </div>
        <div className="absolute top-0 items-center justify-start h-screen lg:static -z-10 lg:w-1/2 lg:flex w-72 lg:bg-CoolBlack ">
          <Image
            src={"/images/comingSoon.png"}
            width={4267}
            height={3200}
            alt="coming soon"
          />
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;
