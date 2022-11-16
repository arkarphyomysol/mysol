import { NextPage } from "next";
import Image from "next/image";
import TpAboutMysol from "../../components/templates/aboutMysol";
import Team from "../../components/templates/aboutMysol/teem";
import CallToAction from "../../components/templates/callToAction";
import CHero from "../../components/templates/childHero";
import Layout from "../../components/templates/layout";
import Testimonial from "../../components/templates/testimonial";
import { AboutMysolSchema } from "../../utils/config/schemas/aboutMysolSchema";
import { CareerSchema } from "../../utils/config/schemas/careerSchema";
import { ServicesSchema } from "../../utils/config/schemas/servicesSchema";

const About: NextPage = () => {
  console.log(
    "AboutMysolSchema.appendex --> ",
    AboutMysolSchema.appendex.title[0].text
  );

  return (
    <Layout>
      <CHero
        title={AboutMysolSchema.hero.header}
        subTitle={AboutMysolSchema.hero.subHeader}
      />

      <div className=" text-CoolBlack bg-slate-300">
        <div className="px-4 mx-auto lg:py-28 max-w-9xl sm:px-6 py-7">
          <div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2">
            <h1 className="text-2xl font-extrabold text-center lg:leading-tight lg:tracking-wide lg:text-6xl lg:text-start">
              <span>{AboutMysolSchema.appendex.title[0].text}</span>
              <span className=" text-CoolBlack/60">
                {AboutMysolSchema.appendex.title[1].text}
              </span>
            </h1>
            <p className="lg:my-auto lg:text-2xl lg:leading-snug">
              {AboutMysolSchema.appendex.text}
            </p>
          </div>
        </div>

        <div className="relative w-full h-[40rem]">
          <div className="absolute top-0 left-0 w-full h-full ">
            <Image
              src={"/images/peopleMeeting.jpg"}
              alt="peopleMeeting"
              objectFit="cover"
              layout="fill"
              objectPosition={"30% 30%"}
            />
          </div>
          <span className="absolute right-0 w-20 h-32 bg-ruby/20" />
        </div>

        <div className="px-4 mx-auto lg:mt-20 lg:py-14 max-w-9xl sm:px-6 py-7">
          <div className="grid grid-cols-1 gap-5 border-t-4 lg:pt-16 border-ruby lg:grid-cols-2 lg:gap-8">
            <h1 className="text-2xl font-extrabold text-center lg:leading-tight lg:tracking-wide lg:text-6xl lg:text-start">
              <span>{AboutMysolSchema.background.title[0].text} </span>
              <span className=" text-CoolBlack/60">
                {AboutMysolSchema.background.title[1].text}
              </span>
            </h1>
            <p className="tracking-wide lg:my-auto lg:text-xl lg:leading-snug">
              {AboutMysolSchema.background.text}
            </p>
          </div>
        </div>
        <div className="px-4 mx-auto lg:py-14 max-w-9xl sm:px-6 py-7">
          <div className="grid grid-cols-1 gap-5 lg:pt-16 lg:grid-cols-2 lg:gap-8">
            <h1 className="text-2xl font-extrabold text-center lg:leading-tight lg:tracking-wide lg:text-6xl lg:text-start">
              {/* <span>{AboutMysolSchema.mySol.title[0].text} </span> */}
              <span className=" text-CoolBlack/60">
                {AboutMysolSchema.mySol.title[1].text}
              </span>
            </h1>
            <p className="tracking-wide lg:my-auto lg:text-xl lg:leading-snug">
              {AboutMysolSchema.mySol.text}
            </p>
          </div>
        </div>

        <div className="px-4 mx-auto border-t-4 lg:py-14 max-w-9xl sm:px-6 py-7 border-ruby lg:mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {AboutMysolSchema.MVO.map((item: any) => (
              <div className="" key={item.title}>
                <h1 className=" lg:text-4xl lg:font-extrabold">{item.title}</h1>
                <p className="tracking-wide lg:mt-3 lg:text-lg lg:leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Team />
        {/* <CallToAction
          title={ServicesSchema.CTA.header}
          subTitle={ServicesSchema.CTA.header}>
          <button className="px-4 py-2 mx-auto transition duration-500 ease-in-out border rounded-full border-slate-300 hover:bg-slate-300 hover:text-CoolBlack">
            {ServicesSchema.CTA.btnText}
          </button>
        </CallToAction> */}
        <Testimonial />
      </div>
    </Layout>
  );
};
export default About;
