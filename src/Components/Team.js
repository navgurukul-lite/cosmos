/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import users from "../Data/team.json";
import Team_card from "./Team_card";

export default function Example() {
  return (
    <>
      <section id="team" class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest animate__animated animate__rollIn animate__slow">
              OUR TEAM
              <span class="animate-ping absolute h-1 ml-1 w-1 rounded-full bg-orange-600 opacity-full"></span>
            </h1>
            <span class="animate__animated animate__rubberBand inline-block py-1 px-2  text-orange-500 text-sm font-semibold tracking-widest w-1/2 ml-auto mr-auto animate__slower">
              Alone we can do so little; together we can do so much.
            </span>
          </div>
          <div class="flex flex-wrap -m-4">
            {users.slice(0, 2).map((item) => {
              return <Team_card item={item} />;
            })}
            {users
              .slice(2)
              .sort(() => (Math.random() > 0.5 ? 1 : -1))
              .map((item) => {
                return <Team_card item={item} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
}
