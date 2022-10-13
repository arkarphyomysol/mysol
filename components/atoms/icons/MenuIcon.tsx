import { NextPage } from "next";

interface MenuIconProps {
  className?: string;
}

const MenuIcon: NextPage<MenuIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28">
      <path
        d="M6 21h15M2 14h24M6 7h15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MenuIcon;
