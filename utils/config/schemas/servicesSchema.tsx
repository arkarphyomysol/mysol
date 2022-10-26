import { getIcon, getImage } from "../../../lib/functions";
import { ServiceSchemaProps } from "../../types";

const ICONS = {
  browser: getIcon("ic_browser"),
  mobile: getIcon("ic_mobile"),
  users: getIcon("ic_users"),
};

const IMAGES = {
  web_dev: getImage("wev_dev_image", 1920, 1121),
  app_dev: getImage("app_dev_image", 1920, 1280),
};

export const ServicesSchema: ServiceSchemaProps = {
  header: "Our Services",
  subHeader:
    "MySol is a leading bespoke software development company based in Yangon, Myanmar. We build robust software for startups and established businesses.",
  path: "/services",
  sc_header: "OUR SOFTWARE DEVELOPMENT SERVICES",
  sc_subHeader:
    "Our software development services enable businesses to leverage digital trends, address market needs, and build competitive advantage.",
  items: [
    {
      title: "Web Application Development",
      subTitle:
        " Utilising the latest technologies, we build web applications that deliver remarkable functionality and user engagement from within a browser window.",
      path: "/services/web-application-development",
      icon: ICONS.browser,
      isFeature: true,
      sc_image: IMAGES.web_dev,
      sc_text:
        "To us, web applications are not just about creating stunning-looking websites. We build high-level web applications that deliver remarkable functionality and user engagement from within a browser window. Our web development team helps design and develop unique, secure, and scalable web applications for you, utilising the latest technologies.",
    },
    {
      title: "Mobile App Development",
      subTitle:
        "Stunning mobile apps that work across a variety of devices and engage large audiences – designed with security, scalability, and usability in mind.",
      path: "/services/mobile-app-development",
      icon: ICONS.mobile,
      isFeature: true,
      sc_image: IMAGES.app_dev,
      sc_text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis velit placeat facilis architecto natus accusamus, molestiae magnam sint necessitatibus, beatae nemo! Ad repellendus aut sapiente aliquam dignissimos veritatis mollitia doloremque.",
    },
    {
      title: "Dedicated Development Team",
      subTitle:
        "Scale your delivery capacity with a wide range of technology skills - leverage GoodCore’s experience in hiring, motivating and managing top tech professionals.",
      path: "/services/dedicated-development-team",
      icon: ICONS.users,
      isFeature: true,
      sc_image: IMAGES.web_dev,
      sc_text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis velit placeat facilis architecto natus accusamus, molestiae magnam sint necessitatibus, beatae nemo! Ad repellendus aut sapiente aliquam dignissimos veritatis mollitia doloremque.",
    },
    {
      title: "Service and Maintenance",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eveniet incidunt nulla illum sit reprehenderit ad neque at voluptatibus, non veritatis.",
      path: "/services/service-and-maintenance",
      icon: ICONS.users,
      isFeature: false,
      sc_image: IMAGES.web_dev,
      sc_text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis velit placeat facilis architecto natus accusamus, molestiae magnam sint necessitatibus, beatae nemo! Ad repellendus aut sapiente aliquam dignissimos veritatis mollitia doloremque.",
    },
  ],
  serviceCosts: {
    header: "Cost of custom software development services",
    subHeader:
      "We offer custom software development services all different price levels depending upon the scope and requirements of your software projects",
    items: [
      {
        title: "Technical Complexity",
        subTitle:
          "Complex design specifications and advanced feature requirements make the software development process complex, time-consuming, and costly.",
        icon: ICONS.browser,
      },
      {
        title: "Third-Party Integrations",
        subTitle:
          "Integration with third-party software systems such as payment gateways, maps, ERPs, or CRMs also impacts the cost of software development.",
        icon: ICONS.browser,
      },
      {
        title: "Features & Functionalities",
        subTitle:
          "The number of features you want is the biggest cost driver. Screens, buttons, fields involved, and the amount of logic required can change costs drastically.",
        icon: ICONS.browser,
      },
      {
        title: "Custom Design",
        subTitle:
          "Custom user interfaces are rather complex to design and implement accurately. Therefore, they often cause the cost of software development to increase.",
        icon: ICONS.browser,
      },
    ],
  },
  CTA: {
    header: "GET AN ESTIMATE NOW!",
    subHeader:
      "Send us your project details, and we will get back to you with a realistic cost estimate for your project.",
    btnText: "Contact Us",
  },
};
