import { NextPage } from "next";
import { ServicesSchema } from "../../../utils/config/schemas/servicesSchema";
import ServiceShowcaseLists from "./serviceShowcaseLists";

const ServiceShowcases: NextPage = () => {
  return (
    <div className=" text-CoolBlack bg-slate-300">
      <div className="px-4 mx-auto py-14 max-w-9xl sm:px-6 font-poppins">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl">{ServicesSchema.sc_header}</h1>
          <p className="my-8 text-sm font-light leading-loose md:leading-10 md:text-2xl">
            {ServicesSchema.sc_subHeader}
          </p>
        </div>

        <div className="lg:pt-10">
          {ServicesSchema.items.map((item: any, i: number) => (
            <ServiceShowcaseLists
              sc_image={item.sc_image}
              title={item.title}
              sc_text={item.sc_text}
              path={item.path}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceShowcases;
