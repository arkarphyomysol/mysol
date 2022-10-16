import { NextPage } from "next";
import Link from "next/link";
import FacebookIcon from "../../atoms/icons/FacebookIcon";
import LinkedinIcon from "../../atoms/icons/LinkedinIcon";

const FLogoBar: NextPage = () => {
  return (
    <div className="flex flex-row items-center space-x-3 ">
      <Link href="https://www.facebook.com" target="_blank">
        <a>
          <div className="inline-flex p-2 rounded-full hover:bg-ruby bg-slate-900 hover:text-CoolBlack">
            <FacebookIcon className="w-3 h-3 " />
          </div>
        </a>
      </Link>
      <Link href="https://linkedin.com">
        <a>
          <div className="inline-flex p-2 rounded-full hover:bg-ruby bg-slate-900 hover:text-CoolBlack">
            <LinkedinIcon className="w-3 h-3 " />
          </div>
        </a>
      </Link>
    </div>
  );
};
export default FLogoBar;
