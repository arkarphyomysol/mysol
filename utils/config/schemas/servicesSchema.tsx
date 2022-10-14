import AppDevIcon from "../../../components/atoms/icons/AppDevIcon";
import Iconx from "../../../components/atoms/icons/iconx";
import MenuIcon from "../../../components/atoms/icons/MenuIcon";
import WebDevIcon from "../../../components/atoms/icons/WebDevIcon";
import SvgIconStyle from "../../../components/atoms/SvgIconStyle";
import { ServiceSchemaProps } from "../../types";

const getIcon = (name: string) => (
  <SvgIconStyle
    src={`/images/svgIcons/${name}.svg`}
    sx={{ width: "100%", height: "100%" }}
  />
);

const ICONS = {
  browser: getIcon("ic_browser"),
  mobile: getIcon("ic_mobile"),
  users: getIcon("ic_users"),
};

export const ServicesSchema: ServiceSchemaProps = {
  header: "Our Services",
  subHeader:
    "MySol is a leading bespoke software development company based in Yangon, Myanmar. We build robust software for startups and established businesses.",
  path: "/services",
  items: [
    {
      title: "Web Application Development",
      subTitle:
        " Utilising the latest technologies, we build web applications that deliver remarkable functionality and user engagement from within a browser window.",
      path: "/web-development",
      icon: ICONS.browser,
    },
    {
      title: "Mobile App Development",
      subTitle:
        "Stunning mobile apps that work across a variety of devices and engage large audiences – designed with security, scalability, and usability in mind.",
      path: "/app-development",
      icon: ICONS.mobile,
    },
    {
      title: "Dedicated Development Team",
      subTitle:
        "Scale your delivery capacity with a wide range of technology skills - leverage GoodCore’s experience in hiring, motivating and managing top tech professionals.",
      path: "/server-maintainance",
      icon: ICONS.users,
    },
  ],
};
