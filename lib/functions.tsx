import SvgIconStyle from "../components/atoms/SvgIconStyle";

export const getIcon = (name: string) => (
  <SvgIconStyle
    src={`/images/svgIcons/${name}.svg`}
    sx={{ width: "100%", height: "100%" }}
  />
);

export const getCurrentYear = () => {
  return new Date().getFullYear();
};
