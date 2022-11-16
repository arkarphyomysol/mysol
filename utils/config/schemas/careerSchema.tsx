import { CareerSchemaProps } from "../../types";
export const CareerSchema: CareerSchemaProps = {
  JobOpportunities: {
    title: "Job Opportunities",
    items: [
      {
        role: "Senior Java Developer",
        salary: "Negotiable",
        type: "Full Time",
        location: "Yangon, Myanmar",
        detailsUrl: "",
        applyUrl: "",
        jobDescription: [{
          text1:"Project experience over 4 years.",
          text2:"At least 3 years in implementing Java 8, J2EE and related Java technologies.",
          text3:"Strong hands on experience on Spring core and Spring JPA.",
          text4:"Japanese language proficiency level N3 or higher.",
      }]
      },
      {
        role: "Senior PHP Developer",
        salary: "Negotiable",
        type: "Full Time",
        location: "Yangon, Myanmar",
        detailsUrl: "",
        applyUrl: "",
         jobDescription: [{
          text1: "Project experience over 4 years.",
          text2:"At least 3 years in web programming experience with any programming language and MVC framework.",
          text3:"Strong technical skills and knowledge with the latest web development technology of Git knowledge, VueJS, ReactJS, Laravel 8/9, MySQL.",
          text4:"Japanese language proficiency level N3 or higher.",
      }],
      },
    ],
  },  
}


// jobOpportunities: {
//   header: "Job Opportunities",
//   items: [
//     {
//       role: "Senior Java Developer",
//       salary: "Negotiable",
//       type: "Full Time",
//       location: "Yangon, Myanmar",
//       detailsUrl: "",
//       applyUrl: "",
//       // jobDescription: [
//       //   "Project experience over 4 years.",
//       //   "At least 3 years in implementing Java 8, J2EE and related Java technologies.",
//       //   "Strong hands on experience on Spring core and Spring JPA.",
//       //   "Japanese language proficiency level N3 or higher."
//       // ]
//     },
//     {
//       role: "Senior PHP Developer",
//       salary: "Negotiable",
//       type: "Full Time",
//       location: "Yangon, Myanmar",
//       detailsUrl: "",
//       applyUrl: "",
//       // jobDescription: [
//       //   "Project experience over 4 years.",
//       //   "At least 3 years in web programming experience with any programming language and MVC framework.",
//       //   "Strong technical skills and knowledge with the latest web development technology of Git knowledge, VueJS, ReactJS, Laravel 8/9, MySQL.",
//       //   "Japanese language proficiency level N3 or higher."
//       // ]
//     }
//   ]
// }