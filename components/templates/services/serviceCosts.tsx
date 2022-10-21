import { NextPage } from "next";
import { ServicesSchema } from "../../../utils/config/schemas/servicesSchema";

const ServiceCosts: NextPage = () => {
  return (
    <div className=" text-CoolBlack lg:py-20 bg-slate-100">
      <div className="px-4 mx-auto lg:py-14 max-w-9xl sm:px-6 font-poppins">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl">
            {ServicesSchema.serviceCosts.header}
          </h1>
          <p className="my-8 text-sm font-light leading-loose md:leading-10 md:text-2xl">
            {ServicesSchema.serviceCosts.subHeader}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:pt-10 md:grid-cols-4">
          {ServicesSchema.serviceCosts.items.map((item: any, i: number) => (
            <div
              className="flex flex-col justify-between p-8 space-y-3 text-center lg:mt-4 text-CoolBlack"
              key={i}>
              <div className="">
                <div className="inline-flex items-center justify-center w-14 h-14 text-CoolBlack">
                  {item.icon}
                </div>
                <h1 className=" md:text-lg lg:py-4">{item.title}</h1>
                <p className=" md:text-base lg:text-center">{item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceCosts;
