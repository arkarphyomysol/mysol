import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Iconx from "../../atoms/icons/iconx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Locals = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const locales: any[] = [
    { text: "International", value: "en" },
    { text: "Japan", value: "jp" },
    { text: "Myanmar", value: "mm" },
  ];
  console.log(i18n.language)
  const [selectedLocale, setSelectedLocale] = useState(
    locales.find((locale) => locale.value == i18n.language) || locales[0]
  );
  
  const onChangeLocale = (newLocale: {text:string, value:string}) => {
    console.log(newLocale.value)
    const { pathname, asPath, query } = router;
    setSelectedLocale(newLocale);
    router.push({ pathname, query }, asPath, {
      locale: newLocale.value,
      shallow: false,
    });
  };

  return (
    <div className="">
      <Popover className="relative font-light font-poppins">
        {({ open, close }) => (
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
                  <span>{selectedLocale.text}</span>
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
                    {locales.map((locale, i) => (
                        <a key={i}
                          className={`text-blue-900 first:mt-2 last:mb-2`}
                          onClick={() => (onChangeLocale(locale), close())}>
                          <div
                            className={`${
                              (locale.value === i18n.language)
                                ? "bg-blue-300 hover:bg-blue-300"
                                : "hover:bg-blue-300"
                            } px-3 py-1 hover:bg-slate-200`}>
                            {locale.text}
                          </div>
                        </a>
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
