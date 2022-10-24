import { NextPage } from "next";
import CHero from "../../components/templates/childHero";
import { BusinessType } from "../../components/templates/services/webAppDev/businessType";
import WebDevTimeline from "../../components/templates/services/webAppDev/timeline";
import { WebAppTypes } from "../../components/templates/services/webAppDev/webAppTypes";
import { WebAppSchema } from "../../utils/config/schemas/webAppSchema";
import CallToAction from "../../components/templates/callToAction";
import { ServicesSchema } from "../../utils/config/schemas/servicesSchema";
import Testimonial from "../../components/templates/testimonial";
import Layout from "../../components/templates/layout";

const WebApplicationDevelopment: NextPage = () => {
  return (
    <Layout>
      <CHero
        title={WebAppSchema.hero.header}
        subTitle={WebAppSchema.hero.subHeader}
      />
      <BusinessType />
      <WebAppTypes />
      <WebDevTimeline />
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
export default WebApplicationDevelopment;
