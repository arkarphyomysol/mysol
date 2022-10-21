import { NextPage } from "next";
import Link from "next/link";
import { getCurrentYear } from "../../../lib/functions";

const COPY = {
  items: [
    { title: "Sitemap", path: "/sitemap" },
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Website Terms", path: "/website-terms" },
  ],
  copyrightText: {
    copyYear: "© " + getCurrentYear() + " All right reserved",
    // copyYear: "© 2022",
    companyName: "Mysol Ltd.,",
    path: "https://www.mysol.com",
  },
};
const Copyright: NextPage = () => {
  return (
    <div className=" border-t-0.5 border-t-slate-300">
      <div className="flex flex-col items-center justify-between px-4 py-6 mx-auto md:flex-row max-w-9xl sm:px-6 font-poppins">
        <div className="flex items-center space-x-4">
          {COPY.items.map((item: any) => (
            <Link href={item.path} key={item.title}>
              <a>{item.title}</a>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <p>{COPY.copyrightText.copyYear}</p>
          <Link href={COPY.copyrightText.path}>
            <a className=" text-ruby">{COPY.copyrightText.companyName}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Copyright;
