import type { NextPage } from "next";
import Hero from "../components/templates/hero";
import UiServices from "../components/templates/services";

const Home: NextPage = () => {
  return (
    <div className="">
      <Hero />
      <UiServices />
    </div>
  );
};

export default Home;
