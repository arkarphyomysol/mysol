import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicesSchema } from "../../../utils/config/schemas/servicesSchema";
import IconSolid from "../../atoms/icons/iconSolid";
import FLogoBar from "./FlogoBar";

const company = {
  header: "Company",
  items: [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Team",
      path: "/team",
    },
    {
      title: "Careers",
      path: "/careers",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "News",
      path: "/news",
    },
  ],
};

const contacts = {
  header: "Contact",
  quick: {
    icon: <IconSolid icon="EnvelopeIcon" className={" w-5 h-5"} />,
    text: "info@mysol.com",
  },
  address: [
    {
      location: "Yangon, Myanmar",
      address:
        "Naing Group Sule Tower (2), Kyauktada Township, Yangon, Myanmar",
      phoneNumber: "+95 9 773 792671",
    },
    {
      location: "Shinagawa-ku, Tokyo",
      address:
        "Oak Meguro 3F 2-13-30, Kamiosaki, Shinagawa-ku, Tokyo 141-0021 Japan",
      phoneNumber: "+81368090951",
    },
  ],
};

const FCTA: NextPage = () => {
  return (
    <div className="px-4 py-6 mx-auto max-w-9xl sm:px-6 font-poppins">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="space-y-6 ">
          <Image
            src={`/images/logo.svg`}
            width={`64`}
            height={`64`}
            alt="MYSOL"
          />
          <FLogoBar />
        </div>

        <div className="">
          <h1 className=" text-ruby">{ServicesSchema.header}</h1>
          {ServicesSchema.items.map((item: any) => (
            <div className="" key={item.title}>
              <Link href={item.path}>
                <a>{item.title}</a>
              </Link>
            </div>
          ))}
        </div>
        <div className="">
          <h1 className=" text-ruby">Company</h1>
          {company.items.map((item: any) => (
            <div className="" key={item.title}>
              <Link href={item.path}>
                <a>{item.title}</a>
              </Link>
            </div>
          ))}
        </div>
        <div className="">
          <h1 className=" text-ruby">{contacts.header}</h1>
          <div className="space-y-4 ">
            {contacts.address.map((item: any) => (
              <div className="" key={item.phoneNumber}>
                <h1>{item.location}</h1>
                <p>{item.address}</p>
                <Link href={`tel:${item.phoneNumber}`}>
                  <a>{item.phoneNumber}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FCTA;
