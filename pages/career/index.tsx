import { Button, Card } from "flowbite-react";
import { NextPage } from "next";
import CHero from "../../components/templates/childHero";
import Layout from "../../components/templates/layout";
import {
  BanknotesIcon,
  ClockIcon,
  MapPinIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import { CareerSchema } from "../../utils/config/schemas/careerSchema";
import { Link } from "@mui/material";

const Career: NextPage = () => {
  return (
    <Layout>
      <CHero
        title={"Join Us To Make A Difference!"}
        subTitle={
          "We are always eager to meet fresh talent, so check out our open positions."
        }
      />
      <div className=" text-CoolBlack bg-slate-300 pb-10">
        <div className="px-4 mx-auto lg:py-28 max-w-9xl sm:px-6 py-7">
          <div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2">
            <h1 className="text-2xl font-extrabold text-center lg:leading-tight lg:tracking-wide lg:text-6xl lg:text-start">
              <div>{"B E N E F I T S"}</div>
              <div className=" text-CoolBlack/60">{"Why should join?"}</div>
            </h1>
            <ul className="list-disc lg:my-auto lg:text-2xl lg:leading-snug">
              <li className="mt-4">
                {"Can negociate flex working hours(8 hrs)."}
              </li>
              <li className="mt-2">
                {
                  "Provide Online Course for New Technology and also Japanese Language within Office (5 hours in one week)."
                }
              </li>
              <li className="mt-2">
                {"Can get chance career growth opportunity in Japan."}
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-10 my-20">
          <Card>
            <div className="px-4 mx-auto text-center max-w-9xl sm:px-6 text-5xl font-extrabold">
            <h1 className="text-2xl font-extrabold text-center lg:leading-tight lg:tracking-wide lg:text-6xl lg:text-start">
              Career Opportunities</h1>
            </div>
            <div className="grid grid-cols-2 px-4 mx-auto max-w-9xl sm:px-6 py-7">
              <div className="grid grid-cols-6 max-w-6xl">
                <div className="px-4 pt-10 mx-auto text-center max-w-xl sm:px-6 text-xl self-center">
                  <div className="salaryCard text-white">
                    Basic <br /> Salary{" "}
                  </div>
                </div>
                <div className="pt-10 text-center max-w-xl text-6xl self-center">
                  +
                </div>
                <div className="px-4 pt-10 mx-auto max-w-4xl sm:px-6 text-xl col-span-4">
                  <ul className="list-disc lg:my-auto lg:text-2xl lg:leading-snug">
                    <li className="mt-4"> {"Technical skill allowance"} </li>
                    <li className="mt-2"> {"Management skill allowance"}</li>
                    <li className="mt-2">
                      {" "}
                      {"Qualification allowance (JLPT, ITPEC, IELTS..)"}{" "}
                    </li>
                    <li className="mt-2"> {"Transportation Fees"} </li>
                  </ul>
                </div>
              </div>
              <div className="careerCard">
                <div className="grid grid-cols-4 max-w-6xl">
                  <div className="pt-5 mx-auto max-w-xl text-xl">
                    Working Hour
                  </div>
                  <div className="pt-5 max-w-xl text-xl col-span-3">
                    8:30AM ～ 5:30PM <br />
                    (Lunch break:1hour, Regular working hours : 8hours)
                  </div>
                </div>
                <div className="grid grid-cols-4 max-w-6xl">
                  <div className="pt-10 mx-auto max-w-xl text-xl">Holiday</div>
                  <div className="pt-10 max-w-xl text-xl col-span-3">
                    Saturday, Sunday, Public holidays
                  </div>
                </div>
                <div className="grid grid-cols-4 max-w-6xl">
                  <div className="pt-10 mx-auto max-w-xl text-xl">Welfare</div>
                  <div className="pt-10 max-w-xl text-xl col-span-3">
                    Employee trip <br />
                    Regular medical check-up
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="mx-10 mt-5">
          <Card>
            <div className="px-4 mx-auto text-center max-w-9xl sm:px-6 text-5xl font-extrabold">
            <h1 className="text-2xl font-extrabold text-center lg:leading-tight lg:tracking-wide lg:text-6xl lg:text-start">
              {CareerSchema.JobOpportunities.title} </h1>
            </div>
            <div className="">
              {CareerSchema.JobOpportunities.items.map((item: any) => (
                <div className="mx-10 my-5">
                  <div className="careerCard">
                    <div key={item.title} className="p-5 flex flex-col">
                      <div className="flex flex-col lg:flex-row self-stretch justify-between mb-25 pb-5">
                        <h1 className="text-2xl font-bold">
                          <MegaphoneIcon className="inline h-6 w-6 mr-2"></MegaphoneIcon>
                          {item.role}
                        </h1>
                        <span>
                          <BanknotesIcon className="inline h-6 w-6 mr-2"></BanknotesIcon>
                          {item.salary}
                        </span>
                        <span>
                          <ClockIcon className="inline h-6 w-6 mr-2"></ClockIcon>
                          {item.type}
                        </span>
                        <span>
                          <MapPinIcon className="inline h-6 w-6 mr-2"></MapPinIcon>
                          {item.location}
                        </span>
                      </div>
                      <ul className="list-disc">
                        {item.jobDescription.map((item1: any) => (
                          <>
                            <li className="ml-5 my-3">{item1.text1}</li>
                            <li className="ml-5 my-3">{item1.text2}</li>
                            <li className="ml-5 my-3">{item1.text3}</li>
                            <li className="ml-5 my-3">{item1.text4}</li>
                          </>
                        ))}
                      </ul>
                      <div className="inline-flex w-full mx-auto md:w-fit md:pt-8 mr-0">
                          <a href={`/career_detail`} className="px-4 py-2 mx-auto transition duration-500 ease-in-out border rounded-full border-CoolBlack hover:bg-CoolBlack hover:text-slate-300">
                          View Detail
                          </a>
                        <a href="https://forms.gle/CtF2GEbx9jKC9YtU7" className="px-4 py-2 mx-auto transition duration-500 ease-in-out border rounded-full border-CoolBlack bg-CoolBlack text-slate-300 ml-5">
                            Apply Now
                          </a>
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
export default Career;
