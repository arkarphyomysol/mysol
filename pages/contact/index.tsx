import { NextPage } from "next";
import CHero from "../../components/templates/childHero";
import Layout from "../../components/templates/layout";
import { AboutMysolSchema } from "../../utils/config/schemas/aboutMysolSchema";

const Contact: NextPage = () => {
  return (
    <Layout>
      <CHero
        title={"Get In Touch"}
        subTitle={AboutMysolSchema.hero.subHeader}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ab
        optio, quis iusto, dolorum tempora quas odit voluptatem repudiandae
        deserunt iure corrupti sequi ipsam delectus labore minima et. Quia,
        ducimus.
      </p>
    </Layout>
  );
};
export default Contact;
