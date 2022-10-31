import { NextPage } from "next";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Iconx from "../../atoms/icons/iconx";
import MenuIcon from "../../atoms/icons/MenuIcon";
import { navigationConfig } from "../../../utils/config/schemas/navigation";
import Locals from "../../molecules/locals";
import QuickAction from "../../molecules/quickAction";

export const Navigation: NextPage = () => {
  return (
    <div className="absolute z-10 w-full ">
      <div className="hidden py-1 bg-gray-700 bg-opacity-70 lg:block">
        <div className="flex items-center justify-between px-4 mx-auto sm:px-6 max-w-9xl">
          <Locals />
          <QuickAction />
        </div>
      </div>
      <div className="">
        <Popover className="relative border-b-0.5 border-opacity-20 border-slate-50 font-light font-poppins">
          <div className="px-4 mx-auto max-w-9xl sm:px-6">
            <div className="flex items-center justify-between py-3 lg:justify-start lg:space-x-10">
              <Link href="/">
                <a className="flex items-center justify-start space-x-2 text-xl font-medium font-poppins lg:w-0 lg:flex-1">
                  <div className="">
                    <Image
                      src={`/images/logo.svg`}
                      width={`32`}
                      height={`32`}
                      alt="MYSOL"
                    />
                  </div>
                  <div className="space-x-1 text-base lg:text-xl text-slate-50">
                    <span className="sr-only">MYSOL</span>
                    <span className="">M</span>
                    <span className="">Y</span>
                    <span className="">S</span>
                    <span className="">O</span>
                    <span className="">L</span>
                  </div>
                </a>
              </Link>
              <div className="-my-2 -mr-2 space-x-5 lg:hidden">
                <Popover.Button>
                  <Iconx
                    icon="GlobeAsiaAustraliaIcon"
                    className="w-5 h-6 text-slate-50"
                  />
                </Popover.Button>
                <Popover.Button className="inline-flex items-center justify-center p-2 text-slate-50 text-slate-60 focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon
                    className=" w-7 h-7 text-slate-50"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
                {navigationConfig.items.map((menu, i) => (
                  <div className="" key={i}>
                    <div className="">
                      <Link href={menu.path}>
                        <a className="font-light text-slate-200 hover:text-opacity-60 btnHover">
                          {menu.title}
                        </a>
                      </Link>
                    </div>
                    <div className="hidden  hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
                      <Link href={menu.path}>
                        <a className="font-light text-slate-200 hover:text-opacity-60 btnHover">
                          {menu.title}
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </Popover.Group>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-0 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 p-2 lg:hidden">
              <div className="overflow-hidden divide-y-0.5 rounded-lg shadow-lg backdrop-blur-md divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <Link href="/">
                      <a className="flex items-center justify-start text-xl font-medium font-poppins focus:outline-none">
                        <div className="">
                          <Image
                            src={`/images/logo.svg`}
                            width={`32`}
                            height={`32`}
                            alt="MYSOL"
                          />
                        </div>
                        <div className="ml-2 space-x-1 text-slate-200">
                          <span className="sr-only">MYSOL</span>
                          <span className="">M</span>
                          <span className="">Y</span>
                          <span className="">S</span>
                          <span className="">O</span>
                          <span className="">L</span>
                        </div>
                      </a>
                    </Link>

                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-200">
                        <span className="sr-only">Close menu</span>
                        <Iconx
                          icon="XMarkIcon"
                          className="w-6 h-6"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {navigationConfig.items.map((menu, i) => (
                        <Link href={menu.path} key={i}>
                          <a className="font-light rounded-md text-slate-200 hover:text-opacity-60 btnHover hover:bg-gray-50">
                            <span className="font-light ">{menu.title}</span>
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>

                <div className="grid grid-cols-2 py-3">
                  {/* {websiteData.callsToAction.map((item, i) => (
                  <div className="" key={i}>
                    <Link href={item.href}>
                      <a className="flex flex-col items-center justify-center space-y-2 text-base font-light rounded-md text-slate-200 font-poppins">
                        <Iconx
                          icon={item.icon}
                          className={` flex-shrink-0 h-6 w-6`}
                        />
                        <span className="ml-3">{item.name}</span>
                      </a>
                    </Link>
                  </div>
                ))} */}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};
