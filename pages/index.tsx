import type { NextPage } from "next";
import TpAboutMysol from "../components/templates/aboutMysol";
import Hero from "../components/templates/hero";
import { Navigation } from "../components/templates/navigation";
import UiServices from "../components/templates/services";

const Home: NextPage = () => {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <UiServices />
      <TpAboutMysol />
    </div>
  );
};

export default Home;
