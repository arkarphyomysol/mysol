import Image from "next/image";
import SvgIconStyle from "../components/atoms/SvgIconStyle";
import { ServicesSchema } from "../utils/config/schemas/servicesSchema";
export const getIcon = (name: string) => (
  <SvgIconStyle
    src={`/images/svgIcons/${name}.svg`}
    sx={{ width: "100%", height: "100%" }}
  />
);

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getImage = (name: string, width: number, height: number) => (
  <Image
    src={`/images/services/${name}.jpg`}
    alt={name}
    width={width}
    height={height}
  />
);
