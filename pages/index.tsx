import type { NextPage } from "next";
import TpAboutMysol from "../components/templates/aboutMysol";
import Hero from "../components/templates/hero";
import Layout from "../components/templates/layout";
import { Navigation } from "../components/templates/navigation";
import UiServices from "../components/templates/services";

const Home: NextPage = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <UiServices />
      <TpAboutMysol />
    </Layout>
  );
};

export default Home;
