/**
 * LAYOUTS
 */

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
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
  header: string;
  subHeader: string;
  path: string;
  items: {
    title: string;
    subTitle: string;
    path: string;
    icon?: JSX.Element;
    children?: {
      title: string;
      path: string;
    }[];
  }[];
}
[];
