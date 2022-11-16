import type { NextPage } from "next";
import TpAboutMysol from "../components/templates/aboutMysol";
import Hero from "../components/templates/hero";
import Layout from "../components/templates/layout";
import { Navigation } from "../components/templates/navigation";
import UiServices from "../components/templates/services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["hero"])),
  },
});

export default Home;
