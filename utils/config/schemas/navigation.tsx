import { navigationProps } from "../../types";

export const navigationConfig: navigationProps = {
  header: "Home",
  items: [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Services",
      path: "/services",
      children: [
        {
          title: "Web Development",
          path: "/resources/web-development",
        },
        {
          title: "Mobile Development",
          path: "/resources/mobile-development",
        },
      ],
    },
    {
      title: "Activities",
      path: "/activities",
    },
    {
      title: "Resources",
      path: "/resources",
      children: [
        {
          title: "Blog",
          path: "/resources/blog",
        },
        {
          title: "CSR",
          path: "/resources/csr",
        },
      ],
    },
  ],
};
