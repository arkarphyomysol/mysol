import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const TpAboutMysol: NextPage = () => {
  return (
    <div className=" text-CoolBlack bg-slate-300">
      <div className="px-4 mx-auto py-14 max-w-9xl sm:px-6 font-poppins">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl">{`About Mysol`}</h1>
          <p className="my-8 text-sm font-light leading-loose md:leading-10 md:text-2xl">
            {`Based in Myanmar, MySol offers cutting-edge bespoke software development services to clients in the UK and worldwide.`}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="">
            <Image
              src="/images/team.jpg"
              width={1920}
              height={1280}
              alt="Mysol"
            />
          </div>
          <div className="space-y-4 ">
            <p>
              Our team is able to work well with startups and established
              businesses alike. With access to the absolute top-end technical
              talent in our team, we are able to take on challenging and complex
              software development projects. These applications take the form of
              feature-rich web and mobile apps and often make use of
              bleeding-edge development technologies.
            </p>
            <p>
              We are honoured by the positive feedback we receive from our
              clients. This is what helps our software development company grow.
            </p>
            <p>
              We are honoured by the positive feedback we receive from our
              clients. This is what helps our software development company grow.
            </p>
            <div className="inline-flex w-full mx-auto md:w-fit md:pt-8">
              <Link href={`/about-mysol`}>
                <a className="px-4 py-2 mx-auto transition duration-500 ease-in-out border rounded-full border-CoolBlack hover:bg-CoolBlack hover:text-slate-300">
                  More About Mysol
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TpAboutMysol;
