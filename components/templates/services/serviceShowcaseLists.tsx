import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

type ServiceShowcaseListsProps = {
  sc_image: string;
  title: string;
  sc_text: string;
  path: string;
};

const ServiceShowcaseLists = ({
  sc_image,
  title,
  sc_text,
  path,
}: ServiceShowcaseListsProps): JSX.Element => {
  return (
    <div className="flex flex-col my-5 lg:pt-6 lg:my-8 lg:flex-row lg:even:flex-row-reverse">
      <div className="lg:w-1/2 ">{sc_image}</div>
      <div className="lg:w-1/2 lg:px-16">
        <div className="space-y-4 ">
          <h1 className="text-xl lg:text-4xl">{title}</h1>
          <p className="text-sm lg:text-lg">{sc_text}</p>
        </div>
        <div className="inline-flex w-full mx-auto md:w-fit md:pt-8">
          <Link href={path}>
            <a className="px-4 py-2 mx-auto transition duration-500 ease-in-out border rounded-full border-CoolBlack hover:bg-CoolBlack hover:text-slate-300">
              Read More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ServiceShowcaseLists;
