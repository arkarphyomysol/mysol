import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import Iconx from "../../atoms/icons/iconx";
import { websiteData } from "../../../utils/data";

const Locals = () => {
  const [selectedLocal, setSelectedLocal] = useState("");
  const changeLocalHandler = (name: string) => {
    setSelectedLocal(name);
  };

  return (
    <div className="">
      <Popover className="relative font-light font-poppins">
        {({ open }) => (
          <>
            <Popover.Button
              className={`${
                open ? "" : "text-opacity-60"
              } group inline-flex items-center px-3 py-2 text-sm  text-slate-50  focus:outline-none`}>
              <p className="inline-flex items-center space-x-2 ">
                <Iconx
                  icon="GlobeAsiaAustraliaIcon"
                  className="w-4 h-4 text-slate-50"
                />
                {selectedLocal ? (
                  <span>{selectedLocal}</span>
                ) : (
                  <span>International</span>
                )}
              </p>

              <Iconx
                icon="ChevronDownIcon"
                className={`${
                  open ? " rotate-180" : " text-opacity-70"
                } ml-2 w-4 h-4 text-slate-50 transition duration-150 ease-in-out group-hover:text-opacity-80`}
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute z-10 transform -translate-x-1/2 w-36 left-20 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ">
                  <div className="flex flex-col bg-slate-50">
                    {websiteData.heorContent.local.map((local, i) => (
                      <Link href={local.href} key={i}>
                        <a
                          className={`text-blue-900 first:mt-2 last:mb-2`}
                          onClick={() => changeLocalHandler(local.name)}>
                          <div
                            className={`${
                              local.isActive === "true"
                                ? "bg-blue-300 hover:bg-blue-300"
                                : "hover:bg-blue-300"
                            } px-3 py-1 hover:bg-slate-200`}>
                            {local.name}
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
export default Locals;
