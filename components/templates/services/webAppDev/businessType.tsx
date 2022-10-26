import { NextPage } from "next";
import { WebAppSchema } from "../../../../utils/config/schemas/webAppSchema";

export const BusinessType: NextPage = () => {
  return (
    <div className="px-4 mx-auto py-14 max-w-9xl sm:px-6 font-poppins text-CoolBlack">
      <div className="">
        <h1 className="my-8 text-sm font-light leading-loose text-center md:leading-10 md:text-2xl">
          {WebAppSchema.businessTypes.header}
        </h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {WebAppSchema.businessTypes.items.map((item: any) => (
            <div
              className="grid grid-cols-1 py-4 space-x-6 lg:grid-cols-7"
              key={item.title}>
              <div className="inline-flex items-center justify-center mx-auto w-14 h-14 text-CoolBlack">
                {item.icon}
              </div>
              <div className="lg:col-span-6 ">
                <h1 className="text-xl ">{item.title}</h1>
                <p className="mt-4 ">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
