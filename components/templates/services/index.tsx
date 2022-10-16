import { Button } from "@mui/material";
import { ServicesSchema } from "../../../utils/config/schemas/servicesSchema";
import { styled } from "@mui/styles";
import { ListItemIcon } from "@mui/material";
import Link from "next/link";

const UiServices = () => {
  const ListItemIconStyle = styled(ListItemIcon)({
    width: 22,
    height: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  return (
    <div className=" bg-CoolBlack text-slate-300">
      <div className="px-4 mx-auto py-14 max-w-9xl sm:px-6 font-poppins">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl">{ServicesSchema.header}</h1>
          <p className="my-8 text-sm font-light leading-loose md:leading-10 md:text-2xl">
            {ServicesSchema.subHeader}
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
            {ServicesSchema.items.map((item: any, i: number) => (
              <Link href={item.path} key={i}>
                <a className="flex flex-col justify-between p-8 mt-4 space-y-3 text-center bg-slate-300 text-CoolBlack">
                  {/* <div className="flex flex-col justify-between p-8 space-y-3 text-center bg-slate-300 text-CoolBlack"> */}
                  <div className="">
                    <div className="inline-flex items-center justify-center w-14 h-14 text-CoolBlack">
                      {item.icon}
                    </div>
                    <h1 className=" md:text-2xl">{item.title}</h1>
                    <p>{item.subTitle}</p>
                  </div>
                  <p>{`MORE >>>`}</p>
                  {/* </div> */}
                </a>
              </Link>
            ))}
          </div>
          <div className="w-full ">
            <Link href={ServicesSchema.path}>
              <a>
                <div className="block px-4 py-2 mx-auto mt-8 transition duration-500 ease-in-out border rounded-full border-slate-300 w-fit hover:bg-slate-300 hover:text-CoolBlack">
                  View All Services
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UiServices;
