/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const users = [
  {
    name: "Anand Patel",
    photo: "https://avatars.githubusercontent.com/u/44016225?v=4",
    position: "UI/UX Developer",
    quotes:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    github: "",
    insta: "",
    linkedin: "",
  },
  {
    name: "Pratik Deshmukh",
    photo: "https://avatars.githubusercontent.com/u/44018192?v=4",
    position: "Fullstack Developer",
    quotes: "First, solve the problem. Then, write the code.",
    github: "",
    insta: "",
    linkedin: "",
  },
  {
    name: "Prakash Simhandri",
    photo: "https://avatars.githubusercontent.com/u/44014887?v=4",
    position: "Backend Developer",
    quotes:
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    github: "",
    insta: "",
    linkedin: "",
  },
  {
    name: "Anmol Mehra",
    photo: "https://avatars.githubusercontent.com/u/70458652?v=4",
    position: "Frontend Developer",
    quotes:
      "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
    github: "",
    insta: "",
    linkedin: "",
  },
  {
    name: "Satyam Chauhan",
    photo: "https://avatars0.githubusercontent.com/u/43547396?s=460&v=4",
    position: "FreeLiencer",
    quotes:
      "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
    github: "",
    insta: "",
    linkedin: "",
  },
  {
    name: "Prince Kumar",
    photo: "https://avatars2.githubusercontent.com/u/46297619?s=460&v=4",
    position: "Backend Developer",
    quotes: "Ruby is rubbish! PHP is phpantastic!",
    github: "",
    insta: "",
    linkedin: "",
  },
];

export default function Example() {
  return (
    <>
      <section id="team" class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest">
              OUR TEAM
              <span class="animate-ping absolute h-1 ml-1 w-1 rounded-full bg-orange-600 opacity-full"></span>

            </h1>
            
          </div>
          <div class="flex flex-wrap -m-4">
            {users
              .sort(() => (Math.random() > 0.5 ? 1 : -1))
              .map((item) => {
                return (
                  <div class="p-4 lg:w-1/2 hover:opacity-75">
                    <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <img
                        alt="team"
                        class="flex-shrink-0 rounded-lg hover:rounded-3xl w-48 h-48 object-cover object-center sm:mb-0 mb-4 hover:opacity-full"
                        src={item.photo}
                      />
                      <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg text-white">
                          {item.name}
                        </h2>
                        <h3 class="text-gray-300 mb-3">{item.position}</h3>
                        <p class="mb-4">{item.quotes}</p>
                        <span class="inline-flex">
                          <a target="_blank" href={item.linkedin} class="text-gray-500 hover:text-teal-500 cursor-pointer">
                            <svg
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                              ></path>
                              <circle
                                cx="4"
                                cy="4"
                                r="2"
                                stroke="none"
                              ></circle>
                            </svg>
                          </a>
                          <a target="_blank" href={item.github} class="ml-2 mt-1 text-gray-500 hover:text-gray-100 cursor-pointer">
                            <svg
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="0"
                              class="h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                          </a>
                          <a target="_blank" href={item.insta} class="mt-1 text-gray-500 hover:text-red-400 cursor-pointer">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                              ></rect>
                              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
