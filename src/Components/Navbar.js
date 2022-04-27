/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const location = useLocation();

  const pathname = location.pathname;
  const navigation = [
    { name: "About", href: "/about", current: "/about" === pathname? true : false },
    { name: "Hackthon", href: "/hackthon", current: "/hackthon" === pathname? true : false },
    { name: "Team", href: "/team", current: "/team" === pathname? true : false },
    {
      name: "Teraki",
      href: "https://www.merakilearn.org/",
      current: false,
    },
  ];
  console.log(navigation);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <h2 className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orange-600">
                    Navgurukul{" "}
                    <span className="text-base hover:animate-spin">Lite</span>
                    <span class="animate-ping absolute mt-2 h-1 ml-1 w-1 rounded-full bg-white opacity-full"></span>
                  </h2>
                </div>
                <div className=" absolute  right-0 hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : item.name == "Teraki"
                            ? "hover:text-gray-900 text-white hover:bg-green-500"
                            : "text-gray-300 hover:bg-gray-900",
                          "px-3 py-2 rounded-md text-sm font-medium transition ease-in-out delay-150 hover:-translate-y-2"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
