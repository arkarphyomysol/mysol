import { NextPage } from "next";
import Link from "next/link";
import { websiteData } from "../../../utils/data";
import Iconx from "../../atoms/icons/iconx";

const QuickAction: NextPage = () => {
  return (
    <div className="flex items-center space-x-4 text-sm font-light font-poppins">
      {websiteData.callsToAction.map((item, i) => (
        <Link href={item.href} key={i}>
          <a className="flex items-center space-x-2 text-slate-100 hover:text-opacity-60 btnHover">
            <Iconx
              icon={item.icon}
              className={`flex-shrink-0 w-5 h-5 stroke-1`}
            />
            <span>{item.name}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default QuickAction;
