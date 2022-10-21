/**
 * LAYOUTS
 */

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export interface CHeroProps {
  title: string;
  subTitle: string;
}
export interface HeroProps {}

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
