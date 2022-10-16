import { NextPage } from "next";
import Copyright from "../molecules/footer/Copyright";
import FCTA from "../molecules/footer/FCTA";
import FLogoBar from "../molecules/footer/FlogoBar";

const Footer: NextPage = () => {
  return (
    <div className=" bg-CoolBlack text-slate-300">
      <FCTA />

      <Copyright />
    </div>
  );
};

export default Footer;
