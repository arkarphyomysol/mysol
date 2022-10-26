import { NextPage } from "next";

interface OpenQuoteProps {
  className?: string;
}

const OpenQuote: NextPage<OpenQuoteProps> = ({ className }) => {
  return (
    <svg
      className={`${
        className ? `${className}` : "w-7 h-7 shrink-0 fill-current"
      } shrink-0 fill-current`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 92 92">
      <g clipPath="url(#a)">
        <path d="M38.157.003c-8.398.373-15.895 3.722-21.68 9.685C1.141 25.498 1.436 55.3 1.52 58.596l.001 31.078a2 2 0 0 0 2 2h30.691a2 2 0 0 0 2-2V58.981a2 2 0 0 0-2-2H18.527c.003-2.562.313-25.309 10.186-35.455 2.672-2.747 5.836-4.214 9.674-4.485a2 2 0 0 0 1.859-1.995V2.002a2 2 0 0 0-.617-1.445 1.951 1.951 0 0 0-1.472-.554ZM89.553.556a1.936 1.936 0 0 0-1.472-.553C79.684.375 72.186 3.725 66.4 9.688 51.065 25.498 51.359 55.3 51.443 58.596l.001 31.078a2 2 0 0 0 2 2h30.69a2 2 0 0 0 2-2V58.981a2 2 0 0 0-2-2H68.452c.003-2.562.313-25.309 10.185-35.455 2.673-2.747 5.837-4.214 9.675-4.485a1.998 1.998 0 0 0 1.858-1.995V2.002c0-.545-.223-1.067-.617-1.446Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h91.674v91.674H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default OpenQuote;
