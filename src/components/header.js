/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {

  HomeIcon,
  IdentificationIcon,
  MenuIcon,
  ChatIcon,
  HeartIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
// import Faq from "./Faq";

const solutions = [
  {
    name: "Home",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "About",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/about",
    icon: IdentificationIcon,
  },
  {
    name: "Events",
    description: "Your customers' data will be safe and secure.",
    href: "/events",
    icon: HeartIcon,
  },
  {
    name: "Blog",
    description: "Connect with third-party tools that you're already using.",
    href: "/  ",
    icon: ViewGridIcon,
  },
  {
    name: "Contact",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "/faqs",
    icon: ChatIcon,
  },
];



export default function Header() {
  return (
    <Popover className="sticky z-20 top-0 left-0 right-0 bg-white">
      <div className="w-11/12 md:max-w-7xl my-0 mx-auto sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/">
              <img
                className="h-8 w-auto sm:h-10"
                src="/images/tlf.png"
                alt=""
              />
            </NavLink>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">

            <NavLink
              to="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </NavLink>
            <NavLink
              to="/events"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Events
            </NavLink>
            <a
              href="/under"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer">
              Blog
            </a>
            <NavLink
              to="/faqs"
              className="text-base font-medium text-gray-500 hover:text-gray-900"

            >
              Contact
            </NavLink>

          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="/under"
              className="ml-8 gap-x-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-700 hover:bg-sky-800"
            >
              Donate

            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/images/tlf.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-sky-800"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

            </div>
            <div>
              <a
                href="/under"
                className="mx-4 flex items-center justify-center  py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-700 hover:bg-sky-800"
              >
                Donate
              </a>
              <p className="mt-3 text-center text-base font-medium text-gray-500">
                Do you need Support?{" "}
                <a href="/apply" className="text-sky-600 hover:text-sky-800">
                  Apply Now
                </a>
              </p>

            </div>

          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
