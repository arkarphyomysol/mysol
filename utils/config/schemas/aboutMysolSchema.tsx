import Iconx from "../../../components/atoms/icons/iconx";
import { getImage, getTeamImage } from "../../../lib/functions";
import { AboutMysolSchemaProps } from "../../types";

const IMAGES = {
  // appendexImage: getImage("")
  profileImage: <Iconx icon="UserIcon" />,
  kpn: getTeamImage("kpn", 1920, 1920, "jpeg"),
  smk: getTeamImage("smk", 1920, 1920),
  akkm: getTeamImage("akkm", 1920, 1920),
  etzk: getTeamImage("etzk", 1920, 1920),
  ynt: getTeamImage("ynt", 1920, 1920),
  sym: getTeamImage("sym", 1920, 1920),
  akp: getTeamImage("akp", 1920, 1920),
  slmo: getTeamImage("slmo", 1920, 1920),
  psa: getTeamImage("psa", 1920, 1920),
};

export const AboutMysolSchema: AboutMysolSchemaProps = {
  hero: {
    header: "WELCOME TO Mysol",
    subHeader:
      "A lot goes on behind the scenes when we are building software. Excitement. Teamwork. Labour of love. A bit of craziness.",
  },
  appendex: {
    title: [
      { text: "We build bridges between " },
      { text: "companies and customers" },
    ],
    text: "To build software that gives customer-facing teams at small and medium sized business the ability to create fruitful and enduring relationships with customers.",
    image: "/images/Meeeegilnoppt.jpg",
  },
  background: {
    title: [{ text: "A Little More About" }, { text: "Background" }],
    text: "Myanmar has a large number of talented technical engineers, but the economic downturn has led to job shortages, while in Japan there has been a shortage of qualified and young technical engineers but technological advances. Considering these situations, not only for those who want to gain work experience in Myanmar who are interested in technology, but also for those who have the potential to develop skills and competencies. It was established with the aim of creating a strong Japan-Myanmar cooperation technology field that can produce qualified technicians.",
  },
  mySol: {
    title: [{ text: "A Little More About" }, { text: "MySol" }],
    text: "A software development company founded by a visionary IT professionals who are providing extending innovative software services on our customer’s journey to ‘Digital Transformation’. Our Head Office, MySol, is in Japan. We set up effective with new Myanmar engineers who are well trained and well educated and provide on the job training (OJT) programs and professional courses at work and give good experiences to all.We care not only our high quality members and products but also clients' satisfaction.We maintain our workplace to be excellent and productive.We provide expert technology advisory services to individuals and small businesses.",
  },
  MVO: [
    {
      title: "Mission",
      text: "To make the business from a start-up to one of the biggest comapnies in Myanmar.",
    },
    {
      title: "Vision",
      text: "To provide IT Services the way you need everywhere.",
    },
    {
      title: "Objectives",
      text: "To ensure that every employee is knowledgeable on the product they promote, and that they are experts in their respective fields. To set up effective on the job training (OJT) programs at work and give good experiences to all.",
    },
  ],
  Teams: {
    title: "Meet Our Amazing Team",
    items: [
      {
        name: "Kyaw Phyo Naing",
        position: "Founder & CEO",
        profileImage: IMAGES.kpn,
        slogan: "",
      },
      {
        name: "Su Mon Kyaw",
        position: "Team Leader",
        profileImage: IMAGES.smk,
        slogan: "",
      },
      {
        name: "Aung Ko Ko Min",
        position: "Senior Developer",
        profileImage: IMAGES.akkm,
        slogan: "",
      },
      {
        name: "Ei Thandar Khaing",
        position: "Senior Developer",
        profileImage: IMAGES.etzk,
        slogan: "",
      },
      {
        name: "Yu Nathah",
        position: "Senior Developer",
        profileImage: IMAGES.ynt,
        slogan: "",
      },
      {
        name: "Shwe Yi Mon",
        position: "Senior Developer",
        profileImage: IMAGES.sym,
        slogan: "",
      },
      {
        name: "Arkar Phyo",
        position: "Senior Developer",
        profileImage: IMAGES.akp,
        slogan: "",
      },
      {
        name: "Shoon Lai Moe Oo",
        position: "Hr & Admin",
        profileImage: IMAGES.slmo,
        slogan: "",
      },
      {
        name: "Pyae Sone Aung",
        position: "Senior Developer",
        profileImage: IMAGES.psa,
        slogan: "",
      },
    ],
  },
};
