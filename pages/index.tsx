import type { NextPage } from "next";
import TpAboutMysol from "../components/templates/aboutMysol";
import Hero from "../components/templates/hero";
import UiServices from "../components/templates/services";

const Home: NextPage = () => {
  return (
    <div className="">
      <Hero />
      <UiServices />
      <TpAboutMysol />
    </div>
  );
};

export default Home;
