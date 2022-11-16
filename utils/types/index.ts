/**
 * LAYOUTS
 */

import { StringOptions } from "sass";

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export interface CHeroProps {
  title: string | undefined;
  subTitle: string | undefined;
}
export interface HeroProps {}

export interface CDetailProps {
  title: string | undefined;
  subTitle: string | undefined;
}

export interface navigationProps {
  header: string;
  items: {
    title: string;
    path: string;
    icon?: JSX.Element;
    children?: {
      title: string;
      path: string;
    }[];
  }[];
}
[];
export interface ServiceSchemaProps {
  header?: string;
  subHeader?: string;
  path: string;
  sc_header?: string;
  sc_subHeader?: string;
  items: {
    title?: string;
    subTitle?: string;
    path?: string;
    icon?: JSX.Element;
    isFeature?: boolean;
    sc_image?: JSX.Element;
    sc_text?: string;
    children?: {
      title?: string;
      path?: string;
    }[];
  }[];
  serviceCosts: {
    header?: string;
    subHeader?: string;
    items: {
      title?: string;
      subTitle?: string;
      icon?: JSX.Element;
    }[];
  };
  CTA: {
    header?: string;
    subHeader?: string;
    btnText?: string;
  };
}
[];

export interface ContactSchemaProps {
  header?: string;
  subHeader?: string;
  path: string;
  sc_header?: string;
  sc_subHeader?: string;
  sc_content?:string;
  title?:string;
  title_content?:string;
  list1?:string;
  list2?:string;
  list3?:string;
  list4?:string;
  list5?:string;
  btn_content?: string;
  items: {
    title?: string;
    content1?: string;
    content2?: string;
    content3?: string;
    phone?: string;
  }[];
}
[];

export interface WebAppSchemaProps {
  hero: {
    header?: string;
    subHeader?: string;
  };
  businessTypes: {
    header?: string;
    items: {
      icon?: JSX.Element;
      title?: string;
      body?: string;
    }[];
  };
  webAppTypes: {
    header?: string;
    subHeader?: string;
    items: {
      title?: string;
      body: {
        text?: string;
      }[];
      image?: JSX.Element;
    }[];
  };
  timeline: {
    header?: string;
    subHeader?: string;
    items: {
      title?: string;
      text?: string;
    }[];
  };
}

export interface testimonialSchemaProps {
  header?: string;
  subHeader?: string;
  items: {
    name?: string;
    positionAt?: string;
    text?: string;
    profileImage?: JSX.Element | string;
  }[];
}

export interface CareerSchemaProps{
  JobOpportunities: {
    title?: string;
    items: {
      role?: string;
      salary?: string;
      type ?: string;
      location?: string;
      detailsUrl?: string;
      applyUrl?: string;
      jobDescription?:{
        text1?: string;
        text2?: string;
        text3?: string;
        text4?: string;
      }[];
    }[];
  };
};

export interface AboutMysolSchemaProps {
  hero: {
    header?: string;
    subHeader?: string;
  };
  appendex: {
    title: {
      text?: string;
    }[];
    text?: string;
    image?: string;
  };
  background: {
    title: {
      text?: string;
    }[];
    text?: string;
  };
  mySol: {
    title: {
      text?: string;
    }[];
    text?: string;
  };
  MVO: {
    title?: string;
    text?: string;
  }[];
  Teams: {
    title?: string;
    items: {
      name?: string;
      position?: string;
      // profileImage?: string;
      profileImage?: JSX.Element;
      slogan?: string;
    }[];
  };
}
