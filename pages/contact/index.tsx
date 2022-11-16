import { Container } from "@mui/material";
import { Card } from "flowbite-react";
import { NextPage } from "next";
import CHero from "../../components/templates/childHero";
import Layout from "../../components/templates/layout";
import { AboutMysolSchema } from "../../utils/config/schemas/aboutMysolSchema";
import { ContactSchema } from "../../utils/config/schemas/contactSchema";

const Contact: NextPage = () => {
  return (
    <Layout>
      <CHero
        title={ContactSchema.header}
        subTitle={ContactSchema.subHeader}
      />
      <div className="flex flex-col my-5 mx-8 lg:pt-6 lg:my-8 lg:flex-row lg:even:flex-row-reverse">
        <div className="px-4 mx-auto py-14 max-w-9xl sm:px-6">
          <div className="text-red-500 text-xl"> {ContactSchema.sc_header} </div>
          <div className="font-weight:700 text-4xl pt-4">
            {ContactSchema.sc_subHeader}
          </div>
          <div className="pt-8">
            {ContactSchema.sc_content} 
          </div>
          <div className="flex mt-4">
            <div className="md:w-2/5 pt-8">
              <iframe
                style={{ border: 0, width: "100%", height: "100%" }}
                src="https://maps.google.com/maps?q=Nawaday%20Street&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
            <div className="md:w-3/5 pt-8 pl-4">
              <div className="font-weight:900 text-xl">
                
                Head Office Myanmar
              </div>
              <div className="mt-4"> Naing Group Sule Tower(2), </div>
              <div>Kyauktada Township, Yangon, Myanmar</div>
              <div className="text-red-500"> +959773792671</div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="md:w-2/5 pt-8">
              <iframe
                style={{ border: 0, width: "100%", height: "100%" }}
                src="https://maps.google.com/maps?q=Nawaday%20Street&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
            <div className="md:w-3/5 pt-8 pl-4">
              <div className="font-weight:900 text-xl">
                
                Head Office Japan
              </div>
              <div className="mt-4"> Oak Meguro 3F </div>
              <div>2-13-30, Kamiosaki, Shinagawa-ku, Tokyo </div>
              <div>141-0021 Japan</div>
              <div className="text-red-500"> +81368090951</div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:px-16 mt-8 ">
            <Card>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="mb-3 h-28 w-28 shadow-lg"
                  src={`/images/logo.svg`}
                  alt="company logo"
                />
                <h5 className="mb-1 text-xl text-4xl dark:text-white mt-4">
                  {ContactSchema.title}
                </h5>
                <span className="text-gray-500 dark:text-gray-400 mt-8">
                {ContactSchema.title_content}
                </span>
                
                  <ul className="list-disc ml-0">
                      <li className="mt-4">{ContactSchema.list1}</li>
                      <li className="mt-2">{ContactSchema.list2}</li>
                      <li className="mt-2">{ContactSchema.list3}</li>
                      <li className="mt-2">{ContactSchema.list4}</li>
                      <li className="mt-2">{ContactSchema.list5}</li>
                  </ul>
                <div className="mt-4 flex space-x-3 lg:mt-8">
                    <a href="https://forms.gle/a7D9k176V1HrcPim8" className="px-4 py-2 mx-auto transition duration-500 ease-in-out border rounded-full border-CoolBlack hover:bg-CoolBlack hover:text-slate-300">
                    {ContactSchema.btn_content}
                  </a>
                </div>
              </div>
            </Card>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
