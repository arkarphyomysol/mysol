import { NextPage } from "next";
import ServiceShowcases from "../../components/templates/services/serviceShowcases";
import CHero from "../../components/templates/childHero";
import ServiceCosts from "../../components/templates/services/serviceCosts";
import CallToAction from "../../components/templates/callToAction";
import { ServicesSchema } from "../../utils/config/schemas/servicesSchema";
import Testimonial from "../../components/templates/testimonial";
import Layout from "../../components/templates/layout";

const Services: NextPage = () => {
  return (
    <Layout>
      <CHero
        title={"CUSTOM SOFTWARE DEVELOPMENT SERVICES"}
        subTitle={
          "Web applications, mobile apps, integration projects and more. 110 + projects | Since 2005"
        }
      />
      {/* CONTENTS */}
      <ServiceShowcases />
      <ServiceCosts />
      <CallToAction
        title={ServicesSchema.CTA.header}
        subTitle={ServicesSchema.CTA.header}>
        <button className="px-4 py-2 mx-auto transition duration-500 ease-in-out border rounded-full border-slate-300 hover:bg-slate-300 hover:text-CoolBlack">
          {ServicesSchema.CTA.btnText}
        </button>
      </CallToAction>
      <Testimonial />
    </Layout>
  );
};
export default Services;
