import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Iconx from "../components/atoms/icons/iconx";
import ComingSoon from "../components/templates/comingSoon";

const Custom404: NextPage = () => {
  return (
    // <main className="flex items-center justify-center h-screen bg-gray-100 dark:bg-dark dark:text-light">
    //   <div className="p-4 space-y-4">
    //     <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
    //       <p className="font-semibold text-red-500 text-9xl dark:text-red-600">
    //         404
    //       </p>
    //       <div className="space-y-2">
    //         <h1 className="flex items-center space-x-2">
    //           <Iconx
    //             icon="ExclamationTriangleIcon"
    //             className="w-6 h-6 text-red-500 dark:text-red-600"
    //           />
    //           <span className="text-xl font-medium text-gray-600 sm:text-2xl dark:text-light">
    //             Oops! Page not found.
    //           </span>
    //         </h1>
    //         <p className="text-base font-normal text-gray-600 dark:text-gray-300">
    //           The page you ara looking for was not found.
    //         </p>
    //         <p className="space-x-2 text-base font-normal text-gray-600 dark:text-gray-300">
    //           <span>You may return to</span>
    //           <Link href={"/"}>
    //             <a className="text-blue-600 hover:underline dark:text-blue-500">
    //               home page
    //             </a>
    //           </Link>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <ComingSoon />
  );
};
export default Custom404;
