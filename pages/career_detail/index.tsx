import { NextPage } from "next";
import Layout from "../../components/templates/layout";
import CareerDetailTmp from "../../components/templates/careerDetail";
import { Card } from "flowbite-react";

const Career: NextPage = () => {
  return (
    <Layout>
      <CareerDetailTmp title="JOIN US" subTitle="Open Positions" />
      <div className=" text-CoolBlack bg-slate-300 pb-10 pt-10">
        <div className="mx-10">
          <Card>
            <div className="px-4 mx-auto text-center max-w-9xl sm:px-6 text-5xl font-extrabolds">
              <h1 className="text-2xl font-extrabold text-center lg:leading-tight lg:tracking-wide lg:text-6xl lg:text-start">
                Career Opportunities
              </h1>
            </div>
            {/* <div className="careerCard">
              <h2 className="text-2xl font-extrabold">Requirements</h2>

            </div> */}
           
              <div className="text-xl font-extrabold text-center lg:leading-tight lg:tracking-wide lg:text-4xl lg:text-start">
                <h3 className="text-info my-5">SENIOR DEVELOPER</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <img src="../images/career/graduate.png" />
                </div>
                <div className="text-center">
                  <img src="../images/career/it.png" />
                </div>
                <div className="text-center">
                  <img src="../images/career/japanese.png" />
                </div>
              </div>
              <div className="card mt-3">
                <h3 className="text-info">Job Descriptions</h3>
                <div className="mt-3">
                  <ul>
                    <li>
                      Create web application by using JAVA, PHP, C#, NEXT JS,
                      REACT, .NET, NODEJS,...
                    </li>
                    <li>
                      Specification, design, coding, testing, release as well as
                      maintenance of software programs.
                    </li>
                    <li>
                      You may also be closely tasked with GM (PM) and team
                      members.
                    </li>
                  </ul>
                </div>
                <hr />
                <h3 className="text-info">Requirements</h3>
                <div className="mt-3">
                  <ul>
                    <li>Any Graduated</li>
                    <li>
                      More than 3 years in full stack or frontend/backend
                      software development position
                    </li>
                    <li>More than 2 years experience in Database</li>
                    <li>Ability to write good technical documentation.</li>
                    <li>
                      Japanese language proficiency level above N4 or if not we
                      provide training)
                    </li>
                  </ul>
                </div>
                <hr />
                <h3 className="text-info">Recruitment Process</h3>
                <h3 className="text-info mt-3">Benefits</h3>
                <div className="mt-3">
                  <ul>
                    <li>Free for Japanese language class</li>
                    <li>Saturday, Sunday Holiday</li>
                  </ul>
                </div>
                <hr />
                <h3 className="text-info mt-3">Career Opportunities</h3>
                <div className="mt-3">
                  <ul>
                    <li>Many chance to work in Japan</li>
                    <li>Can be leader in near future</li>
                  </ul>
                </div>
                <hr />
                <h3 className="text-info mt-3">Message</h3>
                <div className="row mt-3">
                  <div className="col-md-2">Employment Type</div>
                  <div className="col-md-1">:</div>
                  <div className="col-md-9 pl-0">Full Time</div>
                </div>
                <div className="row">
                  <div className="col-md-2">Working Days</div>
                  <div className="col-md-1">:</div>
                  <div className="col-md-9 pl-0">Monday~Friday</div>
                </div>
                <div className="row">
                  <div className="col-md-2">Working Hours</div>
                  <div className="col-md-1">:</div>
                  <div className="col-md-9 pl-0">
                    8:30~17:30 (Including 1 hour lunch break)
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">Working Place</div>
                  <div className="col-md-1">:</div>
                  <div className="col-md-9 pl-0">
                    Room.204, No.5, Grand Nawaday Condo, Nawaday Street, Dagon
                    Township.Yangon, Myanmar.
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">Salary</div>
                  <div className="col-md-1">:</div>
                  <div className="col-md-9 pl-0">
                    Monthly Salary System (Company provides preferential
                    treatments by considering the experience and ability etc..)
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">Allowance</div>
                  <div className="col-md-1">:</div>
                  <div className="col-md-9 pl-0">
                    Qualification Allowance / Overtime Allowance
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">Wage Raise </div>
                  <div className="col-md-1">:</div>
                  <div className="col-md-9 pl-0">
                    Twice times in a year (Jan, July)
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">Welfare Program </div>
                  <div className="col-md-1">:</div>
                  <div className="col-md-9 pl-0">
                    Marriage Allowance/ Funeral Service Allowance/ Medical
                    Checkup{" "}
                  </div>
                </div>
                <div className="text-right">
                  <a
                    href="/careers"
                    className="btn btn-warning text-white"
                    role="button"
                  >
                    &#8678;&nbsp;Back
                  </a>
                </div>
              </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
export default Career;
