import { NextPage } from "next";
import { LayoutProps } from "../../../utils/types";
import Footer from "../footer";
import { Navigation } from "../navigation";

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div className="">
      {/* <Navigation /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
