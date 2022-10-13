import { NextPage } from "next";
import { LayoutProps } from "../../../utils/types";
import { Navigation } from "../navigation";

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div className="">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
