import { getIcon, getImage } from "../../../lib/functions";
import { WebAppSchemaProps } from "../../types";

const ICONS = {
  startup: getIcon("ic_mobile"),
  business: getIcon("ic_cart"),
};

const IMAGES = {
  web_dev: getImage("wev_dev_image", 1920, 1121),
};

export const WebAppSchema: WebAppSchemaProps = {
  hero: {
    header: "CUSTOM WEB APPLICATION DEVELOPMENT AGENCY",
    subHeader:
      "We design and create innovative, engaging, and secure web applications that are built to last.",
  },
  businessTypes: {
    header:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio suscipit nobis neque, atque ipsa error earum architecto quo cupiditate?",
    items: [
      {
        icon: ICONS.startup,
        title: "Startups",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quae nostrum atque fuga accusantium libero nesciunt reiciendis esse, expedita vel similique qui, debitis doloremque accusamus commodi assumenda quibusdam fugiat ab.",
      },
      {
        icon: ICONS.business,
        title: "Established businesses",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quae nostrum atque fuga accusantium libero nesciunt reiciendis esse, expedita vel similique qui, debitis doloremque accusamus commodi assumenda quibusdam fugiat ab.",
      },
    ],
  },
  webAppTypes: {
    header: "TYPES OF WEB APPLICATIONS",
    subHeader:
      "Our bespoke web app development services cater to a wide variety of needs.",
    items: [
      {
        title: "CMS Development",
        body: [
          {
            text: "Text1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis impedit aut suscipit provident rerum est blanditiis rem, explicabo dolorem corporis vitae? Tempore, nihil eos amet temporibus architecto quaerat optio.",
          },
          {
            text: "Text2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis impedit aut suscipit provident rerum est blanditiis rem, explicabo dolorem corporis vitae? Tempore, nihil eos amet temporibus architecto quaerat optio.",
          },
          {
            text: "Text3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis impedit aut suscipit provident rerum est blanditiis rem, explicabo dolorem corporis vitae? Tempore, nihil eos amet temporibus architecto quaerat optio.",
          },
        ],
        image: IMAGES.web_dev,
      },
      {
        title: "Frontend Development",
        body: [
          {
            text: "Text1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis impedit aut suscipit provident rerum est blanditiis rem, explicabo dolorem corporis vitae? Tempore, nihil eos amet temporibus architecto quaerat optio.",
          },
          {
            text: "Text2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis impedit aut suscipit provident rerum est blanditiis rem, explicabo dolorem corporis vitae? Tempore, nihil eos amet temporibus architecto quaerat optio.",
          },
          {
            text: "Text3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis impedit aut suscipit provident rerum est blanditiis rem, explicabo dolorem corporis vitae? Tempore, nihil eos amet temporibus architecto quaerat optio.",
          },
        ],
        image: IMAGES.web_dev,
      },
      {
        title: "Backend Development",
        body: [
          {
            text: "Text1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis impedit aut suscipit provident rerum est blanditiis rem, explicabo dolorem corporis vitae? Tempore, nihil eos amet temporibus architecto quaerat optio.",
          },
          {
            text: "Text2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis impedit aut suscipit provident rerum est blanditiis rem, explicabo dolorem corporis vitae? Tempore, nihil eos amet temporibus architecto quaerat optio.",
          },
          {
            text: "Text3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis impedit aut suscipit provident rerum est blanditiis rem, explicabo dolorem corporis vitae? Tempore, nihil eos amet temporibus architecto quaerat optio.",
          },
        ],
        image: IMAGES.web_dev,
      },
      {
        title: "Web Portals",
        body: [
          {
            text: "Text1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis impedit aut suscipit provident rerum est blanditiis rem, explicabo dolorem corporis vitae? Tempore, nihil eos amet temporibus architecto quaerat optio.",
          },
          {
            text: "Text2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis impedit aut suscipit provident rerum est blanditiis rem, explicabo dolorem corporis vitae? Tempore, nihil eos amet temporibus architecto quaerat optio.",
          },
          {
            text: "Text3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum perferendis impedit aut suscipit provident rerum est blanditiis rem, explicabo dolorem corporis vitae? Tempore, nihil eos amet temporibus architecto quaerat optio.",
          },
        ],
        image: IMAGES.web_dev,
      },
    ],
  },
  timeline: {
    header: "Web Development Timeline",
    subHeader: "",
    items: [
      {
        title: "Discovery Workshops & Analysis",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis accusantium ut hic amet error harum quidem quibusdam tenetur!",
      },
      {
        title: "Architectural Planning",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis accusantium ut hic amet error harum quidem quibusdam tenetur!",
      },
      {
        title: "UI/UX and Tech design",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis accusantium ut hic amet error harum quidem quibusdam tenetur!",
      },
      {
        title: "Development/Programming",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis accusantium ut hic amet error harum quidem quibusdam tenetur!",
      },
      {
        title: "Testing & review",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis accusantium ut hic amet error harum quidem quibusdam tenetur!",
      },
      {
        title: "Release & feedback",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis accusantium ut hic amet error harum quidem quibusdam tenetur!",
      },
    ],
  },
};
