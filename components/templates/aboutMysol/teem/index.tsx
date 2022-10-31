import { NextPage } from "next";
import Image from "next/image";
import { AboutMysolSchema } from "../../../../utils/config/schemas/aboutMysolSchema";

const Team: NextPage = () => {
  return (
    <div className=" text-slate-300 bg-CoolBlack">
      <div className="px-4 mx-auto py-14 max-w-9xl sm:px-6 font-poppins">
        <h1 className="max-w-lg text-2xl font-extrabold text-center lg:leading-tight lg:tracking-wide lg:text-6xl lg:text-start">
          {AboutMysolSchema.Teams.title}
        </h1>

        <div className=" lg:mt-20">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 ">
            {AboutMysolSchema.Teams.items.map((item: any) => (
              // <div className="flex py-4 lg:pt-20 lg:block" key={item.name}>
              //   {item.profileImage}
              //   <div className="mt-3 space-y-1">
              //     <h1 className="text-2xl ">{item.name}</h1>
              //     <h2 className=" text-slate-200">{item.position}</h2>
              //   </div>
              // </div>
              <div
                className="flex px-2 py-4 border-t-4 rounded-lg shadow-lg bg-slate-300 text-CoolBlack border-ruby"
                key={item.name}>
                {item.profileImage}

                <div className="mt-3 ml-8 space-y-1 ">
                  <h1 className="text-2xl ">{item.name}</h1>
                  <h2 className="">{item.position}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
