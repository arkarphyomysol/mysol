import { NextPage } from "next";
import { WebAppSchema } from "../../../../utils/config/schemas/webAppSchema";

export const WebAppTypes: NextPage = () => {
  return (
    <div className=" bg-CoolBlack text-slate-300">
      <div className="px-4 mx-auto py-14 max-w-9xl sm:px-6 font-poppins">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl">
            {WebAppSchema.webAppTypes.header}
          </h1>
          <p className="my-8 text-sm font-light leading-loose md:leading-10 md:text-2xl">
            {WebAppSchema.webAppTypes.subHeader}
          </p>
        </div>

        <div className="lg:pt-10">
          {WebAppSchema.webAppTypes.items.map((item: any) => (
            <div
              className="flex flex-col my-5 lg:pt-6 lg:my-8 lg:flex-row lg:even:flex-row-reverse"
              key={item.title}>
              <div className="lg:w-1/2 ">{item.image}</div>
              <div className="lg:w-1/2 lg:px-16">
                <div className="space-y-4 ">
                  <h1 className="text-xl lg:text-4xl">{item.title}</h1>
                  {item.body.map((body: any, i: number) => (
                    <p className="text-sm lg:text-lg" key={i}>
                      {body.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
