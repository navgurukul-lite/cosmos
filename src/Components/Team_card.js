import React from "react";

const Team_card = ({item}) => {
  return (
    <div class="p-4 lg:w-1/2 hover:bg-slate-850 rounded-sm transition ease-in-out duration-150 hover:-translate-y-1 ">
      <div class="h-full flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">
        <img
          alt="team"
          class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 animate__animated animate__zoomIn"
          src={item.photo}
        />
        <div class="flex-grow sm:pl-8 animate__animated animate__zoomInUp">
          <h2 class="title-font font-medium text-lg text-white">{item.name}</h2>
          <h3 class="text-gray-300 mb-3">{item.position}</h3>
          <p class="mb-4">{item.quotes}</p>
          <span class="inline-flex">
            <a
              target="_blank"
              href={item.linkedin}
              class="text-blue-400 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-150"
            >
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
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            <a
              target="_blank"
              href={item.github}
              class="ml-3 mt-1  text-gray-100 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-150"
            >
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
            <a
              target="_blank"
              href={item.insta}
              class="mt-1 text-red-400 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-150 ml-2"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Team_card;
